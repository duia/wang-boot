package com.wpc.shiro;

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

	@RequestMapping("/403")
	public String authorizationException(HttpServletRequest request) {
		// ajax 请求
		if (Servlets.isAjaxRequest(request)) {
			return "redirect:/shiro/asyn403";
		} else {
			return "redirect:/shiro/syn403";
		}
	}

	// 异步
	@RequestMapping("/asyn403")
	@ResponseBody
	public ResponseResult asyn401() {
		ResponseResult ajaxResult = new ResponseResult();
		ajaxResult.setCode(ResponseResult.UNAUTHORIZED);
		ajaxResult.setMsg("您无权操作");
		return ajaxResult;
	}

	// 同步
	@RequestMapping("/syn403")
	public String syn401() {
		return "403";
	}

}
