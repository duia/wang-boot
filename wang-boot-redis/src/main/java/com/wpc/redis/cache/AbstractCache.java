/**
 * 项目名：duia-web-admin <br>
 * 包名： com.duia.tiku.common.cache <br>
 * 文件名：AbstractCache.java <br>
 * 版本信息：TODO <br>
 * 作者：王鹏程 E-mail：wpcfree@qq.com QQ:376205421
 * 日期：2017年3月27日-下午2:25:16<br>
 * Copyright (c) 2017 王鹏程-版权所有<br>
 *
 */
package com.wpc.redis.cache;

import org.springframework.dao.DataAccessException;
import org.springframework.data.redis.connection.DataType;
import org.springframework.data.redis.connection.RedisConnection;
import org.springframework.data.redis.core.*;
import org.springframework.util.ObjectUtils;

import java.util.Collection;
import java.util.Date;
import java.util.Set;
import java.util.concurrent.TimeUnit;

/**
 *
 * 类名称：AbstractCache <br>
 * 类描述：缓存抽象类 <br>
 * 创建人：王鹏程 <br>
 * 修改人：王鹏程 <br>
 * 修改时间：2017年3月27日 下午2:25:16 <br>
 * 修改备注：TODO <br>
 *
 */
public abstract class AbstractCache<K, V> {

	/**
	 * 方法：ping <br>
	 * 描述：ping缓存服务器 <br>
	 * 作者：王鹏程 E-mail:wpcfree@qq.com QQ:376205421
	 * 日期： 2017年3月27日 下午2:45:39 <br>
	 *
	 * @return
	 */
	public boolean ping() {
		return getRedisTemplate().execute(new RedisCallback<Boolean>() {
			public Boolean doInRedis(RedisConnection connection) throws DataAccessException {
				String result = connection.ping();
				if (!ObjectUtils.isEmpty(result) && "PONG".equalsIgnoreCase(result)) {
					return true;
				}
				return false;
			}
		});
	}
	// *******************************************Keys*******************************************//

	public ValueOperations<K,V> getValueOperations() {
		return getRedisTemplate().opsForValue();
	}

	public ListOperations<K,V> getListOperations() {
		return getRedisTemplate().opsForList();
	}

	public SetOperations<K,V> getSetOperations() {
		return getRedisTemplate().opsForSet();
	}

	public ZSetOperations<K,V> getZSetOperations(){
		return getRedisTemplate().opsForZSet();
	}

	public HashOperations<K, Object, V> getHashOperations() {
		return getRedisTemplate().opsForHash();
	}

	/**
	 * 方法：rename <br>
	 * 描述： 更改key <br>
	 * 作者：王鹏程 E-mail:wpcfree@qq.com QQ:376205421
	 * 日期： 2017年3月27日 下午2:45:39 <br>
	 *
	 * @param oldkey
	 * @param newkey
	 * @return
	 */
	public void rename(K oldkey, K newkey) {
		getRedisTemplate().rename(oldkey, newkey);
	}

	/**
	 * 方法：renameIfAbsent <br>
	 * 描述： 更改key,仅当新key不存在时才执行 <br>
	 * 作者：王鹏程 E-mail:wpcfree@qq.com QQ:376205421
	 * 日期： 2017年3月27日 下午2:45:39 <br>
	 *
	 * @param oldkey
	 * @param newkey
	 * @return
	 */
	public boolean renameIfAbsent(K oldkey, K newkey) {
		return getRedisTemplate().renameIfAbsent(oldkey, newkey);
	}

	/**
	 * 方法：expire <br>
	 * 描述：设置key的过期时间，以分为单位 <br>
	 * 作者：王鹏程 E-mail:wpcfree@qq.com QQ:376205421
	 * 日期： 2017年3月27日 下午2:47:27 <br>
	 *
	 * @param key
	 * @param timeout
	 * @return
	 */
	public boolean expire(K key, long timeout) {
		return expire(key, timeout, TimeUnit.SECONDS);
	}

	/**
	 * 方法：expire <br>
	 * 描述：设置key的过期时间，自定义单位 <br>
	 * 作者：王鹏程 E-mail:wpcfree@qq.com QQ:376205421
	 * 日期： 2017年3月27日 下午2:47:27 <br>
	 *
	 * @param key
	 * @param seconds
	 * @return
	 */
	public boolean expire(K key, long seconds, TimeUnit unit) {
		return getRedisTemplate().expire(key, seconds, unit);
	}

	/**
	 * 方法：expireAt <br>
	 * 描述：设置key的过期时间,它是距历元（即格林威治标准时间 1970 年 1 月 1 日的 00:00:00，格里高利历）的偏移量 <br>
	 * 作者：王鹏程 E-mail:wpcfree@qq.com QQ:376205421
	 * 日期： 2017年3月27日 下午2:49:18 <br>
	 *
	 * @param key
	 * @param date
	 * @return
	 */
	public boolean expireAt(K key, Long date) {
		return expireAt(key, new Date(date));
	}

	/**
	 * 方法：expireAt <br>
	 * 描述：设置key的过期时间,它是距历元（即格林威治标准时间 1970 年 1 月 1 日的 00:00:00，格里高利历）的偏移量 <br>
	 * 作者：王鹏程 E-mail:wpcfree@qq.com QQ:376205421
	 * 日期： 2017年3月27日 下午2:49:18 <br>
	 *
	 * @param key
	 * @param date
	 * @return
	 */
	public boolean expireAt(K key, Date date) {
		return getRedisTemplate().expireAt(key, date);
	}


	/**
	 * 方法：ttl <br>
	 * 描述： 查询key的过期时间 单位分 <br>
	 * 作者：王鹏程 E-mail:wpcfree@qq.com QQ:376205421
	 * 日期： 2017年3月27日 下午2:49:47 <br>
	 *
	 * @param key
	 * @return
	 */
	public long getExpire(K key) {
		return getExpire(key, TimeUnit.SECONDS);
	}

	/**
	 * 方法：ttl <br>
	 * 描述： 查询key的过期时间 自定义时间单位 <br>
	 * 作者：王鹏程 E-mail:wpcfree@qq.com QQ:376205421
	 * 日期： 2017年3月27日 下午2:49:47 <br>
	 *
	 * @param key
	 * @return
	 */
	public long getExpire(K key, TimeUnit timeUnit) {
		return getRedisTemplate().getExpire(key, timeUnit);
	}

	/**
	 * 方法：persist <br>
	 * 描述：取消对key过期时间的设置 <br>
	 * 作者：王鹏程 E-mail:wpcfree@qq.com QQ:376205421
	 * 日期： 2017年3月27日 下午2:50:39 <br>
	 *
	 * @param key
	 * @return
	 */
	public boolean persist(K key) {
		return getRedisTemplate().persist(key);
	}

	/**
	 * 方法：del <br>
	 * 描述：删除keys对应的记录,可以是多个key <br>
	 * 作者：王鹏程 E-mail:wpcfree@qq.com QQ:376205421
	 * 日期： 2017年3月27日 下午2:51:22 <br>
	 *
	 * @param key
	 */
	protected void delete(K key) {
		getRedisTemplate().delete(key);
	}

	/**
	 * 方法：del <br>
	 * 描述：删除keys对应的记录,可以是多个key <br>
	 * 作者：王鹏程 E-mail:wpcfree@qq.com QQ:376205421
	 * 日期： 2017年3月27日 下午2:51:22 <br>
	 *
	 * @param keys
	 */
	public void delete(Collection<K> keys) {
		getRedisTemplate().delete(keys);
	}

	/**
	 * 方法：exists <br>
	 * 描述：判断key是否存在 <br>
	 * 作者：王鹏程 E-mail:wpcfree@qq.com QQ:376205421
	 * 日期： 2017年3月27日 下午3:16:22 <br>
	 *
	 * @param key
	 * @return
	 */
	public boolean hasKey(K key) {
		return getRedisTemplate().hasKey(key);
	}

	/**
	 * 方法：type <br>
	 * 描述：返回指定key存储的类型 <br>
	 * 作者：王鹏程 E-mail:wpcfree@qq.com QQ:376205421
	 * 日期： 2017年3月27日 下午3:23:52 <br>
	 *
	 *
	 * @param key
	 * @return String string|list|set|zset|hash
	 */
	public String type(K key) {
		DataType dataType = getRedisTemplate().type(key);
		if (ObjectUtils.isEmpty(dataType)) {
			return null;
		} else {
			return dataType.name();
		}

	}

	/**
	 * 方法：keys <br>
	 * 描述：查找所有匹配给定的模式的键 <br>
	 * 作者：王鹏程 E-mail:wpcfree@qq.com QQ:376205421
	 * 日期： 2017年3月27日 下午3:24:54 <br>
	 *
	 * @param pattern
	 *            key的表达式,*表示多个，？表示一个
	 */
	public Set<K> keys(K pattern) {
		return getRedisTemplate().keys(pattern);
	}

	//**************************ValueOperations****************************
	public void set(K key, V value) {
		getValueOperations().set(key, value);
	}

	public void set(K key, V value, long timeout) {
		getValueOperations().set(key, value, timeout, TimeUnit.SECONDS);
	}

	public V get(Object key) {
		return getValueOperations().get(key);
	}

	//**************************ListOperations*****************************
//	V	index(K key, long index) {}


	//**************************SetOperations******************************


	//**************************ZSetOperations*****************************


	//**************************HashOperations*****************************
	public Long delete(K key, Object... hashKeys) {
		return getHashOperations().delete(key, hashKeys);
	}

//	Map<HK,HV>	entries(K key)

	public V hGet(K key, Object hashKey) {
		return getHashOperations().get(key, hashKey);
	}

//	Boolean	hExists(K key, Object hashKey)

	public void hSet(K key, Object hashKey, V value) {
		getHashOperations().put(key, hashKey, value);
	}

//	void putAll(K key, Map<? extends HK,? extends HV> m)

//	Boolean	putIfAbsent(K key, HK hashKey, HV value)

//	List<HV> values(K key)

	/**
	 * 方法：getRedisTemplate <br>
	 * 描述：实现相应的redis数据源template <br>
	 * 作者：王鹏程 E-mail:wpcfree@qq.com QQ:376205421
	 * 日期： 2017年3月27日 下午2:30:43 <br>
	 *
	 * @return
	 */
	protected abstract RedisTemplate<K, V> getRedisTemplate();
}
