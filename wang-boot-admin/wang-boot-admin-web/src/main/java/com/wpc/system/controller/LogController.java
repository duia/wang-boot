package com.wpc.system.controller;

import com.github.pagehelper.PageInfo;
import com.wpc.base.controller.BaseController;
import com.wpc.base.entity.PageInfoBT;
import com.wpc.common.utils.base.BeanUtils;
import com.wpc.constant.LogType;
import com.wpc.system.model.Log;
import com.wpc.system.service.ILogService;
import com.wpc.system.warpper.LogWarpper;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
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
@RequestMapping("/log")
public class LogController extends BaseController {

    private static String PREFIX = "/system/log/";

    @Autowired
    private ILogService operationLogService;

    /**
     * 跳转到日志管理的首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "log";
    }

    /**
     * 查询操作日志列表
     */
    @RequestMapping("/list")
    @ResponseBody
    public Object list(HttpServletRequest request, @RequestParam(required = false) String beginTime, @RequestParam(required = false) String endTime,
                       @RequestParam(required = false) String logName, @RequestParam(required = false) String logType) {
        int limit = Integer.valueOf(request.getParameter("limit"));     //每页多少条数据
        int offset = Integer.valueOf(request.getParameter("offset"));   //每页的偏移量(本页当前有多少条)
        String sort = request.getParameter("sort");         //排序字段名称
        String order = request.getParameter("order");       //asc或desc(升序或降序)
        PageInfo<Map<String, Object>> result = operationLogService.getOperationLogs(offset, limit, beginTime, endTime,
                logName, (StringUtils.isEmpty(logType) || LogType.ALL.getCode().equals(logType))?null:logType,
                sort, "asc".equalsIgnoreCase(order));
        new LogWarpper(result).wrap();
        return new PageInfoBT<>(result);
    }

    /**
     * 查询操作日志详情
     */
    @RequestMapping("/detail/{id}")
    @ResponseBody
    public Object detail(@PathVariable Long id) {
        Log operationLog = operationLogService.findById(id);
        Map<String, Object> stringObjectMap = BeanUtils.object2Map(operationLog);
        return new LogWarpper(stringObjectMap).wrap();
    }

    /**
     * 清空日志
     */
//    @BusinessLog(value = "清空业务日志")
    @RequestMapping("/delLog")
    @ResponseBody
    public Object delLog() {
        operationLogService.deleteLog();
        return SUCCESS_TIP;
    }
}
