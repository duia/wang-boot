package com.wpc.common.quartz.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

/**
 * author : 王鹏程
 * createTime : 2018-12-19
 * description : 计划任务模型
 * version : 1.0
 */
@Table(name = "schedule_job")
public class ScheduleJob implements Serializable {

    private static final long serialVersionUID = 4888005949821878223L;

    /** 任务id */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "SELECT LAST_INSERT_ID()")
    @Column(name = "schedule_job_id")
    private Long              scheduleJobId;

    /** 任务名称 */
    private String            jobName;

    /** 任务别名 */
    private String            aliasName;

    /** 任务分组 */
    private String            jobGroup;

    /** 触发器 */
    private String            jobTrigger;

    /** 任务状态 */
    private String            status;

    /** 任务运行时间表达式 */
    private String            cronExpression;

    /** 是否异步 */
    private Boolean           isSync;

    /** 任务描述 */
    private String            description;

    /** 创建时间 */
    private Date              gmtCreate;

    /** 修改时间 */
    private Date              gmtModify;

    private String jobType;

    /** 任务执行url */
    private String            url;

    /**
     * 任务执行时调用哪个类的方法 包名+类名
     */
    private String beanClass;

    /**
     * spring bean
     */
    private String springId;

    /**
     * 任务调用的方法名
     */
    private String methodName;

    public Long getScheduleJobId() {
        return scheduleJobId;
    }

    public void setScheduleJobId(Long scheduleJobId) {
        this.scheduleJobId = scheduleJobId;
    }

    public String getJobName() {
        return jobName;
    }

    public void setJobName(String jobName) {
        this.jobName = jobName;
    }

    public String getAliasName() {
        return aliasName;
    }

    public void setAliasName(String aliasName) {
        this.aliasName = aliasName;
    }

    public String getJobGroup() {
        return jobGroup;
    }

    public void setJobGroup(String jobGroup) {
        this.jobGroup = jobGroup;
    }

    public String getJobTrigger() {
        return jobTrigger;
    }

    public void setJobTrigger(String jobTrigger) {
        this.jobTrigger = jobTrigger;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getCronExpression() {
        return cronExpression;
    }

    public void setCronExpression(String cronExpression) {
        this.cronExpression = cronExpression;
    }

    public Boolean getIsSync() {
        return isSync;
    }

    public void setIsSync(Boolean isSync) {
        this.isSync = isSync;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getGmtCreate() {
        return gmtCreate;
    }

    public void setGmtCreate(Date gmtCreate) {
        this.gmtCreate = gmtCreate;
    }

    public Date getGmtModify() {
        return gmtModify;
    }

    public void setGmtModify(Date gmtModify) {
        this.gmtModify = gmtModify;
    }

    public String getJobType() {
        return jobType;
    }

    public void setJobType(String jobType) {
        this.jobType = jobType;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getBeanClass() {
        return beanClass;
    }

    public void setBeanClass(String beanClass) {
        this.beanClass = beanClass;
    }

    public String getSpringId() {
        return springId;
    }

    public void setSpringId(String springId) {
        this.springId = springId;
    }

    public String getMethodName() {
        return methodName;
    }

    public void setMethodName(String methodName) {
        this.methodName = methodName;
    }

    @Override
    public String toString() {
        return "ScheduleJob{" +
                "scheduleJobId=" + scheduleJobId +
                ", jobName='" + jobName + '\'' +
                ", aliasName='" + aliasName + '\'' +
                ", jobGroup='" + jobGroup + '\'' +
                ", jobTrigger='" + jobTrigger + '\'' +
                ", status='" + status + '\'' +
                ", cronExpression='" + cronExpression + '\'' +
                ", isSync=" + isSync +
                ", description='" + description + '\'' +
                ", gmtCreate=" + gmtCreate +
                ", gmtModify=" + gmtModify +
                ", url='" + url + '\'' +
                ", beanClass='" + beanClass + '\'' +
                ", springId='" + springId + '\'' +
                ", methodName='" + methodName + '\'' +
                '}';
    }
}
