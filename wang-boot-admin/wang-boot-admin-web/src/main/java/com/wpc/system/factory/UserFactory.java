/**
 * Copyright 2018-2020 stylefeng & fengshuonan (https://gitee.com/stylefeng)
 * <p>
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * <p>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.wpc.system.factory;

import com.wpc.system.model.User;
import com.wpc.system.transfer.UserDto;
import org.springframework.beans.BeanUtils;
import org.springframework.util.ObjectUtils;

/**
 * 用户创建工厂
 *
 * @author fengshuonan
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
