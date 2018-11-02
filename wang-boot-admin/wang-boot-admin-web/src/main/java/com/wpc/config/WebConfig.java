package com.wpc.config;

import com.wpc.filter.WebSiteMeshFilter;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class WebConfig {

    @Bean(name = "sitemesh3")
    WebSiteMeshFilter webSiteMeshFilter() {
        return new WebSiteMeshFilter();
    }

    @Bean
    public FilterRegistrationBean filterRegistrationBean(@Qualifier("sitemesh3")WebSiteMeshFilter siteMeshFilter) {
        FilterRegistrationBean filterRegistrationBean = new FilterRegistrationBean();
        filterRegistrationBean.setFilter(siteMeshFilter);
        filterRegistrationBean.setEnabled(true);
        filterRegistrationBean.addUrlPatterns("/*");
        return filterRegistrationBean;
    }

}
