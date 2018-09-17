/**
 * 项目名：duia-statistic-api <br>
 * 包名：com.duia.duifudao.tiku.base.dao.mongo <br>
 * 文件名：IBaseMongoDAO.java <br>
 * 版本信息：TODO <br>
 * 作者：赵增斌 E-mail：zhaozengbin@gmail.com QQ:4415599 weibo:http://weibo.com/zhaozengbin<br>
 * 日期：2017年5月12日-上午10:06:42<br>
 * Copyright (c) 2017 赵增斌-版权所有<br>
 */
package com.wpc.base.dao.mongo;

import com.mongodb.client.result.DeleteResult;
import com.wpc.base.entity.mongo.AbstractBaseMongoEntity;
import org.springframework.data.mongodb.core.index.Index;
import org.springframework.data.mongodb.core.index.IndexInfo;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.data.util.Pair;

import java.util.List;

/**
 * 类名称：IBaseMongoDAO <br>
 * 类描述：MongoDB基础DAO <br>
 * 创建人：赵增斌 <br>
 * 修改人：赵增斌 <br>
 * 修改时间：2017年5月12日 上午10:06:42 <br>
 * 修改备注：TODO <br>
 */
public interface IBaseMongoDAO<T extends AbstractBaseMongoEntity> {

    List<T> find(Query query);

    List<T> find(Query query, String collectionName);

    T findOne(Query query);

    T findOne(Query query, String collectionName);

    void update(Query query, Update update);

    void update(List<Pair<Query, Update>> updates);

    void update(Query query, Update update, String collectionName);

    void update(List<Pair<Query, Update>> updates, String collectionName);

    void upsert(Query query, Update update);

    void upsert(Query query, Update update, String collectionName);

    T insert(T entity);

    void insert(List<T> list);

    T insert(T entity, String collectionName);

    void insert(List<T> list, String collectionName);

    T save(T entity);

    T save(T entity, String collectionName);

    T findById(String id);

    T findById(String id, String collectionName);

    long count(Query query);

    long count(Query query, String collectionName);

    DeleteResult remove(Query query, String collectionName);

    List<IndexInfo> getIndex(String collectionName);

    boolean createIndex(List<Index> indexList, String collectionName);

}
