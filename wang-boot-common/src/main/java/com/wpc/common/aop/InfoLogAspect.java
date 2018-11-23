package com.wpc.common.aop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class InfoLogAspect extends BaseAnnotationAspectj {

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
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

}
