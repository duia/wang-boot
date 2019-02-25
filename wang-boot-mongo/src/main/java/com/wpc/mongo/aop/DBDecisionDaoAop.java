package com.wpc.mongo.aop;

import com.wpc.mongo.aop.handler.DecisionHandler;
import com.wpc.mongo.config.holder.MongodbTemplateContextHolder;
import com.wpc.mongo.dao.multimongo.MultiMongo;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.reflect.MethodSignature;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;

import javax.annotation.PostConstruct;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by 王鹏程 on 2018/11/15 0015.
 */
@Aspect
@Component
public class DBDecisionDaoAop implements ApplicationContextAware {

    private ApplicationContext applicationContext;
    private final Logger logger = LoggerFactory.getLogger(getClass());
    private List<DecisionHandler> handlerList;

    /**
     *
     * @param joinPoint
     * @return
     * @throws Throwable
     */
    @Around("@annotation(com.wpc.mongo.dao.multimongo.MultiMongo)")
    public Object doAround(ProceedingJoinPoint joinPoint) throws Throwable {
        MethodSignature signature = (MethodSignature) joinPoint.getSignature();
        Method method = signature.getMethod();
        MultiMongo multiMongo = method.getAnnotation(MultiMongo.class);
        if (multiMongo == null) {
            joinPoint.proceed();
        }

        return decideMongoAndProceed(multiMongo, joinPoint);
    }

    private Object decideMongoAndProceed(MultiMongo multiMongo, ProceedingJoinPoint joinPoint) throws Throwable {
        DecisionInfo decisionInfo = buildDecisionInfo(multiMongo, joinPoint);
        try {
            for (DecisionHandler handler : handlerList) {
                if (handler.support(decisionInfo)) {
                    MongodbTemplateContextHolder.setMongoTemplateType(handler.handle(decisionInfo));
                    break;
                }
            }
            return joinPoint.proceed();
        } finally {
            MongodbTemplateContextHolder.clearMongoTemplateType();
        }
    }

    /**
     * 子类可以覆盖这个方法，构造子系统相关的DecisionInfo，
     * 实现子系统自己的DecisionHandler解析
     * 这里给出默认实现
     * @param multiMongo
     * @return
     */
    protected DecisionInfo buildDecisionInfo(MultiMongo multiMongo, ProceedingJoinPoint joinPoint) {
        DecisionInfo result = new DecisionInfo();
        result.setSpecify(multiMongo.specify());
        result.setStrategy(multiMongo.strategy());
        int paramLocation;
        if ((paramLocation = multiMongo.paramLocation()) >= 0) {
            Object[] args = joinPoint.getArgs();
            if (args == null || args.length <= paramLocation) {
                throw new RuntimeException(joinPoint.getSignature().getName() + " got wrong paramLocation value: " + paramLocation);
            }
            result.setSpecifyValue(args[paramLocation]);
        }
        return result;
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        this.applicationContext = applicationContext;
    }

    @PostConstruct
    private void setHandlerList() {
        this.handlerList = new ArrayList<>(applicationContext.getBeansOfType(DecisionHandler.class).values());
        if (applicationContext.getBeansWithAnnotation(MultiMongo.class) != null) {
            if (CollectionUtils.isEmpty(handlerList)) {
                throw new RuntimeException("You have to configure at least one DecisionHandler if you want to use MultiMongo function!");
            }
        }
    }
}
