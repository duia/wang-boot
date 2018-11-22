package com.wpc.system.model;

import com.wpc.base.entity.BaseEntity;
import com.wpc.base.entity.DataEntity;
import org.apache.ibatis.type.Alias;

import javax.persistence.Table;
import java.io.Serializable;
import java.util.Date;

/**
 * <p>
 * 登录记录
 * </p>
 *
 * @author 王鹏程
 * @since 2017-07-11
 */
@Alias("LoginLog")
@Table(name = "sys_login_log")
public class LoginLog extends BaseEntity<LoginLog> {

    /**
     * 日志名称
     */
    private String logname;
    /**
     * 管理员id
     */
    private Long userid;

    private Date createTime;
    /**
     * 是否执行成功
     */
    private String succeed;
    /**
     * 具体消息
     */
    private String message;
    /**
     * 登录ip
     */
    private String ip;

    public String getLogname() {
        return logname;
    }

    public void setLogname(String logname) {
        this.logname = logname;
    }

    public Long getUserid() {
        return userid;
    }

    public void setUserid(Long userid) {
        this.userid = userid;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public String getSucceed() {
        return succeed;
    }

    public void setSucceed(String succeed) {
        this.succeed = succeed;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    @Override
    public void preInsert() {

    }

    @Override
    public void preUpdate() {

    }

    @Override
    public String toString() {
        return "LoginLog{" +
                "id=" + id +
                ", logname=" + logname +
                ", userid=" + userid +
                ", succeed=" + succeed +
                ", message=" + message +
                ", ip=" + ip +
                "}";
    }
}
