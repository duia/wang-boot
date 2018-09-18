package com.wpc.sys.controller;

import com.wpc.common.bean.ResponseResult;
import com.wpc.sys.model.FilePermission;
import com.wpc.sys.service.FilePermissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *  控制层
 * author wpc
 */
@Controller
@RequestMapping("/filepermission")
public class FilePermissionController {
	
	@Autowired
	private FilePermissionService filePermissionService;
	
	/**
	 * 页面跳转
	 */
	@RequestMapping
	public String filePermission(ModelMap model) {
		return "admin/sys/sys_file_permission";
	}
	
	/**
	 * 保存或更新
	 */
	@RequestMapping(value="/addOrUpdate", method= RequestMethod.POST)
	@ResponseBody
	public ResponseResult addOrUpdate(ModelMap model, FilePermission filePermission) {
		ResponseResult ajaxResult = new ResponseResult();
		if(filePermission.getId()!=null && filePermission.getId()!=0){
			filePermissionService.update(filePermission);
		}else{
			filePermissionService.save(filePermission);
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
		filePermissionService.delete(id);
		return ajaxResult;
	}
	
	

}
