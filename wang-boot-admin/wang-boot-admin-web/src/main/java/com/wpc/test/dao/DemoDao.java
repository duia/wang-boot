package com.wpc.test.dao;

import com.wpc.common.mongo.dao.shardcollection.AbstractShardEntityDao;
import com.wpc.test.entity.Demo;
import org.springframework.stereotype.Component;

@Component
public class DemoDao extends AbstractShardEntityDao<Demo> {
}
