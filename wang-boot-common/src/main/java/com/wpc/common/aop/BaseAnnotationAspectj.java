/**
 * 文件名：BaseAnnotationAspectj.java <br>
 * 版本信息：TODO <br>
 * 作者：王鹏程 E-mail：wpcfree@qq.com QQ:376205421
 * 日期：2017年3月15日-下午2:12:49<br>
 * Copyright (c) 2017 王鹏程-版权所有<br>
 *
 */
package com.wpc.common.aop;

import com.wpc.common.utils.Servlets;
import com.wpc.common.utils.date.DateFormatUtils;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.Signature;
import org.aspectj.lang.reflect.MethodSignature;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.NamedThreadLocal;

import javax.servlet.http.HttpServletRequest;
import java.lang.reflect.Method;
import java.text.SimpleDateFormat;

/**
 *
 * 类名称：BaseAnnotationAspectj <br>
 * 类描述：自定义基类注解拦截器 <br>
 * 创建人：王鹏程 <br>
 * 修改人：王鹏程 <br>
 * 修改时间：2017年3月15日 下午2:12:49 <br>
 * 修改备注：TODO <br>
 *
 */
public class BaseAnnotationAspectj {

	protected Logger logger = LoggerFactory.getLogger(this.getClass());

	protected final ThreadLocal<Long> startTimeThreadLocal = new NamedThreadLocal<Long>("ThreadLocal StartTime");

	protected Class getTargetClass(JoinPoint joinPoint) {
		return joinPoint.getTarget().getClass();
	}

	protected Object[] getArgs(JoinPoint joinPoint) {
		return joinPoint.getArgs();
	}

	protected Method getMethod(JoinPoint joinPoint) {
		Signature signature = joinPoint.getSignature();
		MethodSignature methodSignature = (MethodSignature)signature;
		try {
			return getTargetClass(joinPoint).getMethod(methodSignature.getName(), methodSignature.getParameterTypes());
		} catch (NoSuchMethodException e) {
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 直接加载数据（加载后的数据不往缓存放）
	 * @param joinPoint
	 * @return Object
	 * @throws Throwable
	 */
	protected Object getData(ProceedingJoinPoint joinPoint) throws Throwable {
		try {
			long startTime = System.currentTimeMillis();
			Object result = joinPoint.proceed();
			long useTime = System.currentTimeMillis() - startTime;
			String className = getTargetClass(joinPoint).getName();
			logger.info("{}.{}, 耗时:{}ms", className, getMethod(joinPoint).getName(), useTime);
			return result;
		} catch(Throwable e) {
			throw e;
		}
	}

	protected void outStartLog() {
		HttpServletRequest request = Servlets.getRequest();

		if (logger.isDebugEnabled()){
			long beginTime = System.currentTimeMillis();//1、开始时间
			startTimeThreadLocal.set(beginTime);		//线程绑定变量（该数据只有当前请求的线程可见）
			logger.info("开始计时: {}  URI: {}", new SimpleDateFormat("HH:mm:ss.SSS")
					.format(beginTime), null != request ? request.getRequestURI() : "");
		}
	}

	protected void outEndLog() {
		HttpServletRequest request = Servlets.getRequest();
		// 打印JVM信息。
		if (logger.isDebugEnabled()){
			long beginTime = startTimeThreadLocal.get();//得到线程绑定的局部变量（开始时间）
			long endTime = System.currentTimeMillis(); 	//2、结束时间
			logger.info("计时结束：{}  耗时：{}  URI: {}  最大内存: {}m  已分配内存: {}m  已分配内存中的剩余空间: {}m  最大可用内存: {}m",
					new SimpleDateFormat("HH:mm:ss.SSS").format(endTime), DateFormatUtils.formatDateTime(endTime - beginTime),
					null != request ? request.getRequestURI() : "", Runtime.getRuntime().maxMemory()/1024/1024,
					Runtime.getRuntime().totalMemory()/1024/1024, Runtime.getRuntime().freeMemory()/1024/1024,
					(Runtime.getRuntime().maxMemory()-Runtime.getRuntime().totalMemory()+Runtime.getRuntime().freeMemory())/1024/1024);
			//删除线程变量中的数据，防止内存泄漏
			startTimeThreadLocal.remove();
		}
	}

}
