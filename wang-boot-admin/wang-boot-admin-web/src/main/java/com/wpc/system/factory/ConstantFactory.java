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

import com.wpc.common.SpringContextHolder;
import com.wpc.constant.ManagerStatus;
import com.wpc.constant.MenuStatus;
import com.wpc.system.dao.*;
import com.wpc.system.model.*;
import org.apache.commons.lang3.StringUtils;
import org.springframework.context.annotation.DependsOn;
import org.springframework.stereotype.Component;
import tk.mybatis.mapper.entity.Example;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

/**
 * 常量的生产工厂
 *
 * @author fengshuonan
 * @date 2017年2月13日 下午10:55:21
 */
@Component
@DependsOn("springContextHolder")
public class ConstantFactory implements IConstantFactory {

    private RoleMapper roleMapper = SpringContextHolder.getBean(RoleMapper.class);
    private DeptMapper deptMapper = SpringContextHolder.getBean(DeptMapper.class);
    private DictMapper dictMapper = SpringContextHolder.getBean(DictMapper.class);
    private UserMapper userMapper = SpringContextHolder.getBean(UserMapper.class);
    private MenuMapper menuMapper = SpringContextHolder.getBean(MenuMapper.class);
    private NoticeMapper noticeMapper = SpringContextHolder.getBean(NoticeMapper.class);

    public static IConstantFactory me() {
        return SpringContextHolder.getBean("constantFactory");
    }

    /**
     * 根据用户id获取用户名称
     *
     * @author stylefeng
     * @Date 2017/5/9 23:41
     */
    @Override
    public String getUserNameById(Long userId) {
        User user = userMapper.selectByPrimaryKey(userId);
        if (user != null) {
            return user.getName();
        } else {
            return "--";
        }
    }

    /**
     * 根据用户id获取用户账号
     *
     * @author stylefeng
     * @date 2017年5月16日21:55:371
     */
    @Override
    public String getUserAccountById(Long userId) {
        User user = userMapper.selectByPrimaryKey(userId);
        if (user != null) {
            return user.getAccount();
        } else {
            return "--";
        }
    }

    /**
     * 通过角色ids获取角色名称
     */
    @Override
    public String getRoleName(String roleIds) {
        if (StringUtils.isEmpty(roleIds)) {
            return "";
        }
        String[] roles = roleIds.split(",");
        StringBuilder sb = new StringBuilder();
        for (String role : roles) {
            Role roleObj = roleMapper.selectByPrimaryKey(role);
            if (null != roleObj && StringUtils.isNotEmpty(roleObj.getName())) {
                sb.append(roleObj.getName()).append(",");
            }
        }
        return StringUtils.removeEnd(sb.toString(), ",");
    }

    /**
     * 通过角色id获取角色名称
     */
    @Override
    public String getSingleRoleName(Long roleId) {
        if (0 == roleId) {
            return "--";
        }
        Role roleObj = roleMapper.selectByPrimaryKey(roleId);
        if (null != roleObj && StringUtils.isNotEmpty(roleObj.getName())) {
            return roleObj.getName();
        }
        return "";
    }

    /**
     * 通过角色id获取角色英文名称
     */
    @Override
    public String getSingleRoleTip(Long roleId) {
        if (0 == roleId) {
            return "--";
        }
        Role roleObj = roleMapper.selectByPrimaryKey(roleId);
        if (null != roleObj && StringUtils.isNotEmpty(roleObj.getName())) {
            return roleObj.getTips();
        }
        return "";
    }

    /**
     * 获取部门名称
     */
    @Override
    public String getDeptName(Long deptId) {
        Dept dept = deptMapper.selectByPrimaryKey(deptId);
        if (null != dept && StringUtils.isNotEmpty(dept.getFullname())) {
            return dept.getFullname();
        }
        return "";
    }

    /**
     * 获取菜单的名称们(多个)
     */
    @Override
    public String getMenuNames(String menuIds) {
        String[] menus = menuIds.split(",");
        StringBuilder sb = new StringBuilder();
        for (String menu : menus) {
            Menu menuObj = menuMapper.selectByPrimaryKey(menu);
            if (null != menuObj && StringUtils.isNotEmpty(menuObj.getName())) {
                sb.append(menuObj.getName()).append(",");
            }
        }
        return StringUtils.removeEnd(sb.toString(), ",");
    }

    /**
     * 获取菜单名称
     */
    @Override
    public String getMenuName(Long menuId) {
        if (null == menuId || menuId.equals(0L)) {
            return "";
        } else {
            Menu menu = menuMapper.selectByPrimaryKey(menuId);
            if (menu == null) {
                return "";
            } else {
                return menu.getName();
            }
        }
    }

    /**
     * 获取菜单名称通过编号
     */
    @Override
    public String getMenuNameByCode(String code) {
        if (StringUtils.isEmpty(code)) {
            return "";
        } else {
            Menu param = new Menu();
            param.setCode(code);
            Menu menu = menuMapper.selectOne(param);
            if (menu == null) {
                return "";
            } else {
                return menu.getName();
            }
        }
    }

    /**
     * 获取字典名称
     */
    @Override
    public String getDictName(Long dictId) {
        if (null == dictId || dictId == 0) {
            return "";
        } else {
            Dict dict = dictMapper.selectByPrimaryKey(dictId);
            if (dict == null) {
                return "";
            } else {
                return dict.getName();
            }
        }
    }

    /**
     * 获取通知标题
     */
    @Override
    public String getNoticeTitle(Long dictId) {
        if (null == dictId || dictId == 0) {
            return "";
        } else {
            Notice notice = noticeMapper.selectByPrimaryKey(dictId);
            if (notice == null) {
                return "";
            } else {
                return notice.getTitle();
            }
        }
    }

    /**
     * 根据字典名称和字典中的值获取对应的名称
     */
    @Override
    public String getDictsByName(String name, Integer val) {
        Dict temp = new Dict();
        temp.setName(name);
        Dict dict = dictMapper.selectOne(temp);
        if (dict == null) {
            return "";
        } else {
            Example example = new Example(Dict.class);
            Example.Criteria criteria = example.createCriteria();
            criteria.andEqualTo("pid", dict.getId());
//            Wrapper<Dict> wrapper = new EntityWrapper<>();
//            wrapper = wrapper.eq("pid", dict.getId());
            List<Dict> dicts = dictMapper.selectByExample(example);
            for (Dict item : dicts) {
                if (item.getNum() != null && item.getNum().equals(val)) {
                    return item.getName();
                }
            }
            return "";
        }
    }

    /**
     * 获取性别名称
     */
    @Override
    public String getSexName(Integer sex) {
        return getDictsByName("性别", sex);
    }

    /**
     * 获取用户登录状态
     */
    @Override
    public String getStatusName(Integer status) {
        return ManagerStatus.valueOf(status);
    }

    /**
     * 获取菜单状态
     */
    @Override
    public String getMenuStatusName(Integer status) {
        return MenuStatus.valueOf(status);
    }

    /**
     * 查询字典
     */
    @Override
    public List<Dict> findInDict(Long id) {
        if (null == id) {
            return null;
        } else {
            Example example = new Example(Dict.class);
            Example.Criteria criteria = example.createCriteria();
            criteria.andEqualTo("pid", id);
//            EntityWrapper<Dict> wrapper = new EntityWrapper<>();
            List<Dict> dicts = dictMapper.selectByExample(example);
            if (dicts == null || dicts.size() == 0) {
                return null;
            } else {
                return dicts;
            }
        }
    }

    /**
     * 获取被缓存的对象(用户删除业务)
     */
    @Override
    public String getCacheObject(String para) {
        return "";//LogObjectHolder.me().get().toString();
    }

    /**
     * 获取子部门id
     */
    @Override
    public List<Long> getSubDeptId(Long deptid) {
        Example example = new Example(Dept.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andLike("pids", "%[" + deptid + "]%");
//        Wrapper<Dept> wrapper = new EntityWrapper<>();
//        wrapper = wrapper.like("pids", "%[" + deptid + "]%");
        List<Dept> depts = this.deptMapper.selectByExample(example);

        ArrayList<Long> deptids = new ArrayList<>();

        if (depts != null && depts.size() > 0) {
            for (Dept dept : depts) {
                deptids.add(dept.getId());
            }
        }

        return deptids;
    }

    /**
     * 获取所有父部门id
     */
    @Override
    public List<Long> getParentDeptIds(Long deptid) {
        Dept dept = deptMapper.selectByPrimaryKey(deptid);
        String pids = dept.getPids();
        String[] split = pids.split(",");
        ArrayList<Long> parentDeptIds = new ArrayList<>();
        for (String s : split) {
            parentDeptIds.add(Long.valueOf(StringUtils.removeEnd(StringUtils.removeStart(s, "["), "]")));
        }
        return parentDeptIds;
    }


}
