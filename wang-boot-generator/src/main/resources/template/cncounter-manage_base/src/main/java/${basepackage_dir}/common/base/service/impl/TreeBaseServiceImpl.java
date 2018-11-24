package ${basepackage}.common.base.service.impl;

import ${basepackage}.common.base.dao.TreeBaseDao;
import ${basepackage}.common.base.entity.TreeEntity;
import ${basepackage}.common.utils.base.Reflections;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public abstract class TreeBaseServiceImpl<T extends TreeEntity<T>> extends BaseServiceImpl<T> {

    @Autowired
    protected TreeBaseDao<T> treeBaseDao;

    @Override
    public void save(T t) {
        
        @SuppressWarnings("unchecked")
        Class<T> tClass = Reflections.getClassGenricType(getClass(), 1);

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

        // 获取修改前的parentIds，用于更新子节点的parentIds
        String oldParentIds = t.getParentIds();

        // 设置新的父节点串
        t.setParentIds(t.getParent().getParentIds()+t.getParent().getId()+",");

        // 保存或更新实体
        super.save(t);

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
            if (e.getParentIds() != null && oldParentIds != null){
                e.setParentIds(e.getParentIds().replace(oldParentIds, t.getParentIds()));
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
