package com.wpc.common.quartz.utils;

import com.wpc.common.SpringContextHolder;
import com.wpc.common.quartz.model.ScheduleJob;
import com.wpc.common.quartz.vo.ScheduleJobVo;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.reflect.MethodUtils;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.lang.reflect.InvocationTargetException;

public class TaskUtils {

    private static final Logger LOG = LoggerFactory.getLogger(TaskUtils.class);

    public static void service(ScheduleJob scheduleJob) {
        String jobType = scheduleJob.getJobType();
        if (StringUtils.isEmpty(jobType)) {
            LOG.error("任务名称 = [" + scheduleJob.getJobName() + "]---------------未启动成功，请检查是否配置正确！！！");
            return;
        }
        switch (jobType.toLowerCase()) {
            case ScheduleJobVo.JOB_TYPE_HTTP: {
                sendGet(scheduleJob);
                break;
            }
            case ScheduleJobVo.JOB_TYPE_CLASS: {
                invokMethod(scheduleJob);
                break;
            }
            default: {
                LOG.error("任务名称 = [" + scheduleJob.getJobName() + "]---------------未启动成功，请检查是否配置正确！！！");
            }
        }
    }

    public static void sendGet(ScheduleJob scheduleJob) {
        String url = scheduleJob.getUrl();
        if (StringUtils.isEmpty(url)) {
            LOG.error("任务名称 = [" + scheduleJob.getJobName() + "]---------------未启动成功，请检查是否配置正确！！！");
            return;
        }
        CloseableHttpClient httpclient = HttpClients.createDefault();
        HttpGet httpGet = new HttpGet(url);
        CloseableHttpResponse response;
        try {
            response = httpclient.execute(httpGet);
            LOG.info("任务名称 = [" + scheduleJob.getJobName() + "]---------------启动成功，执行结果："+response.getStatusLine());
            HttpEntity entity = response.getEntity();
            EntityUtils.consume(entity);
        } catch (IOException e) {
            LOG.error("任务名称 = [" + scheduleJob.getJobName() + "]---------------未启动成功，请求路径设置错误！！！");
        }
    }

    /**
     * 通过反射调用scheduleJob中定义的方法
     *
     * @param scheduleJob
     */
    public static void invokMethod(ScheduleJob scheduleJob) {
        Object object = null;
        if (StringUtils.isNotBlank(scheduleJob.getSpringId())) {
            object = SpringContextHolder.getBean(scheduleJob.getSpringId());
        } else if (StringUtils.isNotBlank(scheduleJob.getBeanClass())) {
            try {
                object = Class.forName(scheduleJob.getBeanClass()).newInstance();
            } catch (Exception e) {
                e.printStackTrace();
            }

        }
        if (object == null) {
            LOG.error("任务名称 = [" + scheduleJob.getJobName() + "]---------------未启动成功，请检查是否配置正确！！！");
            return;
        }
        try {
            MethodUtils.invokeMethod(object, scheduleJob.getMethodName());
        } catch (NoSuchMethodException e) {
            LOG.error("任务名称 = [" + scheduleJob.getJobName() + "]---------------未启动成功，方法名设置错误！！！");
        } catch (IllegalAccessException | InvocationTargetException e) {
            e.printStackTrace();
        }
        LOG.info("任务名称 = [" + scheduleJob.getJobName() + "]----------启动成功");
    }

}
