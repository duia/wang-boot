package com.wpc.common.quartz.service.impl;

import com.wpc.common.quartz.dao.ScheduleJobMapper;
import com.wpc.common.quartz.model.ScheduleJob;
import com.wpc.common.quartz.service.ScheduleJobService;
import com.wpc.common.quartz.utils.ScheduleUtils;
import com.wpc.common.quartz.vo.ScheduleJobVo;
import org.quartz.*;
import org.quartz.impl.matchers.GroupMatcher;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.ArrayList;
import java.util.List;

/**
 * author : 王鹏程
 * createTime : 2018-12-19
 * description : 定时任务服务实现
 * version : 1.0
 */
@Service
public class ScheduleJobServiceImpl implements ScheduleJobService {

    /** 调度工厂Bean */
    @Autowired
    private Scheduler scheduler;

    /** 通用dao */
    @Autowired
    private ScheduleJobMapper scheduleJobMapper;

    public void initScheduleJob() {
        List<ScheduleJob> scheduleJobList = scheduleJobMapper.selectAll();
        if (CollectionUtils.isEmpty(scheduleJobList)) {
            return;
        }
        for (ScheduleJob scheduleJob : scheduleJobList) {

            CronTrigger cronTrigger = ScheduleUtils.getCronTrigger(scheduler, scheduleJob.getJobName(), scheduleJob.getJobGroup());

            //不存在，创建一个
            if (cronTrigger == null) {
                ScheduleUtils.createScheduleJob(scheduler, scheduleJob);
            } else {
                //已存在，那么更新相应的定时设置
                ScheduleUtils.updateScheduleJob(scheduler, scheduleJob);
            }
        }
    }

    public int insert(ScheduleJobVo scheduleJobVo) {
        ScheduleJob scheduleJob = new ScheduleJob();
        BeanUtils.copyProperties(scheduleJobVo, scheduleJob);
        ScheduleUtils.createScheduleJob(scheduler, scheduleJob);
        return scheduleJobMapper.insert(scheduleJob);
    }

    public void update(ScheduleJobVo scheduleJobVo) {
        ScheduleJob scheduleJob = new ScheduleJob();
        BeanUtils.copyProperties(scheduleJobVo, scheduleJob);
        ScheduleUtils.updateScheduleJob(scheduler, scheduleJob);
        scheduleJobMapper.updateByPrimaryKey(scheduleJob);
    }

    public void delUpdate(ScheduleJobVo scheduleJobVo) {
        ScheduleJob scheduleJob = new ScheduleJob();
        BeanUtils.copyProperties(scheduleJobVo, scheduleJob);
        //先删除
        ScheduleUtils.deleteScheduleJob(scheduler, scheduleJob.getJobName(), scheduleJob.getJobGroup());
        //再创建
        ScheduleUtils.createScheduleJob(scheduler, scheduleJob);
        //数据库直接更新即可
        scheduleJobMapper.updateByPrimaryKey(scheduleJob);
    }

    public void delete(Long scheduleJobId) {
        ScheduleJob scheduleJob = scheduleJobMapper.selectByPrimaryKey(scheduleJobId);
        //删除运行的任务
        ScheduleUtils.deleteScheduleJob(scheduler, scheduleJob.getJobName(), scheduleJob.getJobGroup());
        //删除数据
        scheduleJobMapper.deleteByPrimaryKey(scheduleJobId);
    }

    public void runOnce(Long scheduleJobId) {
        ScheduleJob scheduleJob = scheduleJobMapper.selectByPrimaryKey(scheduleJobId);
        ScheduleUtils.runOnce(scheduler, scheduleJob.getJobName(), scheduleJob.getJobGroup());
    }

    public void pauseJob(Long scheduleJobId) {
        ScheduleJob scheduleJob = scheduleJobMapper.selectByPrimaryKey(scheduleJobId);
        ScheduleUtils.pauseJob(scheduler, scheduleJob.getJobName(), scheduleJob.getJobGroup());
        //演示数据库就不更新了
    }

    public void resumeJob(Long scheduleJobId) {
        ScheduleJob scheduleJob = scheduleJobMapper.selectByPrimaryKey(scheduleJobId);
        ScheduleUtils.resumeJob(scheduler, scheduleJob.getJobName(), scheduleJob.getJobGroup());
        //演示数据库就不更新了
    }

    public ScheduleJobVo get(Long scheduleJobId) {
        ScheduleJob scheduleJob = scheduleJobMapper.selectByPrimaryKey(scheduleJobId);
        ScheduleJobVo scheduleJobVo = new ScheduleJobVo();
        BeanUtils.copyProperties(scheduleJob, scheduleJobVo);
        return scheduleJobVo;
    }

    public List<ScheduleJobVo> queryList(ScheduleJobVo scheduleJobVo) {

        List<ScheduleJob> scheduleJobs = scheduleJobMapper.selectAll();
        List<ScheduleJobVo> scheduleJobVoList = new ArrayList<>();
        try {
            for (ScheduleJob scheduleJob : scheduleJobs) {
                ScheduleJobVo vo = new ScheduleJobVo();
                BeanUtils.copyProperties(scheduleJob, vo);
                scheduleJobVoList.add(vo);

                JobKey jobKey = ScheduleUtils.getJobKey(vo.getJobName(), vo.getJobGroup());
                List<? extends Trigger> triggers = scheduler.getTriggersOfJob(jobKey);
                if (CollectionUtils.isEmpty(triggers)) {
                    continue;
                }

                //这里一个任务可以有多个触发器， 但是我们一个任务对应一个触发器，所以只取第一个即可，清晰明了
                Trigger trigger = triggers.iterator().next();
                vo.setJobTrigger(trigger.getKey().getName());

                Trigger.TriggerState triggerState = scheduler.getTriggerState(trigger.getKey());
                vo.setStatus(triggerState.name());

                if (trigger instanceof CronTrigger) {
                    CronTrigger cronTrigger = (CronTrigger) trigger;
                    String cronExpression = cronTrigger.getCronExpression();
                    vo.setCronExpression(cronExpression);
                }
            }
        } catch (SchedulerException e) {
            //演示用，就不处理了
        }
        return scheduleJobVoList;
    }

    /**
     * 获取运行中的job列表
     * @return
     */
    public List<ScheduleJobVo> queryExecutingJobList() {
        try {
            // 存放结果集
            List<ScheduleJobVo> jobList = new ArrayList<ScheduleJobVo>();

            // 获取scheduler中的JobGroupName
            for (String group:scheduler.getJobGroupNames()){
                // 获取JobKey 循环遍历JobKey
                for(JobKey jobKey:scheduler.getJobKeys(GroupMatcher.<JobKey>groupEquals(group))){
                    JobDetail jobDetail = scheduler.getJobDetail(jobKey);
                    JobDataMap jobDataMap = jobDetail.getJobDataMap();
                    ScheduleJob scheduleJob = (ScheduleJob)jobDataMap.get(ScheduleJobVo.JOB_PARAM_KEY);
                    ScheduleJobVo scheduleJobVo = new ScheduleJobVo();
                    BeanUtils.copyProperties(scheduleJob, scheduleJobVo);
                    List<? extends Trigger> triggers = scheduler.getTriggersOfJob(jobKey);
                    Trigger trigger = triggers.iterator().next();
                    Trigger.TriggerState triggerState = scheduler.getTriggerState(trigger.getKey());
                    scheduleJobVo.setJobTrigger(trigger.getKey().getName());
                    scheduleJobVo.setStatus(triggerState.name());
                    if (trigger instanceof CronTrigger) {
                        CronTrigger cronTrigger = (CronTrigger) trigger;
                        String cronExpression = cronTrigger.getCronExpression();
                        scheduleJobVo.setCronExpression(cronExpression);
                    }
                    // 获取正常运行的任务列表
                    if(triggerState.name().equals("NORMAL")){
                        jobList.add(scheduleJobVo);
                    }
                }
            }

            /** 非集群环境获取正在执行的任务列表 */
            /**
            List<JobExecutionContext> executingJobs = scheduler.getCurrentlyExecutingJobs();
            List<ScheduleJobVo> jobList = new ArrayList<ScheduleJobVo>(executingJobs.size());
            for (JobExecutionContext executingJob : executingJobs) {
                ScheduleJobVo job = new ScheduleJobVo();
                JobDetail jobDetail = executingJob.getJobDetail();
                JobKey jobKey = jobDetail.getKey();
                Trigger trigger = executingJob.getTrigger();
                job.setJobName(jobKey.getName());
                job.setJobGroup(jobKey.getGroup());
                job.setJobTrigger(trigger.getKey().getName());
                Trigger.TriggerState triggerState = scheduler.getTriggerState(trigger.getKey());
                job.setStatus(triggerState.name());
                if (trigger instanceof CronTrigger) {
                    CronTrigger cronTrigger = (CronTrigger) trigger;
                    String cronExpression = cronTrigger.getCronExpression();
                    job.setCronExpression(cronExpression);
                }
                jobList.add(job);
            }*/

            return jobList;
        } catch (SchedulerException e) {
            return null;
        }

    }
}
