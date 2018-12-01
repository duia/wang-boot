package com.wpc.dao;

import com.wpc.entity.Title;
import com.wpc.mongo.aop.handler.DateDecisionHandler;
import com.wpc.mongo.aop.handler.DefaultDecisionHandler;
import com.wpc.mongo.dao.multimongo.MultiMongo;
import com.wpc.mongo.dao.shardcollection.AbstractShardEntityDao;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;

/**
 * Created by 王鹏程 on 2018/11/19 0019.
 */
@Component
public class TitleDao extends AbstractShardEntityDao<Title> {

//    @MultiMongo(strategy = DefaultDecisionHandler.DEFAULT, specify = "mongoTemplate2")
    public void insertTitle(Title title) {
        insert(title);
    }

    @MultiMongo(strategy = DefaultDecisionHandler.DEFAULT, specify = "mongoMain")
    public List<Title> findTitles(Integer status) {
        Criteria criteria = Criteria.where("userId").is(23);
        Query query = Query.query(criteria);
        return find(query, Title.class);
    }

    //一般插入不需要指定分库规则，默认插入最新库，这里为了生成测试数据，顺便测试一下这个功能
//    @MultiMongo(strategy = DefaultDecisionHandler.DEFAULT)
//    public String insertUserWhitShard(Title title) {
//        return insert(title);
//    }

    @MultiMongo(strategy = DateDecisionHandler.DATE_ARRANGED, paramLocation = 0)
    public List<Title> findUsersWithDate(Date date, Integer status) {
        Criteria criteria = Criteria.where("sta").is(1);
        Query query = Query.query(criteria);
        return find(query);
    }
}
