package com.wpc.common.quartz.config;

import org.springframework.beans.factory.config.PropertiesFactoryBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.scheduling.quartz.SchedulerFactoryBean;

import javax.sql.DataSource;
import java.io.IOException;
import java.util.Properties;

/**
 * 功能描述: 配置任务调度中心
 * [QRTZ_JOB_DETAILS], [QRTZ_TRIGGERS] and [QRTZ_CRON_TRIGGERS]
 * @Author: 王鹏程
 * @E-mail: wpcfree@qq.com @QQ: 376205421
 * @Date: 2018-12-20 10:19:45
 */
@Configuration
public class QuartzConfig {

    @Bean
    public SchedulerFactoryBean scheduler(DataSource dataSource) throws IOException {
        SchedulerFactoryBean schedulerFactory = new SchedulerFactoryBean();
        schedulerFactory.setDataSource(dataSource);
        schedulerFactory.setQuartzProperties(quartzProperties());
        schedulerFactory.setSchedulerName("ClusterScheduler");
//        <property name="schedulerName" value="ClusterScheduler" />
//        <!--必须的，QuartzScheduler 延时启动，应用启动完后 QuartzScheduler 再启动 -->
        schedulerFactory.setStartupDelay(30);
//        <property name="startupDelay" value="30" />
        schedulerFactory.setApplicationContextSchedulerContextKey("applicationContextKey");
//        <property name="applicationContextSchedulerContextKey" value="applicationContextKey" />
//        <!--可选，QuartzScheduler 启动时更新己存在的Job，这样就不用每次修改targetObject后删除qrtz_job_details表对应记录了 -->
        schedulerFactory.setOverwriteExistingJobs(true);
//        <property name="overwriteExistingJobs" value="true" />
//        <!-- 设置自动启动 -->
        schedulerFactory.setAutoStartup(true);
//        <property name="autoStartup" value="true" />
//        Scheduler scheduler = schedulerFactory.getScheduler();
//        scheduler.start();
        return schedulerFactory;
    }

    @Bean
    public Properties quartzProperties() throws IOException {
        PropertiesFactoryBean propertiesFactoryBean = new PropertiesFactoryBean();
        propertiesFactoryBean.setLocation(new ClassPathResource("/quartz.properties"));
        //在quartz.properties中的属性被读取并注入后再初始化对象
        propertiesFactoryBean.afterPropertiesSet();
        return propertiesFactoryBean.getObject();
    }

}
