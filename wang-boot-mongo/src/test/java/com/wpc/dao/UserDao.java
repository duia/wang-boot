package com.wpc.dao;

import com.wpc.mongo.aop.handler.DateDecisionHandler;
import com.wpc.entity.User;
import com.wpc.mongo.aop.handler.DefaultDecisionHandler;
import com.wpc.mongo.dao.multimongo.AbstractMultiMongoEntityDao;
import com.wpc.mongo.dao.multimongo.MultiMongo;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;

/**
 * Created by 王鹏程 on 2018/11/19 0019.
 */
@Component
public class UserDao extends AbstractMultiMongoEntityDao<User> {

    @MultiMongo(strategy = DefaultDecisionHandler.DEFAULT, specify = "mongoTemplate3")
    public void insertUser(User user) {
        insert(user);
    }

    @MultiMongo(strategy = DefaultDecisionHandler.DEFAULT, specify = "mongoMain")
    public List<User> findUsers(Integer status) {
        Criteria criteria = Criteria.where("sta").is(1);
        Query query = Query.query(criteria);
        return find(query);
    }

    //一般插入不需要指定分库规则，默认插入最新库，这里为了生成测试数据，顺便测试一下这个功能
    @MultiMongo(strategy = DateDecisionHandler.DATE_ARRANGED, paramLocation = 0)
    public String insertUserWhitDate(Date date, User user) {
        return insert(user);
    }

    @MultiMongo(strategy = DateDecisionHandler.DATE_ARRANGED, paramLocation = 0)
    public List<User> findUsersWithDate(Date date, Integer status) {
        Criteria criteria = Criteria.where("sta").is(1);
        Query query = Query.query(criteria);
        return find(query);
    }
}
