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

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;
import java.util.UUID;

import javax.sql.DataSource;

import org.springframework.dao.IncorrectResultSizeDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author 王鹏程
 *
 * 创建表：
 * CREATE TABLE LOCKS (NAME VARCHAR(256), VALUE VARCHAR(36), EXPIRES DATETIME);
 *
 */
public class JdbcLockService implements LockService {

	private final JdbcTemplate jdbcTemplate;

	private long expiry = 30000; // 30 seconds

	private RowMapper<Lock> rowMapper = new LockRowMapper();
	private String findAllQuery = "SELECT NAME,VALUE,EXPIRES FROM LOCKS";
	private String createQuery = "INSERT INTO LOCKS (NAME,VALUE,EXPIRES) VALUES (?,?,?)";
	private String deleteQuery = "DELETE FROM LOCKS WHERE NAME=? AND VALUE=?";
	private String refreshQuery = "UPDATE LOCKS SET EXPIRES=? WHERE NAME=? AND VALUE=?";
	private String findOneByNameQuery = "SELECT NAME,VALUE,EXPIRES FROM LOCKS WHERE NAME=?";

	public JdbcLockService(DataSource dataSource) {
		this.jdbcTemplate = new JdbcTemplate(dataSource);
	}

	public void setExpiry(long expiry) {
		this.expiry = expiry;
	}

	@Override
	public Iterable<Lock> findAll() {
		return jdbcTemplate.query(findAllQuery, rowMapper);
	}

	@Override
	@Transactional(isolation = Isolation.REPEATABLE_READ)
	public Lock create(String name) throws LockExistsException {
		Lock lock = getLock(name);
		if (lock != null) {
			if (lock.isExpired()) {
				jdbcTemplate.update(deleteQuery, lock.getName(), lock.getValue());
			}
			else {
				throw new LockExistsException();
			}
		}
		lock = new Lock(name, UUID.randomUUID().toString(), new Date(
				System.currentTimeMillis() + expiry));
		jdbcTemplate.update(createQuery, lock.getName(), lock.getValue(),
				lock.getExpires());
		return lock;
	}

	@Override
	@Transactional(isolation = Isolation.REPEATABLE_READ)
	public boolean release(String name, String value) throws LockNotHeldException {
		Lock lock = getLock(name);
		if (lock!=null) {
			if (!lock.getValue().equals(value)) {
				throw new LockNotHeldException();
			}
			if (lock.isExpired()) {
				throw new LockNotHeldException();
			}
		}
		int changes = jdbcTemplate.update(deleteQuery, lock.getName(), lock.getValue());
		return changes > 0;
	}

	@Override
	@Transactional(isolation = Isolation.REPEATABLE_READ)
	public Lock refresh(String name, String value) throws LockNotHeldException {
		Lock lock = getLock(name);
		if (lock!=null) {
			if (!lock.getValue().equals(value)) {
				throw new LockNotHeldException();
			}
			if (lock.isExpired()) {
				throw new LockNotHeldException();
			}
		}
		int changes = jdbcTemplate.update(refreshQuery, lock.getExpires(),
				lock.getName(), lock.getValue());
		if (changes > 0) {
			return lock;
		}
		throw new LockNotHeldException();
	}

	private Lock getLock(String name) {
		Lock lock = null;
		try {
			lock = jdbcTemplate.queryForObject(findOneByNameQuery, rowMapper, name);
		}
		catch (IncorrectResultSizeDataAccessException e) {
			// ignore
		}
		return lock;
	}

	private static class LockRowMapper implements RowMapper<Lock> {

		@Override
		public Lock mapRow(ResultSet rs, int rowNum) throws SQLException {
			return new Lock(rs.getString(1), rs.getString(2), rs.getTimestamp(3));
		}

	}

}
