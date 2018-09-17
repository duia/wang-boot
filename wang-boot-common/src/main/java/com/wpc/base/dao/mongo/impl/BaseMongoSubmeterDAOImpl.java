package com.wpc.base.dao.mongo.impl;

import com.mongodb.client.result.DeleteResult;
import com.wpc.base.dao.mongo.IBaseMongoSubmeterDAO;
import com.wpc.base.entity.mongo.AbstractBaseMongoEntity;
import org.springframework.data.mongodb.core.index.IndexInfo;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.data.util.Pair;
import org.springframework.util.ObjectUtils;

import java.util.List;

/**
 * 功能描述: 带分表策略
 * @Author: 王鹏程
 * @E-mail: wpcfree@qq.com @QQ: 376205421
 * @Blog: http://www.wpcfree.com
 * @Date: 2018-08-31 15:40:45
 */
public abstract class BaseMongoSubmeterDAOImpl<T extends AbstractBaseMongoEntity> extends BaseMongoDAOImpl<T> implements IBaseMongoSubmeterDAO<T> {

    @Override
    public List<T> find(Query query, Long subMeterId) {
        return super.find(query, getCollectionName(subMeterId));
    }

    @Override
    public T findOne(Query query, Long subMeterId) {
        return super.findOne(query, getCollectionName(subMeterId));
    }

    @Override
    public void update(Query query, Update update, Long subMeterId) {
        super.update(query, update, getCollectionName(subMeterId));
    }

    @Override
    public void update(List<Pair<Query, Update>> updates, Long subMeterId) {
        super.update(updates, getCollectionName(subMeterId));
    }

    @Override
    public void upsert(Query query, Update update, Long subMeterId) {
        super.upsert(query, update, getCollectionName(subMeterId));
    }

    @Override
    public T insert(T entity, Long subMeterId) {
        return super.insert(entity, getCollectionName(subMeterId));
    }

    @Override
    public void insert(List<T> list, Long subMeterId) {
        super.insert(list, getCollectionName(subMeterId));
    }

    @Override
    public T save(T entity, Long subMeterId) {
        return super.save(entity, getCollectionName(subMeterId));
    }

    @Override
    public T findById(String id, Long subMeterId) {
        return super.findById(id, getCollectionName(subMeterId));
    }

    @Override
    public DeleteResult remove(Query query, Long subMeterId) {
        return super.remove(query, getCollectionName(subMeterId));
    }

    @Override
    public long count(Query query, Long subMeterId) {
        return count(query, getCollectionName(subMeterId));
    }

    @Override
    public List<IndexInfo> getIndex(Long subMeterId) {
        return super.getIndex(getCollectionName(subMeterId));
    }

    @Override
    public boolean createIndex(List list, Long subMeterId) {
        return super.createIndex(list, getCollectionName(subMeterId));
    }

    /**
     * 功能描述: 获取mongodb分表表名
     * @param: subMeterId 根据配置的分表数取余
     * @return:
     * @Author: 王鹏程
     * @Date: 2018-08-31 15:38:40
     */
    private String getCollectionName(Long subMeterId) {

        long subMeterNumL = 0L;
        long subMeterIdL = 0L;
        String sourceTableName = null;
        try {
            AbstractBaseMongoEntity abstractBaseMongoEntity = getEntityClass().newInstance();
            subMeterNumL = abstractBaseMongoEntity.setSubmeterNum();
            sourceTableName = abstractBaseMongoEntity.getTableName();
        } catch (InstantiationException e) {
            throw new RuntimeException("newInstance失败 请在class里面增加无参构造");
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        }
        if (ObjectUtils.isEmpty(sourceTableName)) {
            throw new RuntimeException("表名为空");
        }
        if (subMeterNumL > 1) {
            if (!ObjectUtils.isEmpty(subMeterId)) {
                subMeterIdL = subMeterId % subMeterNumL;
            }
            return sourceTableName + "_" + subMeterIdL;
        }
        return sourceTableName;
    }

}
