package com.wpc.system.service;

import com.wpc.base.service.BaseService;
import com.wpc.system.model.OperationLog;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 操作日志 服务类
 * </p>
 *
 * @author 王鹏程
 * @since 2018-02-22
 */
public interface IOperationLogService extends BaseService<OperationLog> {

    /**
     * 获取操作日志列表
     */
    List<Map<String, Object>> getOperationLogs(/*Page<OperationLog> page, */String beginTime, String endTime, String logName, String s, String orderByField, boolean asc);
}
