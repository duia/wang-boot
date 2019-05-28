package com.wpc.test.controller;

import com.github.pagehelper.PageInfo;
import com.wpc.base.entity.datatables.DataTablesRequest;
import com.wpc.base.entity.datatables.DataTablesResponse;
import com.wpc.system.model.User;
import com.wpc.system.service.IUserService;
import com.wpc.test.dao.DemoDao;
import com.wpc.test.entity.Demo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/test")
public class DemoController {

    private Logger logger = LoggerFactory.getLogger(DemoController.class);

    @Autowired
    private DemoDao demoDao;
    @Autowired
    private IUserService userService;

    @RequestMapping("/1")
    @ResponseBody
    public PageInfo<User> index(Integer sex) {
        User query = new User();
        query.setSex(sex);
        return userService.search(query, 1,10);
    }

    @RequestMapping("/2")
    @ResponseBody
    public DataTablesResponse<User> index2(Integer sex) {
        DataTablesRequest query = new DataTablesRequest();
        query.getCondition().put("sex", sex);
        query.setDraw(1);
        query.setStart(1);
        query.setLength(10);
        return userService.searchPage(query);
    }

    @RequestMapping("/save")
    public void save() {
        for (int i = 0; i < 100; i++) {
            Demo demo = new Demo();
            demo.setId(i+"");
            demo.setIndex(i);
            demo.setName("demo" + i);
            demoDao.insert(demo);
        }
    }

}
