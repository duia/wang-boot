package com.wpc.shiro;

import com.wpc.SessionUtil;
import com.wpc.sys.model.User;
import com.wpc.shiro.ShiroRealm.Principal;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.util.ByteSource;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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
//
//    @Autowired
//    private PrivilegeService privilegeService;
//    @Autowired
//    private MenuService menuService;

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
        List<String> roles = new ArrayList<String>();
        List<String> permissions = new ArrayList<String>();
        permissions.add("user");
        if (user.isAdmin()) {//可以修改为别的验证是否是超级管理员
//            for (Role role : roleDao.queryAll()) {
//                roles.add(role.getRoleCode());
//            }
//            for (Permission permission : permissionDao.queryAll()) {
//                permissions.add(permission.getPermissionCode());
//            }
        } else {
            // 根据用户名查询出用户 判断用户信息的有效性 然获取用户的角色权限 授权
            /*for (Role role : roleDao.queryRoleByUserId(user.getId())) {
                roles.add(role.getRoleCode());
                for (Permission permission : permissionDao.queryPermissionByRoleId(role.getId())) {
                    permissions.add(permission.getPermissionCode());
                }
            }*/
        }
        principal.setRoleValues(roles);
        principal.setPermissionValues(permissions);
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
