/*
 * Copyright(c) 2016 cncounter.com All rights reserved.
 * distributed with this file and available online at
 * http://www.cncounter.com/
 */
package com.wpc.sys.controller;

import com.wpc.base.entity.datatables.DataTablesRequest;
import com.wpc.base.entity.datatables.DataTablesResponse;
import com.wpc.common.bean.ResponseResult;
import com.wpc.sys.model.Dict;
import com.wpc.sys.service.DictService;
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
@RequestMapping("/sys/dict")
public class DictController {
    
    @Autowired
    private DictService dictService;

	/**
	 * 页面跳转
	 */
	@RequestMapping
	public String index(ModelMap model) {
		return "sys/dict";
	}

	/**
	 *
	 * 分页查询列表
	 */
	@RequestMapping(value="/searchPage", method= RequestMethod.POST)
	@ResponseBody
	public DataTablesResponse<Dict> searchPage(ModelMap model, HttpServletRequest request, @RequestBody DataTablesRequest query) {
		return dictService.searchPage(query);
	}

	/**
	 * 保存或更新
	 */
	@RequestMapping(value="/addOrUpdate", method= RequestMethod.POST)
	@ResponseBody
	public ResponseResult addOrUpdate(ModelMap model, Dict dict) {
		ResponseResult ajaxResult = new ResponseResult();
		if(dict.getId()!=null && dict.getId()!=0){
			dictService.update(dict);
		}else{
			dictService.save(dict);
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
		dictService.delete(id);
		return ajaxResult;
	}

}
