package com.wpc.test.controller;

import com.rabbitmq.client.Channel;
import com.wpc.common.bean.ResponseResult;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.*;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.AmqpHeaders;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageHeaders;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/test/rabbit")
public class RabbitDemoController {

    private Logger logger = LoggerFactory.getLogger(RabbitDemoController.class);

    @Autowired
    private RabbitTemplate rabbitTemplate;

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
        logger.info("-------------------------------------");
        logger.info("消费端Payload: " + message.getPayload());
        Long deliveryTag = (Long)message.getHeaders().get(AmqpHeaders.DELIVERY_TAG);
        //手工ACK
        channel.basicAck(deliveryTag, false);
    }

}
