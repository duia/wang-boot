/**
 * Copyright &copy; 2012-2016 <a href="https://github.com/thinkgem/jeesite">JeeSite</a> All rights reserved.
 */
package com.wpc.sys.dao;

import com.wpc.base.dao.TreeBaseDao;
import com.wpc.sys.entity.Menu;

import java.util.List;

/**
 * 菜单DAO接口
 * @author ThinkGem
 * @version 2014-05-16
 */
public interface MenuDao extends TreeBaseDao<Menu> {

	public List<Menu> findByUserId(Menu menu);
	
	public int updateSort(Menu menu);
	
}
