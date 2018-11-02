package com.wpc.base.dao;

import com.wpc.base.entity.DataEntity;
import com.wpc.base.entity.datatables.DataTablesRequest;

import java.util.List;

/**
 * 功能描述: dao层接口基础类，封装了一些基本的方法
 * @Author: 王鹏程
 * @E-mail: wpcfree@qq.com @QQ: 376205421
 * @Blog: http://www.wpcfree.com
 * @Date:
 */
public interface BaseDao<T extends DataEntity<T>> {

    /**
     * 查询数据列表，如果需要分页，请设置分页对象，如：entity.setPage(new Page<T>());
     * @param entity
     * @return
     */
    List<T> findList(T entity);

    /**
     * 查询所有数据列表
     * @param entity
     * @return
     */
    List<T> findAllList(T entity);

    /**
     * 插入数据
     * @param entity
     * @return
     */
    int insert(T entity);

    /**
     * 删除数据（一般为逻辑删除，更新del_flag字段为1）
     * @param entity
     * @return
     */
    int delete(Long di);

    void save(T t);

    void deleteByIds(Long[] ids);

    void update(T t);

    T findById(Long id);

    List<T> queryAll();
    
    List<T> search(T query);
    
    List<T> query(T query);
    
    List<T> searchPage(DataTablesRequest query);
	
	Integer countPage(DataTablesRequest query);

	Integer count();

	Integer count(T t);

}
