/*
 * Copyright(c) 2016 cncounter.com All rights reserved.
 * distributed with this file and available online at
 * http://www.cncounter.com/
 */
package com.wpc.sys.model;

import com.wpc.base.entity.TreeEntity;

/**
 * 功能描述: 菜单表
 * @Author: 王鹏程
 * @E-mail: wpcfree@qq.com @QQ: 376205421
 * @Blog: http://www.wpcfree.com
 * @Date:
 */
public class Menu extends TreeEntity<Menu> {

	// 名称
	private String menuName;
	// 权限标识
	private String menuCode;
	// 链接
	private String href;
	// 目标
	private String target;
	// 图标
	private String icon;
	// 是否在菜单中显示
	private String isActive;

	private Long userId;
		
	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}
	
	public String getMenuName() {
		return this.menuName;
	}

	public void setMenuCode(String menuCode) {
		this.menuCode = menuCode;
	}
	
	public String getMenuCode() {
		return this.menuCode;
	}

	public void setHref(String href) {
		this.href = href;
	}
	
	public String getHref() {
		return this.href;
	}

	public void setTarget(String target) {
		this.target = target;
	}
	
	public String getTarget() {
		return this.target;
	}

	public void setIcon(String icon) {
		this.icon = icon;
	}
	
	public String getIcon() {
		return this.icon;
	}

	public void setIsActive(String isActive) {
		this.isActive = isActive;
	}
	
	public String getIsActive() {
		return this.isActive;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}
}
