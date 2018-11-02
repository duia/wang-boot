/**
 * Copyright &copy; 2012-2013 <a href="httparamMap://github.com/thinkgem/jeesite">JeeSite</a> All rights reserved.
 */
package com.wpc.sys.service;

import com.wpc.base.entity.Page;
import com.wpc.base.service.impl.BaseServiceImpl;
import com.wpc.common.utils.date.DateUtils;
import com.wpc.sys.entity.Log;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * 日志Service
 * @author ThinkGem
 * @version 2014-05-16
 */
@Service
@Transactional(readOnly = true)
public class LogService extends BaseServiceImpl<Log> {

//	public Page<Log> findPage(Page<Log> page, Log log) {
//
//		// 设置默认时间范围，默认当前月
//		if (log.getBeginDate() == null){
//			log.setBeginDate(DateUtils.setDays(DateUtils.parseDate(DateUtils.getDate()), 1));
//		}
//		if (log.getEndDate() == null){
//			log.setEndDate(DateUtils.addMonths(log.getBeginDate(), 1));
//		}
//
//		return super.findPage(page, log);
//
//	}
	
}
