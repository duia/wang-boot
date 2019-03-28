package com.wpc.common.mongo.dao.multimongo;

import com.wpc.common.mongo.bean.Entity;
import com.wpc.common.mongo.config.holder.MongoTemplateHolder;
import com.wpc.common.mongo.dao.AbstractEntityDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;

/**
 * Created by 王鹏程 on 2018/11/15 0015.
 */
public abstract class AbstractMultiMongoEntityDao<T extends Entity> extends AbstractEntityDao<T> {

    @Autowired
    private MongoTemplateHolder templateHolder;

    @Override
    public MongoTemplate getMongoTemplate() {
        return templateHolder.getMongoTemplate();
    }

    public MongoTemplateHolder getTemplateHolder() {
        return templateHolder;
    }

    public void setTemplateHolder(MongoTemplateHolder templateHolder) {
        this.templateHolder = templateHolder;
    }
}
