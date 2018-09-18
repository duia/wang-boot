/*
 * Copyright(c) 2016 cncounter.com All rights reserved.
 * distributed with this file and available online at
 * http://www.cncounter.com/
 */
package com.wpc.sys.model;

import com.wpc.base.entity.DataEntity;

/**
 * 功能描述: MenuPermission
 * @Author: 王鹏程
 * @E-mail: wpcfree@qq.com @QQ: 376205421
 * @Blog: http://www.wpcfree.com
 * @Date:
 */
public class MenuPermission extends DataEntity<MenuPermission> {

	// menuId
	private Long menuId;
	// permissionId
	private Long permissionId;
		
	public void setMenuId(Long menuId) {
		this.menuId = menuId;
	}
	
	public Long getMenuId() {
		return this.menuId;
	}

	public void setPermissionId(Long permissionId) {
		this.permissionId = permissionId;
	}
	
	public Long getPermissionId() {
		return this.permissionId;
	}

}
