package com.wpc.system.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.wpc.base.service.impl.BaseServiceImpl;
import com.wpc.system.DataScope;
import com.wpc.system.dao.UserMapper;
import com.wpc.system.model.User;
import com.wpc.system.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 管理员表 服务实现类
 * </p>
 *
 * @author 王鹏程
 * @since 2018-02-22
 */
@Service
public class UserServiceImpl extends BaseServiceImpl<User> implements IUserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public int setStatus(Long userId, int status) {
        return this.userMapper.setStatus(userId, status);
    }

    @Override
    public int changePwd(Long userId, String pwd) {
        return this.userMapper.changePwd(userId, pwd);
    }

    @Override
    public List<Map<String, Object>> selectUsers(DataScope dataScope, String name, String beginTime, String endTime, Integer deptid) {
        return this.userMapper.selectUsers(dataScope, name, beginTime, endTime, deptid);
    }

    @Override
    public int setRoles(Long userId, String roleIds) {
        return this.userMapper.setRoles(userId, roleIds);
    }

    @Override
    public User getByAccount(String account) {
        return this.userMapper.getByAccount(account);
    }

}
