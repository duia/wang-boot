package com.wpc.base.dao;

import com.wpc.base.entity.DataEntity;
import org.springframework.data.repository.NoRepositoryBean;
import tk.mybatis.mapper.common.Mapper;
import tk.mybatis.mapper.common.MySqlMapper;

/**
 * 功能描述: dao层接口基础类，封装了一些基本的方法
 * @Author: 王鹏程
 * @E-mail: wpcfree@qq.com @QQ: 376205421
 * @Blog: http://www.wpcfree.com
 * @Date:
 */
@NoRepositoryBean
public interface BaseMapper<T extends DataEntity<T>> extends Mapper<T>, MySqlMapper<T> {

}
