/*
 * Copyright(c) 2016 cncounter.com All rights reserved.
 * distributed with this file and available online at
 * http://www.cncounter.com/
 */
package com.wpc.sys.dao;

import com.wpc.base.dao.BaseDao;
import com.wpc.sys.model.User;

import java.util.List;

public interface UserDao extends BaseDao<User> {

    User getUserByLoginName(String loginName);

    List<User> queryUserByRole(long roleId);

}