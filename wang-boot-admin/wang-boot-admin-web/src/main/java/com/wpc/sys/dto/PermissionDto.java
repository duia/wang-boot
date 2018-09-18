package com.wpc.sys.dto;

import com.wpc.sys.model.Permission;

public class PermissionDto extends Permission {

	/**
	 * 
	 */
	private static final long serialVersionUID = -4754031999709999089L;
	
	private int roleId;

	public int getRoleId() {
		return roleId;
	}

	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}
	
}
