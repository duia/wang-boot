package com.wpc.sys.service;

import org.springframework.beans.factory.FactoryBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

@Configuration
public class UserServiceFactory implements FactoryBean<UserService> {

    @Autowired
    UserService userService;
    @Override
    public UserService getObject() throws Exception {
        return (UserService) Proxy.newProxyInstance(this.getClass().getClassLoader(), new Class[]{UserService.class},
                new InvocationHandler(){
                    @Override
                    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
                        Object o = method.invoke(userService, args);
                        System.out.println("代理方法！");
                        return o;
                    }
                });
    }

    @Override
    public Class<?> getObjectType() {
        return UserService.class;
    }

    @Override
    public boolean isSingleton() {
        return true;
    }
}
