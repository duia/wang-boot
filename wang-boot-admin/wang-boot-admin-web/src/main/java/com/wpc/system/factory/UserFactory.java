package com.wpc.system.factory;

import com.wpc.system.model.User;
import com.wpc.system.model.dto.UserDto;
import org.springframework.beans.BeanUtils;
import org.springframework.util.ObjectUtils;

/**
 * 用户创建工厂
 *
 * @author 王鹏程
 * @date 2017-05-05 22:43
 */
public class UserFactory {

    public static User createUser(UserDto userDto) {
        if (userDto == null) {
            return null;
        } else {
            User user = new User();
            BeanUtils.copyProperties(userDto, user);
            return user;
        }
    }

    public static User editUser(UserDto newUser, User oldUser) {
        if (newUser == null || oldUser == null) {
            return oldUser;
        } else {
            if (!ObjectUtils.isEmpty(newUser.getAvatar())) {
                oldUser.setAvatar(newUser.getAvatar());
            }
            if (!ObjectUtils.isEmpty(newUser.getName())) {
                oldUser.setName(newUser.getName());
            }
            if (!ObjectUtils.isEmpty(newUser.getBirthday())) {
                oldUser.setBirthday(newUser.getBirthday());
            }
            if (!ObjectUtils.isEmpty(newUser.getDeptid())) {
                oldUser.setDeptid(newUser.getDeptid());
            }
            if (!ObjectUtils.isEmpty(newUser.getSex())) {
                oldUser.setSex(newUser.getSex());
            }
            if (!ObjectUtils.isEmpty(newUser.getEmail())) {
                oldUser.setEmail(newUser.getEmail());
            }
            if (!ObjectUtils.isEmpty(newUser.getPhone())) {
                oldUser.setPhone(newUser.getPhone());
            }
            return oldUser;
        }
    }
}
