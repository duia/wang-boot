package com.wpc.sys.controller;


import com.wpc.common.bean.ResponseResult;
import com.wpc.sys.dto.PermissionDto;
import com.wpc.sys.model.Permission;
import com.wpc.sys.service.PermissionService;
import com.wpc.sys.service.RolePermissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;


/**
 *  控制层
 * author wpc
 */
@Controller
@RequestMapping("/sys/permission")
public class PermissionController {
	
	@Autowired
	private PermissionService permissionService;
	@Autowired
	private RolePermissionService rolePermissionService;
	
	/**
	 * 页面跳转
	 */
	@RequestMapping
	public String permission(ModelMap model) {
		return "admin/sys/sys_permission";
	}
	
	/**
	 * 保存或更新
	 */
	@RequestMapping(value="/addOrUpdate", method= RequestMethod.POST)
	@ResponseBody
	public ResponseResult addOrUpdate(ModelMap model, Permission permission) {
		ResponseResult ajaxResult = new ResponseResult();
		if(permission.getId()!=null && permission.getId()!=0){
			permissionService.update(permission);
		}else{
			permissionService.save(permission);
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
		permissionService.delete(id);
		return ajaxResult;
	}
	
	/**
	 * 根据角色获取权限情况
	 */
	@RequestMapping(value="/getPermissions", method= RequestMethod.POST)
	@ResponseBody
	public List<PermissionDto> getPermissions(Long rid){
		return permissionService.getAllPermissionsByRole(rid);
	}
	
	/**
	 * 根据角色获取权限情况
	 */
	@RequestMapping(value="/saveRolePermissions", method= RequestMethod.POST)
	@ResponseBody
	public ResponseResult saveRolePermissions(long roleId, @RequestParam("pers[]")long[] perIds){
		rolePermissionService.saveRolePermissions(roleId, perIds);
		return ResponseResult.success();
	}	

}
