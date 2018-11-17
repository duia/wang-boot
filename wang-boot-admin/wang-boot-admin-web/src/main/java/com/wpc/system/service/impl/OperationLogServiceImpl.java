package com.wpc.system.service.impl;

import com.wpc.base.service.impl.BaseServiceImpl;
import com.wpc.system.dao.OperationLogMapper;
import com.wpc.system.model.OperationLog;
import com.wpc.system.service.IOperationLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 操作日志 服务实现类
 * </p>
 *
 * @author 王鹏程
 * @since 2018-02-22
 */
@Service
public class OperationLogServiceImpl extends BaseServiceImpl<OperationLog> implements IOperationLogService {

    @Autowired
    private OperationLogMapper operationLogMapper;

    @Override
    public List<Map<String, Object>> getOperationLogs(/*Page<OperationLog> page, */String beginTime, String endTime, String logName, String s, String orderByField, boolean asc) {
        return this.operationLogMapper.getOperationLogs(/*page, */beginTime, endTime, logName, s, orderByField, asc);
    }
}
