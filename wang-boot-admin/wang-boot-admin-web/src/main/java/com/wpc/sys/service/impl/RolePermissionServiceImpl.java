package com.wpc.sys.service.impl;

import com.wpc.base.service.impl.BaseServiceImpl;
import com.wpc.sys.dao.RolePermissionDao;
import com.wpc.sys.model.RolePermission;
import com.wpc.sys.service.RolePermissionService;
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
public class RolePermissionServiceImpl extends BaseServiceImpl<RolePermission> implements RolePermissionService {

    @Autowired
    private RolePermissionDao rolePermissionDao;

    @Override
    public void saveRolePermissions(long roleId, long[] perIds) {
        RolePermission rp = null;
        rolePermissionDao.deleteByRoleId(roleId);
        for (long id : perIds) {
            rp = new RolePermission();
            rp.setRoleId(roleId);
            rp.setPermissionId(id);
            rolePermissionDao.save(rp);
        }
    }

}
