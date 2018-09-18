/*
 * Copyright(c) 2016 cncounter.com All rights reserved.
 * distributed with this file and available online at
 * http://www.cncounter.com/
 */
package com.wpc.sys.service;

import com.wpc.base.service.BaseService;
import com.wpc.sys.dto.PermissionDto;
import com.wpc.sys.model.Element;
import com.wpc.sys.model.File;
import com.wpc.sys.model.Menu;
import com.wpc.sys.model.Permission;

import java.util.List;

/**
 * 功能描述:
 * @Author: 王鹏程
 * @E-mail: wpcfree@qq.com @QQ: 376205421
 * @Blog: http://www.wpcfree.com
 * @Date:
 */
public interface PermissionService extends BaseService<Permission> {

    /**
     * 根据传来的资源为该资源添加对应的权限
     * @param   （菜单，按钮，文件）
     */
    void addOrUpdateMenuPermission(Menu menu);
    void addOrUpdateElementPermission(Element element);
    void addOrUpdateFilePermission(File file);

    /**
     * 获取所有权限，区分角色是否具有该角色
     * @param roleId
     */
    List<PermissionDto> getAllPermissionsByRole(long roleId);

}
