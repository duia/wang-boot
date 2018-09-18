package com.wpc.sys.controller;

import com.wpc.SessionUtil;
import com.wpc.common.annotation.RateLimiter;
import com.wpc.common.annotation.SysLogAnn;
import com.wpc.base.entity.datatables.DataTablesRequest;
import com.wpc.base.entity.datatables.DataTablesResponse;
import com.wpc.common.enums.OperType;
import com.wpc.common.bean.ResponseResult;
import com.wpc.sys.model.User;
import com.wpc.sys.service.UserService;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.List;


/**
 * 
 * author wpc
 */
@Controller
@RequestMapping("/sys/user")
public class UserController {
	
	@Autowired
	private UserService userService;

//	@Autowired
//	PasswordService passwordService;
	
	/**
	 * 页面跳转
	 */
	@RequiresPermissions("user")
	@RequestMapping
	public String user(ModelMap model) {
		return "sys/user";
	}
	
	/**
	 *
	 * 分页查询列表
	 */
	@RateLimiter(limit = 1, timeout = 5000)
	@SysLogAnn(operType = OperType.SYSTEM)
	@RequestMapping(value="/searchPage", method= RequestMethod.POST)
	@ResponseBody
	public DataTablesResponse<User> searchPage(ModelMap model, HttpServletRequest request, @RequestBody DataTablesRequest query) {
		return userService.searchPage(query);
	}
	
	/**
	 * 保存或更新
	 */
	@RateLimiter(limit = 1, timeout = 5000)
	@RequestMapping(value="/addOrUpdate", method= RequestMethod.POST)
	@ResponseBody
	public ResponseResult addOrUpdate(ModelMap model, User user) {
		if(user.getId()!=null && user.getId()!=0){
//			user.setPassword(passwordService.encryptPassword("123456"));
			user.setPassword(SessionUtil.entryptPassword("123456"));
			userService.update(user);
		}else{
//			user.setPassword(passwordService.encryptPassword(user.getPassword()));
			user.setPassword(SessionUtil.entryptPassword(user.getPassword()));
			userService.save(user);
		}
		return ResponseResult.success();
	}
	
	/**
	 * 删除
	 */
	@RequestMapping(value="/delete", method= RequestMethod.POST)
	@ResponseBody
	public ResponseResult delete(ModelMap model, Long id) {
		ResponseResult responseJsonModel = new ResponseResult();
		userService.delete(id);
		return responseJsonModel;
	}
	
	/**
	 * 通过人员名称匹配人员
	 */
	@RequestMapping(value="/likeName", method= RequestMethod.POST)
	@ResponseBody
	public List<User> likeName(ModelMap model, String name) {
		User query = new User();
		query.setLoginName(name+"%");
		return userService.query(query);
	}

	/**
	 * 功能描述: 通过人员id获取人员信息
	 * @Author: wangpengcheng
	 * @Date: 2017-06-20 22:10:32
	 */
	@RequestMapping(value="/findById", method= RequestMethod.POST)
	@ResponseBody
	public ResponseResult findById(ModelMap model, Long id) {
		ResponseResult responseJsonModel = new ResponseResult();
		responseJsonModel.setResult(userService.findById(id));
		return responseJsonModel;
	}

}
