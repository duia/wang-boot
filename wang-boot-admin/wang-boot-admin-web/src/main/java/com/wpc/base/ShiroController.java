package com.wpc.base;

import com.wpc.common.bean.ResponseResult;
import com.wpc.common.utils.Servlets;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@Controller
@RequestMapping("/shiro")
public class ShiroController {

	@RequestMapping("/401")
	public String authorizationException(ModelMap modelMap, HttpServletRequest request) {
		// ajax 请求
		if (Servlets.isAjaxRequest(request)) {
			return "redirect:/shiro/asyn401";
		} else {
			return "redirect:/shiro/syn401";
		}
	}

	// 异步
	@RequestMapping("/asyn401")
	@ResponseBody
	public ResponseResult asyn401(ModelMap modelMap, HttpServletRequest request, HttpServletResponse response) {
		ResponseResult ajaxResult = new ResponseResult();
		ajaxResult.setCode(ResponseResult.AJAX_STATUS_CODE_WARN);
		ajaxResult.setMsg("您无权操作");
		return ajaxResult;
	}

	// 同步
	@RequestMapping("/syn401")
	public String syn401(ModelMap modelMap, HttpServletRequest request) {
		return "common/error/405";
	}

}
