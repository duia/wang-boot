/*
 * Copyright(c) 2016 cncounter.com All rights reserved.
 * distributed with this file and available online at
 * http://www.cncounter.com/
 */
package com.wpc.sys.model;

import com.wpc.base.entity.DataEntity;

/**
 * 功能描述: 角色表
 * @Author: 王鹏程
 * @E-mail: wpcfree@qq.com @QQ: 376205421
 * @Blog: http://www.wpcfree.com
 * @Date:
 */
public class Role extends DataEntity<Role> {

	// 角色名称
	private String roleName;
	// 权限码
	private String roleCode;
	// 角色类型
	private String roleType;
	// 数据范围
	private String dataScope;
	// 是否系统数据
	private String isSys;
	// 是否可用
	private String useable;
		
	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}
	
	public String getRoleName() {
		return this.roleName;
	}

	public void setRoleCode(String roleCode) {
		this.roleCode = roleCode;
	}
	
	public String getRoleCode() {
		return this.roleCode;
	}

	public void setRoleType(String roleType) {
		this.roleType = roleType;
	}
	
	public String getRoleType() {
		return this.roleType;
	}

	public void setDataScope(String dataScope) {
		this.dataScope = dataScope;
	}
	
	public String getDataScope() {
		return this.dataScope;
	}

	public void setIsSys(String isSys) {
		this.isSys = isSys;
	}
	
	public String getIsSys() {
		return this.isSys;
	}

	public void setUseable(String useable) {
		this.useable = useable;
	}
	
	public String getUseable() {
		return this.useable;
	}

}
