package com.wpc.system.service;

import com.github.pagehelper.PageInfo;
import com.wpc.base.service.BaseService;
import com.wpc.system.model.Log;

import java.util.Map;

/**
 * <p>
 * 操作日志 服务类
 * </p>
 *
 * @author 王鹏程
 * @since 2018-02-22
 */
public interface ILogService extends BaseService<Log> {

    /**
     * 获取操作日志列表
     */
    PageInfo<Map<String, Object>> getOperationLogs(int offset, int limit, String beginTime, String endTime, String logName,
                                                   String s, String orderByField, boolean asc);

    void deleteLog();

}
