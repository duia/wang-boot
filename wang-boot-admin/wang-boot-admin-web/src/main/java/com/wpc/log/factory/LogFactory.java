package com.wpc.log.factory;

import com.wpc.common.utils.net.IpUtils;
import com.wpc.constant.LogSucceed;
import com.wpc.constant.LogType;
import com.wpc.system.model.Log;
import com.wpc.system.model.LoginLog;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;

/**
 * 日志对象创建工厂
 *
 * @author 王鹏程
 * @date 2016年12月6日 下午9:18:27
 */
public class LogFactory {

    /**
     * 创建操作日志
     */
    public static Log createOperationLog(HttpServletRequest request, LogType logType, Long userId, String businessName,
                                         String methodName, String arguments, String msg, LogSucceed succeed) {
        Log operationLog = new Log();
        operationLog.setLogType(logType.getCode());
        operationLog.setOperDescribe(businessName);
        operationLog.setOperName(methodName);
        operationLog.setOperParam(arguments);
        operationLog.setOperTime(new Date());
        operationLog.setUserId(userId);
        operationLog.setSucceed(succeed.getMessage());
        operationLog.setMessage(msg);
        if (null != request) {
            operationLog.setRemoteAddr(IpUtils.getIpAddress(request));
            operationLog.setUserAgent(request.getHeader("user-agent"));
            operationLog.setRequestUri(request.getRequestURI());
            operationLog.setMethod(request.getMethod());
        }
        return operationLog;
    }

    /**
     * 创建登录日志
     */
    public static LoginLog createLoginLog(LogType logType, Long userId, String msg, String ip) {
        LoginLog loginLog = new LoginLog();
        loginLog.setLogname(logType.getMessage());
        loginLog.setUserid(userId);
        loginLog.setCreateTime(new Date());
        loginLog.setSucceed(LogSucceed.SUCCESS.getMessage());
        loginLog.setIp(ip);
        loginLog.setMessage(msg);
        return loginLog;
    }
}
