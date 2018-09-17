package com.wpc.base.service;

import com.wpc.base.entity.DataEntity;
import com.wpc.base.entity.datatables.DataTablesRequest;
import com.wpc.base.entity.datatables.DataTablesResponse;

import java.util.List;

/**
 * 功能描述: service层接口基础类，封装了一些基本的方法
 * @Author: 王鹏程
 * @E-mail: wpcfree@qq.com @QQ: 376205421
 * @Blog: http://www.wpcfree.com
 * @Date:
 */
public interface BaseService<T extends DataEntity<T>> {

    void save(T t);

    void delete(Long id);

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
