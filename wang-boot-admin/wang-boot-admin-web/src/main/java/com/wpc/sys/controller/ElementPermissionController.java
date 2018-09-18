package com.wpc.sys.controller;

import com.wpc.common.bean.ResponseResult;
import com.wpc.sys.model.ElementPermission;
import com.wpc.sys.service.ElementPermissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *  控制层
 * author wpc
 */
@Controller
@RequestMapping("/authelementpermission")
public class ElementPermissionController {
	
	@Autowired
	private ElementPermissionService authElementPermissionService;
	
	/**
	 * 页面跳转
	 */
	@RequestMapping
	public String authElementPermission(ModelMap model) {
		return "admin/authelementpermission/auth_element_permission";
	}
	
	/**
	 * 保存或更新
	 */
	@RequestMapping(value="/addOrUpdate", method= RequestMethod.POST)
	@ResponseBody
	public ResponseResult addOrUpdate(ModelMap model, ElementPermission authElementPermission) {
		ResponseResult ajaxResult = new ResponseResult();
		if(authElementPermission.getId()!=null && authElementPermission.getId()!=0){
			authElementPermissionService.update(authElementPermission);
		}else{
			authElementPermissionService.save(authElementPermission);
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
		authElementPermissionService.delete(id);
		return ajaxResult;
	}
	
	

}
