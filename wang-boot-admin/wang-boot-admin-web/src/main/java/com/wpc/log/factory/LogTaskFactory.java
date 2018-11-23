package com.wpc.log.factory;

import com.wpc.common.SpringContextHolder;
import com.wpc.common.utils.exception.Exceptions;
import com.wpc.constant.LogSucceed;
import com.wpc.constant.LogType;
import com.wpc.log.LogManager;
import com.wpc.system.dao.LogMapper;
import com.wpc.system.dao.LoginLogMapper;
import com.wpc.system.model.Log;
import com.wpc.system.model.LoginLog;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.http.HttpServletRequest;
import java.util.TimerTask;

/**
 * 日志操作任务创建工厂
 *
 * @author 王鹏程
 * @date 2016年12月6日 下午9:18:27
 */
public class LogTaskFactory {

    private static Logger logger = LoggerFactory.getLogger(LogManager.class);
    private static LoginLogMapper loginLogMapper = SpringContextHolder.getBean(LoginLogMapper.class);
    private static LogMapper logMapper = SpringContextHolder.getBean(LogMapper.class);

    public static TimerTask loginLog(final Long userId, final String ip) {
        return new TimerTask() {
            @Override
            public void run() {
                try {
                    LoginLog loginLog = LogFactory.createLoginLog(LogType.LOGIN, userId, null, ip);
                    loginLogMapper.insert(loginLog);
                } catch (Exception e) {
                    logger.error("创建登录日志异常!", e);
                }
            }
        };
    }

    public static TimerTask loginLog(final String username, final String msg, final String ip) {
        return new TimerTask() {
            @Override
            public void run() {
                LoginLog loginLog = LogFactory.createLoginLog(
                        LogType.LOGIN_FAIL, null, "账号:" + username + "," + msg, ip);
                try {
                    loginLogMapper.insert(loginLog);
                } catch (Exception e) {
                    logger.error("创建登录失败异常!", e);
                }
            }
        };
    }

    public static TimerTask exitLog(final Long userId, final String ip) {
        return new TimerTask() {
            @Override
            public void run() {
                LoginLog loginLog = LogFactory.createLoginLog(LogType.EXIT, userId, null, ip);
                try {
                    loginLogMapper.insert(loginLog);
                } catch (Exception e) {
                    logger.error("创建退出日志异常!", e);
                }
            }
        };
    }

    public static TimerTask businessLog(final HttpServletRequest request, final Long userId, final String businessName,
                                         final String methodName, final String arguments, final String msg) {
        return new TimerTask() {
            @Override
            public void run() {
                Log operationLog = LogFactory.createOperationLog(request,
                        LogType.BUSINESS, userId, businessName, methodName, arguments, msg, LogSucceed.SUCCESS);
                try {
                    logMapper.insert(operationLog);
                } catch (Exception e) {
                    logger.error("创建业务日志异常!", e);
                }
            }
        };
    }

    public static TimerTask exceptionLog(final HttpServletRequest request, final Long userId, final String businessName,
                                         final String methodName, final String arguments, final Exception exception) {
        return new TimerTask() {
            @Override
            public void run() {
                String msg = Exceptions.getExceptionMsg(exception);
                Log operationLog = LogFactory.createOperationLog(request,
                        LogType.EXCEPTION, userId, businessName, methodName, arguments, msg, LogSucceed.FAIL);
                try {
                    logMapper.insert(operationLog);
                } catch (Exception e) {
                    logger.error("创建异常日志异常!", e);
                }
            }
        };
    }
}
