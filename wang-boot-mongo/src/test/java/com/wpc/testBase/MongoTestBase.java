package com.wpc.testBase;

import com.wpc.App;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * Created by 王鹏程 on 2018/11/19 0019.
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = {App.class})
public class MongoTestBase {
}
