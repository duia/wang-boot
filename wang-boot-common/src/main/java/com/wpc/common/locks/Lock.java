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

/**
 * A value object representing a named lock, with a globally unique value and an expiry.
 * @author 王鹏程
 *
 */
public class Lock implements Comparable<Lock> {

	/**
	 * The name of the lock.
	 */
	private final String name;
	/**
	 * The value of the lock (globally unique, or at least different for locks with the
	 * same name and different expiry).
	 */
	private final String value;
	/**
	 * The expiry of the lock expressed as a point in time.
	 */
	private final Date expires;

	public Lock(String name, String value, Date expires) {
		this.name = name;
		this.value = value;
		this.expires = expires;
	}

	public String getName() {
		return name;
	}

	public String getValue() {
		return value;
	}

	public Date getExpires() {
		return expires;
	}

	public boolean isExpired() {
		return expires.before(new Date());
	}

	@Override
	public int compareTo(Lock other) {
		return expires.compareTo(other.expires);
	}

	@Override
	public String toString() {
		return "Lock{" +
				"name='" + name + '\'' +
				", value='" + value + '\'' +
				", expires=" + expires +
				'}';
	}
}