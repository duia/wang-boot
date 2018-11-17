package com.wpc.system.controller;

import com.github.pagehelper.PageInfo;
import com.wpc.base.controller.BaseController;
import com.wpc.system.model.LoginLog;
import com.wpc.system.service.ILoginLogService;
import org.apache.ibatis.jdbc.SqlRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

/**
 * 日志管理的控制器
 *
 * @author 王鹏程
 * @Date 2017年4月5日 19:45:36
 */
@Controller
@RequestMapping("/loginLog")
public class LoginLogController extends BaseController {

    private static String PREFIX = "/system/log/";

    @Autowired
    private ILoginLogService loginLogService;

    /**
     * 跳转到日志管理的首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "login_log";
    }

    /**
     * 查询登录日志列表
     */
    @RequestMapping("/list")
    @ResponseBody
    public Object list(HttpServletRequest request, @RequestParam(required = false) String beginTime,
                       @RequestParam(required = false) String endTime, @RequestParam(required = false) String logName) {
        int limit = Integer.valueOf(request.getParameter("limit"));     //每页多少条数据
        int offset = Integer.valueOf(request.getParameter("offset"));   //每页的偏移量(本页当前有多少条)
        String sort = request.getParameter("sort");         //排序字段名称
        String order = request.getParameter("order");       //asc或desc(升序或降序)
        PageInfo<Map<String, Object>> result = loginLogService.getLoginLogs(offset, limit, beginTime, endTime, logName,
                sort, "asc".equalsIgnoreCase(order));
        return result;
    }

    /**
     * 清空日志
     */
//    @RequestMapping("/delLoginLog")
//    @ResponseBody
//    public Object delLog() {
//        SqlRunner.db().delete("delete from sys_login_log");
//        return SUCCESS_TIP;
//    }
}
