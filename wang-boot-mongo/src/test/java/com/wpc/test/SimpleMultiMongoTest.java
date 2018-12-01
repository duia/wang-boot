package com.wpc.test;

import com.wpc.dao.TitleDao;
import com.wpc.dao.UserDao;
import com.wpc.entity.Title;
import com.wpc.entity.User;
import com.wpc.testBase.MongoTestBase;
import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;
import java.util.List;

/**
 * Created by 王鹏程 on 2018/11/19 0019.
 */
public class SimpleMultiMongoTest extends MongoTestBase {
    @Autowired
    private UserDao userDao;
    @Autowired
    private TitleDao titleDao;

    @Test
    public void insertUserTest() {
        User user = new User();
        user.setCreateTime(new Date());
        user.setName("gaofei");
        userDao.insertUser(user);
        Assert.assertNotNull(user.getId());
    }

    @Test
    public void insertTitleTest() {
        Title title = new Title();
        title.setCreateTime(new Date());
        title.setTitle("1+1=？");
        title.setAnswer("A");
        title.setUserId(129L);
        titleDao.insertTitle(title);
        title = new Title();
        title.setCreateTime(new Date());
        title.setTitle("1+1=？");
        title.setAnswer("A");
        title.setUserId(128L);
        titleDao.insertTitle(title);
        Assert.assertNotNull(title.getId());
    }

    @Test
    public void findUsersTest() {
        List<User> users = userDao.findUsers(1);
        Assert.assertNotNull(users);
        users.forEach(System.out::println);
    }

    @Test
    public void findTitlesTest() {
        List<Title> users = titleDao.findTitles(1);
        Assert.assertNotNull(users);
        users.forEach(System.out::println);
    }

}
