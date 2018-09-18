/*
 * Copyright(c) 2016 cncounter.com All rights reserved.
 * distributed with this file and available online at
 * http://www.cncounter.com/
 */
package com.wpc.sys.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.wpc.base.entity.DataEntity;

import java.util.Date;

/**
 * 功能描述: 用户表
 * @Author: 王鹏程
 * @E-mail: wpcfree@qq.com @QQ: 376205421
 * @Blog: http://www.wpcfree.com
 * @Date:
 */
public class User extends DataEntity<User> {

	// 登录名
	private String loginName;
	// 密码
	private String password;
	// 工号
	private String no;
	// 姓名
	private String username;
	// 邮箱
	private String email;
	// 电话
	private String phone;
	// 手机
	private String mobile;
	// 用户类型
	private String userType;
	// 用户头像
	private String photo;
	// 最后登陆IP
	private String loginIp;
	// 最后登陆时间
	private Date loginDate;
	// 是否可登录
	private String loginFlag;
	// 归属公司
	private Long companyId;
	// 归属部门
	private Long departmentId;
		
	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}
	
	public String getLoginName() {
		return this.loginName;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getPassword() {
		return this.password;
	}

	public void setNo(String no) {
		this.no = no;
	}
	
	public String getNo() {
		return this.no;
	}

	public void setUsername(String username) {
		this.username = username;
	}
	
	public String getUsername() {
		return this.username;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getEmail() {
		return this.email;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}
	
	public String getPhone() {
		return this.phone;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	
	public String getMobile() {
		return this.mobile;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}
	
	public String getUserType() {
		return this.userType;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}
	
	public String getPhoto() {
		return this.photo;
	}

	public void setLoginIp(String loginIp) {
		this.loginIp = loginIp;
	}
	
	public String getLoginIp() {
		return this.loginIp;
	}

	public void setLoginDate(Date loginDate) {
		this.loginDate = loginDate;
	}
	
	public Date getLoginDate() {
		return this.loginDate;
	}

	public void setLoginFlag(String loginFlag) {
		this.loginFlag = loginFlag;
	}
	
	public String getLoginFlag() {
		return this.loginFlag;
	}

	public void setCompanyId(Long companyId) {
		this.companyId = companyId;
	}
	
	public Long getCompanyId() {
		return this.companyId;
	}

	public void setDepartmentId(Long departmentId) {
		this.departmentId = departmentId;
	}
	
	public Long getDepartmentId() {
		return this.departmentId;
	}

	@JsonIgnore
	public boolean isAdmin(){
		return isAdmin(this.id);
	}

	@JsonIgnore
	public static boolean isAdmin(Long id){
		return id != null && new Long(1).equals(id);
	}

}
