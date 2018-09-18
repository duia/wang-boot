/*
 * Copyright(c) 2016 cncounter.com All rights reserved.
 * distributed with this file and available online at
 * http://www.cncounter.com/
 */
package com.wpc.sys.model;

import com.wpc.base.entity.TreeEntity;

/**
 * 功能描述: Permission
 * @Author: 王鹏程
 * @E-mail: wpcfree@qq.com @QQ: 376205421
 * @Blog: http://www.wpcfree.com
 * @Date:
 */
public class Permission extends TreeEntity<Permission> {

	public static String PER_TYPE_MENU = "menu";
	public static String PER_TYPE_ELEMENT = "element";
	public static String PER_TYPE_FILE = "file";

	public static int OPERATION_COUNT = 4;

	public static String[] OPERATION_NAMES = {"查看", "保存", "修改" ,"删除"};
	public static String[] OPERATION_CODES = {"view", "save", "update", "delete"};

	// resourceId
	private Long resourceId;
	// permissionName
	private String permissionName;
	// 权限码
	private String permissionCode;
	// 权限类型
	private String permissionType;

	public void setResourceId(Long resourceId) {
		this.resourceId = resourceId;
	}
	
	public Long getResourceId() {
		return this.resourceId;
	}

	public void setPermissionName(String permissionName) {
		this.permissionName = permissionName;
	}
	
	public String getPermissionName() {
		return this.permissionName;
	}

	public void setPermissionCode(String permissionCode) {
		this.permissionCode = permissionCode;
	}
	
	public String getPermissionCode() {
		return this.permissionCode;
	}

	public void setPermissionType(String permissionType) {
		this.permissionType = permissionType;
	}
	
	public String getPermissionType() {
		return this.permissionType;
	}

	@Override
	public String toString(){
		StringBuilder sb = new StringBuilder();
		sb.append("Permission[");
		sb.append("id=");
		sb.append(id);
		sb.append(", parentId=");
		sb.append(parentId);
		sb.append(", parentIds=");
		sb.append(parentIds);
		sb.append(", resourceId=");
		sb.append(resourceId);
		sb.append(", permissionName=");
		sb.append(permissionName);
		sb.append(", permissionCode=");
		sb.append(permissionCode);
		sb.append(", permissionType=");
		sb.append(permissionType);
		sb.append(", sort=");
		sb.append(sort);
		sb.append(", createBy=");
		sb.append(createBy);
		sb.append(", createDate=");
		sb.append(createDate);
		sb.append(", updateBy=");
		sb.append(updateBy);
		sb.append(", updateDate=");
		sb.append(updateDate);
		sb.append(", remarks=");
		sb.append(remarks);
		sb.append(", delFlag=");
		sb.append(delFlag);
		sb.append("]");
		return sb.toString();
	}
}
