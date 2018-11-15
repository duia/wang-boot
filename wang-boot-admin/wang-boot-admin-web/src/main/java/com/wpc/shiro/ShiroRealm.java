package com.wpc.shiro;

import com.wpc.common.Global;
import com.wpc.SessionUtil;
import com.wpc.shiro.session.SessionDAO;
import com.wpc.system.model.Role;
import com.wpc.system.model.User;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.PrincipalCollection;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.Serializable;
import java.util.*;

public class ShiroRealm extends AuthorizingRealm {

    private static final Logger logger = LoggerFactory.getLogger(ShiroRealm.class);

    private static final String OR_OPERATOR = " or ";
    private static final String AND_OPERATOR = " and ";
    private static final String NOT_OPERATOR = "not ";

    @Autowired
    private SessionDAO sessionDAO;
    @Autowired
    private ShiroFactory shiroFactory;

    /*
     * 认证回调函数,登录时调用. 获取认证信息
     */
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authcToken) throws AuthenticationException {
        UsernamePasswordToken token = (UsernamePasswordToken) authcToken;

        int activeSessionSize = sessionDAO.getActiveSessions(false).size();
        if (logger.isDebugEnabled()){
            logger.debug("login submit, active session size: {}, username: {}", activeSessionSize, token.getUsername());
        }
        User user = shiroFactory.user(token.getUsername());
        Principal principal = shiroFactory.shiroUser(user);
        SimpleAuthenticationInfo info = shiroFactory.buildAuthenticationInfo(principal, user, super.getName());
        return info;
    }

    /*
     * 授权
     */
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
        // 根据用户配置用户与权限
        Principal principal = (Principal) getAvailablePrincipal(principals);
        // 获取当前已登录的用户
        if (!Global.TRUE.equals(Global.getConfig("user.multiAccountLogin"))){
            Collection<Session> sessions = sessionDAO.getActiveSessions(true, principal, SessionUtil.getSession());
            if (sessions.size() > 0){
                // 如果是登录进来的，则踢出已在线用户
                if (SessionUtil.getSubject().isAuthenticated()){//UserUtils.getSubject().isRemembered() 记住我进来的
                    for (Session session : sessions){
                        sessionDAO.delete(session);
                    }
                }
                // 记住我进来的，并且当前用户已登录，则退出当前用户提示信息。
                else{
                    SessionUtil.getSubject().logout();
                    throw new AuthenticationException("msg: 账号已在其它地方登录，请重新登录。");
                }
            }
        }

        // 添加用户权限
        SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();

        info.addRoles(principal.getRoles());
        info.addStringPermissions(principal.getPermissions());

        // 更新登录IP和时间
//        SessionUtil.updateUserLoginInfo(user.getId());
        // 记录登录日志
//        LogUtils.saveLog(Servlets.getRequest(), "系统登录");

        return info;
    }

    /**
     * 获取权限授权信息，如果缓存中存在，则直接从缓存中获取，否则就重新获取， 登录成功后调用
     */
    @Override
    protected AuthorizationInfo getAuthorizationInfo(PrincipalCollection principals) {
        if (principals == null) {
            return null;
        }
        Principal principal = (Principal) getAvailablePrincipal(principals);

        AuthorizationInfo info = null;

        info = (AuthorizationInfo) SessionUtil.getAuthInfo(principal.getLoginName());

        if (info == null) {
            info = doGetAuthorizationInfo(principals);
            if (info != null) {
                SessionUtil.putAuthInfo(principal.getLoginName(), info);
            }
        }

        return info;
    }

    /**
     * 支持or and not 关键词  不支持and or混用
     * @param principals
     * @param permission
     * @return
     */
    public boolean isPermitted(PrincipalCollection principals, String permission) {
        if(permission.contains(OR_OPERATOR)) {
            String[] permissions = permission.split(OR_OPERATOR);
            for(String orPermission : permissions) {
                if(isPermittedWithNotOperator(principals, orPermission)) {
                    return true;
                }
            }
            return false;
        } else if(permission.contains(AND_OPERATOR)) {
            String[] permissions = permission.split(AND_OPERATOR);
            for(String orPermission : permissions) {
                if(!isPermittedWithNotOperator(principals, orPermission)) {
                    return false;
                }
            }
            return true;
        } else {
            return isPermittedWithNotOperator(principals, permission);
        }
    }

    private boolean isPermittedWithNotOperator(PrincipalCollection principals, String permission) {
        if(permission.startsWith(NOT_OPERATOR)) {
            return !super.isPermitted(principals, permission.substring(NOT_OPERATOR.length()));
        } else {
            return super.isPermitted(principals, permission);
        }
    }

    /**
     * 授权用户信息
     */
    public static class Principal implements Serializable {

        private static final long serialVersionUID = 1L;

        private Long id; // 编号
        private String loginName; // 登录名
        private String name; // 姓名
        private Long deptId;      // 部门id
        private String deptName;        // 部门名称
        //角色集
        private List<Long> roleIds;
        private List<String> roleNames; // 角色名称集

        //角色码
        Set<String> roles;
        //菜单权限值
        Set<String> permissions;

        public Principal(User user) {
            this.id = user.getId();
            this.loginName = user.getAccount();
            this.name = user.getName();
            this.deptId = user.getDeptid();
        }

        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public String getLoginName() {
            return loginName;
        }

        public void setLoginName(String loginName) {
            this.loginName = loginName;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public Long getDeptId() {
            return deptId;
        }

        public void setDeptId(Long deptId) {
            this.deptId = deptId;
        }

        public String getDeptName() {
            return deptName;
        }

        public void setDeptName(String deptName) {
            this.deptName = deptName;
        }

        public List<Long> getRoleIds() {
            return roleIds;
        }

        public void setRoleIds(List<Long> roleIds) {
            this.roleIds = roleIds;
        }

        public List<String> getRoleNames() {
            return roleNames;
        }

        public void setRoleNames(List<String> roleNames) {
            this.roleNames = roleNames;
        }

        public Set<String> getRoles() {
            return roles;
        }

        public void setRoles(Set<String> roles) {
            this.roles = roles;
        }

        public Set<String> getPermissions() {
            return permissions;
        }

        public void setPermissions(Set<String> permissions) {
            this.permissions = permissions;
        }

        @Override
        public String toString() {
            return id.toString();
        }

    }

}
