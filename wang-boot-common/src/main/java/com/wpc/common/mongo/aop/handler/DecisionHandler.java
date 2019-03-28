package com.wpc.common.mongo.aop.handler;

import com.wpc.common.mongo.aop.DecisionInfo;

/**
 * 分库策略
 * Created by 王鹏程 on 2018/11/15 0015.
 */
public interface DecisionHandler<T extends DecisionInfo> {

    /**
     * 该处理器是否支持该参数的处理逻辑,支持,则后续调用handle方法.
     *
     * @param obj 传入的参数对象,比如DecisionInfo
     * @return 是否支持.
     */
    boolean support(T obj);

    /**
     * @param obj 数据
     * @return 数据库名字或集合名字.
     */
    String handle(T obj);

}
