package com.wpc;

import com.wpc.common.Global;
import com.wpc.common.SpringContextHolder;
import com.wpc.common.redis.utils.JedisUtils;
import com.wpc.shiro.ShiroRealm.Principal;
import com.wpc.system.dao.UserMapper;
import com.wpc.system.factory.ConstantFactory;
import com.wpc.system.model.User;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.UnavailableSecurityManagerException;
import org.apache.shiro.crypto.SecureRandomNumberGenerator;
import org.apache.shiro.crypto.hash.SimpleHash;
import org.apache.shiro.session.InvalidSessionException;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.Subject;

import java.util.List;

public class SessionUtil {

    public static final String USER_CACHE = "user_cache";
    public static final String USER_CACHE_ID_ = "user_cache_id_";
    public static final String USER_CACHE_LOGIN_NAME_ = "user_cache_login_name_";

    public static final String CACHE_AUTH_INFO = "cache_auth_info";

    public static final String HASH_ALGORITHM = "MD5";
    public static final int HASH_INTERATIONS = 1024;
    public static final int SALT_SIZE = 8;

    private static UserMapper userDao = SpringContextHolder.getBean(UserMapper.class);

    public static Session getSession(){
        try{
            Subject subject = SecurityUtils.getSubject();
            Session session = subject.getSession(false);
            if (session == null){
                session = subject.getSession();
            }
            if (session != null){
                return session;
            }
        }catch (InvalidSessionException e){

        }
        return null;
    }

    /**
     * 获取授权主要对象
     */
    public static Subject getSubject(){
        return SecurityUtils.getSubject();
    }

    /**
     * 获取当前登录者对象
     */
    public static Principal getPrincipal(){
        try{
            Subject subject = getSubject();
            Principal principal = (Principal)subject.getPrincipal();
            if (principal != null){
                return principal;
            }
//			subject.logout();
        }catch (UnavailableSecurityManagerException | InvalidSessionException e) {

        }
        return null;
    }

    public static Object getAuthInfo(String key) {
        return getAuthInfo(key, null);
    }

    public static Object getAuthInfo(String key, Object defaultValue) {
//        Object obj = JedisUtils.hashObjectGet(CACHE_AUTH_INFO, key);
        Object obj = getSession().getAttribute(key);
        return obj==null?defaultValue:obj;
    }

    public static void putAuthInfo(String key, Object value) {
//        JedisUtils.hashObjectSet(CACHE_AUTH_INFO, key, value);
        getSession().setAttribute(key, value);
    }

    public static void removeAuthInfo(String key) {
//        JedisUtils.mapObjectRemove(CACHE_AUTH_INFO, key);
        getSession().removeAttribute(key);
    }

    /**
     * 生成安全的密码，生成随机的16位salt并经过1024次 sha-1 hash
     */
    public static String entryptPassword(String plainPassword) {
        String plain = StringEscapeUtils.unescapeHtml4(plainPassword);
        String salt = new SecureRandomNumberGenerator().nextBytes(SALT_SIZE).toHex();
        String hash = new SimpleHash(HASH_ALGORITHM, plain, salt, HASH_INTERATIONS).toHex();
        return salt + hash;
    }

    /**
     * 验证密码
     * @param plainPassword 明文密码
     * @param password 密文密码
     * @return 验证成功返回true
     */
    public static boolean validatePassword(String plainPassword, String password) {
        String plain = StringEscapeUtils.unescapeHtml4(plainPassword);
        String salt = password.substring(0, SALT_SIZE * 2);
        String hashPassword = new SimpleHash(HASH_ALGORITHM, plain, salt, HASH_INTERATIONS).toHex();
        return password.equals(salt + hashPassword);
    }

    /**
     * 获取当前用户
     * @return 取不到返回 new User()
     */
    public static User getUser(){
        Principal principal = getPrincipal();
        if (principal!=null){
            User user = get(principal.getId());
            if (user != null){
                return user;
            }
        }
        // 如果没有登录，则返回实例化空的User对象。
        return null;
    }

    /**
     * 根据ID获取用户
     * @param id
     * @return 取不到返回null
     */
    public static User get(Long id){
        User user = (User) JedisUtils.hashObjectGet(USER_CACHE, USER_CACHE_ID_ + id);
        if (user ==  null){
            user = userDao.selectByPrimaryKey(id);
            if (user == null){
                return null;
            }
//            JedisUtils.hashObjectSet(USER_CACHE, USER_CACHE_ID_ + user.getId(), user);
//            JedisUtils.hashObjectSet(USER_CACHE, USER_CACHE_LOGIN_NAME_ + user.getLoginName(), user);
        }
        return user;
    }

    /**
     * 根据登录名获取用户
     * @param loginName
     * @return 取不到返回null
     */
    public static User getByLoginName(String loginName){
        User user = (User) JedisUtils.hashObjectGet(USER_CACHE, USER_CACHE_LOGIN_NAME_ + loginName);
        if (user == null){
            user = userDao.getByAccount(loginName);
            if (user == null){
                return null;
            }
//            JedisUtils.hashObjectSet(USER_CACHE, USER_CACHE_ID_ + user.getId(), user);
//            JedisUtils.hashObjectSet(USER_CACHE, USER_CACHE_LOGIN_NAME_ + user.getLoginName(), user);
        }
        return user;
    }

    /**
     * 清除指定用户缓存
     * @param user
     */
    public static void clearCache(User user){
//        JedisUtils.mapObjectRemove(USER_CACHE, USER_CACHE_ID_ + user.getId());
//        JedisUtils.mapObjectRemove(USER_CACHE, USER_CACHE_LOGIN_NAME_ + user.getLoginName());
    }

    public static void updateUserLoginInfo() {
//        User entity = new User();
//        entity.setId(id);
//        entity.setLoginDate(new Date());
//        entity.setLoginIp(IpUtils.getIpAddress(Servlets.getRequest()));
//        userDao.update(entity);
    }

    /**
     * 获取当前用户的部门数据范围的集合
     */
    public static List<Long> getDeptDataScope() {
        Long deptId = getPrincipal().getDeptId();
        List<Long> subDeptIds = ConstantFactory.me().getSubDeptId(deptId);
        subDeptIds.add(deptId);
        return subDeptIds;
    }

    /**
     * 判断当前用户是否是超级管理员
     */
    public static boolean isAdmin() {
        List<Long> roleList = getPrincipal().getRoleIds();
        for (Long id : roleList) {
            String singleRoleTip = ConstantFactory.me().getSingleRoleTip(id);
            if (singleRoleTip.equals(Global.ADMIN_NAME)) {
                return true;
            }
        }
        return false;
    }

    /**
     * 验证当前用户是否属于该角色？,使用时与lacksRole 搭配使用
     *
     * @param roleName 角色名
     * @return 属于该角色：true，否则false
     */
    public static boolean hasRole(String roleName) {
        return getSubject() != null && roleName != null
                && roleName.length() > 0 && getSubject().hasRole(roleName);
    }

    /**
     * 与hasRole标签逻辑相反，当用户不属于该角色时验证通过。
     *
     * @param roleName 角色名
     * @return 不属于该角色：true，否则false
     */
    public static boolean lacksRole(String roleName) {
        return !hasRole(roleName);
    }

    /**
     * 验证当前用户是否属于以下任意一个角色。
     *
     * @param roleNames 角色列表
     * @return 属于:true,否则false
     */
    public static boolean hasAnyRoles(String roleNames) {
        boolean hasAnyRole = false;
        Subject subject = getSubject();
        if (subject != null && roleNames != null && roleNames.length() > 0) {
            for (String role : roleNames.split(",")) {
                if (subject.hasRole(role.trim())) {
                    hasAnyRole = true;
                    break;
                }
            }
        }
        return hasAnyRole;
    }

    /**
     * 验证当前用户是否属于以下所有角色。
     *
     * @param roleNames 角色列表
     * @return 属于:true,否则false
     */
    public static boolean hasAllRoles(String roleNames) {
        boolean hasAllRole = true;
        Subject subject = getSubject();
        if (subject != null && roleNames != null && roleNames.length() > 0) {
            for (String role : roleNames.split(",")) {
                if (!subject.hasRole(role.trim())) {
                    hasAllRole = false;
                    break;
                }
            }
        }
        return hasAllRole;
    }

    /**
     * 验证当前用户是否拥有指定权限,使用时与lacksPermission 搭配使用
     *
     * @param permission 权限名
     * @return 拥有权限：true，否则false
     */
    public static boolean hasPermission(String permission) {
        return getSubject() != null && permission != null
                && permission.length() > 0
                && getSubject().isPermitted(permission);
    }

    /**
     * 与hasPermission标签逻辑相反，当前用户没有制定权限时，验证通过。
     *
     * @param permission 权限名
     * @return 拥有权限：true，否则false
     */
    public static boolean lacksPermission(String permission) {
        return !hasPermission(permission);
    }

    /**
     * 已认证通过的用户。不包含已记住的用户，这是与user标签的区别所在。与notAuthenticated搭配使用
     *
     * @return 通过身份验证：true，否则false
     */
    public static boolean isAuthenticated() {
        return getSubject() != null && getSubject().isAuthenticated();
    }

    /**
     * 未认证通过用户，与authenticated标签相对应。与guest标签的区别是，该标签包含已记住用户。。
     *
     * @return 没有通过身份验证：true，否则false
     */
    public static boolean notAuthenticated() {
        return !isAuthenticated();
    }

}
