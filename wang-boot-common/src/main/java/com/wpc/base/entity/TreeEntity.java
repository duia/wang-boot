package com.wpc.base.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.wpc.common.utils.base.Reflections;

import javax.persistence.Transient;

/**
 * 功能描述: 树形实体基础类
 * @Author: 王鹏程
 * @E-mail: wpcfree@qq.com @QQ: 376205421
 * @Blog: http://www.wpcfree.com
 * @Date:
 */
public class TreeEntity<T> extends DataEntity<T> {

	@Transient
	protected Long parentId;	// 父级编号
	@Transient
	protected String parentIds; // 所有父级编号

	@Transient
	protected T parent;	// 父级

	public TreeEntity() {
		super();
	}
	
	public TreeEntity(Long id) {
		super(id);
	}
	
	/**
	 * 父对象，只能通过子类实现，父类实现mybatis无法读取
	 * @return
	 */
	@JsonBackReference
	public T getParent() {
		return parent;
	}

	/**
	 * 父对象，只能通过子类实现，父类实现mybatis无法读取
	 * @return
	 */
	public void setParent(T parent) {
		this.parent = parent;
	}

	public String getParentIds() {
		return parentIds;
	}

	public void setParentIds(String parentIds) {
		this.parentIds = parentIds;
	}

	public Long getParentId() {
		Long id = parentId;
		if (parent != null){
			id = (Long) Reflections.getFieldValue(parent, "id");
		}
		return null != id ? id : 0L;
	}

	public void setParentId(Long parentId) {
		this.parentId = parentId;
	}

}
