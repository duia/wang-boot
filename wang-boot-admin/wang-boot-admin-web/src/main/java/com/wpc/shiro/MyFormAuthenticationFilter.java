/**
 * Copyright &copy; 2012-2016 <a href="https://github.com/thinkgem/jeesite">JeeSite</a> All rights reserved.
 */
package com.wpc.shiro;

import com.wpc.SessionUtil;
import com.wpc.common.utils.net.IpUtils;
import com.wpc.log.LogManager;
import com.wpc.log.factory.LogTaskFactory;
import org.apache.commons.lang3.StringUtils;
import org.apache.shiro.authc.*;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.web.filter.authc.FormAuthenticationFilter;
import org.apache.shiro.web.util.WebUtils;
import org.springframework.stereotype.Service;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

/**
 * 表单验证过滤类
 * @author 王鹏程
 * @version 2014-5-19
 */
public class MyFormAuthenticationFilter extends FormAuthenticationFilter {

	public static final String DEFAULT_MESSAGE_PARAM = "message";

	private String messageParam = DEFAULT_MESSAGE_PARAM;

	public String getMessageParam() {
		return messageParam;
	}

	@Override
	protected boolean onAccessDenied(ServletRequest request, ServletResponse response) throws Exception {
		return request.getAttribute(getFailureKeyAttribute()) != null || super.onAccessDenied(request, response);
	}

	@Override
	protected boolean onLoginSuccess(AuthenticationToken token, Subject subject, ServletRequest request, ServletResponse response) throws Exception {
		LogManager.me().executeLog(LogTaskFactory.loginLog(SessionUtil.getUser().getId(), IpUtils.getIpAddress()));
		// 更新登录IP和时间
        SessionUtil.updateUserLoginInfo();
		return super.onLoginSuccess(token, subject, request, response);
	}

	/**
	 * 登录失败调用事件
	 */
	@Override
	protected boolean onLoginFailure(AuthenticationToken authcToken,
                                     AuthenticationException e, ServletRequest request, ServletResponse response) {
		UsernamePasswordToken token = (UsernamePasswordToken) authcToken;

		String className = e.getClass().getName(), message = "";
//		IncorrectCredentialsException 登录密码错误
//      ExcessiveAttemptsException 登录失败次数过多
//      LockedAccountException 帐号已被锁定
//      DisabledAccountException 帐号已被禁用
//      ExpiredCredentialsException 帐号已过期
//      UnknownAccountException 帐号不存在
//      UnauthorizedException 您没有得到相应的授权
		if (IncorrectCredentialsException.class.getName().equals(className)
				|| UnknownAccountException.class.getName().equals(className)){
			message = "用户或密码错误, 请重试.";
			LogManager.me().executeLog(LogTaskFactory.loginLog(token.getUsername(), "账号密码错误", IpUtils.getIpAddress()));
		}
		else if (e.getMessage() != null && StringUtils.startsWith(e.getMessage(), "msg:")){
			message = StringUtils.replace(e.getMessage(), "msg:", "");
		}
		else{
			message = "系统出现点问题，请稍后再试！";
			e.printStackTrace(); // 输出到控制台
		}
        request.setAttribute(getFailureKeyAttribute(), className);
        request.setAttribute(getMessageParam(), message);
        return true;
	}
	
}