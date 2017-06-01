/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-04-01 12:17:19
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for school
-- ----------------------------
DROP TABLE IF EXISTS `school`;
CREATE TABLE `school` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `学校名称` char(12) NOT NULL,
  `所属城市` char(12) NOT NULL,
  `学校地址` char(20) NOT NULL,
  `联系电话` char(12) NOT NULL,
  `校长` char(5) NOT NULL,
  `学生人数` int(5) NOT NULL,
  `老师人数` int(5) NOT NULL,
  `说明` char(20) NOT NULL,
  `负责部门` char(8) NOT NULL,
  `负责人` char(5) NOT NULL,
  `状态` char(5) NOT NULL,
  `录入时间` datetime NOT NULL,
  `申请项目时间` datetime NOT NULL,
  `立刻批准时间` datetime NOT NULL,
  `审核意见` char(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `学校名称` (`学校名称`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of school
-- ----------------------------
INSERT INTO `school` VALUES ('1', '成都外国语学校', '成都市', '成都一环路北二段18号', '15281534404', '朱子明', '1200', '38', '实力强劲的贵住学校', '市场部', '周明翔', '推广开展', '2016-11-01 10:53:32', '2016-11-02 10:53:40', '2016-11-18 10:53:52', '审核通过');
INSERT INTO `school` VALUES ('2', '成都第一中学', '成都市', '成都二环路北二段5号', '15246231478', '廖聪', '1170', '35', '优异的重点中学', '市场部', '高流', '待审', '2016-12-14 10:58:28', '2016-11-17 10:58:03', '2016-12-15 10:58:53', '待审');
