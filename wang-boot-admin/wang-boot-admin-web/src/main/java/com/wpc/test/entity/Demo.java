package com.wpc.test.entity;

import com.wpc.base.entity.mongo.AbstractBaseMongoEntity;

public class Demo extends AbstractBaseMongoEntity {

    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String getTableName() {
        return "wpc_demo";
    }

    @Override
    public int setSubmeterNum() {
        return 10;
    }
}
