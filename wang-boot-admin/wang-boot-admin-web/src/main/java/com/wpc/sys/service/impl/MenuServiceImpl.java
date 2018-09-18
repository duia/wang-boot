package com.wpc.sys.service.impl;

import com.wpc.base.service.impl.TreeBaseServiceImpl;
import com.wpc.SessionUtil;
import com.wpc.sys.dao.ElementDao;
import com.wpc.sys.dao.MenuDao;
import com.wpc.sys.dao.PermissionDao;
import com.wpc.sys.model.Element;
import com.wpc.sys.model.Menu;
import com.wpc.sys.model.Permission;
import com.wpc.sys.model.User;
import com.wpc.sys.service.ElementService;
import com.wpc.sys.service.MenuService;
import com.wpc.sys.service.PermissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 功能描述: 
 * @Author: 王鹏程 
 * @E-mail: wpcfree@qq.com @QQ: 376205421
 * @Blog: http://www.wpcfree.com
 * @Date:
 */
@Service
public class MenuServiceImpl extends TreeBaseServiceImpl<Menu> implements MenuService {

    @Autowired
    private MenuDao menuDao;
    @Autowired
    private ElementDao elementDao;
    @Autowired
    private PermissionDao permissionDao;

    @Autowired
    private ElementService elementService;
    @Autowired
    private PermissionService permissionService;

//    @SysLogAnn(operType = OperType.SYSTEM, operLevel = OperLevel.NORM, describe = "获取菜单")
    @Override
    public List<Menu> getLeftMenu() {
        List<Menu> menuList = null;
        User user = SessionUtil.getUser();
        if (user.isAdmin()){
            menuList = menuDao.queryAll();
        }else{
            Menu m = new Menu();
            m.setUserId(user.getId());
            menuList = menuDao.findMenusByUserId(m);
        }
        return menuList;
    }

    @Override
    public Long saveOrUpdateMenu(Menu menu) {

        if (null != menu.getId() && menu.getId() != 0L) {
            super.update(menu);
            permissionService.addOrUpdateMenuPermission(menu);
            //修改时需要关联所有的按钮权限
            for(Element element : elementService.queryElementByMenuId(menu.getId())){
                permissionService.addOrUpdateElementPermission(element);
            }
        } else {
            super.save(menu);
            permissionService.addOrUpdateMenuPermission(menu);
            //首次保存要关联保存一下四个默认的按钮
            elementService.addDefaultElements(menu);
        }

        return menu.getId();
    }

    @Override
    public void delete(Long id) {
        elementDao.deleteByMenuId(id);
        permissionDao.deleteByParentId(id, Permission.PER_TYPE_ELEMENT);
        permissionDao.deleteByResourceId(id, Permission.PER_TYPE_MENU);
        super.delete(id);
    }

}
