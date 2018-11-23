package com.wpc.system.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.wpc.base.service.impl.BaseServiceImpl;
import com.wpc.system.dao.LogMapper;
import com.wpc.system.model.Log;
import com.wpc.system.service.ILogService;
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
public class LogServiceImpl extends BaseServiceImpl<Log> implements ILogService {

    @Autowired
    private LogMapper logMapper;

    @Override
    public PageInfo<Map<String, Object>> getOperationLogs(int offset, int limit, String beginTime, String endTime, String logName, String s, String orderByField, boolean asc) {
        PageHelper.startPage(offset, limit);
        List<Map<String, Object>> list = this.logMapper.getOperationLogs(beginTime, endTime, logName, s, orderByField, asc);
        return new PageInfo<>(list);
    }

    @Override
    public void deleteLog() {
        this.logMapper.deleteByExample(null);
    }

}
