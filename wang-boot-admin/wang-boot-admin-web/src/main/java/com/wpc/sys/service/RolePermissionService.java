/*
 * Copyright(c) 2016 cncounter.com All rights reserved.
 * distributed with this file and available online at
 * http://www.cncounter.com/
 */
package com.wpc.sys.service;

import com.wpc.base.service.BaseService;
import com.wpc.sys.model.RolePermission;

/**
 * 功能描述:
 * @Author: 王鹏程
 * @E-mail: wpcfree@qq.com @QQ: 376205421
 * @Blog: http://www.wpcfree.com
 * @Date:
 */
public interface RolePermissionService extends BaseService<RolePermission> {

    /**
     * 保存角色权限关系
     * @param roleId
     * @param perIds
     */
    void saveRolePermissions(long roleId, long[] perIds);

}
