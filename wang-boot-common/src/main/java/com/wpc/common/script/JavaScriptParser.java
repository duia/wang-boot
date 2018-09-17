package com.wpc.common.script;

import com.wpc.common.utils.base.BeanUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.script.*;
import java.lang.reflect.Method;
import java.util.concurrent.ConcurrentHashMap;

/**
 * 解析JavaScript表达式
 * @author jiayu.qiu
 */
public class JavaScriptParser extends AbstractScriptParser {

    private static final Logger logger = LoggerFactory.getLogger(JavaScriptParser.class);

    private final ScriptEngineManager manager=new ScriptEngineManager();

    private final ConcurrentHashMap<String, CompiledScript> expCache=new ConcurrentHashMap<String, CompiledScript>();

    private final StringBuffer funcs=new StringBuffer();

    private static int versionCode;

    /**
     * 如果使用的是JDK大于1.8版本的，则用 nashorn，否则用javascript
     */
    private final ScriptEngine engine;

    static {
        String javaVersion= System.getProperty("java.version");
        int ind = 0;
        int cnt = 2;
        for(int i=0; i < cnt; i++) {
            ind=javaVersion.indexOf(".", ind);
            ind++;
        }
        javaVersion=javaVersion.substring(0, ind);
        javaVersion=javaVersion.replaceAll("\\.", "");
        versionCode= Integer.parseInt(javaVersion);
    }

    public JavaScriptParser() {
        engine=manager.getEngineByName(versionCode >= 18 ? "nashorn" : "javascript");
        try {
            addFunction(HASH, BeanUtils.class.getDeclaredMethod("getUniqueHashStr", Object.class));
            addFunction(EMPTY, BeanUtils.class.getDeclaredMethod("isEmpty", Object.class));
        } catch(Exception e) {
            logger.error(e.getMessage(), e);
        }
    }

    @Override
    public void addFunction(String name, Method method) {
        try {
            String clsName=method.getDeclaringClass().getName();
            String methodName=method.getName();
            funcs.append("function " + name + "(obj){return " + clsName + "." + methodName + "(obj);}");
        } catch(Exception e) {
            logger.error(e.getMessage(), e);
        }
    }

    @SuppressWarnings("unchecked")
    @Override
    public <T> T getElValue(String exp, Object[] arguments, Class<T> valueType) throws Exception {
        Bindings bindings=new SimpleBindings();
        bindings.put(ARGS, arguments);
        for (Object o : arguments) {
            if (!BeanUtils.isPrimitive(o)) {
                bindings.put(o.getClass().getSimpleName(), o);
            }
        }
        CompiledScript script=expCache.get(exp);
        if(null != script) {
            return (T)script.eval(bindings);
        }
        if(engine instanceof Compilable) {
            Compilable compEngine=(Compilable)engine;
            script=compEngine.compile(funcs + exp);
            expCache.put(exp, script);
            return (T)script.eval(bindings);
        } else {
            return (T)engine.eval(funcs + exp, bindings);
        }
    }

}
