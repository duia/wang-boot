package com.wpc.common.inteceptor;

import com.wpc.common.Global;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

//@Configuration
public class InterceptorConfig implements WebMvcConfigurer {

    @Autowired
    private LimitRaterInterceptor limitRaterInterceptor;

    private List<String> ignoredUrls = new ArrayList<>();

    {
        for (String s : StringUtils.split(Global.getConfig("web.staticFile"), ",")) {
            ignoredUrls.add("/**/*" + s);
        }
        ignoredUrls.addAll(Arrays.asList(StringUtils.split(Global.getConfig("web.ignoredUrls"), ",")));
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {

        // 注册拦截器
        InterceptorRegistration ir = registry.addInterceptor(limitRaterInterceptor);
        // 配置拦截的路径
        ir.addPathPatterns("/**");
        // 配置不拦截的路径
        ir.excludePathPatterns(ignoredUrls);
    }

}
