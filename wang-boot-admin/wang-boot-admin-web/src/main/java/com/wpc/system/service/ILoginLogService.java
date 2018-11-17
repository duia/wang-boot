package com.wpc.system.service;

import com.github.pagehelper.PageInfo;
import com.wpc.base.service.BaseService;
import com.wpc.system.model.LoginLog;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 登录记录 服务类
 * </p>
 *
 * @author 王鹏程
 * @since 2018-02-22
 */
public interface ILoginLogService extends BaseService<LoginLog> {

    /**
     * 获取登录日志列表
     */
    PageInfo<Map<String, Object>> getLoginLogs(int offset, int limit, String beginTime, String endTime, String logName,
                                               String orderByField, boolean asc);
}
