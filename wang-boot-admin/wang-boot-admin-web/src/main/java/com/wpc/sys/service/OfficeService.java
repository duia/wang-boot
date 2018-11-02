/**
 * Copyright &copy; 2012-2016 <a href="https://github.com/thinkgem/jeesite">JeeSite</a> All rights reserved.
 */
package com.wpc.sys.service;

import com.wpc.DataBaseService;
import com.wpc.base.service.impl.TreeBaseServiceImpl;
import com.wpc.sys.entity.Office;
import com.wpc.sys.entity.User;
import com.wpc.sys.utils.UserUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

import static com.wpc.sys.utils.UserUtils.getUser;

/**
 * 机构Service
 * @author ThinkGem
 * @version 2014-05-16
 */
@Service
@Transactional(readOnly = true)
public class OfficeService extends TreeBaseServiceImpl<Office> {

	public List<Office> findAll(){
		User user = getUser();
		if (user.isAdmin()){
			return baseDao.findAllList(new Office());
		}else{
			Office office = new Office();
			office.getSqlMap().put("dsf", DataBaseService.dataScopeFilter(user, "a", ""));
			return baseDao.findList(office);
		}
	}

	public List<Office> findList(Boolean isAll){
		if (isAll != null && isAll){
			return baseDao.findAllList(new Office());
		}else{
			return findAll();
		}
	}
	
	@Transactional(readOnly = true)
	public List<Office> findList(Office office){
		if(office != null){
			office.setParentIds(office.getParentIds()+"%");
			return treeBaseDao.findByParentIdsLike(office);
		}
		return  new ArrayList<Office>();
	}
	
}
