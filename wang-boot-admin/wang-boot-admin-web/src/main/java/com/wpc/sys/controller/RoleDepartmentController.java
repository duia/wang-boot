/*
 * Copyright(c) 2016 cncounter.com All rights reserved.
 * distributed with this file and available online at
 * http://www.cncounter.com/
 */
package com.wpc.sys.controller;

import com.wpc.base.entity.datatables.DataTablesRequest;
import com.wpc.base.entity.datatables.DataTablesResponse;
import com.wpc.common.bean.ResponseResult;
import com.wpc.sys.model.RoleDepartment;
import com.wpc.sys.service.RoleDepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

/**
 * @version 1.0
 * @author 
 */
@Controller
@RequestMapping("/sys/roleDepartment")
public class RoleDepartmentController {
    
    @Autowired
    private RoleDepartmentService roleDepartmentService;

	/**
	 * 页面跳转
	 */
	@RequestMapping
	public String index(ModelMap model) {
		return "sys/roleDepartment";
	}

	/**
	 *
	 * 分页查询列表
	 */
	@RequestMapping(value="/searchPage", method= RequestMethod.POST)
	@ResponseBody
	public DataTablesResponse<RoleDepartment> searchPage(ModelMap model, HttpServletRequest request, @RequestBody DataTablesRequest query) {
		return roleDepartmentService.searchPage(query);
	}

	/**
	 * 保存或更新
	 */
	@RequestMapping(value="/addOrUpdate", method= RequestMethod.POST)
	@ResponseBody
	public ResponseResult addOrUpdate(ModelMap model, RoleDepartment roleDepartment) {
		ResponseResult ajaxResult = new ResponseResult();
		if(roleDepartment.getId()!=null && roleDepartment.getId()!=0){
			roleDepartmentService.update(roleDepartment);
		}else{
			roleDepartmentService.save(roleDepartment);
		}
		return ajaxResult;
	}

	/**
	 * 删除
	 */
	@RequestMapping(value="/delete", method= RequestMethod.POST)
	@ResponseBody
	public ResponseResult delete(ModelMap model, Long id) {
		ResponseResult ajaxResult = new ResponseResult();
		roleDepartmentService.delete(id);
		return ajaxResult;
	}

}
