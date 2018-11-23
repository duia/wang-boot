package com.wpc.system.model;

import com.wpc.base.entity.DataEntity;
import org.apache.ibatis.type.Alias;

import javax.persistence.Table;
import java.util.Date;

@Alias("Log")
@Table(name = "sys_log")
public class Log extends DataEntity<Log> {

    // 日志类型
    private String logType;
    // 操作描述
    private String operDescribe;
    // 操作名称
    private String operName;
    // 操作参数
    private String operParam;
    // 操作时间
    private Date operTime;
    // 操作信息
    private String message;
    // 操作结果
    private String succeed;

    private Long userId;
    // 操作的方式
    private String method;
    // 操作用户的IP地址
    private String remoteAddr;
    // 操作的URI
    private String requestUri;
    // 操作用户代理信息
    private String userAgent;

    public String getLogType() {
        return logType;
    }

    public void setLogType(String logType) {
        this.logType = logType;
    }

    public String getOperDescribe() {
        return operDescribe;
    }

    public void setOperDescribe(String operDescribe) {
        this.operDescribe = operDescribe;
    }

    public String getOperName() {
        return operName;
    }

    public void setOperName(String operName) {
        this.operName = operName;
    }

    public String getOperParam() {
        return operParam;
    }

    public void setOperParam(String operParam) {
        this.operParam = operParam;
    }

    public Date getOperTime() {
        return operTime;
    }

    public void setOperTime(Date operTime) {
        this.operTime = operTime;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getSucceed() {
        return succeed;
    }

    public void setSucceed(String succeed) {
        this.succeed = succeed;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    public String getRemoteAddr() {
        return remoteAddr;
    }

    public void setRemoteAddr(String remoteAddr) {
        this.remoteAddr = remoteAddr;
    }

    public String getRequestUri() {
        return requestUri;
    }

    public void setRequestUri(String requestUri) {
        this.requestUri = requestUri;
    }

    public String getUserAgent() {
        return userAgent;
    }

    public void setUserAgent(String userAgent) {
        this.userAgent = userAgent;
    }
}
