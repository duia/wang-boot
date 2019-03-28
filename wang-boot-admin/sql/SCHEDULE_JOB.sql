/*
Navicat MySQL Data Transfer

Source Server         : 测试库_题库
Source Server Version : 50624
Source Host           : 123.57.41.178:3306
Source Database       : new_tiku

Target Server Type    : MYSQL
Target Server Version : 50624
File Encoding         : 65001

Date: 2019-01-17 14:04:57
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `SCHEDULE_JOB`
-- ----------------------------
DROP TABLE IF EXISTS `SCHEDULE_JOB`;
CREATE TABLE `SCHEDULE_JOB` (
  `schedule_job_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `job_name` varchar(255) DEFAULT NULL,
  `alias_name` varchar(255) DEFAULT NULL,
  `job_group` varchar(255) DEFAULT NULL,
  `job_trigger` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `cron_expression` varchar(255) DEFAULT NULL,
  `is_sync` varchar(1) NOT NULL,
  `job_type` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `bean_class` varchar(255) DEFAULT NULL,
  `spring_id` varchar(255) DEFAULT NULL,
  `method_name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `gmt_create` timestamp NULL DEFAULT NULL,
  `gmt_modify` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`schedule_job_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of SCHEDULE_JOB
-- ----------------------------
INSERT INTO `SCHEDULE_JOB` VALUES ('3', '前台科目排名', 'subUserRanking', 'tiku', '前台科目排名', '1', '0 0 2 * * ?', '0', 'class', '', 'com.duia.common.quartz.ReceptionStatisticsQuartz', '', 'subUserRanking', '前台科目排名', null, null);
INSERT INTO `SCHEDULE_JOB` VALUES ('4', '对啊帮蜡像馆', 'duiaBangLXG', 'tiku', '对啊帮蜡像馆', '1', '0 0 1 * * ?', '0', 'class', '', 'com.duia.common.quartz.ReceptionStatisticsQuartz', '', 'duiaBangLXG', '对啊帮蜡像馆', null, null);
INSERT INTO `SCHEDULE_JOB` VALUES ('5', '用户做题记录同步', 'userSynchronization', 'tiku', '用户做题记录同步', '1', '0 0 3 * * ?', '0', 'class', '', 'com.duia.common.quartz.ReceptionStatisticsQuartz', '', 'userSynchronization', '用户做题记录同步  老题库-->新题库', null, null);
INSERT INTO `SCHEDULE_JOB` VALUES ('6', '同步试题做题情况数据', 'saveAllTitleStatistics', 'tiku', '同步试题做题情况数据', '1', '0 30 0 * * ?', '0', 'class', '', '', 'tiTitleService', 'saveAllTitleStatistics', '同步试题做题情况数据，从mongo到mysql', null, null);
