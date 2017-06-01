/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-04-01 12:17:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for announcement
-- ----------------------------
DROP TABLE IF EXISTS `announcement`;
CREATE TABLE `announcement` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `信息内容` char(100) NOT NULL,
  `日期` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of announcement
-- ----------------------------
INSERT INTO `announcement` VALUES ('1', '我们要求入党仅仅有主观愿望还是不够的，还必须付诸行动，在实践中不断用切身体验来深化对党的认识，从而进一步端正入党动机。通过学习先进模范人物的事迹，通过与身边优秀的学生党员同学进行交流学习，从而强化正确', '2017-04-06 10:16:50');
INSERT INTO `announcement` VALUES ('2', '今天的天气真不错呀！草也绿了，柳树也发芽了，桃花也开了，真的是美好的一天！', '2017-04-03 10:39:53');
