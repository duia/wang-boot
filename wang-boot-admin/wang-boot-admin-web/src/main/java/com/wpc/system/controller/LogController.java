package com.wpc.system.controller;

import com.wpc.base.controller.BaseController;
import com.wpc.system.service.IOperationLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
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
    private IOperationLogService operationLogService;

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
//    @RequestMapping("/list")
//    @Permission(Const.ADMIN_NAME)
//    @ResponseBody
//    public Object list(@RequestParam(required = false) String beginTime, @RequestParam(required = false) String endTime, @RequestParam(required = false) String logName, @RequestParam(required = false) Integer logType) {
//        Page<OperationLog> page = new PageFactory<OperationLog>().defaultPage();
//        List<Map<String, Object>> result = operationLogService.getOperationLogs(page, beginTime, endTime, logName, BizLogType.valueOf(logType), page.getOrderByField(), page.isAsc());
//        page.setRecords(new LogWarpper(result).wrap());
//        return new PageInfoBT<>(page);
//    }

    /**
     * 查询操作日志详情
     */
//    @RequestMapping("/detail/{id}")
//    @Permission(Const.ADMIN_NAME)
//    @ResponseBody
//    public Object detail(@PathVariable Integer id) {
//        OperationLog operationLog = operationLogService.selectById(id);
//        Map<String, Object> stringObjectMap = BeanUtil.beanToMap(operationLog);
//        return super.warpObject(new LogWarpper(stringObjectMap));
//    }

    /**
     * 清空日志
     */
//    @BussinessLog(value = "清空业务日志")
//    @RequestMapping("/delLog")
//    @Permission(Const.ADMIN_NAME)
//    @ResponseBody
//    public Object delLog() {
//        SqlRunner.db().delete("delete from sys_operation_log");
//        return SUCCESS_TIP;
//    }
}
