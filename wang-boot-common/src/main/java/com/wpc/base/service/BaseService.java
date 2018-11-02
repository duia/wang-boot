package com.wpc.base.service;

import com.wpc.base.entity.DataEntity;
import com.wpc.base.entity.Page;
import com.wpc.base.entity.datatables.DataTablesRequest;
import com.wpc.base.entity.datatables.DataTablesResponse;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * 功能描述: service层接口基础类，封装了一些基本的方法
 * @Author: 王鹏程
 * @E-mail: wpcfree@qq.com @QQ: 376205421
 * @Blog: http://www.wpcfree.com
 * @Date:
 */
public interface BaseService<T extends DataEntity<T>> {

    /**
     * 查询列表数据
     * @param entity
     * @return
     */
    public List<T> findList(T entity);

    /**
     * 查询分页数据
     * @param page 分页对象
     * @param entity
     * @return
     */
    public Page<T> findPage(Page<T> page, T entity);

    /**
     * 删除数据
     * @param entity
     */
    public void delete(Long id);

    void save(T t);

    void deleteByIds(Long[] ids);

    void update(T t);

    T findById(Long id);

    List<T> queryAll();
    
    List<T> search(T query);
    
    List<T> query(T query);
    
    DataTablesResponse<T> searchPage(DataTablesRequest query);

    Integer count();

    Integer count(T t);

}
