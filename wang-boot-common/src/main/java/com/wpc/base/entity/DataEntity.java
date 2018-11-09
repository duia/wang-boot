package com.wpc.base.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Transient;
import java.util.Date;

/**
 * 数据Entity类
 * @author ThinkGem
 * @version 2014-05-16
 */

/**
 * 功能描述: 实体基础类
 * @Author: 王鹏程
 * @E-mail: wpcfree@qq.com @QQ: 376205421
 * @Blog: http://www.wpcfree.com
 * @Date:
 */
public class DataEntity<T> extends BaseEntity<T> {

	@Transient
	protected Integer sort;		// 排序
	@Transient
	protected String remarks;	// 备注
	@Transient
	protected Long createBy;	// 创建者
	@Transient
	protected Date createDate;	// 创建日期
	@Transient
	protected Long updateBy;	// 更新者
	@Transient
	protected Date updateDate;	// 更新日期
	@Transient
	protected String delFlag; 	// 删除标记（-1：删除）

	public DataEntity() {
		super();
	}

	public DataEntity(Long id) {
		super(id);
	}

	/**
	 * 插入之前执行方法，需要手动调用
	 */
	@Override
	public void preInsert(){
//		User user = SessionUtil.getUser();
//		if (null != user){
//			this.createBy = user.getId();
//		}
		this.createDate = new Date();
	}

	/**
	 * 更新之前执行方法，需要手动调用
	 */
	@Override
	public void preUpdate(){
//		User user = SessionUtil.getUser();
//		if (null != user){
//			this.updateBy = user.getId();
//		}
		this.updateDate = new Date();
	}

	public Integer getSort() {
		return sort;
	}

	public void setSort(Integer sort) {
		this.sort = sort;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	
	@JsonIgnore
	public Long getCreateBy() {
		return createBy;
	}

	public void setCreateBy(Long createBy) {
		this.createBy = createBy;
	}

	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	@JsonIgnore
	public Long getUpdateBy() {
		return updateBy;
	}

	public void setUpdateBy(Long updateBy) {
		this.updateBy = updateBy;
	}

	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	public Date getUpdateDate() {
		return updateDate;
	}

	public void setUpdateDate(Date updateDate) {
		this.updateDate = updateDate;
	}

	@JsonIgnore
	public String getDelFlag() {
		return delFlag;
	}

	public void setDelFlag(String delFlag) {
		this.delFlag = delFlag;
	}

}
