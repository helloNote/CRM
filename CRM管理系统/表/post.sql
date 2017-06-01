/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-04-01 12:17:12
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for post
-- ----------------------------
DROP TABLE IF EXISTS `post`;
CREATE TABLE `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `职位名称` char(8) NOT NULL,
  `职位描述` char(20) NOT NULL,
  `查询权限` char(1) NOT NULL,
  `考核权限` char(1) NOT NULL,
  `销售统计分析` char(1) NOT NULL,
  `权限管理` char(1) NOT NULL,
  `后台管理` char(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of post
-- ----------------------------
INSERT INTO `post` VALUES ('1', '秘书长', '对整个公司进行管理', '是', '是', '是', '是', '是');
INSERT INTO `post` VALUES ('2', '经理', '对管理的部门', '是', '是', '是', '否', '否');
INSERT INTO `post` VALUES ('3', '助理', '辅助部门主管管理部门', '是', '否', '是', '否', '否');
INSERT INTO `post` VALUES ('4', '职员', '执行部门具体业务', '是', '否', '否', '否', '否');
