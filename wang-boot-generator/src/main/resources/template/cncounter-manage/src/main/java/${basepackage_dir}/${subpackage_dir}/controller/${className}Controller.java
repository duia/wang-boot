<#include "/java_copyright.include">
<#assign className = table.className>
<#assign classNameLower = className?uncap_first>
<#assign shortName = table.shortName>
package ${basepackage}.${subpackage}.controller;

import javax.servlet.http.HttpServletRequest;

import com.wpc.common.datatables.DataTablesRequest;
import com.wpc.common.datatables.DataTablesResponse;
import com.wpc.common.msg.AjaxResult;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.beans.factory.annotation.Autowired;

import ${basepackage}.${subpackage}.model.${className};
import ${basepackage}.${subpackage}.service.${className}Service;

/**
 * @version 1.0
 * @author 
 */
@Controller
@RequestMapping("/${subpackage}/${classNameLower}")
public class ${className}Controller {
    
    @Autowired
    private ${className}Service ${classNameLower}Service;

	/**
	 * 页面跳转
	 */
	@RequestMapping
	public String index(ModelMap model) {
		return "${subpackage}/${classNameLower}";
	}

	/**
	 *
	 * 分页查询列表
	 */
	@RequestMapping(value="/searchPage", method=RequestMethod.POST)
	@ResponseBody
	public DataTablesResponse<${className}> searchPage(ModelMap model, HttpServletRequest request, @RequestBody DataTablesRequest query) {
		return ${classNameLower}Service.searchPage(query);
	}

	/**
	 * 保存或更新
	 */
	@RequestMapping(value="/addOrUpdate", method=RequestMethod.POST)
	@ResponseBody
	public AjaxResult addOrUpdate(ModelMap model, ${className} ${classNameLower}) {
		AjaxResult ajaxResult = new AjaxResult();
		if(${classNameLower}.getId()!=null && ${classNameLower}.getId()!=0){
			${classNameLower}Service.update(${classNameLower});
		}else{
			${classNameLower}Service.save(${classNameLower});
		}
		return ajaxResult;
	}

	/**
	 * 删除
	 */
	@RequestMapping(value="/delete", method=RequestMethod.POST)
	@ResponseBody
	public AjaxResult delete(ModelMap model, Long id) {
		AjaxResult ajaxResult = new AjaxResult();
		${classNameLower}Service.delete(id);
		return ajaxResult;
	}

}
