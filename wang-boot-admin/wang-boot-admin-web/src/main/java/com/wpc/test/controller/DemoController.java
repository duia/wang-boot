package com.wpc.test.controller;

import com.github.pagehelper.PageInfo;
import com.rabbitmq.client.Channel;
import com.wpc.base.entity.datatables.DataTablesRequest;
import com.wpc.base.entity.datatables.DataTablesResponse;
import com.wpc.common.bean.ResponseResult;
import com.wpc.common.limit.lock.Callback;
import com.wpc.common.limit.lock.RedisDistributedLockTemplate;
import com.wpc.system.model.User;
import com.wpc.system.service.IUserService;
import com.wpc.test.dao.DemoDao;
import com.wpc.test.entity.Demo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.*;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.rabbit.support.CorrelationData;
import org.springframework.amqp.support.AmqpHeaders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageHeaders;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.locks.ReentrantLock;

@Controller
@RequestMapping("/test")
public class DemoController {

    private Logger logger = LoggerFactory.getLogger(DemoController.class);

    @Autowired
    private DemoDao demoDao;
    @Autowired
    private IUserService userService;

    @Autowired
    private RabbitTemplate rabbitTemplate;

    @Autowired
    private RedisDistributedLockTemplate lockTemplate;

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

    private static SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");

    @GetMapping("send")
    @ResponseBody
    public ResponseResult send() throws Exception {
        Map<String, Object> properties = new HashMap<>();
        properties.put("number", "12345");
        properties.put("send_time", simpleDateFormat.format(new Date()));
        MessageHeaders mhs = new MessageHeaders(properties);
        Message<Object> msg = MessageBuilder.createMessage("Hello RabbitMQ For Spring Boot!", mhs);
//        "certificate-exam-direct", "certificate-exam-result-key"
        rabbitTemplate.convertAndSend("a-test-exchange", "a-test-key", msg);
        return ResponseResult.success();
    }

    @RabbitListener(bindings = @QueueBinding(
            value = @Queue(value = "a-test-queue",
                    durable="true"),
            exchange = @Exchange(value = "a-test-exchange",
                    durable="true",
                    type= "direct",
                    ignoreDeclarationExceptions = "true"),
            key = "a-test-key"
        )
    )
    @RabbitHandler
    public void onMessage(Message message, Channel channel) throws Exception {
        logger.info("--------------------------------------");
        logger.info("消费端Payload: " + message.getPayload());
        Long deliveryTag = (Long)message.getHeaders().get(AmqpHeaders.DELIVERY_TAG);
        //手工ACK
        channel.basicAck(deliveryTag, false);
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
