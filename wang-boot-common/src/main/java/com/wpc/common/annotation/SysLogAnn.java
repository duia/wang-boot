package com.wpc.common.annotation;

import com.wpc.common.enums.OperLevel;
import com.wpc.common.enums.OperType;

import java.lang.annotation.*;

@Target({ElementType.PARAMETER, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface SysLogAnn {

    OperType operType(); /*操作类型*/
    OperLevel operLevel() default OperLevel.NORM;/*操作级别*/
    String describe() default "";/*操作详细信息*/

}
