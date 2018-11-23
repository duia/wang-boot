package com.wpc.aop;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.wpc.SessionUtil;
import com.wpc.common.annotation.SysLogAnn;
import com.wpc.common.aop.BaseAnnotationAspectj;
import com.wpc.common.utils.Servlets;
import com.wpc.common.utils.date.DateFormatUtils;
import com.wpc.common.utils.net.IpUtils;
import com.wpc.log.LogManager;
import com.wpc.log.LogObjectHolder;
import com.wpc.log.factory.LogTaskFactory;
import com.wpc.system.model.User;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.stereotype.Component;
import org.springframework.ui.Model;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

@Aspect
@Component
public class SystemLogAspect extends BaseAnnotationAspectj {

    //注入Service用于把日志保存数据库
//    @Autowired
//    private SysLogService sysLogService;

    //Service层切点
    @Pointcut("execution(* com.wpc..service.*.*(..))")
    public  void serviceAspect() {
    }

    //Controller层切点
    @Pointcut("execution(* com.wpc..controller.*.*(..)) && @annotation(com.wpc.common.annotation.SysLogAnn)")
    public void controllerAspect() {
    }

    /**
     * 后置通知 用于拦截Controller层记录用户的操作
     *
     * @param joinPoint 切点
     */
    @AfterReturning("controllerAspect()")
    public void doAfter(JoinPoint joinPoint) {
        try {
            // 保存日志
            SysLogAnn logAnn = getSystemLog(joinPoint);
            User user = SessionUtil.getUser();
            String businessName = logAnn.describe();
            //如果涉及到修改,比对变化
            String msg;
//            if (businessName.contains("修改") || businessName.contains("编辑")) {
//                Object obj1 = LogObjectHolder.me().get();
//                Map<String, String> obj2 = HttpContext.getRequestParameters();
//                msg = Contrast.contrastObj(dictClass, key, obj1, obj2);
//            } else {
//                Map<String, String> parameters = HttpContext.getRequestParameters();
//                AbstractDictMap dictMap = (AbstractDictMap) dictClass.newInstance();
//                msg = Contrast.parseMutiKey(dictMap, key, parameters);
//            }
            LogManager.me().executeLog(LogTaskFactory.businessLog(Servlets.getRequest(), user.getId(), businessName,
                    getMethod(joinPoint).toGenericString(), convertArgs(getArgs(joinPoint)), ""));
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    /**
     * 异常通知 用于拦截service层记录异常日志
     *
     * @param joinPoint
     * @param ex
     */
    @AfterThrowing(pointcut = "controllerAspect()", throwing = "ex")
    public void doAfterThrowing(JoinPoint joinPoint, Exception ex) {
        try {
            // 保存日志
            SysLogAnn logAnn = getSystemLog(joinPoint);
            User user = SessionUtil.getUser();
            String businessName = logAnn.describe();
            LogManager.me().executeLog(LogTaskFactory.exceptionLog(Servlets.getRequest(), user.getId(), businessName,
                    getMethod(joinPoint).toGenericString(), convertArgs(getArgs(joinPoint)), ex));
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    /**
     * 获取注解中对方法的描述信息 用于service层注解
     *
     * @param joinPoint 切点
     * @return 方法描述
     * @throws Exception
     */
    private SysLogAnn getSystemLog(JoinPoint joinPoint) throws Exception {
        return getMethod(joinPoint).getDeclaredAnnotation(SysLogAnn.class);
    }

    /**
     * 转换成相应的日志参数,去掉不需要的参数
     * @param objs 参数对象数组
     * @return
     */
    private String convertArgs(Object[] objs)throws JsonProcessingException {
        String param = "";
        if(null != objs && objs.length >0){
            List para = new ArrayList<>();
            for(int i = 0; i<objs.length;i++){
                Object o = objs[i];
                if(HttpServletRequest.class.isInstance(o)||
                        HttpServletResponse.class.isInstance(o)||
                        HttpSession.class.isInstance(o)||Model.class.isInstance(o)){
                    continue;
                }
                para.add(o);
            }
            ObjectMapper json = new ObjectMapper();
            json.setDateFormat(new SimpleDateFormat(DateFormatUtils.DATE_FORMAT2));
            param = json.writeValueAsString(para);
        }
        return param;
    }

}
