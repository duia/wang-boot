/**
 * Copyright &copy; 2012-2016 <a href="https://github.com/thinkgem/jeesite">JeeSite</a> All rights reserved.
 */
package com.wpc.sys.service;

import com.wpc.base.service.impl.TreeBaseServiceImpl;
import com.wpc.sys.entity.Area;
import com.wpc.sys.utils.UserUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * 区域Service
 * @author ThinkGem
 * @version 2014-05-16
 */
@Service
@Transactional(readOnly = true)
public class AreaService extends TreeBaseServiceImpl<Area> {

	public List<Area> findAll(){
		return baseDao.findAllList(new Area());
	}

}
