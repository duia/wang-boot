package com.wpc.shiro;

import com.wpc.SessionUtil;
import com.wpc.shiro.ShiroRealm.Principal;
import com.wpc.system.dao.MenuMapper;
import com.wpc.system.factory.ConstantFactory;
import com.wpc.system.model.User;
import org.apache.commons.lang3.StringUtils;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.util.ByteSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * 功能描述:
 * @Author: 王鹏程
 * @E-mail: wpcfree@qq.com @QQ: 376205421
 * @Blog: http://www.wpcfree.com
 * @Date: 2018-10-31 14:17:21
 */
@Service
public class ShiroFactory {
//    @Autowired
//    private RcUserMapper userMapper;
//    @Autowired
//    private RcRoleMapper roleMapper;
//    @Autowired
//    private RcDeptMapper deptMapper;
//    @Autowired
//    private RcUserRoleService userRoleService;
//    @Autowired
//    private RoleService roleService;
    @Autowired
    private MenuMapper menuMapper;

    public User user(String username) {
        User user = SessionUtil.getByLoginName(username);
        if (user == null) {
            throw new UnknownAccountException();//没找到帐号
        }
//        if(Global.NO.equals(user.getLoginFlag())) {
//            throw new LockedAccountException(); //帐号锁定
//        }
        return user;
    }

    public Principal shiroUser(User user) {
        ShiroRealm.Principal principal = new ShiroRealm.Principal(user);
        principal.setDeptName(ConstantFactory.me().getDeptName(user.getDeptid()));

        String[] roleArray = user.getRoleid().split(",");
        List<Long> roleIdList = new ArrayList<>();
        List<String> roleNameList = new ArrayList<>();
        for (String roleId : roleArray) {
            roleIdList.add(Long.parseLong(roleId));
            roleNameList.add(ConstantFactory.me().getSingleRoleName(Long.parseLong(roleId)));
        }
        principal.setRoleIds(roleIdList);
        principal.setRoleNames(roleNameList);

        Set<String> roleSet = new HashSet<>();
        Set<String> permissionSet = new HashSet<>();

        for (Long roleId : roleIdList) {
            List<String> permissions = menuMapper.getResUrlsByRoleId(roleId);
            if (permissions != null) {
                for (String permission : permissions) {
                    if (StringUtils.isNotEmpty(permission)) {
                        permissionSet.add(permission);
                    }
                }
            }
//            String roleName = shiroFactory.findRoleNameByRoleId(roleId);
//            roleSet.add(roleName);
        }

        principal.setRoles(roleSet);
        principal.setPermissions(permissionSet);
        return principal;
    }

    public SimpleAuthenticationInfo buildAuthenticationInfo(Principal principal, User user, String realmName) {
        return new SimpleAuthenticationInfo(
                principal,
                user.getPassword().substring(SessionUtil.SALT_SIZE * 2),
                ByteSource.Util.bytes(user.getPassword().substring(0, SessionUtil.SALT_SIZE * 2)),
                realmName);
    }
}
