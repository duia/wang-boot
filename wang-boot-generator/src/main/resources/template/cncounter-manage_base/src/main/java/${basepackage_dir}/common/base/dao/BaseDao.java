package ${basepackage}.common.base.dao;

import java.util.List;

import ${basepackage}.common.base.entity.BaseEntity;
import ${basepackage}.common.datatables.DataTablesRequest;

/**
 * 功能描述: dao层接口基础类，封装了一些基本的方法
 * @Author: 王鹏程
 * @E-mail: wpcfree@qq.com @QQ: 376205421
 * @Blog: http://www.wpcfree.com
 * @Date:
 */
public interface BaseDao<T extends BaseEntity<T>> {

    void save(T t);

    void delete(Long id);

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
