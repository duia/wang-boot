/**
 * 文件名：IndexController.java
 *
 * 描述：此处填写文件的描述信息
 * 
 * 日期：2015年12月31日
 * 
 * 本系统是商用软件，未经授权擅自复制或传播本程序的部分或全部将是非法的
 *
 * Copyright(C) WEAVER Corporation 2015 
 *
 */
package com.wpc.base;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.text.SimpleDateFormat;

/**
 * <dl>
 * Class Description
 * <dd>项目名称：springmvc
 * <dd>类名称：IndexController
 * <dd>类描述：概述类的作用
 * <dd>创建人：王鹏程
 * <dd>创建时间：2015年12月31日 上午9:43:33
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
@Controller
@RequestMapping("/")
public class IndexController {

	Logger logger = LoggerFactory.getLogger(IndexController.class);
	
	@RequiresPermissions("user")
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String index(ModelMap model) {
		return "modules/sys/sysIndex";
	}

	@RequestMapping(value = "/main")
	public String main1(ModelMap model) {
		return "main";
	}
	
	@RequestMapping(value = "buttons")
	public String index3(ModelMap model) {
		return "ui_buttons";
	}
	
	@RequestMapping(value = "index2")
	public String index2(HttpServletRequest request, HttpServletResponse response, ModelMap model, String a,
                         @RequestParam("b") int bbb) {
		// String a = request.getParameter("a");
		// model.addAttribute("a", a);

		Cookie cookie = new Cookie("username", "helloweenvsfei"); // 新建Cookie
		cookie.setMaxAge(Integer.MAX_VALUE); // 设置生命周期为MAX_VALUE
		response.addCookie(cookie); // 输出到客户端

		model.addAttribute("message", "Spring3 MVC 例子 2" + a + "-" + bbb + " 计数：");
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy年MM月dd日HH时mm分ss秒");
		model.addAttribute("date", dateFormat.format(new java.util.Date()));
		return "hello";
	}

}
