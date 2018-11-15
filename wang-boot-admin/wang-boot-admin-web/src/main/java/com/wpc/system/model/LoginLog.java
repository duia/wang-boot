package com.wpc.system.model;

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
 * @author stylefeng
 * @since 2017-07-11
 */
@Alias("LoginLog")
@Table(name = "sys_login_log")
public class LoginLog extends DataEntity<LoginLog> {

    /**
     * 日志名称
     */
    private String logname;
    /**
     * 管理员id
     */
    private Integer userid;
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

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
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
