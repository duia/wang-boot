package com.wpc.test.controller;

import com.wpc.common.bean.ResponseResult;
import com.wpc.common.limit.lock.Callback;
import com.wpc.common.limit.lock.RedisDistributedLockTemplate;
import com.wpc.test.dao.DemoDao;
import com.wpc.test.entity.Demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.concurrent.locks.ReentrantLock;

@Controller
@RequestMapping("/test")
public class DemoController {

    @Autowired
    private DemoDao demoDao;

    @Autowired
    private RedisDistributedLockTemplate lockTemplate;

    @RequestMapping("/save")
    public void save() {
        for (long i = 0; i < 100; i++) {
            Demo demo = new Demo();
            demo.setId(i+"");
            demo.setName("demo" + i);
            demoDao.save(demo, i);
        }
    }

    @RequestMapping(value = "/lockAndLimit",method = RequestMethod.GET)
    @ResponseBody
    public ResponseResult test1(){

        lockTemplate.execute("订单流水号", 5000, new Callback() {
            @Override
            public Object onGetLock() throws InterruptedException {
                //TODO 获得锁后要做的事
                System.out.println("生成订单流水号");
                Thread.sleep(1000 * 60);
                System.out.println("生成订单流水号结束");
                return ResponseResult.success();
            }

            @Override
            public Object onTimeout() throws InterruptedException {
                //TODO 获得锁超时后要做的事
                System.out.println("生成订单流水号超时");
                return ResponseResult.error();
            }
        });
        return ResponseResult.success();
    }

    static final ReentrantLock lock = new ReentrantLock();

    public static class Test1 implements Runnable {

        @Override
        public void run() {
            System.out.println("#######线程名字"+Thread.currentThread().getName()+"已经在运行");
            try {
                lock.lock();
                System.out.println("线程名字"+Thread.currentThread().getName()+"获得锁");
            } catch (Exception e) {
                e.printStackTrace();
            } finally {
                lock.unlock();
            }
        }
    }

    public static void main(String[] args) {
        Thread[] threads = new Thread[10];
        for (int i = 0; i < 10; i++) {
            threads[i] = new Thread(new Test1());
        }
        for (int i = 0; i < 10; i++) {
            threads[i].start();
        }
    }

}
