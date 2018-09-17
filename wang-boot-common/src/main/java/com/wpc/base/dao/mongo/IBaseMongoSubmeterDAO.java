package com.wpc.base.dao.mongo;

import com.mongodb.client.result.DeleteResult;
import com.wpc.base.entity.mongo.AbstractBaseMongoEntity;
import org.springframework.data.mongodb.core.index.IndexInfo;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.data.util.Pair;

import java.util.List;

public interface IBaseMongoSubmeterDAO<T extends AbstractBaseMongoEntity> extends IBaseMongoDAO<T> {

    List<T> find(Query query, Long subMeterId);

    T findOne(Query query, Long subMeterId);

    void update(Query query, Update update, Long subMeterId);

    void update(List<Pair<Query, Update>> updates, Long subMeterId);

    void upsert(Query query, Update update, Long subMeterId);

    T insert(T entity, Long subMeterId);

    void insert(List<T> list, Long subMeterId);

    T save(T entity, Long subMeterId);

    T findById(String id, Long subMeterId);

    DeleteResult remove(Query query, Long subMeterId);

    long count(Query query, Long subMeterId);

    List<IndexInfo> getIndex(Long subMeterId);

    boolean createIndex(List list, Long subMeterId);

}
