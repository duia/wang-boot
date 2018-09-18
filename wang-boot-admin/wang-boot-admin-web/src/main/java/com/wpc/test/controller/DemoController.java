package com.wpc.test.controller;

import com.wpc.test.dao.DemoDao;
import com.wpc.test.entity.Demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/test")
public class DemoController {

    @Autowired
    private DemoDao demoDao;

    @RequestMapping("/save")
    public void save() {
        for (long i = 0; i < 100; i++) {
            Demo demo = new Demo();
            demo.setId(i+"");
            demo.setName("demo" + i);
            demoDao.save(demo, i);
        }
    }

}
