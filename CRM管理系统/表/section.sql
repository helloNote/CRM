/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-04-01 12:17:25
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for section
-- ----------------------------
DROP TABLE IF EXISTS `section`;
CREATE TABLE `section` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `部门名称` char(8) NOT NULL,
  `部门主管` char(6) NOT NULL,
  `成立时间` datetime NOT NULL,
  `部门描述` char(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of section
-- ----------------------------
INSERT INTO `section` VALUES ('1', '人事部', '何大勇', '2016-10-03 11:13:39', '管理公司工人入职和离职');
INSERT INTO `section` VALUES ('2', '市场部', '周仓', '2016-11-10 11:15:42', '管理市场销售和业务接洽');
