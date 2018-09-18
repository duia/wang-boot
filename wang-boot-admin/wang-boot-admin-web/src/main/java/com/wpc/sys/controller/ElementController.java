package com.wpc.sys.controller;

import com.wpc.common.bean.ResponseResult;
import com.wpc.sys.model.Element;
import com.wpc.sys.service.ElementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 *  控制层
 * author wpc
 */
@Controller
@RequestMapping("/sys/element")
public class ElementController {
	
	@Autowired
	private ElementService elementService;
	
	/**
	 * 页面跳转
	 */
	@RequestMapping
	public String element(ModelMap model) {
		return "admin/sys/sys_element";
	}
	
	@RequestMapping(value="/queryElementByMenu", method= RequestMethod.POST)
	@ResponseBody
	public List<Element> queryElementByMenu(int menuId){
		return elementService.queryElementByMenuId(menuId);
	}
	
	/**
	 * 保存或更新
	 */
	@RequestMapping(value="/addOrUpdate", method= RequestMethod.POST)
	@ResponseBody
	public ResponseResult addOrUpdate(ModelMap model, Element element) {
		ResponseResult ajaxResult = new ResponseResult();
		elementService.saveOrUpdate(element);
		return ajaxResult;
	}
	
	/**
	 * 删除
	 */
	@RequestMapping(value="/delete", method= RequestMethod.POST)
	@ResponseBody
	public ResponseResult delete(ModelMap model, Long id) {
		elementService.delete(id);
		return ResponseResult.success();
	}
	
	/**
	 * 
	 * @param id
	 * @return
	 */
	@RequestMapping(value="/findById", method= RequestMethod.POST)
	@ResponseBody
	public Element findById(Long id){
		return elementService.findById(id);
	}

}
