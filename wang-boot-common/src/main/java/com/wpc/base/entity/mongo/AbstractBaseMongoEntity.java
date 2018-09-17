package com.wpc.base.entity.mongo;

import com.wpc.base.entity.BaseEntity;
import org.springframework.data.annotation.Id;

import java.io.Serializable;

/**
 * 功能描述: mongo对应的抽象父类
 * @Author: 王鹏程
 * @E-mail: wpcfree@qq.com @QQ: 376205421
 * @Blog: http://www.wpcfree.com
 * @Date: 2018-08-31 10:35:19
 */
public abstract class AbstractBaseMongoEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    protected String id;

    public AbstractBaseMongoEntity() {
    }

    public AbstractBaseMongoEntity(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    /**
     * 功能描述: 获取表名 可以自定义对象的表名
     * @Author: 王鹏程
     * @E-mail: wpcfree@qq.com @QQ: 376205421
     * @Blog: http://www.wpcfree.com
     * @Date: 2018-08-31 10:33:31
     */
    public abstract String getTableName();


    /**
     * 功能描述: 设置分表数量  一旦设置不可更改 请按照最大数值进行估算分表数
     * @Author: 王鹏程
     * @E-mail: wpcfree@qq.com @QQ: 376205421
     * @Blog: http://www.wpcfree.com
     * @Date: 2018-08-31 10:34:55
     */
    public abstract int setSubmeterNum();

}
