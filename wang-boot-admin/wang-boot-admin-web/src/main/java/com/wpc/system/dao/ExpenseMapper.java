package com.wpc.system.dao;

import com.wpc.base.dao.BaseDao;
import com.wpc.system.model.Expense;
import org.apache.ibatis.annotations.Mapper;

/**
 * <p>
 * 报销表 Mapper 接口
 * </p>
 *
 * @author 王鹏程
 * @since 2017-12-04
 */
@Mapper
public interface ExpenseMapper extends BaseDao<Expense> {

}