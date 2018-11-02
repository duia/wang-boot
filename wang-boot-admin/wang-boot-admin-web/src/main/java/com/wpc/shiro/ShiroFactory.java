package com.wpc.shiro;

import com.wpc.SessionUtil;
import com.wpc.shiro.ShiroRealm.Principal;
import com.wpc.sys.entity.Menu;
import com.wpc.sys.entity.Role;
import com.wpc.sys.entity.User;
import com.wpc.sys.utils.UserUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.util.ByteSource;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
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
        List<Menu> list = UserUtils.getMenuList();
        for (Menu menu : list){
            if (StringUtils.isNotBlank(menu.getPermission())){
                // 添加基于Permission的权限信息
                permissions.addAll(Arrays.asList(StringUtils.split(menu.getPermission(), ",")));
            }
        }
        // 添加用户权限
        permissions.add("user");
        // 添加用户角色信息
        for (Role role : user.getRoleList()){
            roles.add(role.getEnname());
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
