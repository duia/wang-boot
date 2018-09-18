/*
 * Copyright(c) 2016 cncounter.com All rights reserved.
 * distributed with this file and available online at
 * http://www.cncounter.com/
 */
package com.wpc.sys.dao;

import com.wpc.base.dao.BaseDao;
import com.wpc.sys.dto.PermissionDto;
import com.wpc.sys.model.Permission;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface PermissionDao extends BaseDao<Permission> {

    List<Permission> queryPermissionByRoleId(long rid);

    /**
     * 通过资源id和资源类型获取权限数据
     * @param resourceId
     * @return
     */
    Permission findByResourceId(@Param("resourceId") long resourceId, @Param("permissionType") String permissionType);

    /**
     * 通过资源id和资源类型删除权限数据
     * @param resourceId
     * @return
     */
    void deleteByResourceId(@Param("resourceId") long resourceId, @Param("permissionType") String permissionType);

    /**
     * 通过资源id和资源类型删除权限数据
     * @param parentId
     * @param permissionType
     * @return
     */
    void deleteByParentId(@Param("parentId") long parentId, @Param("permissionType") String permissionType);

    /**
     * 获取所有权限，区分角色是否具有该角色
     * @param roleId
     */
    List<PermissionDto> getAllPermissionsByRole(long roleId);

}