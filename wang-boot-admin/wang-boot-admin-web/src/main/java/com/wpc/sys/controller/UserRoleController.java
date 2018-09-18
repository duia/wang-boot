package com.wpc.sys.controller;

import com.wpc.common.bean.ResponseResult;
import com.wpc.sys.model.UserRole;
import com.wpc.sys.service.UserRoleService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;


/**
 *  控制层
 * author wpc
 */
@Controller
@RequestMapping("/sys/user_role")
public class UserRoleController {
	
	@Resource
	private UserRoleService userRoleService;
	
	/**
	 * 页面跳转
	 */
	@RequestMapping
	public String userRole(ModelMap model) {
		return "sys/user_role";
	}
	
	/**
	 * 保存或更新
	 */
	@RequestMapping(value="/addOrUpdate", method= RequestMethod.POST)
	@ResponseBody
	public ResponseResult addOrUpdate(ModelMap model, UserRole userRole) {
		ResponseResult ajaxResult = new ResponseResult();
		if(userRole.getId()!=null && userRole.getId()!=0){
			userRoleService.update(userRole);
		}else{
			userRoleService.save(userRole);
		}
		return ajaxResult;
	}
	
	/**
	 * 删除
	 */
	@RequestMapping(value="/delete", method= RequestMethod.POST)
	@ResponseBody
	public ResponseResult delete(ModelMap model, Long id) {
		ResponseResult ajaxResult = new ResponseResult();
		userRoleService.delete(id);
		return ajaxResult;
	}
	
	

}
