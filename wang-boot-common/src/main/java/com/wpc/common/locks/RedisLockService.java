/*
 * Copyright 2013-2014 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.wpc.common.locks;

import java.util.Date;
import java.util.LinkedHashSet;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

/**
 * @author 王鹏程
 *
 */
@Service
public class RedisLockService implements LockService {

	private static final String DEFAULT_LOCK_PREFIX = "spring.lock.";

	private String prefix = DEFAULT_LOCK_PREFIX;

	private long expiry = 30000; // 30 seconds

	@Autowired
	private RedisTemplate<String, String> redisTemplate;

	/**
	 * The prefix for all lock keys.
	 * @param prefix the prefix to set for all lock keys
	 */
	public void setPrefix(String prefix) {
		if (!prefix.endsWith(".")) {
			prefix = prefix + ".";
		}
		this.prefix = prefix;
	}

	public void setExpiry(long expiry) {
		this.expiry = expiry;
	}

	@Override
	public Iterable<Lock> findAll() {
		Set<String> keys = redisTemplate.keys(prefix + "*");
		Set<Lock> locks = new LinkedHashSet<Lock>();
		for (String key : keys) {
			Date expires = new Date(System.currentTimeMillis() + redisTemplate.getExpire(key, TimeUnit.MILLISECONDS));
			locks.add(new Lock(nameForKey(key), redisTemplate.opsForValue().get(key), expires));
		}
		return locks;
	}

	@Override
	public Lock create(String name) {
		String stored = getValue(name);
		if (stored != null) {
			throw new LockExistsException();
		}
		String value = UUID.randomUUID().toString();
		String key = keyForName(name);
		if (!redisTemplate.opsForValue().setIfAbsent(key, value)) {
			throw new LockExistsException();
		}
		redisTemplate.expire(key, expiry, TimeUnit.MILLISECONDS);
		Date expires = new Date(System.currentTimeMillis() + expiry);
		return new Lock(name, value, expires);
	}

	@Override
	public boolean release(String name, String value) {
		String stored = getValue(name);
		if (stored != null && value.equals(stored)) {
			String key = keyForName(name);
			redisTemplate.delete(key);
			return true;
		}
		if (stored != null) {
			throw new LockNotHeldException();
		}
		return false;
	}

	@Override
	public Lock refresh(String name, String value) {
		String key = keyForName(name);
		String stored = getValue(name);
		if (stored != null && value.equals(stored)) {
			Date expires = new Date(System.currentTimeMillis() + expiry);
			redisTemplate.expire(key, expiry, TimeUnit.MILLISECONDS);
			return new Lock(name, value, expires);
		}
		throw new LockNotHeldException();
	}

	private String getValue(String name) {
		String key = keyForName(name);
		String stored = redisTemplate.opsForValue().get(key);
		return stored;
	}

	private String nameForKey(String key) {
		if (!key.startsWith(prefix)) {
			throw new IllegalStateException("Key (" + key + ") does not start with prefix (" + prefix + ")");
		}
		return key.substring(prefix.length());
	}

	private String keyForName(String name) {
		return prefix + name;
	}

}
