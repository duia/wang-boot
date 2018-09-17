/**
 * 文件名：MyInteceptor.java
 *
 * 描述：此处填写文件的描述信息
 * 
 * 日期：2016年1月12日
 * 
 * 本系统是商用软件，未经授权擅自复制或传播本程序的部分或全部将是非法的
 *
 * Copyright(C) WEAVER Corporation 2016 
 *
 */
package com.wpc.common.inteceptor;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * <dl>
 * Class Description
 * <dd>项目名称：springmvc
 * <dd>类名称：MyInteceptor
 * <dd>类描述：概述类的作用
 * <dd>创建人：王鹏程
 * <dd>创建时间：2016年1月12日 下午7:20:39
 * <dd>修改人：无
 * <dd>修改时间：无
 * <dd>修改备注：无
 * </dl>
 * 
 * @author weaver
 * @see
 * @version 1.0
 * 
 */
public class MyInteceptor extends HandlerInterceptorAdapter {

	/**
	 * <b>Overriding Method afterCompletion</b>
	 * <dd>方法作用：(这里用一句话描述这个方法的作用)
	 * 
	 * @throws Exception
	 * @see org.springframework.web.servlet.HandlerInterceptor#afterCompletion(javax.servlet.http.HttpServletRequest,
	 *      javax.servlet.http.HttpServletResponse, Object,
	 *      Exception)
	 * @since Met 1.0
	 */
	@Override
	public void afterCompletion(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, Exception arg3)
					throws Exception {
		// TODO Auto-generated method stub
		System.out.println("最后执行，通常用于释放资源，处理异常");
	}

	/**
	 * <b>Overriding Method postHandle</b>
	 * <dd>方法作用：(这里用一句话描述这个方法的作用)
	 *
	 * @throws Exception
	 * @see org.springframework.web.servlet.HandlerInterceptor#postHandle(javax.servlet.http.HttpServletRequest,
	 *      javax.servlet.http.HttpServletResponse, Object,
	 *      org.springframework.web.servlet.ModelAndView)
	 * @since Met 1.0
	 */
	@Override
	public void postHandle(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, ModelAndView arg3)
					throws Exception {
		// TODO Auto-generated method stub
		System.out.println("该方法在 action 执行后，生成视图前执行。在这里，我们有机会修改视图层数据。");
	}

	/**
	 * <b>Overriding Method preHandle</b>
	 * <dd>方法作用：(这里用一句话描述这个方法的作用)
	 *
	 * @return
	 * @throws Exception
	 * @see org.springframework.web.servlet.HandlerInterceptor#preHandle(javax.servlet.http.HttpServletRequest,
	 *      javax.servlet.http.HttpServletResponse, Object)
	 * @since Met 1.0
	 */
	@Override
	public boolean preHandle(HttpServletRequest reuqest, HttpServletResponse response, Object obj) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("该方法在 action 执行前执行，可以实现对数据的预处理，比如：编码、安全控制等。");
		HandlerMethod method = (HandlerMethod) obj;//获取当前要执行的方法
		RequiresPermissions p = method.getMethodAnnotation(RequiresPermissions.class);//获取权限注解
		System.out.println(p.value()[0]);
		if(p!=null){
			String[] ss = p.value();
			for(int i=0; i<ss.length; i++){
				String s = ss[i];
				if(s.contains("$1") && s.contains("$2")){
					s = s.replace("$1", reuqest.getParameter("depId")).replace("$2", reuqest.getParameter("userId"));
					p.value()[i] = s;
				}
			}
		}
		System.out.println(p.value()[0]);
		// 解决跨域问题
		// response.setHeader("Access-Control-Allow-Headers", "Content-Type");
		// response.setHeader("Access-Control-Allow-Methods", "GET");
		// response.setHeader("Access-Control-Allow-Origin", "*");
		return true;
	}

}
