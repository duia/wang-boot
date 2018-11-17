package com.wpc.system.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.wpc.base.service.impl.BaseServiceImpl;
import com.wpc.system.dao.LoginLogMapper;
import com.wpc.system.model.LoginLog;
import com.wpc.system.service.ILoginLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 登录记录 服务实现类
 * </p>
 *
 * @author 王鹏程
 * @since 2018-02-22
 */
@Service
public class LoginLogServiceImpl extends BaseServiceImpl<LoginLog> implements ILoginLogService {

    @Autowired
    private LoginLogMapper loginLogMapper;

    @Override
    public PageInfo<Map<String, Object>> getLoginLogs(int offset, int limit, String beginTime, String endTime, String logName, String orderByField, boolean asc) {
        PageHelper.startPage(offset, limit);
        List<Map<String, Object>> list = this.loginLogMapper.getLoginLogs(beginTime, endTime, logName, orderByField, asc);
        return new PageInfo<>(list);
    }
}
