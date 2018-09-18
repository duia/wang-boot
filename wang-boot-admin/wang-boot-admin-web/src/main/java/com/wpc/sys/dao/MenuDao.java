/*
 * Copyright(c) 2016 cncounter.com All rights reserved.
 * distributed with this file and available online at
 * http://www.cncounter.com/
 */
package com.wpc.sys.dao;

import com.wpc.base.dao.TreeBaseDao;
import com.wpc.sys.model.Menu;

import java.util.List;

public interface MenuDao extends TreeBaseDao<Menu> {

    List<Menu> getLeftMenu();

    /**
     * 功能描述: 获取用户的授权菜单
     * @Author: 王鹏程
     * @E-mail: wpcfree@qq.com @QQ: 376205421
     * @Blog: http://www.wpcfree.com
     * @Date: 2017-11-27 16:12:40
     */
    List<Menu> findMenusByUserId(Menu menu);

    /**
     * 功能描述: 根据父节点id获取子节点
     * @Author: 王鹏程 
     * @E-mail: wpcfree@qq.com @QQ: 376205421
     * @Blog: http://www.wpcfree.com
     * @Date: 2017-11-28 16:11:35
     */
    List<Menu> findByParentIdsLike(Menu menu);
    
}