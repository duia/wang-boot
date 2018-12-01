package com.wpc.mongo.dao.shardcollection;

import org.springframework.core.annotation.AliasFor;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * Created by 王鹏程 on 2018/11/16 0016.
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
public @interface ShardingKey {
    /**
     *  分表列名
     * @return
     */
    @AliasFor("shardingColumn")
    String value() default "";

    /**
     * 分表列名
     */
    @AliasFor("value")
    String shardingColumn() default "";

    /**
     * 分表数，power of 2
     * @return
     */
    int shardingCount() default 256;
}
