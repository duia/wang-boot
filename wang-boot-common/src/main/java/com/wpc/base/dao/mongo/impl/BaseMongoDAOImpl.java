/**
 * 项目名：duia-statistic-api <br>
 * 包名：com.duia.duifudao.tiku.core.base.dao.mongo.impl <br>
 * 文件名：BaseMongoDAOImpl.java <br>
 * 版本信息：TODO <br>
 * 作者：赵增斌 E-mail：zhaozengbin@gmail.com QQ:4415599 weibo:http://weibo.com/zhaozengbin<br>
 * 日期：2017年5月12日-上午10:14:31<br>
 * Copyright (c) 2017 赵增斌-版权所有<br>
 */
package com.wpc.base.dao.mongo.impl;

import com.mongodb.client.result.DeleteResult;
import com.wpc.base.dao.mongo.IBaseMongoDAO;
import com.wpc.base.entity.mongo.AbstractBaseMongoEntity;
import com.wpc.common.utils.base.Reflections;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.BulkOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.index.Index;
import org.springframework.data.mongodb.core.index.IndexInfo;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.data.util.Pair;

import java.util.List;

/**
 * 功能描述: mongo DAO 基类
 * @Author: 王鹏程
 * @E-mail: wpcfree@qq.com @QQ: 376205421
 * @Blog: http://www.wpcfree.com
 * @Date: 2018-08-31 15:41:35
 */
public abstract class BaseMongoDAOImpl<T extends AbstractBaseMongoEntity> implements IBaseMongoDAO<T> {

    /**
     * spring mongodb 集成操作类
     */
    @Autowired
    protected MongoTemplate template;

    /**
     * 方法：find <br>
     * 描述：TODO <br>
     *
     * @param query
     * @return
     * @see IBaseMongoDAO#find(Query)
     */
    @Override
    public List<T> find(Query query) {
        return template.find(query, this.getEntityClass());
    }

    /**
     * 方法：find <br>
     * 描述：TODO <br>
     *
     * @param query
     * @param collectionName
     * @return
     * @see IBaseMongoDAO#find(Query,
     * String)
     */
    @Override
    public List<T> find(Query query, String collectionName) {
        return template.find(query, this.getEntityClass(), collectionName);
    }

    /**
     * 方法：findOne <br>
     * 描述：TODO <br>
     *
     * @param query
     * @return
     * @see IBaseMongoDAO#findOne(Query)
     */
    @Override
    public T findOne(Query query) {
        return template.findOne(query, this.getEntityClass());
    }

    /**
     * 方法：findOne <br>
     * 描述：TODO <br>
     *
     * @param query
     * @param collectionName
     * @return
     * @see IBaseMongoDAO#findOne(Query,
     * String)
     */
    @Override
    public T findOne(Query query, String collectionName) {
        return template.findOne(query, this.getEntityClass(), collectionName);
    }

    /**
     * 方法：update <br>
     * 描述：TODO <br>
     *
     * @param query
     * @param update
     * @see IBaseMongoDAO#update(Query,
     * Update)
     */
    @Override
    public void update(Query query, Update update) {
        template.updateMulti(query, update, this.getEntityClass());
    }

    /**
     * 方法：update <br>
     * 描述：TODO <br>
     *
     * @param updates
     * @see IBaseMongoDAO#update(Query,
     * Update)
     */
    @Override
    public void update(List<Pair<Query, Update>> updates) {
        BulkOperations ops = template.bulkOps(BulkOperations.BulkMode.UNORDERED,  this.getEntityClass());
        ops.updateMulti(updates);
        //循环插完以后批量执行提交一下ok！
        ops.execute();
    }

    /**
     * 方法：update <br>
     * 描述：TODO <br>
     *
     * @param query
     * @param update
     * @param collectionName
     * @see IBaseMongoDAO#update(Query,
     * Update, String)
     */
    @Override
    public void update(Query query, Update update, String collectionName) {
        template.updateMulti(query, update, this.getEntityClass(), collectionName);
    }

    /**
     * 方法：update <br>
     * 描述：TODO <br>
     *
     * @param updates
     * @see IBaseMongoDAO#update(Query,
     * Update)
     */
    @Override
    public void update(List<Pair<Query, Update>> updates, String collectionName) {
        BulkOperations ops = template.bulkOps(BulkOperations.BulkMode.UNORDERED,  this.getEntityClass(), collectionName);
        ops.updateMulti(updates);
        //循环插完以后批量执行提交一下ok！
        ops.execute();
    }

    @Override
    public void upsert(Query query, Update update) {
        template.upsert(query, update, this.getEntityClass());
    }

    @Override
    public void upsert(Query query, Update update, String collectionName) {
        template.upsert(query, update, this.getEntityClass(), collectionName);
    }

    /**
     * 方法：save <br>
     * 描述：TODO <br>
     *
     * @param entity
     * @return
     */
    @Override
    public T insert(T entity) {
        template.insert(entity);
        return entity;
    }

    /**
     * 方法：save <br>
     * 描述：TODO <br>
     *
     * @param list
     * @return
     */
    @Override
    public void insert(List<T> list) {
        template.insert(list);
    }

    /**
     * 方法：save <br>
     * 描述：TODO <br>
     *
     * @param entity
     * @param collectionName
     * @return
     * String)
     */
    @Override
    public T insert(T entity, String collectionName) {
        template.insert(entity, collectionName);
        return entity;
    }

    /**
     * 方法：save <br>
     * 描述：TODO <br>
     *
     * @param list
     * @param collectionName
     * @return
     * String)
     */
    @Override
    public void insert(List<T> list, String collectionName) {
        template.insert(list, collectionName);
    }

    /**
     * 方法：save <br>
     * 描述：TODO <br>
     *
     * @param entity
     * @return
     */
    @Override
    public T save(T entity) {
        template.save(entity);
        return entity;
    }

    /**
     * 方法：save <br>
     * 描述：TODO <br>
     *
     * @param entity
     * @param collectionName
     * @return
     */
    @Override
    public T save(T entity, String collectionName) {
        template.save(entity, collectionName);
        return entity;
    }

    /**
     * 方法：findById <br>
     * 描述：TODO <br>
     *
     * @param id
     * @return
     * @see IBaseMongoDAO#findById(String)
     */
    @Override
    public T findById(String id) {
        return template.findById(id, this.getEntityClass());
    }

    /**
     * 方法：findById <br>
     * 描述：TODO <br>
     *
     * @param id
     * @param collectionName
     * @return
     * @see IBaseMongoDAO#findById(String,
     * String)
     */
    @Override
    public T findById(String id, String collectionName) {
        return template.findById(id, this.getEntityClass(), collectionName);
    }

    @Override
    public DeleteResult remove(Query query, String collectionName) {
        return template.remove(query, this.getEntityClass(), collectionName);
    }

    /**
     * 方法：count <br>
     * 描述：TODO <br>
     *
     * @param query
     * @return
     * @see IBaseMongoDAO#count(Query)
     */
    @Override
    public long count(Query query) {
        return template.count(query, this.getEntityClass());
    }

    /**
     * 方法：count <br>
     * 描述：TODO <br>
     *
     * @param query
     * @param collectionName
     * @return
     * @see IBaseMongoDAO#count(Query,
     * String)
     */
    @Override
    public long count(Query query, String collectionName) {
        return template.count(query, this.getEntityClass(), collectionName);
    }


    @Override
    public List<IndexInfo> getIndex(String collectionName) {
        return template.indexOps(collectionName).getIndexInfo();
    }

    @Override
    public boolean createIndex(List<Index> indexList, String collectionName) {
        for (Index index : indexList) {
            template.indexOps(collectionName).ensureIndex(index);
        }
        return true;
    }

    /**
     * 方法：hashCode <br>
     * 描述：TODO <br>
     *
     * @return
     * @see Object#hashCode()
     */
    @Override
    public int hashCode() {
        // TODO Auto-generated method stub
        return super.hashCode();
    }

    /**
     * 方法：equals <br>
     * 描述：TODO <br>
     *
     * @param obj
     * @return
     * @see Object#equals(Object)
     */
    @Override
    public boolean equals(Object obj) {
        // TODO Auto-generated method stub
        return super.equals(obj);
    }

    /**
     * 方法：clone <br>
     * 描述：TODO <br>
     *
     * @return
     * @throws CloneNotSupportedException
     * @see Object#clone()
     */
    @Override
    protected Object clone() throws CloneNotSupportedException {
        // TODO Auto-generated method stub
        return super.clone();
    }

    /**
     * 方法：toString <br>
     * 描述：TODO <br>
     *
     * @return
     * @see Object#toString()
     */
    @Override
    public String toString() {
        // TODO Auto-generated method stub
        return super.toString();
    }

    /**
     * 方法：finalize <br>
     * 描述：TODO <br>
     *
     * @throws Throwable
     * @see Object#finalize()
     */
    @Override
    protected void finalize() throws Throwable {
        // TODO Auto-generated method stub
        super.finalize();
    }

    /**
     * 功能描述: 子类实现（此处通过反射获取子类）
     * @param: null
     * @return:
     * @Author: 王鹏程
     * @Date: 2018-08-20 17:10:47
     */
    protected Class<T> getEntityClass() {
        return Reflections.getClassGenricType(getClass());
    }

}
