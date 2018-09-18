package com.wpc.sys.service.impl;

import com.wpc.base.service.impl.BaseServiceImpl;
import com.wpc.sys.dao.ElementPermissionDao;
import com.wpc.sys.model.ElementPermission;
import com.wpc.sys.service.ElementPermissionService;
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
public class ElementPermissionServiceImpl extends BaseServiceImpl<ElementPermission> implements ElementPermissionService {

    @Autowired
    private ElementPermissionDao elementPermissionDao;
    
}
