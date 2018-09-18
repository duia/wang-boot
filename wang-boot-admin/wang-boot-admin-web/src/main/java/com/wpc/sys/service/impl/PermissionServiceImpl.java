package com.wpc.sys.service.impl;

import com.wpc.base.service.impl.BaseServiceImpl;
import com.wpc.SessionUtil;
import com.wpc.sys.dao.MenuDao;
import com.wpc.sys.dao.PermissionDao;
import com.wpc.sys.dto.PermissionDto;
import com.wpc.sys.model.Element;
import com.wpc.sys.model.File;
import com.wpc.sys.model.Menu;
import com.wpc.sys.model.Permission;
import com.wpc.sys.service.PermissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * 功能描述: 
 * @Author: 王鹏程 
 * @E-mail: wpcfree@qq.com @QQ: 376205421
 * @Blog: http://www.wpcfree.com
 * @Date:
 */
@Service
public class PermissionServiceImpl extends BaseServiceImpl<Permission> implements PermissionService {

    @Autowired
    private PermissionDao permissionDao;
    @Autowired
    private MenuDao menuDao;

    @Override
    public void addOrUpdateElementPermission(Element element) {
        Menu menu = menuDao.findById(element.getMenuId());
        Permission per = permissionDao.findByResourceId(element.getId(), Permission.PER_TYPE_ELEMENT);
        if(per == null){
            per = new Permission();
        }
        per.setPermissionName(element.getElementName());
        per.setPermissionCode(menu.getMenuCode()+":"+element.getElementCode());
        per.setPermissionType(Permission.PER_TYPE_ELEMENT);
        per.setResourceId(element.getId());
        per.setParentId(element.getMenuId());
        saveOrUpdate(per);
    }

    @Override
    public void addOrUpdateMenuPermission(Menu menu) {
        Permission per = permissionDao.findByResourceId(menu.getId(), Permission.PER_TYPE_MENU);
        if(per == null){
            per = new Permission();
        }
        per.setPermissionName(menu.getMenuName());
        per.setPermissionCode(menu.getMenuCode());
        per.setPermissionType(Permission.PER_TYPE_MENU);
        per.setResourceId(menu.getId());
        per.setParentId(0L);
        saveOrUpdate(per);
    }

    private void saveOrUpdate(Permission per) {
        if(null != per.getId() && per.getId() != 0L){
            per.setUpdateDate(new Date());
            per.setUpdateBy(SessionUtil.getUser().getId());
            permissionDao.update(per);
        }else{
            per.setCreateDate(new Date());
            per.setCreateBy(SessionUtil.getUser().getId());
            permissionDao.save(per);
        }
    }

    @Override
    public void addOrUpdateFilePermission(File file) {
        // TODO Auto-generated method stub

    }

    @Override
    public List<PermissionDto> getAllPermissionsByRole(long roleId) {
        return permissionDao.getAllPermissionsByRole(roleId);
    }

}
