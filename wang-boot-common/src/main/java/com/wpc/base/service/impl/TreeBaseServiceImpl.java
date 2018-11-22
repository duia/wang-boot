package com.wpc.base.service.impl;

import com.wpc.base.dao.TreeBaseMapper;
import com.wpc.base.entity.TreeEntity;
import com.wpc.common.utils.base.Reflections;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public abstract class TreeBaseServiceImpl<T extends TreeEntity<T>> extends BaseServiceImpl<T> {

    @Autowired
    protected TreeBaseMapper<T> treeBaseDao;

    @Override
    public void insert(T t) {
        
        @SuppressWarnings("unchecked")
        Class<T> tClass = Reflections.getClassGenricType(t.getClass(), 0);

        // 如果没有设置父节点，则代表为跟节点，有则获取父节点实体
        if (t.getParent() == null || null == t.getParentId()
                || new Long(0).equals(t.getParentId())){
            t.setParent(null);
        }else{
            t.setParent(super.findById(t.getParentId()));
        }
        if (t.getParent() == null){
            T parentEntity = null;
            try {
                parentEntity = tClass.getConstructor(Long.class).newInstance("0");
            } catch (Exception e) {
                throw new RuntimeException("实例化异常");
            }
            t.setParent(parentEntity);
            t.getParent().setParentIds(StringUtils.EMPTY);
        }

        // 设置新的父节点串
        t.setParentIds(t.getParent().getParentIds()+t.getParent().getId()+",");

        // 保存或更新实体
        super.insert(t);

    }

    @Override
    public void update(T t) {

        @SuppressWarnings("unchecked")
        Class<T> tClass = Reflections.getClassGenricType(t.getClass(), 0);

        // 如果没有设置父节点，则代表为跟节点，有则获取父节点实体
        if (t.getParent() == null || null == t.getParentId()
                || new Long(0).equals(t.getParentId())){
            t.setParent(null);
        }else{
            t.setParent(super.findById(t.getParentId()));
        }
        if (t.getParent() == null){
            T parentEntity = null;
            try {
                parentEntity = tClass.getConstructor(Long.class).newInstance("0");
            } catch (Exception e) {
                throw new RuntimeException("实例化异常");
            }
            t.setParent(parentEntity);
            t.getParent().setParentIds(StringUtils.EMPTY);
        }

        // 设置新的父节点串
        t.setParentIds(t.getParent().getParentIds()+t.getParent().getId()+",");

        // 保存或更新实体
        super.update(t);

        // 更新子节点 parentIds
        T o = null;
        try {
            o = tClass.newInstance();
        } catch (Exception e) {
            throw new RuntimeException("实例化异常");
        }
        o.setParentIds("%,"+t.getId()+",%");
        List<T> list = treeBaseDao.findByParentIdsLike(o);
        for (T e : list){
            if (e.getParentIds() != null){
                e.setParentIds(t.getParentIds()+t.getId()+",");
                preUpdateChild(t, e);
                treeBaseDao.updateParentIds(e);
            }
        }
    }

    /**
     * 预留接口，用户更新子节前调用
     * @param childEntity
     */
    protected void preUpdateChild(T entity, T childEntity) {

    }

}
