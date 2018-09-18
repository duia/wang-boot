/*
 * Copyright(c) 2016 cncounter.com All rights reserved.
 * distributed with this file and available online at
 * http://www.cncounter.com/
 */
package com.wpc.sys.dao;

import com.wpc.base.dao.BaseDao;
import com.wpc.sys.model.RolePermission;

public interface RolePermissionDao extends BaseDao<RolePermission> {

    /**
     * 通过角色ID删除数据
     * @param roleId
     */
    void deleteByRoleId(long roleId);

}