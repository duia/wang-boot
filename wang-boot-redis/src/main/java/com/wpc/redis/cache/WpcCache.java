/**
 * 文件名：TiKuCache.java <br>
 * 版本信息：TODO <br>
 * 作者：王鹏程 E-mail：376205421@qq.com QQ:376205421
 * 日期：2017年3月27日-下午5:31:28<br>
 * Copyright (c) 2017 王鹏程-版权所有<br>
 *
 */
package com.wpc.redis.cache;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;

import java.io.Serializable;

/**
 *
 * 类名称：TiKuCache <br>
 * 类描述：题库缓存工具类 <br>
 * 创建人：王鹏程 <br>
 * 修改人：王鹏程 <br>
 * 修改时间：2017年3月27日 下午5:31:28 <br>
 * 修改备注：TODO <br>
 *
 */
@Component
public class WpcCache extends AbstractCache {

	private final RedisTemplate<String, Object> redisTemplate;

	@Autowired
	public WpcCache(RedisTemplate<String, Object> redisTemplate) {
		this.redisTemplate = redisTemplate;
	}

	/**
	 * 方法：getRedisTemplate <br>
	 * 描述：TODO <br>
	 *
	 * @return
	 */
	@Override
	protected RedisTemplate<String, Object> getRedisTemplate() {
		return redisTemplate;
	}

}
