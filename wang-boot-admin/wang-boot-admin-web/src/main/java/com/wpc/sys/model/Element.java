/*
 * Copyright(c) 2016 cncounter.com All rights reserved.
 * distributed with this file and available online at
 * http://www.cncounter.com/
 */
package com.wpc.sys.model;

import com.wpc.base.entity.DataEntity;

/**
 * 功能描述: Element
 * @Author: 王鹏程
 * @E-mail: wpcfree@qq.com @QQ: 376205421
 * @Blog: http://www.wpcfree.com
 * @Date:
 */
public class Element extends DataEntity<Element> {

	// 所属菜单的id
	private Long menuId;
	// 所属菜单id的层级关系
	private String menuIds;
	// elementName
	private String elementName;
	// elementCode
	private String elementCode;
	// elementDesc
	private String elementDesc;
		
	public void setMenuId(Long menuId) {
		this.menuId = menuId;
	}
	
	public Long getMenuId() {
		return this.menuId;
	}

	public void setMenuIds(String menuIds) {
		this.menuIds = menuIds;
	}
	
	public String getMenuIds() {
		return this.menuIds;
	}

	public void setElementName(String elementName) {
		this.elementName = elementName;
	}
	
	public String getElementName() {
		return this.elementName;
	}

	public void setElementCode(String elementCode) {
		this.elementCode = elementCode;
	}
	
	public String getElementCode() {
		return this.elementCode;
	}

	public void setElementDesc(String elementDesc) {
		this.elementDesc = elementDesc;
	}
	
	public String getElementDesc() {
		return this.elementDesc;
	}

}
