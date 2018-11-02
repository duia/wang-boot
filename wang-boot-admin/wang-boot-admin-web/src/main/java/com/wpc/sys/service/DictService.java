/**
 * Copyright &copy; 2012-2016 <a href="https://github.com/thinkgem/jeesite">JeeSite</a> All rights reserved.
 */
package com.wpc.sys.service;

import com.wpc.base.service.impl.BaseServiceImpl;
import com.wpc.sys.dao.DictDao;
import com.wpc.sys.entity.Dict;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * 字典Service
 * @author ThinkGem
 * @version 2014-05-16
 */
@Service
@Transactional(readOnly = true)
public class DictService extends BaseServiceImpl<Dict> {

	@Autowired
	private DictDao dictDao;

	/**
	 * 查询字段类型列表
	 * @return
	 */
	public List<String> findTypeList(){
		return dictDao.findTypeList(new Dict());
	}

}
