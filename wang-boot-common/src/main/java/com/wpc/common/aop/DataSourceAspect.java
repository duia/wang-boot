package com.wpc.common.aop;

import com.wpc.common.annotation.DataSourceAnn;
import com.wpc.common.datasource.DataSourceContextHolder;
import org.apache.commons.lang3.StringUtils;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.lang.reflect.Method;

@Aspect
@Order(1)
@Component
public class DataSourceAspect extends BaseAnnotationAspectj {

    //Service层切点
    @Pointcut("execution(* com.wpc..service.*.*(..)) && @annotation(com.wpc.common.annotation.DataSourceAnn)")
    public  void serviceAspect() {
    }

    @Before("serviceAspect()")
    public void setDynamicDataSource(JoinPoint jp) throws Exception {
        DataSourceAnn dataSource = getDataSourceAnn(jp);
        if (dataSource != null && StringUtils.isNotBlank(dataSource.name())) {
            logger.info("切换数据源：{}", dataSource.name());
            DataSourceContextHolder.setDataSourceType(dataSource.name());
        }
    }

    @AfterReturning("serviceAspect()")
    public void afterReturning(JoinPoint jp) throws Throwable {
        DataSourceContextHolder.clearDataSourceType();
    }

    /**
     * 获取注解中对方法的描述信息 用于service层注解
     *
     * @param joinPoint 切点
     * @return 方法描述
     * @throws Exception
     */
    private DataSourceAnn getDataSourceAnn(JoinPoint joinPoint) throws Exception {
        String targetName = getTargetClass(joinPoint).getName();
        String methodName = getMethod(joinPoint).getName();
        Object[] arguments = getArgs(joinPoint);
        Class targetClass = Class.forName(targetName);
        Method[] methods = targetClass.getMethods();
        DataSourceAnn dataSource = null;
        for (Method method : methods) {
            if (method.getName().equals(methodName)) {
                Class[] clazzs = method.getParameterTypes();
                if (clazzs.length == arguments.length) {
                    dataSource = method.getAnnotation(DataSourceAnn.class);
                    break;
                }
            }
        }
        return dataSource;
    }

}
