package com.wpc.base.dao;


import com.wpc.base.entity.TreeEntity;

import java.util.List;

/**
 * 功能描述: dao层接口基础扩展类，封装了一些对树形数据操作的方法
 * @Author: 王鹏程
 * @E-mail: wpcfree@qq.com @QQ: 376205421
 * @Blog: http://www.wpcfree.com
 * @Date:
 */
public interface TreeBaseDao<T extends TreeEntity<T>> extends BaseDao<T> {

    /**
     * 找到所有子节点
     * @param entity
     * @return
     */
    List<T> findByParentIdsLike(T entity);

    /**
     * 更新所有父节点字段
     * @param entity
     * @return
     */
    int updateParentIds(T entity);

}
