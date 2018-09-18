package com.wpc.sys.service.impl;

import com.wpc.common.annotation.DataSourceAnn;
import com.wpc.base.service.impl.BaseServiceImpl;
import com.wpc.sys.dao.SysLogDao;
import com.wpc.sys.model.SysLog;
import com.wpc.sys.service.SysLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * 功能描述: 
 * @Author: 王鹏程 
 * @E-mail: wpcfree@qq.com @QQ: 376205421
 * @Blog: http://www.wpcfree.com
 * @Date:
 */
@Service
public class SysLogServiceImpl extends BaseServiceImpl<SysLog> implements SysLogService {

    @Autowired
    private SysLogDao sysLogDao;

    @DataSourceAnn(name = "mysql")
    @Override
    public void save(SysLog sysLog) {
        super.save(sysLog);
    }
}
