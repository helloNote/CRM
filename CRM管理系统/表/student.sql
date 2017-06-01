/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-04-01 12:17:36
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `姓名` char(5) NOT NULL,
  `性别` char(1) NOT NULL,
  `出生日期` datetime NOT NULL,
  `家庭住址` char(20) NOT NULL,
  `所属班级` char(6) NOT NULL,
  `联系电话` char(12) NOT NULL,
  `父亲` char(5) NOT NULL,
  `父亲电话` char(12) NOT NULL,
  `母亲` char(5) NOT NULL,
  `母亲电话` char(12) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES ('1', '孙军', '男', '1994-07-20 11:52:27', '成都二环路34号', '红狗二班', '13965457896', '孙萨达', '18945632178', '张花', '15236458932');
INSERT INTO `student` VALUES ('2', '陈花', '女', '1996-07-16 11:54:37', '成都三环路78号', '老鼠三班', '15281504479', '陈龙', '13748965523', '马静', '19847521462');
