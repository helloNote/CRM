/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-04-01 12:16:45
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for activity
-- ----------------------------
DROP TABLE IF EXISTS `activity`;
CREATE TABLE `activity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `活动名称` char(8) NOT NULL,
  `时间` datetime NOT NULL,
  `地点` char(20) NOT NULL,
  `主题` char(8) NOT NULL,
  `负责部门` char(8) NOT NULL,
  `负责人` char(5) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of activity
-- ----------------------------
INSERT INTO `activity` VALUES ('1', '上坟', '0017-04-17 10:16:50', '成都', '清明祭祀', '人事部', '罗欣');
INSERT INTO `activity` VALUES ('2', '跑步', '2017-04-05 11:23:18', '成都', '运动', '体育部', '高流');
