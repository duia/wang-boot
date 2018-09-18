package com.wpc.sys.controller;

import com.wpc.sys.model.User;
import com.wpc.base.entity.datatables.DataTablesRequest;
import com.wpc.base.entity.datatables.DataTablesResponse;
import com.wpc.common.bean.ResponseResult;
import com.wpc.sys.model.Role;
import com.wpc.sys.model.UserRole;
import com.wpc.sys.service.RoleService;
import com.wpc.sys.service.UserRoleService;
import com.wpc.sys.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.List;


/**
 *  控制层
 * author wpc
 */
@Controller
@RequestMapping("/sys/role")
public class RoleController {
	
	@Autowired
	private UserService userService;
	@Autowired
	private RoleService roleService;
	@Autowired
	private UserRoleService userRoleService;
	
	/**
	 * 页面跳转
	 */
	@RequestMapping
	public String role(ModelMap model) {
		return "sys/role";
	}
	
	/**
	 *
	 * 分页查询列表
	 */
	@RequestMapping(value="/searchPage", method= RequestMethod.POST)
	@ResponseBody
	public DataTablesResponse<Role> searchPage(ModelMap model, HttpServletRequest request, @RequestBody DataTablesRequest query) {
		return roleService.searchPage(query);
	}
	
	/**
	 * 保存或更新
	 */
	@RequestMapping(value="/addOrUpdate", method= RequestMethod.POST)
	@ResponseBody
	public ResponseResult addOrUpdate(ModelMap model, Role role) {
		ResponseResult ajaxResult = new ResponseResult();
		if(role.getId()!=null && role.getId()!=0){
			roleService.update(role);
		}else{
			roleService.save(role);
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
		roleService.delete(id);
		return ajaxResult;
	}
	
	/**
	 * 获取所有角色
	 */
	@RequestMapping(value="/allRoles", method= RequestMethod.POST)
	@ResponseBody
	public List<Role> getAllRoles(ModelMap model) {
		return roleService.queryAll();
	}
	
	/**
	 * 通过角色id获取所有该角色下的人员
	 */
	@RequestMapping(value="/addUserRole", method= RequestMethod.POST)
	@ResponseBody
	public ResponseResult addUserRole(ModelMap model, UserRole aur) {
		userRoleService.save(aur);
		return ResponseResult.success();
	}
	
	/**
	 * 通过角色id获取所有该角色下的人员
	 */
	@RequestMapping(value="/userByRole", method= RequestMethod.POST)
	@ResponseBody
	public List<User> userByRole(ModelMap model, Long roleId) {
		return userService.queryUserByRole(roleId);
	}
	

}
