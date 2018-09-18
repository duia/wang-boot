package com.wpc.sys.service.impl;

import com.wpc.base.service.impl.BaseServiceImpl;
import com.wpc.sys.dao.MenuPermissionDao;
import com.wpc.sys.model.MenuPermission;
import com.wpc.sys.service.MenuPermissionService;
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
public class MenuPermissionServiceImpl extends BaseServiceImpl<MenuPermission> implements MenuPermissionService {

    @Autowired
    private MenuPermissionDao menuPermissionDao;
    
}
