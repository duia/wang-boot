package com.wpc.common.quartz.quartz;

import com.wpc.common.quartz.model.ScheduleJob;
import com.wpc.common.quartz.utils.TaskUtils;
import com.wpc.common.quartz.vo.ScheduleJobVo;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.quartz.QuartzJobBean;

/**
 * author : 王鹏程
 * createTime : 2018-12-19
 * description : 异步任务工厂
 * version : 1.0
 */
public class AsyncJobFactory extends QuartzJobBean {

    /* 日志对象 */
    private static final Logger LOG = LoggerFactory.getLogger(AsyncJobFactory.class);
    @Override
    protected void executeInternal(JobExecutionContext context) throws JobExecutionException {
        LOG.info("AsyncJobFactory execute");
        ScheduleJob scheduleJob = (ScheduleJob) context.getMergedJobDataMap().get(ScheduleJobVo.JOB_PARAM_KEY);
        LOG.info("jobName:" + scheduleJob.getJobName() + "  " + scheduleJob);
        TaskUtils.service(scheduleJob);
    }
}
