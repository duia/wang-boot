package com.wpc.constant;

/**
 * 日志类型
 *
 * @author 王鹏程
 * @Date 2017年1月22日 下午12:14:59
 */
public enum LogType {

    LOGIN("登录日志", "login"),
    LOGIN_FAIL("登录失败日志", "login_fail"),
    EXIT("退出日志", "exit"),

    ALL("全部", "all"),//全部日志
    EXCEPTION("异常日志", "exception"),
    BUSINESS("业务日志", "business");

    String message;

    String code;

    LogType(String message) {
        this.message = message;
    }

    LogType(String message, String code) {
        this.message = message;
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public static String valueOfName(String code) {
        if (code == null) {
            return null;
        } else {
            for (LogType logType : LogType.values()) {
                if (logType.getCode().equals(code)) {
                    return logType.getMessage();
                }
            }
            return null;
        }
    }

}
