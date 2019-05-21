package com.wpc.common.script;

import com.wpc.common.utils.base.BeanUtils;
import org.apache.ibatis.ognl.Ognl;
import org.apache.ibatis.ognl.OgnlContext;

import java.lang.reflect.Method;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * 功能描述: 解析JavaScript表达式
 * @Author: 王鹏程
 * @E-mail: duia.online@qq.com @QQ: 376205421
 * @Blog: https://duia.github.io
 * @Date: 2019-05-14 11:51:50
 */
public class OgnlParser extends AbstractScriptParser {

    private final ConcurrentHashMap<String, Object> expCache=new ConcurrentHashMap<String, Object>();

    private final ConcurrentHashMap<String, Class<?>> funcs=new ConcurrentHashMap<String, Class<?>>(64);

    public OgnlParser() {
    }

    @Override
    public void addFunction(String name, Method method) {
        funcs.put(name, method.getDeclaringClass());
    }

    @SuppressWarnings("unchecked")
    @Override
    public <T> T getElValue(String exp, Object[] arguments, Class<T> valueType) throws Exception {
        Object object=expCache.get(exp);
        if(null == object) {
            String className = BeanUtils.class.getName();
            String exp2 = exp.replaceAll("@@" + HASH + "\\(", "@" + className + "@getUniqueHashStr(");
            exp2 = exp2.replaceAll("@@" + EMPTY + "\\(", "@" + className + "@isEmpty(");

            for (Map.Entry<String, Class<?>> entry : funcs.entrySet()) {
                className = entry.getValue().getName();
                exp2 = exp2.replaceAll("@@" + entry.getKey() + "\\(", "@" + className + "@" + entry.getKey() + "(");
            }
            object= Ognl.parseExpression(exp2);
            expCache.put(exp, object);
        }
        OgnlContext context=new OgnlContext();
        context.put(ARGS, arguments);
        for (Object o : arguments) {
            if (!BeanUtils.isPrimitive(o)) {
                context.put(o.getClass().getSimpleName(), o);
            }
        }
        context.setRoot(arguments);
        Object res= Ognl.getValue(object, context, context.getRoot(), valueType);
        return (T)res;
    }
}
