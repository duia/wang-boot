package com.wpc.mongo.config.holder;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

import java.util.Map;

/**
 * Created by 王鹏程 on 2018/11/15 0015.
 */
@Component
public class MongoTemplateHolder extends AbstractMongoTemplateRoutingHolder {

    public MongoTemplateHolder(Map<String, MongoTemplate> mongoTemplates, MongoTemplate template) {
        super.setMongoTemplates(mongoTemplates);
        super.setDefaultMongoTempate(template);
    }

    public MongoTemplate getMongoTemplate() {
        return getMongoTemplateByKey(MongodbTemplateContextHolder.getMongoTemplateType());
    }
}
