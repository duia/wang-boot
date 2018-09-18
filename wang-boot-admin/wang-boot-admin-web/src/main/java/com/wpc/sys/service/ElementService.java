/*
 * Copyright(c) 2016 cncounter.com All rights reserved.
 * distributed with this file and available online at
 * http://www.cncounter.com/
 */
package com.wpc.sys.service;

import com.wpc.base.service.BaseService;
import com.wpc.sys.model.Element;
import com.wpc.sys.model.Menu;

import java.util.List;

/**
 * 功能描述:
 * @Author: 王鹏程
 * @E-mail: wpcfree@qq.com @QQ: 376205421
 * @Blog: http://www.wpcfree.com
 * @Date:
 */
public interface ElementService extends BaseService<Element> {

    /**
     * 为菜单添加默认的四个按钮（查看，保存，修改，删除）
     * @param menu
     */
    void addDefaultElements(Menu menu);

    /**
     * 通过菜单id获取按钮
     * @param menuId
     * @return
     */
    List<Element> queryElementByMenuId(long menuId);

    /**
     * 新增或修改
     * @param element
     */
    void saveOrUpdate(Element element);

}
