/**
 * Copyright 2018-2020 stylefeng & fengshuonan (https://gitee.com/stylefeng)
 * <p>
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * <p>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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
 * @author stylefeng123
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
