package com.wpc.sys.service.impl;

import com.wpc.base.service.impl.BaseServiceImpl;
import com.wpc.SessionUtil;
import com.wpc.sys.dao.ElementDao;
import com.wpc.sys.dao.MenuDao;
import com.wpc.sys.dao.PermissionDao;
import com.wpc.sys.model.Element;
import com.wpc.sys.model.Menu;
import com.wpc.sys.model.Permission;
import com.wpc.sys.service.ElementService;
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
public class ElementServiceImpl extends BaseServiceImpl<Element> implements ElementService {

    @Autowired
    private MenuDao menuDao;
    @Autowired
    private ElementDao elementDao;
    @Autowired
    private PermissionDao permissionDao;

    @Autowired
    private PermissionService permissionService;

    @Override
    public void addDefaultElements(Menu menu) {
        Element element = null;
        for (int i = 0; i < Permission.OPERATION_COUNT; i++) {
            element = new Element();
            element.setMenuId(menu.getId());
            element.setMenuIds(menu.getParentIds());
            element.setElementName(Permission.OPERATION_NAMES[i]);
            element.setElementCode(Permission.OPERATION_CODES[i]);
            element.setElementDesc(menu.getMenuName()+"_"+ Permission.OPERATION_NAMES[i]);
            element.setCreateBy(SessionUtil.getUser().getId());
            element.setCreateDate(new Date());
            elementDao.save(element);
            //给element添加权限
            permissionService.addOrUpdateElementPermission(element);
        }
    }

    @Override
    public List<Element> queryElementByMenuId(long menuId) {
        // TODO Auto-generated method stub
        Element query = new Element();
        query.setMenuId(menuId);
        return elementDao.search(query);
    }

    @Override
    public void saveOrUpdate(Element t) {
//        Menu menu = menuDao.findById(t.getMenuId());
        if(t.getId()!=null && t.getId()!=0){
//            t.setMenuIds(menu.getParentIds());
            t.setUpdateBy(SessionUtil.getUser().getId());
            t.setUpdateDate(new Date());
            elementDao.update(t);
        }else{
//            t.setMenuIds(menu.getParentIds());
            t.setCreateBy(SessionUtil.getUser().getId());
            t.setCreateDate(new Date());
            elementDao.save(t);
        }
        permissionService.addOrUpdateElementPermission(t);
    }

    @Override
    public void delete(Long id) {
        permissionDao.deleteByResourceId(id, Permission.PER_TYPE_ELEMENT);
        super.delete(id);
    }

}
