/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50529
Source Host           : localhost:3306
Source Database       : wang-boot

Target Server Type    : MYSQL
Target Server Version : 50529
File Encoding         : 65001

Date: 2018-11-23 18:01:46
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `code_dbinfo`
-- ----------------------------
DROP TABLE IF EXISTS `code_dbinfo`;
CREATE TABLE `code_dbinfo` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL COMMENT '别名',
  `db_driver` varchar(100) NOT NULL COMMENT '数据库驱动',
  `db_url` varchar(200) NOT NULL COMMENT '数据库地址',
  `db_user_name` varchar(100) NOT NULL COMMENT '数据库账户',
  `db_password` varchar(100) NOT NULL COMMENT '连接密码',
  `db_type` varchar(10) DEFAULT NULL COMMENT '数据库类型',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='数据库链接信息';

-- ----------------------------
-- Records of code_dbinfo
-- ----------------------------

-- ----------------------------
-- Table structure for `sys_dept`
-- ----------------------------
DROP TABLE IF EXISTS `sys_dept`;
CREATE TABLE `sys_dept` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `simplename` varchar(45) DEFAULT NULL COMMENT '简称',
  `fullname` varchar(255) DEFAULT NULL COMMENT '全称',
  `version` int(11) DEFAULT NULL COMMENT '版本（乐观锁保留字段）',
  `parent_id` bigint(11) DEFAULT NULL COMMENT '父部门id',
  `parent_ids` varchar(255) DEFAULT NULL COMMENT '父级ids',
  `sort` int(11) DEFAULT NULL COMMENT '排序',
  `remarks` varchar(255) DEFAULT NULL COMMENT '提示',
  `create_time` datetime DEFAULT NULL,
  `create_by` bigint(20) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `update_by` bigint(20) DEFAULT NULL,
  `del_flag` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8 COMMENT='部门表';

-- ----------------------------
-- Records of sys_dept
-- ----------------------------
INSERT INTO `sys_dept` VALUES ('24', '总公司', '总公司', null, '0', '[0],', '1', '123', '2018-11-22 10:46:07', '1', null, null, null);
INSERT INTO `sys_dept` VALUES ('25', '开发部', '开发部', null, '24', '[0],[24],', '2', '', null, null, null, null, null);
INSERT INTO `sys_dept` VALUES ('26', '运营部', '运营部', null, '24', '[0],[24],', '3', '', null, null, null, null, null);
INSERT INTO `sys_dept` VALUES ('27', '战略部', '战略部', null, '24', '[0],[24],', '4', '', null, null, null, null, null);
INSERT INTO `sys_dept` VALUES ('28', '山西分公司', '山西对啊科技有限公司', null, '0', '[0],', '2', '技术部山西分部', null, null, '2018-11-22 20:15:42', null, null);
INSERT INTO `sys_dept` VALUES ('30', '技术部', '产品技术部门', null, '28', '[0],[28],', '1', '产品技术部门', '2018-11-22 20:14:11', null, null, null, null);
INSERT INTO `sys_dept` VALUES ('31', '开发部', '开发部门', null, '30', '[0],[28],[30],', '1', '', '2018-11-22 20:14:40', null, null, null, null);
INSERT INTO `sys_dept` VALUES ('32', '测试部', '测试部门', null, '30', '[0],[28],[30],', '2', '', '2018-11-22 20:14:59', null, null, null, null);

-- ----------------------------
-- Table structure for `sys_dict`
-- ----------------------------
DROP TABLE IF EXISTS `sys_dict`;
CREATE TABLE `sys_dict` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `parent_id` int(11) DEFAULT NULL COMMENT '父级字典',
  `parent_ids` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL COMMENT '名称',
  `code` varchar(255) DEFAULT NULL COMMENT '值',
  `sort` int(11) DEFAULT NULL COMMENT '排序',
  `create_time` datetime DEFAULT NULL,
  `create_by` bigint(20) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `update_by` bigint(20) DEFAULT NULL,
  `remarks` varchar(255) DEFAULT NULL,
  `del_flag` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='字典表';

-- ----------------------------
-- Records of sys_dict
-- ----------------------------
INSERT INTO `sys_dict` VALUES ('50', '0', null, '性别', 'sys_sex', '0', null, null, null, null, null, null);
INSERT INTO `sys_dict` VALUES ('51', '50', null, '男', '1', '1', null, null, null, null, null, null);
INSERT INTO `sys_dict` VALUES ('52', '50', null, '女', '2', '2', null, null, null, null, null, null);
INSERT INTO `sys_dict` VALUES ('53', '0', null, '状态', 'sys_state', '0', null, null, null, null, null, null);
INSERT INTO `sys_dict` VALUES ('54', '53', null, '启用', '1', '1', null, null, null, null, null, null);
INSERT INTO `sys_dict` VALUES ('55', '53', null, '禁用', '2', '2', null, null, null, null, null, null);
INSERT INTO `sys_dict` VALUES ('56', '0', null, '账号状态', 'account_state', '0', null, null, null, null, null, null);
INSERT INTO `sys_dict` VALUES ('57', '56', null, '启用', '1', '1', null, null, null, null, null, null);
INSERT INTO `sys_dict` VALUES ('58', '56', null, '冻结', '2', '2', null, null, null, null, null, null);
INSERT INTO `sys_dict` VALUES ('59', '56', null, '已删除', '3', '3', null, null, null, null, null, null);
INSERT INTO `sys_dict` VALUES ('62', '0', null, 'SKU', 'sku', '0', null, null, null, null, 'sku类型', null);
INSERT INTO `sys_dict` VALUES ('63', '62', null, '会计', '1', '1', null, null, null, null, null, null);
INSERT INTO `sys_dict` VALUES ('64', '62', null, '英语', '2', '2', null, null, null, null, null, null);

-- ----------------------------
-- Table structure for `sys_expense`
-- ----------------------------
DROP TABLE IF EXISTS `sys_expense`;
CREATE TABLE `sys_expense` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `money` decimal(20,2) DEFAULT NULL COMMENT '报销金额',
  `desc` varchar(255) DEFAULT '' COMMENT '描述',
  `createtime` datetime DEFAULT NULL COMMENT '创建时间',
  `state` int(11) DEFAULT NULL COMMENT '状态: 1.待提交  2:待审核   3.审核通过 4:驳回',
  `userid` int(11) DEFAULT NULL COMMENT '用户id',
  `processId` varchar(255) DEFAULT NULL COMMENT '流程定义id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='报销表';

-- ----------------------------
-- Records of sys_expense
-- ----------------------------

-- ----------------------------
-- Table structure for `sys_log`
-- ----------------------------
DROP TABLE IF EXISTS `sys_log`;
CREATE TABLE `sys_log` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `log_type` varchar(64) NOT NULL COMMENT '操作类型',
  `oper_describe` varchar(128) NOT NULL COMMENT '操作描述',
  `oper_name` varchar(255) NOT NULL COMMENT '操作名称',
  `oper_param` text NOT NULL COMMENT '操作参数',
  `oper_time` datetime NOT NULL COMMENT '操作时间',
  `message` longtext COMMENT '异常信息',
  `succeed` varchar(255) DEFAULT NULL,
  `user_id` bigint(11) NOT NULL COMMENT '操作人ID',
  `remote_addr` varchar(255) DEFAULT NULL COMMENT '操作用户的IP地址',
  `request_uri` varchar(255) DEFAULT NULL COMMENT '操作的URI',
  `method` varchar(255) DEFAULT NULL COMMENT '操作的方式',
  `user_agent` varchar(255) DEFAULT NULL COMMENT '操作用户代理信息',
  `create_time` datetime DEFAULT NULL,
  `create_by` bigint(20) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `update_by` bigint(20) DEFAULT NULL,
  `sort` int(11) DEFAULT NULL,
  `remarks` varchar(255) DEFAULT NULL,
  `del_flag` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_log
-- ----------------------------
INSERT INTO `sys_log` VALUES ('37', 'system', '', 'DataTablesResponse com.wpc.sys.controller.UserController.searchPage(ModelMap,HttpServletRequest,DataTablesRequest)', '[{\"draw\":1,\"start\":0,\"length\":10,\"search\":{\"value\":\"\",\"regex\":false},\"columns\":[{\"data\":null,\"name\":\"\",\"searchable\":true,\"orderable\":true,\"search\":{\"value\":\"\",\"regex\":false},\"regex\":null},{\"data\":\"username\",\"name\":\"\",\"searchable\":true,\"orderable\":true,\"search\":{\"value\":\"\",\"regex\":false},\"regex\":null},{\"data\":\"loginName\",\"name\":\"\",\"searchable\":true,\"orderable\":true,\"search\":{\"value\":\"\",\"regex\":false},\"regex\":null},{\"data\":\"email\",\"name\":\"\",\"searchable\":true,\"orderable\":true,\"search\":{\"value\":\"\",\"regex\":false},\"regex\":null},{\"data\":\"updateDate\",\"name\":\"\",\"searchable\":true,\"orderable\":true,\"search\":{\"value\":\"\",\"regex\":false},\"regex\":null},{\"data\":null,\"name\":\"\",\"searchable\":true,\"orderable\":true,\"search\":{\"value\":\"\",\"regex\":false},\"regex\":null}],\"condition\":null,\"order\":[{\"column\":0,\"dir\":\"asc\"}]}]', '2017-12-06 17:57:32', '', null, '1', '127.0.0.1', '/sys/user/searchPage', 'POST', 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0', null, null, null, null, null, null, null);
INSERT INTO `sys_log` VALUES ('38', 'system', '', 'DataTablesResponse com.wpc.sys.controller.UserController.searchPage(ModelMap,HttpServletRequest,DataTablesRequest)', '[{\"draw\":1,\"start\":0,\"length\":10,\"search\":{\"value\":\"\",\"regex\":false},\"columns\":[{\"data\":null,\"name\":\"\",\"searchable\":true,\"orderable\":true,\"search\":{\"value\":\"\",\"regex\":false},\"regex\":null},{\"data\":\"username\",\"name\":\"\",\"searchable\":true,\"orderable\":true,\"search\":{\"value\":\"\",\"regex\":false},\"regex\":null},{\"data\":\"loginName\",\"name\":\"\",\"searchable\":true,\"orderable\":true,\"search\":{\"value\":\"\",\"regex\":false},\"regex\":null},{\"data\":\"email\",\"name\":\"\",\"searchable\":true,\"orderable\":true,\"search\":{\"value\":\"\",\"regex\":false},\"regex\":null},{\"data\":\"updateDate\",\"name\":\"\",\"searchable\":true,\"orderable\":true,\"search\":{\"value\":\"\",\"regex\":false},\"regex\":null},{\"data\":null,\"name\":\"\",\"searchable\":true,\"orderable\":true,\"search\":{\"value\":\"\",\"regex\":false},\"regex\":null}],\"condition\":null,\"order\":[{\"column\":0,\"dir\":\"asc\"}]}]', '2017-12-06 19:09:20', '', null, '1', '127.0.0.1', '/sys/user/searchPage', 'POST', 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0', null, null, null, null, null, null, null);
INSERT INTO `sys_log` VALUES ('39', 'system', '', 'DataTablesResponse com.wpc.sys.controller.UserController.searchPage(ModelMap,HttpServletRequest,DataTablesRequest)', '[{\"draw\":1,\"start\":0,\"length\":10,\"search\":{\"value\":\"\",\"regex\":false},\"columns\":[{\"data\":null,\"name\":\"\",\"searchable\":true,\"orderable\":true,\"search\":{\"value\":\"\",\"regex\":false},\"regex\":null},{\"data\":\"username\",\"name\":\"\",\"searchable\":true,\"orderable\":true,\"search\":{\"value\":\"\",\"regex\":false},\"regex\":null},{\"data\":\"loginName\",\"name\":\"\",\"searchable\":true,\"orderable\":true,\"search\":{\"value\":\"\",\"regex\":false},\"regex\":null},{\"data\":\"email\",\"name\":\"\",\"searchable\":true,\"orderable\":true,\"search\":{\"value\":\"\",\"regex\":false},\"regex\":null},{\"data\":\"updateDate\",\"name\":\"\",\"searchable\":true,\"orderable\":true,\"search\":{\"value\":\"\",\"regex\":false},\"regex\":null},{\"data\":null,\"name\":\"\",\"searchable\":true,\"orderable\":true,\"search\":{\"value\":\"\",\"regex\":false},\"regex\":null}],\"condition\":null,\"order\":[{\"column\":0,\"dir\":\"asc\"}]}]', '2017-12-06 19:13:08', '', null, '1', '127.0.0.1', '/sys/user/searchPage', 'POST', 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0', null, null, null, null, null, null, null);
INSERT INTO `sys_log` VALUES ('40', 'system', '', 'DataTablesResponse com.wpc.sys.controller.UserController.searchPage(ModelMap,HttpServletRequest,DataTablesRequest)', '[{\"draw\":1,\"start\":0,\"length\":10,\"search\":{\"value\":\"\",\"regex\":false},\"columns\":[{\"data\":null,\"name\":\"\",\"searchable\":true,\"orderable\":true,\"search\":{\"value\":\"\",\"regex\":false},\"regex\":null},{\"data\":\"username\",\"name\":\"\",\"searchable\":true,\"orderable\":true,\"search\":{\"value\":\"\",\"regex\":false},\"regex\":null},{\"data\":\"loginName\",\"name\":\"\",\"searchable\":true,\"orderable\":true,\"search\":{\"value\":\"\",\"regex\":false},\"regex\":null},{\"data\":\"email\",\"name\":\"\",\"searchable\":true,\"orderable\":true,\"search\":{\"value\":\"\",\"regex\":false},\"regex\":null},{\"data\":\"updateDate\",\"name\":\"\",\"searchable\":true,\"orderable\":true,\"search\":{\"value\":\"\",\"regex\":false},\"regex\":null},{\"data\":null,\"name\":\"\",\"searchable\":true,\"orderable\":true,\"search\":{\"value\":\"\",\"regex\":false},\"regex\":null}],\"condition\":null,\"order\":[{\"column\":0,\"dir\":\"asc\"}]}]', '2017-12-28 19:00:46', '', null, '1', '127.0.0.1', '/sys/user/searchPage', 'POST', 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0', null, null, null, null, null, null, null);
INSERT INTO `sys_log` VALUES ('41', 'bussiness', '冻结用户', 'freeze', '[63]', '2018-11-23 16:57:29', '', '成功', '1', null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `sys_log` VALUES ('42', 'bussiness', '解除冻结用户', 'unfreeze', '[63]', '2018-11-23 17:00:12', '', '成功', '1', '127.0.0.1', '/mgr/list', 'POST', 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0', null, null, null, null, null, null, null);
INSERT INTO `sys_log` VALUES ('43', 'business', '解除冻结用户', 'public com.wpc.common.bean.ResponseResult com.wpc.system.controller.UserMgrController.unfreeze(java.lang.Long)', '[63]', '2018-11-23 17:24:47', '', '成功', '1', '127.0.0.1', '/mgr/list', 'POST', 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0', null, null, null, null, null, null, null);
INSERT INTO `sys_log` VALUES ('44', 'exception', '修改管理员', 'public com.wpc.common.bean.ResponseResult com.wpc.system.controller.UserMgrController.edit(com.wpc.system.transfer.UserDto) throws javax.naming.NoPermissionException', '[{\"id\":46,\"account\":\"manager\",\"password\":\"\",\"salt\":null,\"name\":\"经理\",\"birthday\":\"2017-12-04 00:00:00\",\"sex\":1,\"email\":\"\",\"phone\":\"\",\"roleid\":null,\"deptid\":24,\"status\":null,\"createtime\":null,\"version\":null,\"avatar\":\"\"}]', '2018-11-23 17:47:10', 'java.lang.ArithmeticException: / by zero\r\n	at com.wpc.system.controller.UserMgrController.edit(UserMgrController.java:189)\r\n	at com.wpc.system.controller.UserMgrControllerTTFastClassBySpringCGLIBTT829f7885.invoke(<generated>)\r\n	at org.springframework.cglib.proxy.MethodProxy.invoke(MethodProxy.java:204)\r\n	at org.springframework.aop.framework.CglibAopProxyTCglibMethodInvocation.invokeJoinpoint(CglibAopProxy.java:746)\r\n	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:163)\r\n	at org.springframework.aop.framework.adapter.MethodBeforeAdviceInterceptor.invoke(MethodBeforeAdviceInterceptor.java:56)\r\n	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:185)\r\n	at org.springframework.aop.aspectj.MethodInvocationProceedingJoinPoint.proceed(MethodInvocationProceedingJoinPoint.java:88)\r\n	at com.wpc.common.aop.InfoLogAspect.doAround(InfoLogAspect.java:28)\r\n	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n	at java.lang.reflect.Method.invoke(Method.java:498)\r\n	at org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethodWithGivenArgs(AbstractAspectJAdvice.java:644)\r\n	at org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethod(AbstractAspectJAdvice.java:633)\r\n	at org.springframework.aop.aspectj.AspectJAroundAdvice.invoke(AspectJAroundAdvice.java:70)\r\n	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:185)\r\n	at org.springframework.aop.framework.adapter.AfterReturningAdviceInterceptor.invoke(AfterReturningAdviceInterceptor.java:55)\r\n	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:185)\r\n	at org.springframework.aop.aspectj.AspectJAfterThrowingAdvice.invoke(AspectJAfterThrowingAdvice.java:62)\r\n	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:185)\r\n	at org.springframework.aop.framework.adapter.AfterReturningAdviceInterceptor.invoke(AfterReturningAdviceInterceptor.java:55)\r\n	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:174)\r\n	at org.springframework.aop.aspectj.AspectJAfterThrowingAdvice.invoke(AspectJAfterThrowingAdvice.java:62)\r\n	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:174)\r\n	at org.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:92)\r\n	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:185)\r\n	at org.springframework.aop.framework.CglibAopProxyTDynamicAdvisedInterceptor.intercept(CglibAopProxy.java:688)\r\n	at com.wpc.system.controller.UserMgrControllerTTEnhancerBySpringCGLIBTTd1eb041c.edit(<generated>)\r\n	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n	at java.lang.reflect.Method.invoke(Method.java:498)\r\n	at org.springframework.web.method.support.InvocableHandlerMethod.doInvoke(InvocableHandlerMethod.java:209)\r\n	at org.springframework.web.method.support.InvocableHandlerMethod.invokeForRequest(InvocableHandlerMethod.java:136)\r\n	at org.springframework.web.servlet.mvc.method.annotation.ServletInvocableHandlerMethod.invokeAndHandle(ServletInvocableHandlerMethod.java:102)\r\n	at org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.invokeHandlerMethod(RequestMappingHandlerAdapter.java:877)\r\n	at org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.handleInternal(RequestMappingHandlerAdapter.java:783)\r\n	at org.springframework.web.servlet.mvc.method.AbstractHandlerMethodAdapter.handle(AbstractHandlerMethodAdapter.java:87)\r\n	at org.springframework.web.servlet.DispatcherServlet.doDispatch(DispatcherServlet.java:991)\r\n	at org.springframework.web.servlet.DispatcherServlet.doService(DispatcherServlet.java:925)\r\n	at org.springframework.web.servlet.FrameworkServlet.processRequest(FrameworkServlet.java:974)\r\n	at org.springframework.web.servlet.FrameworkServlet.doPost(FrameworkServlet.java:877)\r\n	at javax.servlet.http.HttpServlet.service(HttpServlet.java:661)\r\n	at org.springframework.web.servlet.FrameworkServlet.service(FrameworkServlet.java:851)\r\n	at javax.servlet.http.HttpServlet.service(HttpServlet.java:742)\r\n	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:231)\r\n	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:166)\r\n	at org.springframework.web.servlet.resource.ResourceUrlEncodingFilter.doFilter(ResourceUrlEncodingFilter.java:60)\r\n	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:193)\r\n	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:166)\r\n	at org.apache.shiro.web.servlet.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:112)\r\n	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:193)\r\n	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:166)\r\n	at com.alibaba.druid.support.http.WebStatFilter.doFilter(WebStatFilter.java:123)\r\n	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:193)\r\n	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:166)\r\n	at org.apache.shiro.web.servlet.ProxiedFilterChain.doFilter(ProxiedFilterChain.java:61)\r\n	at org.apache.shiro.web.servlet.AdviceFilter.executeChain(AdviceFilter.java:108)\r\n	at org.apache.shiro.web.servlet.AdviceFilter.doFilterInternal(AdviceFilter.java:137)\r\n	at org.apache.shiro.web.servlet.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:125)\r\n	at org.apache.shiro.web.servlet.ProxiedFilterChain.doFilter(ProxiedFilterChain.java:66)\r\n	at org.apache.shiro.web.servlet.AbstractShiroFilter.executeChain(AbstractShiroFilter.java:449)\r\n	at org.apache.shiro.web.servlet.AbstractShiroFilterT1.call(AbstractShiroFilter.java:365)\r\n	at org.apache.shiro.subject.support.SubjectCallable.doCall(SubjectCallable.java:90)\r\n	at org.apache.shiro.subject.support.SubjectCallable.call(SubjectCallable.java:83)\r\n	at org.apache.shiro.subject.support.DelegatingSubject.execute(DelegatingSubject.java:383)\r\n	at org.apache.shiro.web.servlet.AbstractShiroFilter.doFilterInternal(AbstractShiroFilter.java:362)\r\n	at org.apache.shiro.web.servlet.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:125)\r\n	at org.springframework.web.filter.DelegatingFilterProxy.invokeDelegate(DelegatingFilterProxy.java:357)\r\n	at org.springframework.web.filter.DelegatingFilterProxy.doFilter(DelegatingFilterProxy.java:270)\r\n	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:193)\r\n	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:166)\r\n	at org.springframework.web.filter.RequestContextFilter.doFilterInternal(RequestContextFilter.java:99)\r\n	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:107)\r\n	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:193)\r\n	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:166)\r\n	at org.springframework.web.filter.HttpPutFormContentFilter.doFilterInternal(HttpPutFormContentFilter.java:109)\r\n	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:107)\r\n	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:193)\r\n	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:166)\r\n	at org.springframework.web.filter.HiddenHttpMethodFilter.doFilterInternal(HiddenHttpMethodFilter.java:93)\r\n	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:107)\r\n	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:193)\r\n	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:166)\r\n	at org.springframework.web.filter.CharacterEncodingFilter.doFilterInternal(CharacterEncodingFilter.java:200)\r\n	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:107)\r\n	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:193)\r\n	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:166)\r\n	at org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:198)\r\n	at org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:96)\r\n	at org.apache.catalina.authenticator.AuthenticatorBase.invoke(AuthenticatorBase.java:493)\r\n	at org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:140)\r\n	at org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:81)\r\n	at org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:87)\r\n	at org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:342)\r\n	at org.apache.coyote.http11.Http11Processor.service(Http11Processor.java:800)\r\n	at org.apache.coyote.AbstractProcessorLight.process(AbstractProcessorLight.java:66)\r\n	at org.apache.coyote.AbstractProtocolTConnectionHandler.process(AbstractProtocol.java:800)\r\n	at org.apache.tomcat.util.net.NioEndpointTSocketProcessor.doRun(NioEndpoint.java:1471)\r\n	at org.apache.tomcat.util.net.SocketProcessorBase.run(SocketProcessorBase.java:49)\r\n	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\r\n	at java.util.concurrent.ThreadPoolExecutorTWorker.run(ThreadPoolExecutor.java:624)\r\n	at org.apache.tomcat.util.threads.TaskThreadTWrappingRunnable.run(TaskThread.java:61)\r\n	at java.lang.Thread.run(Thread.java:748)\r\n', '失败', '1', '127.0.0.1', '/mgr/edit', 'POST', 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0', null, null, null, null, null, null, null);
INSERT INTO `sys_log` VALUES ('45', 'exception', '修改管理员', 'public com.wpc.common.bean.ResponseResult com.wpc.system.controller.UserMgrController.edit(com.wpc.system.transfer.UserDto) throws javax.naming.NoPermissionException', '[{\"id\":46,\"account\":\"manager\",\"password\":\"\",\"salt\":null,\"name\":\"经理\",\"birthday\":\"2017-12-04 00:00:00\",\"sex\":1,\"email\":\"\",\"phone\":\"\",\"roleid\":null,\"deptid\":24,\"status\":null,\"createtime\":null,\"version\":null,\"avatar\":\"\"}]', '2018-11-23 17:48:24', 'java.lang.ArithmeticException: / by zero\r\n	at com.wpc.system.controller.UserMgrController.edit(UserMgrController.java:189)\r\n	at com.wpc.system.controller.UserMgrControllerTTFastClassBySpringCGLIBTT829f7885.invoke(<generated>)\r\n	at org.springframework.cglib.proxy.MethodProxy.invoke(MethodProxy.java:204)\r\n	at org.springframework.aop.framework.CglibAopProxyTCglibMethodInvocation.invokeJoinpoint(CglibAopProxy.java:746)\r\n	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:163)\r\n	at org.springframework.aop.framework.adapter.MethodBeforeAdviceInterceptor.invoke(MethodBeforeAdviceInterceptor.java:56)\r\n	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:185)\r\n	at org.springframework.aop.aspectj.MethodInvocationProceedingJoinPoint.proceed(MethodInvocationProceedingJoinPoint.java:88)\r\n	at com.wpc.common.aop.InfoLogAspect.doAround(InfoLogAspect.java:28)\r\n	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n	at java.lang.reflect.Method.invoke(Method.java:498)\r\n	at org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethodWithGivenArgs(AbstractAspectJAdvice.java:644)\r\n	at org.springframework.aop.aspectj.AbstractAspectJAdvice.invokeAdviceMethod(AbstractAspectJAdvice.java:633)\r\n	at org.springframework.aop.aspectj.AspectJAroundAdvice.invoke(AspectJAroundAdvice.java:70)\r\n	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:185)\r\n	at org.springframework.aop.framework.adapter.AfterReturningAdviceInterceptor.invoke(AfterReturningAdviceInterceptor.java:55)\r\n	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:185)\r\n	at org.springframework.aop.aspectj.AspectJAfterThrowingAdvice.invoke(AspectJAfterThrowingAdvice.java:62)\r\n	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:185)\r\n	at org.springframework.aop.framework.adapter.AfterReturningAdviceInterceptor.invoke(AfterReturningAdviceInterceptor.java:55)\r\n	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:174)\r\n	at org.springframework.aop.aspectj.AspectJAfterThrowingAdvice.invoke(AspectJAfterThrowingAdvice.java:62)\r\n	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:174)\r\n	at org.springframework.aop.interceptor.ExposeInvocationInterceptor.invoke(ExposeInvocationInterceptor.java:92)\r\n	at org.springframework.aop.framework.ReflectiveMethodInvocation.proceed(ReflectiveMethodInvocation.java:185)\r\n	at org.springframework.aop.framework.CglibAopProxyTDynamicAdvisedInterceptor.intercept(CglibAopProxy.java:688)\r\n	at com.wpc.system.controller.UserMgrControllerTTEnhancerBySpringCGLIBTTd1eb041c.edit(<generated>)\r\n	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n	at java.lang.reflect.Method.invoke(Method.java:498)\r\n	at org.springframework.web.method.support.InvocableHandlerMethod.doInvoke(InvocableHandlerMethod.java:209)\r\n	at org.springframework.web.method.support.InvocableHandlerMethod.invokeForRequest(InvocableHandlerMethod.java:136)\r\n	at org.springframework.web.servlet.mvc.method.annotation.ServletInvocableHandlerMethod.invokeAndHandle(ServletInvocableHandlerMethod.java:102)\r\n	at org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.invokeHandlerMethod(RequestMappingHandlerAdapter.java:877)\r\n	at org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.handleInternal(RequestMappingHandlerAdapter.java:783)\r\n	at org.springframework.web.servlet.mvc.method.AbstractHandlerMethodAdapter.handle(AbstractHandlerMethodAdapter.java:87)\r\n	at org.springframework.web.servlet.DispatcherServlet.doDispatch(DispatcherServlet.java:991)\r\n	at org.springframework.web.servlet.DispatcherServlet.doService(DispatcherServlet.java:925)\r\n	at org.springframework.web.servlet.FrameworkServlet.processRequest(FrameworkServlet.java:974)\r\n	at org.springframework.web.servlet.FrameworkServlet.doPost(FrameworkServlet.java:877)\r\n	at javax.servlet.http.HttpServlet.service(HttpServlet.java:661)\r\n	at org.springframework.web.servlet.FrameworkServlet.service(FrameworkServlet.java:851)\r\n	at javax.servlet.http.HttpServlet.service(HttpServlet.java:742)\r\n	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:231)\r\n	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:166)\r\n	at org.springframework.web.servlet.resource.ResourceUrlEncodingFilter.doFilter(ResourceUrlEncodingFilter.java:60)\r\n	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:193)\r\n	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:166)\r\n	at org.apache.shiro.web.servlet.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:112)\r\n	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:193)\r\n	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:166)\r\n	at com.alibaba.druid.support.http.WebStatFilter.doFilter(WebStatFilter.java:123)\r\n	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:193)\r\n	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:166)\r\n	at org.apache.shiro.web.servlet.ProxiedFilterChain.doFilter(ProxiedFilterChain.java:61)\r\n	at org.apache.shiro.web.servlet.AdviceFilter.executeChain(AdviceFilter.java:108)\r\n	at org.apache.shiro.web.servlet.AdviceFilter.doFilterInternal(AdviceFilter.java:137)\r\n	at org.apache.shiro.web.servlet.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:125)\r\n	at org.apache.shiro.web.servlet.ProxiedFilterChain.doFilter(ProxiedFilterChain.java:66)\r\n	at org.apache.shiro.web.servlet.AbstractShiroFilter.executeChain(AbstractShiroFilter.java:449)\r\n	at org.apache.shiro.web.servlet.AbstractShiroFilterT1.call(AbstractShiroFilter.java:365)\r\n	at org.apache.shiro.subject.support.SubjectCallable.doCall(SubjectCallable.java:90)\r\n	at org.apache.shiro.subject.support.SubjectCallable.call(SubjectCallable.java:83)\r\n	at org.apache.shiro.subject.support.DelegatingSubject.execute(DelegatingSubject.java:383)\r\n	at org.apache.shiro.web.servlet.AbstractShiroFilter.doFilterInternal(AbstractShiroFilter.java:362)\r\n	at org.apache.shiro.web.servlet.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:125)\r\n	at org.springframework.web.filter.DelegatingFilterProxy.invokeDelegate(DelegatingFilterProxy.java:357)\r\n	at org.springframework.web.filter.DelegatingFilterProxy.doFilter(DelegatingFilterProxy.java:270)\r\n	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:193)\r\n	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:166)\r\n	at org.springframework.web.filter.RequestContextFilter.doFilterInternal(RequestContextFilter.java:99)\r\n	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:107)\r\n	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:193)\r\n	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:166)\r\n	at org.springframework.web.filter.HttpPutFormContentFilter.doFilterInternal(HttpPutFormContentFilter.java:109)\r\n	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:107)\r\n	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:193)\r\n	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:166)\r\n	at org.springframework.web.filter.HiddenHttpMethodFilter.doFilterInternal(HiddenHttpMethodFilter.java:93)\r\n	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:107)\r\n	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:193)\r\n	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:166)\r\n	at org.springframework.web.filter.CharacterEncodingFilter.doFilterInternal(CharacterEncodingFilter.java:200)\r\n	at org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java:107)\r\n	at org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java:193)\r\n	at org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java:166)\r\n	at org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java:198)\r\n	at org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java:96)\r\n	at org.apache.catalina.authenticator.AuthenticatorBase.invoke(AuthenticatorBase.java:493)\r\n	at org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java:140)\r\n	at org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java:81)\r\n	at org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java:87)\r\n	at org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java:342)\r\n	at org.apache.coyote.http11.Http11Processor.service(Http11Processor.java:800)\r\n	at org.apache.coyote.AbstractProcessorLight.process(AbstractProcessorLight.java:66)\r\n	at org.apache.coyote.AbstractProtocolTConnectionHandler.process(AbstractProtocol.java:800)\r\n	at org.apache.tomcat.util.net.NioEndpointTSocketProcessor.doRun(NioEndpoint.java:1471)\r\n	at org.apache.tomcat.util.net.SocketProcessorBase.run(SocketProcessorBase.java:49)\r\n	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\r\n	at java.util.concurrent.ThreadPoolExecutorTWorker.run(ThreadPoolExecutor.java:624)\r\n	at org.apache.tomcat.util.threads.TaskThreadTWrappingRunnable.run(TaskThread.java:61)\r\n	at java.lang.Thread.run(Thread.java:748)\r\n', '失败', '1', '127.0.0.1', '/mgr/edit', 'POST', 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:45.0) Gecko/20100101 Firefox/45.0', null, null, null, null, null, null, null);

-- ----------------------------
-- Table structure for `sys_login_log`
-- ----------------------------
DROP TABLE IF EXISTS `sys_login_log`;
CREATE TABLE `sys_login_log` (
  `id` bigint(65) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `logname` varchar(255) DEFAULT NULL COMMENT '日志名称',
  `userid` bigint(65) DEFAULT NULL COMMENT '管理员id',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `succeed` varchar(255) DEFAULT NULL COMMENT '是否执行成功',
  `message` text COMMENT '具体消息',
  `ip` varchar(255) DEFAULT NULL COMMENT '登录ip',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=256 DEFAULT CHARSET=utf8 COMMENT='登录记录';

-- ----------------------------
-- Records of sys_login_log
-- ----------------------------
INSERT INTO `sys_login_log` VALUES ('249', '退出日志', '1', '2018-11-22 20:23:18', '成功', null, '127.0.0.1');
INSERT INTO `sys_login_log` VALUES ('250', '登录日志', '62', '2018-11-22 20:23:28', '成功', null, '127.0.0.1');
INSERT INTO `sys_login_log` VALUES ('251', '退出日志', '62', '2018-11-22 20:23:44', '成功', null, '127.0.0.1');
INSERT INTO `sys_login_log` VALUES ('252', '登录失败日志', null, '2018-11-22 20:23:52', '成功', '账号:ceshi,账号被冻结', '127.0.0.1');
INSERT INTO `sys_login_log` VALUES ('253', '登录日志', '1', '2018-11-22 20:24:03', '成功', null, '127.0.0.1');
INSERT INTO `sys_login_log` VALUES ('254', '登录日志', '1', '2018-11-23 14:12:40', '成功', null, '127.0.0.1');
INSERT INTO `sys_login_log` VALUES ('255', '登录日志', '1', '2018-11-23 16:16:19', '成功', null, '127.0.0.1');

-- ----------------------------
-- Table structure for `sys_menu`
-- ----------------------------
DROP TABLE IF EXISTS `sys_menu`;
CREATE TABLE `sys_menu` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `code` varchar(255) DEFAULT NULL COMMENT '菜单编号',
  `pcode` varchar(255) DEFAULT NULL COMMENT '菜单父编号',
  `pcodes` varchar(255) DEFAULT NULL COMMENT '当前菜单的所有父菜单编号',
  `name` varchar(255) DEFAULT NULL COMMENT '菜单名称',
  `icon` varchar(255) DEFAULT NULL COMMENT '菜单图标',
  `url` varchar(255) DEFAULT NULL COMMENT 'url地址',
  `sort` int(65) DEFAULT NULL COMMENT '菜单排序号',
  `levels` int(65) DEFAULT NULL COMMENT '菜单层级',
  `ismenu` int(11) DEFAULT NULL COMMENT '是否是菜单（1：是  0：不是）',
  `tips` varchar(255) DEFAULT NULL COMMENT '备注',
  `status` int(65) DEFAULT NULL COMMENT '菜单状态 :  1:启用   0:不启用',
  `isopen` int(11) DEFAULT NULL COMMENT '是否打开:    1:打开   0:不打开',
  `create_time` datetime DEFAULT NULL,
  `create_by` bigint(20) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `update_by` bigint(20) DEFAULT NULL,
  `remarks` varchar(255) DEFAULT NULL,
  `del_flag` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=171 DEFAULT CHARSET=utf8 COMMENT='菜单表';

-- ----------------------------
-- Records of sys_menu
-- ----------------------------
INSERT INTO `sys_menu` VALUES ('105', 'system', '0', '[0],', '系统管理', 'fa-user', '#', '4', '1', '1', null, '1', '1', null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('106', 'mgr', 'system', '[0],[system],', '用户管理', '', '/mgr', '1', '2', '1', null, '1', '0', null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('107', 'mgr_add', 'mgr', '[0],[system],[mgr],', '添加用户', null, '/mgr/add', '1', '3', '0', null, '1', '0', null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('108', 'mgr_edit', 'mgr', '[0],[system],[mgr],', '修改用户', null, '/mgr/edit', '2', '3', '0', null, '1', '0', null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('109', 'mgr_delete', 'mgr', '[0],[system],[mgr],', '删除用户', null, '/mgr/delete', '3', '3', '0', null, '1', '0', null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('110', 'mgr_reset', 'mgr', '[0],[system],[mgr],', '重置密码', null, '/mgr/reset', '4', '3', '0', null, '1', '0', null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('111', 'mgr_freeze', 'mgr', '[0],[system],[mgr],', '冻结用户', null, '/mgr/freeze', '5', '3', '0', null, '1', '0', null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('112', 'mgr_unfreeze', 'mgr', '[0],[system],[mgr],', '解除冻结用户', null, '/mgr/unfreeze', '6', '3', '0', null, '1', '0', null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('113', 'mgr_setRole', 'mgr', '[0],[system],[mgr],', '分配角色', null, '/mgr/setRole', '7', '3', '0', null, '1', '0', null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('114', 'role', 'system', '[0],[system],', '角色管理', null, '/role', '2', '2', '1', null, '1', '0', null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('115', 'role_add', 'role', '[0],[system],[role],', '添加角色', null, '/role/add', '1', '3', '0', null, '1', '0', null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('116', 'role_edit', 'role', '[0],[system],[role],', '修改角色', null, '/role/edit', '2', '3', '0', null, '1', '0', null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('117', 'role_remove', 'role', '[0],[system],[role],', '删除角色', null, '/role/remove', '3', '3', '0', null, '1', '0', null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('118', 'role_setAuthority', 'role', '[0],[system],[role],', '配置权限', null, '/role/setAuthority', '4', '3', '0', null, '1', '0', null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('119', 'menu', 'system', '[0],[system],', '菜单管理', null, '/menu', '4', '2', '1', null, '1', '0', null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('120', 'menu_add', 'menu', '[0],[system],[menu],', '添加菜单', null, '/menu/add', '1', '3', '0', null, '1', '0', null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('121', 'menu_edit', 'menu', '[0],[system],[menu],', '修改菜单', null, '/menu/edit', '2', '3', '0', null, '1', '0', null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('122', 'menu_remove', 'menu', '[0],[system],[menu],', '删除菜单', null, '/menu/remove', '3', '3', '0', null, '1', '0', null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('128', 'log', 'system', '[0],[system],', '业务日志', null, '/log', '6', '2', '1', null, '1', '0', null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('130', 'druid', 'system', '[0],[system],', '监控管理', null, '/druid', '7', '2', '1', null, '1', null, null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('131', 'dept', 'system', '[0],[system],', '部门管理', null, '/dept', '3', '2', '1', null, '1', null, null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('132', 'dict', 'system', '[0],[system],', '字典管理', null, '/dict', '4', '2', '1', null, '1', null, null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('133', 'loginLog', 'system', '[0],[system],', '登录日志', null, '/loginLog', '6', '2', '1', null, '1', null, null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('134', 'log_clean', 'log', '[0],[system],[log],', '清空日志', null, '/log/delLog', '3', '3', '0', null, '1', null, null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('135', 'dept_add', 'dept', '[0],[system],[dept],', '添加部门', null, '/dept/add', '1', '3', '0', null, '1', null, null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('136', 'dept_update', 'dept', '[0],[system],[dept],', '修改部门', null, '/dept/update', '1', '3', '0', null, '1', null, null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('137', 'dept_delete', 'dept', '[0],[system],[dept],', '删除部门', null, '/dept/delete', '1', '3', '0', null, '1', null, null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('138', 'dict_add', 'dict', '[0],[system],[dict],', '添加字典', null, '/dict/add', '1', '3', '0', null, '1', null, null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('139', 'dict_update', 'dict', '[0],[system],[dict],', '修改字典', null, '/dict/update', '1', '3', '0', null, '1', null, null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('140', 'dict_delete', 'dict', '[0],[system],[dict],', '删除字典', null, '/dict/delete', '1', '3', '0', null, '1', null, null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('141', 'notice', 'system', '[0],[system],', '通知管理', null, '/notice', '9', '2', '1', null, '1', null, null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('142', 'notice_add', 'notice', '[0],[system],[notice],', '添加通知', null, '/notice/add', '1', '3', '0', null, '1', null, null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('143', 'notice_update', 'notice', '[0],[system],[notice],', '修改通知', null, '/notice/update', '2', '3', '0', null, '1', null, null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('144', 'notice_delete', 'notice', '[0],[system],[notice],', '删除通知', null, '/notice/delete', '3', '3', '0', null, '1', null, null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('145', 'hello', '0', '[0],', '通知', 'fa-rocket', '/notice/hello', '1', '1', '1', null, '1', null, null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('148', 'code', '0', '[0],', '代码生成', 'fa-code', '/code', '3', '1', '1', null, '1', null, null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('149', 'api_mgr', '0', '[0],', '接口文档', 'fa-leaf', '/swagger-ui.html', '2', '1', '1', null, '1', null, null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('150', 'to_menu_edit', 'menu', '[0],[system],[menu],', '菜单编辑跳转', '', '/menu/menu_edit', '4', '3', '0', null, '1', null, null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('151', 'menu_list', 'menu', '[0],[system],[menu],', '菜单列表', '', '/menu/list', '5', '3', '0', null, '1', null, null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('152', 'to_dept_update', 'dept', '[0],[system],[dept],', '修改部门跳转', '', '/dept/dept_update', '4', '3', '0', null, '1', null, null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('153', 'dept_list', 'dept', '[0],[system],[dept],', '部门列表', '', '/dept/list', '5', '3', '0', null, '1', null, null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('154', 'dept_detail', 'dept', '[0],[system],[dept],', '部门详情', '', '/dept/detail', '6', '3', '0', null, '1', null, null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('155', 'to_dict_edit', 'dict', '[0],[system],[dict],', '修改菜单跳转', '', '/dict/dict_edit', '4', '3', '0', null, '1', null, null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('156', 'dict_list', 'dict', '[0],[system],[dict],', '字典列表', '', '/dict/list', '5', '3', '0', null, '1', null, null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('157', 'dict_detail', 'dict', '[0],[system],[dict],', '字典详情', '', '/dict/detail', '6', '3', '0', null, '1', null, null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('158', 'log_list', 'log', '[0],[system],[log],', '日志列表', '', '/log/list', '2', '3', '0', null, '1', null, null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('159', 'log_detail', 'log', '[0],[system],[log],', '日志详情', '', '/log/detail', '3', '3', '0', null, '1', null, null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('160', 'del_login_log', 'loginLog', '[0],[system],[loginLog],', '清空登录日志', '', '/loginLog/delLoginLog', '1', '3', '0', null, '1', null, null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('161', 'login_log_list', 'loginLog', '[0],[system],[loginLog],', '登录日志列表', '', '/loginLog/list', '2', '3', '0', null, '1', null, null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('162', 'to_role_edit', 'role', '[0],[system],[role],', '修改角色跳转', '', '/role/role_edit', '5', '3', '0', null, '1', null, null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('163', 'to_role_assign', 'role', '[0],[system],[role],', '角色分配跳转', '', '/role/role_assign', '6', '3', '0', null, '1', null, null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('164', 'role_list', 'role', '[0],[system],[role],', '角色列表', '', '/role/list', '7', '3', '0', null, '1', null, null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('165', 'to_assign_role', 'mgr', '[0],[system],[mgr],', '分配角色跳转', '', '/mgr/role_assign', '8', '3', '0', null, '1', null, null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('166', 'to_user_edit', 'mgr', '[0],[system],[mgr],', '编辑用户跳转', '', '/mgr/user_edit', '9', '3', '0', null, '1', null, null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('167', 'mgr_list', 'mgr', '[0],[system],[mgr],', '用户列表', '', '/mgr/list', '10', '3', '0', null, '1', null, null, null, null, null, null, null);
INSERT INTO `sys_menu` VALUES ('168', 'test', '0', '[0],', '测试菜单', '', '/test', '2', '1', '1', null, '1', null, null, null, '2018-11-22 14:15:26', null, null, null);
INSERT INTO `sys_menu` VALUES ('169', 'test2', 'test', '[0],[test],', '测试菜单2', '', '/test2', '2', '2', '1', null, '1', null, null, null, '2018-11-22 14:15:08', null, null, null);

-- ----------------------------
-- Table structure for `sys_notice`
-- ----------------------------
DROP TABLE IF EXISTS `sys_notice`;
CREATE TABLE `sys_notice` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `title` varchar(255) DEFAULT NULL COMMENT '标题',
  `type` int(11) DEFAULT NULL COMMENT '类型',
  `content` text COMMENT '内容',
  `sort` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `create_by` int(11) DEFAULT NULL COMMENT '创建人',
  `update_time` datetime DEFAULT NULL,
  `update_by` int(11) DEFAULT NULL,
  `remarks` varchar(255) DEFAULT NULL,
  `del_flag` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COMMENT='通知表';

-- ----------------------------
-- Records of sys_notice
-- ----------------------------
INSERT INTO `sys_notice` VALUES ('6', '世界', '10', '欢迎使用Guns管理系统', null, '2017-01-11 08:53:20', '1', null, null, null, null);
INSERT INTO `sys_notice` VALUES ('8', '你好', null, '你好', null, '2017-05-10 19:28:57', '1', null, null, null, null);
INSERT INTO `sys_notice` VALUES ('9', '测试', null, '&lt;p&gt;哒哇啊达瓦&lt;strong&gt;哒哇 哇&amp;nbsp; 啊袜&lt;img src=&quot;http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/pcmoren_tian_org.png&quot; alt=&quot;[舔屏]&quot; data-w-e=&quot;1&quot;&gt;&lt;span style=&quot;background-color: rgb(194, 79, 74);&quot;&gt;&lt;/span&gt;哇啊&lt;/strong&gt;&lt;br&gt;&lt;/p&gt;', null, '2018-11-22 16:50:52', '1', null, null, null, null);

-- ----------------------------
-- Table structure for `sys_operation_log`
-- ----------------------------
DROP TABLE IF EXISTS `sys_operation_log`;
CREATE TABLE `sys_operation_log` (
  `id` int(65) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `logtype` varchar(255) DEFAULT NULL COMMENT '日志类型',
  `logname` varchar(255) DEFAULT NULL COMMENT '日志名称',
  `userid` int(65) DEFAULT NULL COMMENT '用户id',
  `classname` varchar(255) DEFAULT NULL COMMENT '类名称',
  `method` text COMMENT '方法名称',
  `createtime` datetime DEFAULT NULL COMMENT '创建时间',
  `succeed` varchar(255) DEFAULT NULL COMMENT '是否成功',
  `message` text COMMENT '备注',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='操作日志';

-- ----------------------------
-- Records of sys_operation_log
-- ----------------------------

-- ----------------------------
-- Table structure for `sys_relation`
-- ----------------------------
DROP TABLE IF EXISTS `sys_relation`;
CREATE TABLE `sys_relation` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `menuid` bigint(11) DEFAULT NULL COMMENT '菜单id',
  `roleid` int(11) DEFAULT NULL COMMENT '角色id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3856 DEFAULT CHARSET=utf8 COMMENT='角色和菜单关联表';

-- ----------------------------
-- Records of sys_relation
-- ----------------------------
INSERT INTO `sys_relation` VALUES ('3737', '105', '1');
INSERT INTO `sys_relation` VALUES ('3738', '106', '1');
INSERT INTO `sys_relation` VALUES ('3739', '107', '1');
INSERT INTO `sys_relation` VALUES ('3740', '108', '1');
INSERT INTO `sys_relation` VALUES ('3741', '109', '1');
INSERT INTO `sys_relation` VALUES ('3742', '110', '1');
INSERT INTO `sys_relation` VALUES ('3743', '111', '1');
INSERT INTO `sys_relation` VALUES ('3744', '112', '1');
INSERT INTO `sys_relation` VALUES ('3745', '113', '1');
INSERT INTO `sys_relation` VALUES ('3746', '165', '1');
INSERT INTO `sys_relation` VALUES ('3747', '166', '1');
INSERT INTO `sys_relation` VALUES ('3748', '167', '1');
INSERT INTO `sys_relation` VALUES ('3749', '114', '1');
INSERT INTO `sys_relation` VALUES ('3750', '115', '1');
INSERT INTO `sys_relation` VALUES ('3751', '116', '1');
INSERT INTO `sys_relation` VALUES ('3752', '117', '1');
INSERT INTO `sys_relation` VALUES ('3753', '118', '1');
INSERT INTO `sys_relation` VALUES ('3754', '162', '1');
INSERT INTO `sys_relation` VALUES ('3755', '163', '1');
INSERT INTO `sys_relation` VALUES ('3756', '164', '1');
INSERT INTO `sys_relation` VALUES ('3757', '119', '1');
INSERT INTO `sys_relation` VALUES ('3758', '120', '1');
INSERT INTO `sys_relation` VALUES ('3759', '121', '1');
INSERT INTO `sys_relation` VALUES ('3760', '122', '1');
INSERT INTO `sys_relation` VALUES ('3761', '150', '1');
INSERT INTO `sys_relation` VALUES ('3762', '151', '1');
INSERT INTO `sys_relation` VALUES ('3763', '128', '1');
INSERT INTO `sys_relation` VALUES ('3764', '134', '1');
INSERT INTO `sys_relation` VALUES ('3765', '158', '1');
INSERT INTO `sys_relation` VALUES ('3766', '159', '1');
INSERT INTO `sys_relation` VALUES ('3767', '130', '1');
INSERT INTO `sys_relation` VALUES ('3768', '131', '1');
INSERT INTO `sys_relation` VALUES ('3769', '135', '1');
INSERT INTO `sys_relation` VALUES ('3770', '136', '1');
INSERT INTO `sys_relation` VALUES ('3771', '137', '1');
INSERT INTO `sys_relation` VALUES ('3772', '152', '1');
INSERT INTO `sys_relation` VALUES ('3773', '153', '1');
INSERT INTO `sys_relation` VALUES ('3774', '154', '1');
INSERT INTO `sys_relation` VALUES ('3775', '132', '1');
INSERT INTO `sys_relation` VALUES ('3776', '138', '1');
INSERT INTO `sys_relation` VALUES ('3777', '139', '1');
INSERT INTO `sys_relation` VALUES ('3778', '140', '1');
INSERT INTO `sys_relation` VALUES ('3779', '155', '1');
INSERT INTO `sys_relation` VALUES ('3780', '156', '1');
INSERT INTO `sys_relation` VALUES ('3781', '157', '1');
INSERT INTO `sys_relation` VALUES ('3782', '133', '1');
INSERT INTO `sys_relation` VALUES ('3783', '160', '1');
INSERT INTO `sys_relation` VALUES ('3784', '161', '1');
INSERT INTO `sys_relation` VALUES ('3785', '141', '1');
INSERT INTO `sys_relation` VALUES ('3786', '142', '1');
INSERT INTO `sys_relation` VALUES ('3787', '143', '1');
INSERT INTO `sys_relation` VALUES ('3788', '144', '1');
INSERT INTO `sys_relation` VALUES ('3789', '145', '1');
INSERT INTO `sys_relation` VALUES ('3790', '148', '1');
INSERT INTO `sys_relation` VALUES ('3791', '149', '1');
INSERT INTO `sys_relation` VALUES ('3799', '148', '10');
INSERT INTO `sys_relation` VALUES ('3800', '149', '10');
INSERT INTO `sys_relation` VALUES ('3801', '168', '7');
INSERT INTO `sys_relation` VALUES ('3802', '169', '7');
INSERT INTO `sys_relation` VALUES ('3804', '105', '11');
INSERT INTO `sys_relation` VALUES ('3805', '106', '11');
INSERT INTO `sys_relation` VALUES ('3806', '107', '11');
INSERT INTO `sys_relation` VALUES ('3807', '108', '11');
INSERT INTO `sys_relation` VALUES ('3808', '109', '11');
INSERT INTO `sys_relation` VALUES ('3809', '110', '11');
INSERT INTO `sys_relation` VALUES ('3810', '111', '11');
INSERT INTO `sys_relation` VALUES ('3811', '112', '11');
INSERT INTO `sys_relation` VALUES ('3812', '113', '11');
INSERT INTO `sys_relation` VALUES ('3813', '165', '11');
INSERT INTO `sys_relation` VALUES ('3814', '166', '11');
INSERT INTO `sys_relation` VALUES ('3815', '167', '11');
INSERT INTO `sys_relation` VALUES ('3816', '114', '11');
INSERT INTO `sys_relation` VALUES ('3817', '115', '11');
INSERT INTO `sys_relation` VALUES ('3818', '116', '11');
INSERT INTO `sys_relation` VALUES ('3819', '117', '11');
INSERT INTO `sys_relation` VALUES ('3820', '118', '11');
INSERT INTO `sys_relation` VALUES ('3821', '162', '11');
INSERT INTO `sys_relation` VALUES ('3822', '163', '11');
INSERT INTO `sys_relation` VALUES ('3823', '164', '11');
INSERT INTO `sys_relation` VALUES ('3824', '119', '11');
INSERT INTO `sys_relation` VALUES ('3825', '120', '11');
INSERT INTO `sys_relation` VALUES ('3826', '121', '11');
INSERT INTO `sys_relation` VALUES ('3827', '122', '11');
INSERT INTO `sys_relation` VALUES ('3828', '150', '11');
INSERT INTO `sys_relation` VALUES ('3829', '151', '11');
INSERT INTO `sys_relation` VALUES ('3830', '128', '11');
INSERT INTO `sys_relation` VALUES ('3831', '134', '11');
INSERT INTO `sys_relation` VALUES ('3832', '158', '11');
INSERT INTO `sys_relation` VALUES ('3833', '159', '11');
INSERT INTO `sys_relation` VALUES ('3834', '130', '11');
INSERT INTO `sys_relation` VALUES ('3835', '131', '11');
INSERT INTO `sys_relation` VALUES ('3836', '135', '11');
INSERT INTO `sys_relation` VALUES ('3837', '136', '11');
INSERT INTO `sys_relation` VALUES ('3838', '137', '11');
INSERT INTO `sys_relation` VALUES ('3839', '152', '11');
INSERT INTO `sys_relation` VALUES ('3840', '153', '11');
INSERT INTO `sys_relation` VALUES ('3841', '154', '11');
INSERT INTO `sys_relation` VALUES ('3842', '132', '11');
INSERT INTO `sys_relation` VALUES ('3843', '138', '11');
INSERT INTO `sys_relation` VALUES ('3844', '139', '11');
INSERT INTO `sys_relation` VALUES ('3845', '140', '11');
INSERT INTO `sys_relation` VALUES ('3846', '155', '11');
INSERT INTO `sys_relation` VALUES ('3847', '156', '11');
INSERT INTO `sys_relation` VALUES ('3848', '157', '11');
INSERT INTO `sys_relation` VALUES ('3849', '133', '11');
INSERT INTO `sys_relation` VALUES ('3850', '160', '11');
INSERT INTO `sys_relation` VALUES ('3851', '161', '11');
INSERT INTO `sys_relation` VALUES ('3852', '141', '11');
INSERT INTO `sys_relation` VALUES ('3853', '142', '11');
INSERT INTO `sys_relation` VALUES ('3854', '143', '11');
INSERT INTO `sys_relation` VALUES ('3855', '144', '11');

-- ----------------------------
-- Table structure for `sys_role`
-- ----------------------------
DROP TABLE IF EXISTS `sys_role`;
CREATE TABLE `sys_role` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `parent_id` bigint(11) DEFAULT NULL COMMENT '父角色id',
  `parent_ids` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL COMMENT '角色名称',
  `deptid` bigint(11) DEFAULT NULL COMMENT '部门名称',
  `code` varchar(255) DEFAULT NULL COMMENT '提示',
  `version` int(11) DEFAULT NULL COMMENT '保留字段(暂时没用）',
  `sort` int(11) DEFAULT NULL COMMENT '序号',
  `create_time` datetime DEFAULT NULL,
  `create_by` bigint(20) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `update_by` bigint(20) DEFAULT NULL,
  `remarks` varchar(255) DEFAULT NULL,
  `del_flag` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COMMENT='角色表';

-- ----------------------------
-- Records of sys_role
-- ----------------------------
INSERT INTO `sys_role` VALUES ('1', '0', null, '超级管理员', '24', 'administrator', '1', '1', null, null, null, null, null, null);
INSERT INTO `sys_role` VALUES ('7', '0', null, '测试', '32', 'test', null, '3', null, null, '2018-11-22 20:16:36', null, null, null);
INSERT INTO `sys_role` VALUES ('8', '7', null, '前端', '28', 'api', null, '1', '2018-11-22 20:01:56', null, null, null, null, null);
INSERT INTO `sys_role` VALUES ('9', '7', null, '后台', '28', 'web', null, '2', '2018-11-22 20:12:12', null, null, null, null, null);
INSERT INTO `sys_role` VALUES ('10', '0', null, '开发', '30', 'develop', null, '1', '2018-11-22 20:17:38', null, null, null, null, null);
INSERT INTO `sys_role` VALUES ('11', '1', null, '普通管理员', '0', 'manager', null, '1', '2018-11-22 20:32:59', null, null, null, null, null);

-- ----------------------------
-- Table structure for `sys_user`
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `avatar` varchar(255) DEFAULT NULL COMMENT '头像',
  `account` varchar(45) DEFAULT NULL COMMENT '账号',
  `password` varchar(255) DEFAULT NULL COMMENT '密码',
  `name` varchar(45) DEFAULT NULL COMMENT '名字',
  `birthday` datetime DEFAULT NULL COMMENT '生日',
  `sex` int(11) DEFAULT NULL COMMENT '性别（1：男 2：女）',
  `email` varchar(45) DEFAULT NULL COMMENT '电子邮件',
  `phone` varchar(45) DEFAULT NULL COMMENT '电话',
  `roleid` varchar(255) DEFAULT NULL COMMENT '角色id',
  `deptid` bigint(11) DEFAULT NULL COMMENT '部门id',
  `status` int(11) DEFAULT NULL COMMENT '状态(1：启用  2：冻结  3：删除）',
  `version` int(11) DEFAULT NULL COMMENT '保留字段',
  `sort` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `create_by` bigint(20) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `update_by` bigint(20) DEFAULT NULL,
  `remarks` varchar(255) DEFAULT NULL,
  `del_flag` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8 COMMENT='管理员表';

-- ----------------------------
-- Records of sys_user
-- ----------------------------
INSERT INTO `sys_user` VALUES ('1', 'girl.gif', 'admin', 'bc7a77e9ee18c116b7af0b5b5deaed766e9d23a4c820c432', 'admin', '2017-05-05 00:00:00', '1', 'wpcfree@qq.com', '18801061403', '1', '0', '1', '25', null, '2016-01-29 08:49:53', null, '2018-11-22 20:25:41', null, null, null);
INSERT INTO `sys_user` VALUES ('44', null, 'test', '45abb7879f6a8268f1ef600e6038ac73', 'test', '2017-05-01 00:00:00', '1', 'abc@123.com', '', '5', '26', '3', null, null, '2017-05-16 20:33:37', null, null, null, null, null);
INSERT INTO `sys_user` VALUES ('45', null, 'boss', '71887a5ad666a18f709e1d4e693d5a35', '老板', '2017-12-04 00:00:00', '1', '', '', '11', '24', '1', null, null, '2017-12-04 22:24:02', null, null, null, null, null);
INSERT INTO `sys_user` VALUES ('46', null, 'manager', 'b53cac62e7175637d4beb3b16b2f7915', '经理', '2017-12-04 00:00:00', '1', '', '', '11', '24', '2', null, null, '2017-12-04 22:24:24', null, null, null, null, null);
INSERT INTO `sys_user` VALUES ('47', null, '1', null, null, null, '1', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `sys_user` VALUES ('48', null, '2', null, null, null, '1', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `sys_user` VALUES ('49', null, '3', null, null, null, '1', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `sys_user` VALUES ('50', null, '4', null, null, null, '1', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `sys_user` VALUES ('51', null, '5', null, null, null, '1', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `sys_user` VALUES ('52', null, '6', null, null, null, '1', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `sys_user` VALUES ('53', null, '7', null, null, null, '2', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `sys_user` VALUES ('54', null, '8', null, null, null, '2', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `sys_user` VALUES ('55', null, '9', null, null, null, '2', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `sys_user` VALUES ('56', null, '0', null, null, null, '2', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `sys_user` VALUES ('57', null, '12', null, null, null, '1', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `sys_user` VALUES ('58', null, '13', null, null, null, '1', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `sys_user` VALUES ('59', null, '41', null, null, null, '1', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `sys_user` VALUES ('60', null, '11', null, null, null, '1', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `sys_user` VALUES ('61', null, '15', null, null, null, '1', null, null, null, null, null, null, null, null, null, null, null, null, null);
INSERT INTO `sys_user` VALUES ('62', '', 'wpc', 'efd1add6b03cff2046b7dcd64cf84eafb8a616341a9e6d6d', '王鹏程', '2018-11-22 00:00:00', '1', '12345@qq.com', '18801061403', '10,9', '28', '1', null, null, '2018-11-22 15:17:59', null, '2018-11-23 16:16:53', null, null, null);
INSERT INTO `sys_user` VALUES ('63', '', 'ceshi', '708df741e9aafa7bafbddb2219f8b4066a5eb3777e4aec08', '王测试', '2018-11-01 00:00:00', '2', 'ceshi@qq.com', '', '8', '28', '1', null, null, '2018-11-22 19:59:51', null, '2018-11-23 14:13:01', null, null, null);
