/*
 * Copyright(c) 2016 cncounter.com All rights reserved.
 * distributed with this file and available online at
 * http://www.cncounter.com/
 */
package com.wpc.sys.model;

import com.wpc.base.entity.TreeEntity;

/**
 * 功能描述: 字典表
 * @Author: 王鹏程
 * @E-mail: wpcfree@qq.com @QQ: 376205421
 * @Blog: http://www.wpcfree.com
 * @Date:
 */
public class Dict extends TreeEntity<Dict> {

	// 数据值
	private String value;
	// 标签名
	private String label;
	// 类型
	private String type;
	// 描述
	private String description;
		
	public void setValue(String value) {
		this.value = value;
	}
	
	public String getValue() {
		return this.value;
	}

	public void setLabel(String label) {
		this.label = label;
	}
	
	public String getLabel() {
		return this.label;
	}

	public void setType(String type) {
		this.type = type;
	}
	
	public String getType() {
		return this.type;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getDescription() {
		return this.description;
	}

}
