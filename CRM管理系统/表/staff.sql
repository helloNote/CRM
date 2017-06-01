/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-04-01 12:17:30
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for staff
-- ----------------------------
DROP TABLE IF EXISTS `staff`;
CREATE TABLE `staff` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `姓名` char(5) NOT NULL,
  `性别` char(1) NOT NULL,
  `出生日期` datetime NOT NULL,
  `文化程度` char(5) NOT NULL,
  `所属专业` char(6) NOT NULL,
  `联系方式` char(11) NOT NULL,
  `家庭住址` char(20) NOT NULL,
  `政治面貌` char(6) NOT NULL,
  `所在部门` char(8) NOT NULL,
  `工作职位` char(6) NOT NULL,
  `入职日期` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of staff
-- ----------------------------
INSERT INTO `staff` VALUES ('1', '何荣杰', '男', '1995-07-26 11:41:37', '大专', '汉语文学', '18945456332', '成都一环路25号', '民主党派', '人事部', '经理', '2016-12-01 11:43:26');
INSERT INTO `staff` VALUES ('2', '卿鹏', '男', '1996-04-24 11:44:01', '大专', '土木工程', '13785456321', '成都二环路3号', '共青团员', '市场部', '秘书', '2016-12-01 11:47:45');
