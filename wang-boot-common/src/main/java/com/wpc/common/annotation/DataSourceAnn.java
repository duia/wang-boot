package com.wpc.common.annotation;

import java.lang.annotation.*;

/**
 * ${DESCRIPTION}
 *
 * @author wangpengcheng
 * @create 2017-12-06 17:27
 **/
@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface DataSourceAnn {

    String name() default "";

}
