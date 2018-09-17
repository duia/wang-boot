package com.wpc.common.aop;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.wpc.common.annotation.SysLogAnn;
import com.wpc.common.utils.Servlets;
import com.wpc.common.utils.date.DateFormatUtils;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.stereotype.Component;
import org.springframework.ui.Model;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.lang.reflect.Method;
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
    @Pointcut("execution(* com.wpc..controller.*.*(..))")
    public void controllerAspect() {
    }

    /**
     * 前置通知 用于拦截Controller层记录用户的操作
     *
     */
    @Before("controllerAspect()")
    public void doBefore() throws Exception {
        outStartLog();
    }

    @Around("controllerAspect()")
    public Object doAround(ProceedingJoinPoint joinPoint) throws Throwable {
        Object modelAndView = joinPoint.proceed();
        if (modelAndView != null && modelAndView instanceof String){
            logger.info("ViewName: " + modelAndView);
        }
        return modelAndView;
    }

    /**
     * 后置通知 用于拦截Controller层记录用户的操作
     *
     * @param joinPoint 切点
     */
    @AfterReturning("controllerAspect()")
    public void doAfter(JoinPoint joinPoint) {
        try {
            // 打印JVM信息。
            outEndLog();
            // 保存日志
            saveLog(joinPoint);
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
            outEndLog();
            // 保存日志
            saveLog(joinPoint, ex);
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
        String targetName = getTargetClass(joinPoint).getName();
        String methodName = getMethod(joinPoint).getName();
        Object[] arguments = getArgs(joinPoint);
        Class targetClass = Class.forName(targetName);
        Method[] methods = targetClass.getMethods();
        SysLogAnn log = null;
        for (Method method : methods) {
            if (method.getName().equals(methodName)) {
                Class[] clazzs = method.getParameterTypes();
                if (clazzs.length == arguments.length) {
                    log = method.getAnnotation(SysLogAnn.class);
                    break;
                }
            }
        }
        return log;
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

    /**
     * 保存日志
     */
    private void saveLog(JoinPoint joinPoint) throws Exception {
        saveLog(joinPoint, null);
    }

    /**
     * 保存日志
     */
    private void saveLog(JoinPoint joinPoint, Exception ex) throws Exception {
        HttpServletRequest request = Servlets.getRequest();
        //读取session中的用户
//        User user = SessionUtil.getUser();
//        SysLogAnn logAnn = getSystemLog(joinPoint);
//        if (user != null && user.getId() != null && logAnn != null){
//            SysLog log = new SysLog();
//            log.setOperLevel(logAnn.operLevel().getValue());
//            log.setOperType(ex == null ? logAnn.operType().getValue() : OperType.EXCEPTION.getValue());
//            log.setOperDescribe(logAnn.describe());
//            log.setOperName(joinPoint.getSignature().toString());
//            log.setOperParam(convertArgs(joinPoint.getArgs()));
//            log.setOperTime(new Date());
//            log.setUserId(user.getId());
//            log.setUserName(user.getUsername());
//            if (null != request) {
//                log.setRemoteAddr(IpUtils.getIpAddress(request));
//                log.setUserAgent(request.getHeader("user-agent"));
//                log.setRequestUri(request.getRequestURI());
//                log.setMethod(request.getMethod());
//            }
            // 异步保存日志
//            new SaveLogThread(log, ex).start();
//        }
    }

    /**
     * 保存日志线程
     */
    public class SaveLogThread extends Thread{

//        private SysLog log;
//        private Exception ex;

//        public SaveLogThread(SysLog log, Exception ex){
//            super(SaveLogThread.class.getSimpleName());
//            this.log = log;
//            this.ex = ex;
//        }

        @Override
        public void run() {
            // 如果有异常，设置异常信息
//            log.setException(Exceptions.getStackTraceAsString(ex));
            // 如果无标题并无异常日志，则不保存信息
//            if (StringUtils.isBlank(log.getOperName()) && StringUtils.isBlank(log.getException())){
//                return;
//            }
            // 保存日志信息
//            int i = 1/0;
//            sysLogService.save(log);
//            System.out.println(log);
        }
    }

}
