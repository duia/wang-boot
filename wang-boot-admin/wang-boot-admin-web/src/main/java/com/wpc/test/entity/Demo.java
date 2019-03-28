package com.wpc.test.entity;

import com.wpc.common.mongo.bean.Entity;
import com.wpc.common.mongo.dao.shardcollection.ShardingKey;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "demo")
public class Demo extends Entity {

    private String name;
    @ShardingKey(shardingCount = 8, value = "index", shardingColumn = "index")
    private int index;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getIndex() {
        return index;
    }

    public void setIndex(int index) {
        this.index = index;
    }
}
