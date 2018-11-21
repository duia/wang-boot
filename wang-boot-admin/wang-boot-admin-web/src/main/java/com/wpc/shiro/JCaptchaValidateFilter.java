package com.wpc.shiro;

import com.wpc.log.LogManager;
import com.wpc.log.factory.LogTaskFactory;
import org.apache.commons.lang3.StringUtils;
import org.apache.shiro.web.filter.AccessControlFilter;
import org.apache.shiro.web.util.WebUtils;

import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

public class JCaptchaValidateFilter extends AccessControlFilter {

    public static final String DEFAULT_CAPTCHA_PARAM = "validateCode";

    /**
     * 是否开启验证码验证   默认true
     */
    private boolean jcaptchaEnabled = false;

    /**
     * 验证失败后存储到的属性名
     */
    private String failureKeyAttribute = "shiroLoginFailure";

    protected String getCaptcha(ServletRequest request) {
        return WebUtils.getCleanParam(request, DEFAULT_CAPTCHA_PARAM);
    }

    @Override
    protected boolean isAccessAllowed(ServletRequest request, ServletResponse response, Object o) throws Exception {
        //1、设置验证码是否开启属性，页面可以根据该属性来决定是否显示验证码
        request.setAttribute("jcaptchaEnabled", jcaptchaEnabled);

        HttpServletRequest httpRequest = WebUtils.toHttp(request);

        //2、判断验证码是否禁用 或不是表单提交（允许访问）
        if (!jcaptchaEnabled || !"post".equalsIgnoreCase(httpRequest.getMethod())) {
            return true;
        }

        //表单提交，校验验证码的正确性
        String storedCode = getSubject(request, response).getSession().getAttribute(DEFAULT_CAPTCHA_PARAM).toString();
        String currentCode = getCaptcha(request);

        return StringUtils.equalsIgnoreCase(storedCode, currentCode);

    }

    @Override
    protected boolean onAccessDenied(ServletRequest request, ServletResponse servletResponse) throws Exception {
        //如果验证码失败了，存储失败 key 属性
        request.setAttribute(failureKeyAttribute, "验证码错误，请重试");
        return true;
    }
}
