package com.wpc.common.mongo.aop.handler;

import com.wpc.common.mongo.aop.DecisionInfo;
import org.springframework.stereotype.Component;

/**
 * 默认的分库策略，通过注解名称指定具体库
 * Created by 王鹏程 on 2018/11/15 0015.
 */
@Component
public class DefaultDecisionHandler<T extends DecisionInfo> implements DecisionHandler<T> {

    public static final String DEFAULT = "DEFAULT";

    /**
     * 该处理器是否支持该参数的处理逻辑,支持,则后续调用handle方法.
     *
     * @param decisionInfo 传入的参数对象,比如DecisionInfo
     * @return 是否支持.
     */
    @Override
    public boolean support(T decisionInfo) {
        return DEFAULT.equals(decisionInfo.getStrategy());
    }

    /**
     * @param decisionInfo 数据
     * @return 数据库名字.
     */
    @Override
    public String handle(T decisionInfo) {
        return decisionInfo.getSpecify();
    }
}
