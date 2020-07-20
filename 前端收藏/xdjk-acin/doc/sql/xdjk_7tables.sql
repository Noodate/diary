SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `city`
-- ----------------------------
DROP TABLE IF EXISTS `city`;
CREATE TABLE `city` (
  `id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `fullcode` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of city
-- ----------------------------
INSERT INTO `city` VALUES ('1', '香港特别行政区', 'XGTBXZQ', 'HK');
INSERT INTO `city` VALUES ('2', '澳门特别行政区', 'AMTBXZQ', 'MO');
INSERT INTO `city` VALUES ('3', '石家庄市', 'SHIJIAZHUANG', 'HB-SJZ');
INSERT INTO `city` VALUES ('4', '唐山市', 'TANGSHAN', 'HB-TS');
INSERT INTO `city` VALUES ('5', '秦皇岛市', 'QINGHUANGDAO', 'HB-QHD');
INSERT INTO `city` VALUES ('6', '邯郸市', 'HANDAN', 'HB-HD');
INSERT INTO `city` VALUES ('7', '邢台市', 'XINGTAI', 'HB-XT');
INSERT INTO `city` VALUES ('8', '保定市', 'BAODING', 'HB-BD');
INSERT INTO `city` VALUES ('9', '张家口市', 'ZHANGJIAKOU', 'HB-ZJK');
INSERT INTO `city` VALUES ('10', '沧州市', 'CANGZHOU', 'HB-CZ');
INSERT INTO `city` VALUES ('11', '廊坊市', 'LANGFANG', 'HB-LF');
INSERT INTO `city` VALUES ('12', '衡水市', 'HENGSHUI', 'HB-HS');
INSERT INTO `city` VALUES ('13', '承德市', 'CHENGDE', 'HB-CD');
INSERT INTO `city` VALUES ('14', '太原市', 'TAIYUAN', 'SX-TY');
INSERT INTO `city` VALUES ('15', '大同市', 'DATONG', 'SX-DT');
INSERT INTO `city` VALUES ('16', '阳泉市', 'YANGQUAN', 'SX-YQ');
INSERT INTO `city` VALUES ('17', '长治市', 'CHANGZHI', 'SX-CZ');
INSERT INTO `city` VALUES ('18', '晋城市', 'JINCHENG', 'SX-JC');
INSERT INTO `city` VALUES ('19', '朔州市', 'SHUOZHOU', 'SX-SZ');
INSERT INTO `city` VALUES ('20', '晋中市', 'JINZHONG', 'SX-JZ');
INSERT INTO `city` VALUES ('21', '运城市', 'YUNCHENG', 'SX-YC');
INSERT INTO `city` VALUES ('22', '忻州市', 'XINZHOU', 'SX-XZ');
INSERT INTO `city` VALUES ('23', '临汾市', 'LINFEN', 'SX-LF');
INSERT INTO `city` VALUES ('24', '吕梁市', 'LVLIANG', 'SX-LL');
INSERT INTO `city` VALUES ('25', '呼和浩特市', 'HUHEHAOTE', 'NM-HHHT');
INSERT INTO `city` VALUES ('26', '包头市', 'BAOTOU', 'NM-BT');
INSERT INTO `city` VALUES ('27', '乌海市', 'WUHAI', 'NM-WH');
INSERT INTO `city` VALUES ('28', '赤峰市', 'CHIFENG', 'NM-CF');
INSERT INTO `city` VALUES ('29', '通辽市', 'TONGLIAO', 'NM-TL');
INSERT INTO `city` VALUES ('30', '鄂尔多斯市', 'EERDUOSI', 'NM-EEDS');
INSERT INTO `city` VALUES ('31', '呼伦贝尔市', 'HULUNBEIER', 'NM-HLBE');
INSERT INTO `city` VALUES ('32', '巴彦淖尔市', null, 'NM-BYLE');
INSERT INTO `city` VALUES ('33', '乌兰察布市', 'WULANCHABU', 'NM-WLCB');
INSERT INTO `city` VALUES ('34', '兴安盟', 'XINANMENG', 'NM-XAM');
INSERT INTO `city` VALUES ('35', '锡林郭勒盟', 'XILINGGUOLE', 'NM-XLGL');
INSERT INTO `city` VALUES ('36', '阿拉善盟', 'ALASHANG', 'NM-ALS');
INSERT INTO `city` VALUES ('37', '南昌市', 'NANCHANG', 'JX-NC');
INSERT INTO `city` VALUES ('38', '景德镇市', 'JINDEZHENG', 'JX-JDZ');
INSERT INTO `city` VALUES ('39', '萍乡市', 'PINGXIANG', 'JX-PX');
INSERT INTO `city` VALUES ('40', '九江市', 'JIUJIANG', 'JX-JJ');
INSERT INTO `city` VALUES ('41', '新余市', 'XINYU', 'JX-XY');
INSERT INTO `city` VALUES ('42', '鹰潭市', 'YINTAN', 'JX-YT');
INSERT INTO `city` VALUES ('43', '赣州市', 'GANZHOU', 'JX-GZ');
INSERT INTO `city` VALUES ('44', '吉安市', 'JIAN', 'JX-JA');
INSERT INTO `city` VALUES ('45', '宜春市', 'YICHUN', 'JX-YC');
INSERT INTO `city` VALUES ('46', '抚州市', 'FUZHOU', 'JX-FZ');
INSERT INTO `city` VALUES ('47', '上饶市', 'SHANGRAO', 'JX-SR');
INSERT INTO `city` VALUES ('48', '郑州市', 'ZHENZHOU', 'HN-ZZ');
INSERT INTO `city` VALUES ('49', '开封市', 'KAIFENG', 'HA-KF');
INSERT INTO `city` VALUES ('50', '洛阳市', 'LUOYANG', 'HA-LY');
INSERT INTO `city` VALUES ('51', '平顶山市', 'PINGDINGSHAN', 'HA-PDS');
INSERT INTO `city` VALUES ('52', '安阳市', 'ANYANG', 'HA-AY');
INSERT INTO `city` VALUES ('53', '鹤壁市', 'HEBI', 'HA-HB');
INSERT INTO `city` VALUES ('54', '新乡市', 'XINXIANG', 'HA-XX');
INSERT INTO `city` VALUES ('55', '焦作市', 'JIAOZUO', 'HA-JZ');
INSERT INTO `city` VALUES ('56', '濮阳市', 'PUYANG', 'HA-PY');
INSERT INTO `city` VALUES ('57', '许昌市', 'XUCHANG', 'HA-XC');
INSERT INTO `city` VALUES ('58', '漯河市', 'LUOHE', 'HA-LH');
INSERT INTO `city` VALUES ('59', '三门峡市', 'SANMENXIA', 'HA-SMX');
INSERT INTO `city` VALUES ('60', '南阳市', 'NANYANG', 'HA-NY');
INSERT INTO `city` VALUES ('61', '商丘市', 'SHANGQIU', 'HA-SQ');
INSERT INTO `city` VALUES ('62', '信阳市', 'XINYANG', 'HA-XY');
INSERT INTO `city` VALUES ('63', '周口市', 'ZHOUKOU', 'HA-ZK');
INSERT INTO `city` VALUES ('64', '驻马店市', 'ZHUMADIAN', 'HA-ZMD');
INSERT INTO `city` VALUES ('65', '长沙市', 'CHANGSHANG', 'HN-CS');
INSERT INTO `city` VALUES ('66', '株洲市', 'ZHUZHOU', 'HN-ZZ');
INSERT INTO `city` VALUES ('67', '湘潭市', 'XIANGTAN', 'HN-XT');
INSERT INTO `city` VALUES ('68', '衡阳市', 'HENGYANG', 'HN-HY');
INSERT INTO `city` VALUES ('69', '邵阳市', 'SHAOYANG', 'HN-SY');
INSERT INTO `city` VALUES ('70', '岳阳市', 'YUEYANG', 'HN-YY');
INSERT INTO `city` VALUES ('71', '常德市', 'CHANGDE', 'HN-CD');
INSERT INTO `city` VALUES ('72', '张家界市', 'ZHANGJIAJIE', 'HN-ZJJ');
INSERT INTO `city` VALUES ('73', '益阳市', 'YIYANG', 'HN-YY');
INSERT INTO `city` VALUES ('74', '郴州市', 'BINZHOU', 'HN-BZ');
INSERT INTO `city` VALUES ('75', '永州市', 'YONGZHOU', 'HN-YZ');
INSERT INTO `city` VALUES ('76', '怀化市', 'HUAIHUA', 'HN-HH');
INSERT INTO `city` VALUES ('77', '娄底市', 'LOUDI', 'HN-LD');
INSERT INTO `city` VALUES ('78', '湘西土家族苗族', 'XIANGXITUJIA', 'HN-XXTJ');
INSERT INTO `city` VALUES ('79', '南宁市', 'NANNING', 'GX-NN');
INSERT INTO `city` VALUES ('80', '柳州市', 'LIUZHOU', 'GX-LZ');
INSERT INTO `city` VALUES ('81', '桂林市', 'GUILIN', 'GX-GL');
INSERT INTO `city` VALUES ('82', '梧州市', 'WUZHOU', 'GX-WZ');
INSERT INTO `city` VALUES ('83', '北海市', 'BEIHAI', 'GX-BH');
INSERT INTO `city` VALUES ('84', '防城港市', 'FANGCHENGGAN', 'GX-FCG');
INSERT INTO `city` VALUES ('85', '钦州市', 'QINZHOU', 'GX-QZ');
INSERT INTO `city` VALUES ('86', '贵港市', 'GUIGANG', 'GX-GG');
INSERT INTO `city` VALUES ('87', '玉林市', 'YULIN', 'GX-YL');
INSERT INTO `city` VALUES ('88', '百色市', 'BAISE', 'GX-BS');
INSERT INTO `city` VALUES ('89', '贺州市', 'HEZHOU', 'GX-HZ');
INSERT INTO `city` VALUES ('90', '河池市', 'HECHI', 'GX-HC');
INSERT INTO `city` VALUES ('91', '来宾市', 'LIABIN', 'GX-LB');
INSERT INTO `city` VALUES ('92', '崇左市', 'CHONGZUO', 'GX-CZ');
INSERT INTO `city` VALUES ('93', '成都市', 'CHENGDU', 'SC-CD');
INSERT INTO `city` VALUES ('94', '自贡市', 'ZIGONG', 'SC-ZG');
INSERT INTO `city` VALUES ('95', '攀枝花市', 'PANZHIHUA', 'SC-PZH');
INSERT INTO `city` VALUES ('96', '泸州市', 'LUZHOU', 'SC-LZ');
INSERT INTO `city` VALUES ('97', '德阳市', 'DEYANG', 'SC-DY');
INSERT INTO `city` VALUES ('98', '绵阳市', 'MIANYANG', 'SC-MY');
INSERT INTO `city` VALUES ('99', '广元市', 'GUANGYUAN', 'SC-GY');
INSERT INTO `city` VALUES ('100', '遂宁市', 'SUINING', 'SC-SN');
INSERT INTO `city` VALUES ('101', '内江市', 'NEIJIANG', 'SC-NJ');
INSERT INTO `city` VALUES ('102', '乐山市', 'LESHAN', 'SC-LS');
INSERT INTO `city` VALUES ('103', '南充市', 'NANCHONG', 'SC-NC');
INSERT INTO `city` VALUES ('104', '眉山市', 'MEISHAN', 'SC-MS');
INSERT INTO `city` VALUES ('105', '宜宾市', 'YIBIN', 'SC-YB');
INSERT INTO `city` VALUES ('106', '广安市', 'GUANGAN', 'SC-GA');
INSERT INTO `city` VALUES ('107', '达州市', 'DAZHOU', 'SC-DZ');
INSERT INTO `city` VALUES ('108', '雅安市', 'YAAN', 'SC-YA');
INSERT INTO `city` VALUES ('109', '巴中市', 'BAZHONG', 'SC-BZ');
INSERT INTO `city` VALUES ('110', '资阳市', 'ZIYANG', 'SC-ZY');
INSERT INTO `city` VALUES ('111', '阿坝藏族羌族自治州', 'ABA', 'SC-AB');
INSERT INTO `city` VALUES ('112', '甘孜藏族自治州', 'GANZIZANGZU', 'SC-GZZZ');
INSERT INTO `city` VALUES ('113', '凉山彝族自治州', 'LIANGSHANGYIZU', 'SC-LSYZ');
INSERT INTO `city` VALUES ('114', '西安市', 'XIAN', 'SN-XA');
INSERT INTO `city` VALUES ('115', '铜川市', 'TONGCHUANG', 'SN-TC');
INSERT INTO `city` VALUES ('116', '宝鸡市', 'BAOJI', 'SN-BJ');
INSERT INTO `city` VALUES ('117', '咸阳市', 'XIANYANG', 'SN-XY');
INSERT INTO `city` VALUES ('118', '渭南市', 'WEINAN', 'SN-WN');
INSERT INTO `city` VALUES ('119', '延安市', 'YANAN', 'SN-YA');
INSERT INTO `city` VALUES ('120', '汉中市', 'HANZHOU', 'SN-HZ');
INSERT INTO `city` VALUES ('121', '榆林市', 'YULIN', 'SN-YL');
INSERT INTO `city` VALUES ('122', '安康市', 'ANKANG', 'SN-AK');
INSERT INTO `city` VALUES ('123', '商洛市', 'SHANGLUO', 'SN-SL');
INSERT INTO `city` VALUES ('124', '西宁市', 'XINING', 'QH-XN');
INSERT INTO `city` VALUES ('125', '海东市', 'HAIDONG', 'QH-HD');
INSERT INTO `city` VALUES ('126', '海北藏族自治州', 'HAIBEIZANGZU', 'QH-HBZZ');
INSERT INTO `city` VALUES ('127', '黄南藏族自治州', 'HUANGNANZANGZU', 'QH-HNZZ');
INSERT INTO `city` VALUES ('128', '海南藏族自治州', 'HAINANZANGZU', 'QH-HNZZ');
INSERT INTO `city` VALUES ('129', '果洛藏族自治州', 'GUOLUOZANGZU', 'QH-GLZZ');
INSERT INTO `city` VALUES ('130', '玉树藏族自治州', 'YUSHUZANGZU', 'QH-YSZZ');
INSERT INTO `city` VALUES ('131', '海西蒙古族藏族', 'HAIXIMENGGUZU', 'QH-HXMGZ');
INSERT INTO `city` VALUES ('132', '乌鲁木齐市', 'WULUMUQI', 'XJ-WLMQ');
INSERT INTO `city` VALUES ('133', '克拉玛依市', 'WULAMAYI', 'XJ-WLMY');
INSERT INTO `city` VALUES ('134', '吐鲁番地区', 'TULUFAN', 'XJ-TLF');
INSERT INTO `city` VALUES ('135', '哈密地区', 'HAMI', 'XJ-HM');
INSERT INTO `city` VALUES ('136', '昌吉回族自治州', 'CHANGJI', 'XJ-CJ');
INSERT INTO `city` VALUES ('137', '博尔塔拉蒙古自治州', 'BOERTALAMENGGU', 'XJ-BETLMG');
INSERT INTO `city` VALUES ('138', '巴音郭楞蒙古自治州', 'BAYINGUOLENGMENGGU', 'XJ-BYGLMG');
INSERT INTO `city` VALUES ('139', '阿克苏地区', 'AKESU', 'XJ-AKS');
INSERT INTO `city` VALUES ('140', '克孜勒苏柯尔克', 'KEZILESUKEER', 'XJ-KZLSKEK');
INSERT INTO `city` VALUES ('141', '喀什地区', 'KASHI', 'XJ-KS');
INSERT INTO `city` VALUES ('142', '和田地区', 'HETIAN', 'XJ-HT');
INSERT INTO `city` VALUES ('143', '伊犁哈萨克自治州', 'YILIHASAKE', 'XJ-YLHSK');
INSERT INTO `city` VALUES ('144', '塔城地区', 'TACHENG', 'XJ-TC');
INSERT INTO `city` VALUES ('145', '阿勒泰地区', 'ALETAI', 'XJ-ALT');
INSERT INTO `city` VALUES ('146', '沈阳市', 'SHENYANG', 'LN-SY');
INSERT INTO `city` VALUES ('147', '大连市', 'DALIANG', 'LN-DL');
INSERT INTO `city` VALUES ('148', '鞍山市', 'ANSHAN', 'LN-AS');
INSERT INTO `city` VALUES ('149', '抚顺市', 'FUSHUN', 'LN-FS');
INSERT INTO `city` VALUES ('150', '本溪市', 'BENXI', 'LN-BX');
INSERT INTO `city` VALUES ('151', '丹东市', 'DANDONG', 'LN-DD');
INSERT INTO `city` VALUES ('152', '锦州市', 'JINZHOU', 'LN-JZ');
INSERT INTO `city` VALUES ('153', '营口市', 'YINKOU', 'LN-YK');
INSERT INTO `city` VALUES ('154', '阜新市', 'FUXIN', 'LN-FX');
INSERT INTO `city` VALUES ('155', '辽阳市', 'LIAOYANG', 'LN-LY');
INSERT INTO `city` VALUES ('156', '盘锦市', 'PANJIN', 'LN-PJ');
INSERT INTO `city` VALUES ('157', '铁岭市', 'TIELING', 'LN-TL');
INSERT INTO `city` VALUES ('158', '朝阳市', 'CHAOYANG', 'LN-CY');
INSERT INTO `city` VALUES ('159', '葫芦岛市', 'HULUDAO', 'LN-HLD');
INSERT INTO `city` VALUES ('160', '长春市', 'CHANGCHUN', 'JL-CC');
INSERT INTO `city` VALUES ('161', '吉林市', 'JILING', 'JL-JL');
INSERT INTO `city` VALUES ('162', '四平市', 'SIPING', 'JL-SP');
INSERT INTO `city` VALUES ('163', '辽源市', 'LIAOYUAN', 'JL-LY');
INSERT INTO `city` VALUES ('164', '通化市', 'TONGHUA', 'JL-TH');
INSERT INTO `city` VALUES ('165', '白山市', 'BAISHAN', 'JL-BS');
INSERT INTO `city` VALUES ('166', '松原市', 'SONGYUAN', 'JL-SY');
INSERT INTO `city` VALUES ('167', '白城市', 'BAICHENG', 'JL-BC');
INSERT INTO `city` VALUES ('168', '延边朝鲜族自治', 'YANBIANCHAOXIANZU', 'JL-YYCXZ');
INSERT INTO `city` VALUES ('169', '哈尔滨市', 'HAIERBIN', 'HL-HEB');
INSERT INTO `city` VALUES ('170', '齐齐哈尔市', 'QIQIHAER', 'HL-QQHE');
INSERT INTO `city` VALUES ('171', '鸡西市', 'JIXI', 'HL-JX');
INSERT INTO `city` VALUES ('172', '鹤岗市', 'HEGAN', 'HL-HG');
INSERT INTO `city` VALUES ('173', '双鸭山市', 'SHUANGYASHAN', 'HL-SYS');
INSERT INTO `city` VALUES ('174', '大庆市', 'DAQING', 'HL-DQ');
INSERT INTO `city` VALUES ('175', '伊春市', 'YICHUN', 'HL-YC');
INSERT INTO `city` VALUES ('176', '佳木斯市', 'JIAMUSI', 'HL-JMS');
INSERT INTO `city` VALUES ('177', '七台河市', 'QITAIHE', 'HL-QTH');
INSERT INTO `city` VALUES ('178', '牡丹江市', 'MUDANJIANG', 'HL-MDJ');
INSERT INTO `city` VALUES ('179', '黑河市', 'HEIHE', 'HL-HH');
INSERT INTO `city` VALUES ('180', '绥化市', 'SUIHUA', 'HL-SH');
INSERT INTO `city` VALUES ('181', '大兴安岭地区', 'DAXINGANLING', 'HL-DXAL');
INSERT INTO `city` VALUES ('182', '南京市', 'NANJING', 'JS-NJ');
INSERT INTO `city` VALUES ('183', '无锡市', 'WUXI', 'JS-WX');
INSERT INTO `city` VALUES ('184', '徐州市', 'XUZHOU', 'JS-XZ');
INSERT INTO `city` VALUES ('185', '常州市', 'CHANGZHOU', 'JS-CZ');
INSERT INTO `city` VALUES ('186', '苏州市', 'CHANGZHOU', 'JS-CZ');
INSERT INTO `city` VALUES ('187', '南通市', 'NANTONG', 'JS-NT');
INSERT INTO `city` VALUES ('188', '连云港市', 'LIANYUNGAN', 'JS-LYG');
INSERT INTO `city` VALUES ('189', '淮安市', 'HUAIAN', 'JS-HA');
INSERT INTO `city` VALUES ('190', '盐城市', 'YANCHENG', 'JS-YC');
INSERT INTO `city` VALUES ('191', '扬州市', 'YANGZHOU', 'JS-YZ');
INSERT INTO `city` VALUES ('192', '镇江市', 'ZHENJIANG', 'JS-ZJ');
INSERT INTO `city` VALUES ('193', '泰州市', 'TAIZHOU', 'JS-TZ');
INSERT INTO `city` VALUES ('194', '宿迁市', 'SUQIAN', 'JS-SQ');
INSERT INTO `city` VALUES ('195', '杭州市', 'HANGZHOU', 'ZJ-HZ');
INSERT INTO `city` VALUES ('196', '宁波市', 'NINGBO', 'ZJ-NB');
INSERT INTO `city` VALUES ('197', '温州市', 'WENZHOU', 'ZJ-WZ');
INSERT INTO `city` VALUES ('198', '嘉兴市', 'JIAXING', 'ZJ-JX');
INSERT INTO `city` VALUES ('199', '湖州市', 'HUZHOU', 'ZJ-HZ');
INSERT INTO `city` VALUES ('200', '绍兴市', 'SHAOXING', 'ZJ-SX');
INSERT INTO `city` VALUES ('201', '金华市', 'JINHUA', 'ZJ-JH');
INSERT INTO `city` VALUES ('202', '衢州市', 'QUZHOU', 'ZJ-QZ');
INSERT INTO `city` VALUES ('203', '舟山市', 'ZHOUSHAN', 'ZJ-ZS');
INSERT INTO `city` VALUES ('204', '台州市', 'TAIZHOU', 'ZJ-TZ');
INSERT INTO `city` VALUES ('205', '丽水市', 'LISHUI', 'ZJ-LS');
INSERT INTO `city` VALUES ('206', '合肥市', 'HEFEI', 'AH-HF');
INSERT INTO `city` VALUES ('207', '芜湖市', 'WUHU', 'AH-WH');
INSERT INTO `city` VALUES ('208', '蚌埠市', 'BENGBU', 'AH-BB');
INSERT INTO `city` VALUES ('209', '淮南市', 'HUAINAN', 'AH-HN');
INSERT INTO `city` VALUES ('210', '马鞍山市', 'MAANSHAN', 'AH-MAS');
INSERT INTO `city` VALUES ('211', '淮北市', 'HUAIBEI', 'AH-HB');
INSERT INTO `city` VALUES ('212', '铜陵市', 'TONGLING', 'AH-TL');
INSERT INTO `city` VALUES ('213', '安庆市', 'ANQING', 'AH-AQ');
INSERT INTO `city` VALUES ('214', '黄山市', 'HUANGSHAN', 'AH-HS');
INSERT INTO `city` VALUES ('215', '滁州市', 'XUZHOU', 'AH-XZ');
INSERT INTO `city` VALUES ('216', '阜阳市', 'FUYANG', 'AH-FY');
INSERT INTO `city` VALUES ('217', '宿州市', 'SUZHOU', 'AH-SZ');
INSERT INTO `city` VALUES ('218', '六安市', 'LIUAN', 'AH-LA');
INSERT INTO `city` VALUES ('219', '亳州市', 'BOZHOU', 'AH-BZ');
INSERT INTO `city` VALUES ('220', '池州市', 'CHIZHOU', 'AH-CZ');
INSERT INTO `city` VALUES ('221', '宣城市', 'YICHENG', 'AH-YC');
INSERT INTO `city` VALUES ('222', '福州市', 'FUZHOU', 'FJ-FZ');
INSERT INTO `city` VALUES ('223', '厦门市', 'XIAMEN', 'FJ-XM');
INSERT INTO `city` VALUES ('224', '莆田市', 'PUTIAN', 'FJ-FT');
INSERT INTO `city` VALUES ('225', '三明市', 'SANMING', 'FJ-SM');
INSERT INTO `city` VALUES ('226', '泉州市', 'QUANZHOU', 'FJ-QZ');
INSERT INTO `city` VALUES ('227', '漳州市', 'ZHANGZHOU', 'FJ-ZZ');
INSERT INTO `city` VALUES ('228', '南平市', 'NANPING', 'FJ-NP');
INSERT INTO `city` VALUES ('229', '龙岩市', 'LONGYAN', 'FJ-LY');
INSERT INTO `city` VALUES ('230', '宁德市', 'NINGDE', 'FJ-ND');
INSERT INTO `city` VALUES ('231', '济南市', 'JINAN', 'SD-JN');
INSERT INTO `city` VALUES ('232', '青岛市', 'QINGDAO', 'SD-QD');
INSERT INTO `city` VALUES ('233', '淄博市', 'ZIBO', 'SD-ZB');
INSERT INTO `city` VALUES ('234', '枣庄市', 'ZAOZHUANG', 'SD-ZZ');
INSERT INTO `city` VALUES ('235', '东营市', 'DONGYING', 'SD-DY');
INSERT INTO `city` VALUES ('236', '烟台市', 'YANTAI', 'SD-YT');
INSERT INTO `city` VALUES ('237', '潍坊市', 'WEIFANG', 'SD-WF');
INSERT INTO `city` VALUES ('238', '济宁市', 'JINING', 'SD-JN');
INSERT INTO `city` VALUES ('239', '泰安市', 'TAIAN', 'SD-TA');
INSERT INTO `city` VALUES ('240', '威海市', 'WEIHAI', 'SD-WH');
INSERT INTO `city` VALUES ('241', '日照市', 'RIZHAO', 'SD-RZ');
INSERT INTO `city` VALUES ('242', '莱芜市', 'LAIWU', 'SD-LW');
INSERT INTO `city` VALUES ('243', '临沂市', 'LINYI', 'SD-LY');
INSERT INTO `city` VALUES ('244', '德州市', 'DEZHOU', 'SD-DZ');
INSERT INTO `city` VALUES ('245', '聊城市', 'LIAOCHENG', 'SD-LC');
INSERT INTO `city` VALUES ('246', '滨州市', 'BINZHOU', 'SD-BZ');
INSERT INTO `city` VALUES ('247', '菏泽市', 'HEZE', 'SD-HZ');
INSERT INTO `city` VALUES ('248', '武汉市', 'WUHAN', 'HE-WH');
INSERT INTO `city` VALUES ('249', '黄石市', 'HUANGSHI', 'HE-HS');
INSERT INTO `city` VALUES ('250', '十堰市', 'SHIYAN', 'HE-SY');
INSERT INTO `city` VALUES ('251', '宜昌市', 'YICHANG', 'HE-YC');
INSERT INTO `city` VALUES ('252', '襄阳市', 'XIANGYANG', 'HE-XY');
INSERT INTO `city` VALUES ('253', '鄂州市', 'EZHOU', 'HE-EZ');
INSERT INTO `city` VALUES ('254', '荆门市', 'JINGMEN', 'HE-JM');
INSERT INTO `city` VALUES ('255', '孝感市', 'XIAOGAN', 'HE-XG');
INSERT INTO `city` VALUES ('256', '荆州市', 'JINGZHOU', 'HE-JZ');
INSERT INTO `city` VALUES ('257', '黄冈市', 'HUANGGAN', 'HE-HG');
INSERT INTO `city` VALUES ('258', '咸宁市', 'XIANNING', 'HE-XN');
INSERT INTO `city` VALUES ('259', '随州市', 'SUIZHOU', 'HE-SZ');
INSERT INTO `city` VALUES ('260', '恩施土家族苗族', 'ENSHI', 'HE-ES');
INSERT INTO `city` VALUES ('261', '广州市', 'GUANGZHOU', 'GD-GZ');
INSERT INTO `city` VALUES ('262', '韶关市', 'SHAOGUANG', 'GD-SG');
INSERT INTO `city` VALUES ('263', '深圳市', 'SHENGZHEN', 'GD-SZ');
INSERT INTO `city` VALUES ('264', '珠海市', 'ZHUHAI', 'GD-ZH');
INSERT INTO `city` VALUES ('265', '汕头市', 'SHANGTOU', 'GD-ST');
INSERT INTO `city` VALUES ('266', '佛山市', 'FOSHAN', 'GD-FS');
INSERT INTO `city` VALUES ('267', '江门市', 'JIANGMEN', 'GD-JM');
INSERT INTO `city` VALUES ('268', '湛江市', 'ZHANJIANG', 'GD-ZJ');
INSERT INTO `city` VALUES ('269', '茂名市', 'MAOMING', 'GD-MM');
INSERT INTO `city` VALUES ('270', '肇庆市', 'ZHAOQING', 'GD-ZQ');
INSERT INTO `city` VALUES ('271', '惠州市', 'HUIZHOU', 'GD-HZ');
INSERT INTO `city` VALUES ('272', '梅州市', 'MEIZHOU', 'GD-MZ');
INSERT INTO `city` VALUES ('273', '汕尾市', 'SHANWEI', 'GD-SW');
INSERT INTO `city` VALUES ('274', '河源市', 'HEYUAN', 'GD-HY');
INSERT INTO `city` VALUES ('275', '阳江市', 'YANGJIANG', 'GD-YJ');
INSERT INTO `city` VALUES ('276', '清远市', 'QINGYUAN', 'GD-QY');
INSERT INTO `city` VALUES ('277', '东莞市', 'DONGWAN', 'GD-DW');
INSERT INTO `city` VALUES ('278', '中山市', 'ZHONGSHAN', 'GD-ZS');
INSERT INTO `city` VALUES ('279', '潮州市', 'CHAOZHOU', 'GD-CZ');
INSERT INTO `city` VALUES ('280', '揭阳市', 'JIEYANG', 'JYG');
INSERT INTO `city` VALUES ('281', '云浮市', 'YUNFU', 'GD-YF');
INSERT INTO `city` VALUES ('282', '海口市', 'HAIKOU', 'HI-HK');
INSERT INTO `city` VALUES ('283', '三亚市', 'SANYA', 'HI-SY');
INSERT INTO `city` VALUES ('284', '三沙市', 'SANSHA', 'HI-SS');
INSERT INTO `city` VALUES ('285', '贵阳市', 'GUIYANG', 'GZ-GY');
INSERT INTO `city` VALUES ('286', '六盘水市', 'LIUPANGSHUI', 'GZ-LPS');
INSERT INTO `city` VALUES ('287', '遵义市', 'ZUIYI', 'GZ-ZY');
INSERT INTO `city` VALUES ('288', '安顺市', 'ANSHUN', 'GZ-AS');
INSERT INTO `city` VALUES ('289', '毕节市', 'BIJIE', 'GZ-BJ');
INSERT INTO `city` VALUES ('290', '铜仁市', 'TONGREN', 'GZ-TR');
INSERT INTO `city` VALUES ('291', '黔西南布依族苗', 'QIANXINANBUYIZU', 'GZ-QXNBYZ');
INSERT INTO `city` VALUES ('292', '黔东南苗族侗族', 'QIANDONGNANMIAOZU', 'GZ-QDNMZ');
INSERT INTO `city` VALUES ('293', '黔南布依族苗族', 'QIANNANBUYIZU', 'GZ-QNBYZ');
INSERT INTO `city` VALUES ('294', '昆明市', 'KUNMING', 'YN-KM');
INSERT INTO `city` VALUES ('295', '曲靖市', 'QUJING', 'YN-QJ');
INSERT INTO `city` VALUES ('296', '玉溪市', 'YUXI', 'YN-YX');
INSERT INTO `city` VALUES ('297', '保山市', 'BAOSHAN', 'YN-BS');
INSERT INTO `city` VALUES ('298', '昭通市', 'ZHAOTONG', 'YN-ZT');
INSERT INTO `city` VALUES ('299', '丽江市', 'LIJIANG', 'YN-LJ');
INSERT INTO `city` VALUES ('300', '普洱市', 'PUER', 'YN-PE');
INSERT INTO `city` VALUES ('301', '临沧市', 'LINCANG', 'YN-LC');
INSERT INTO `city` VALUES ('302', '楚雄彝族自治州', 'CHUXIONGYIZU', 'YN-CXYZ');
INSERT INTO `city` VALUES ('303', '红河哈尼族彝族自治州', 'HONGHEHANIZU', 'YN-HHHNZ');
INSERT INTO `city` VALUES ('304', '文山壮族苗族自治州', 'WENSHANZHUANGZU', 'YN-WSZZMZ');
INSERT INTO `city` VALUES ('305', '西双版纳傣族自治州', 'XISHUANGBANNA', 'YN-XSBN');
INSERT INTO `city` VALUES ('306', '大理白族自治州', 'DALIBAIZU', 'YN-DLBZ');
INSERT INTO `city` VALUES ('307', '德宏傣族景颇族自治州', 'DEHONGDAZU', 'YN-DHDZ');
INSERT INTO `city` VALUES ('308', '怒江傈僳族自治州', 'NUJIANGLISU', 'YN-NJLSZ');
INSERT INTO `city` VALUES ('309', '迪庆藏族自治州', 'DEQINGZANGZU', 'YN-DQZZ');
INSERT INTO `city` VALUES ('310', '拉萨市', 'LASA', 'XZ-LS');
INSERT INTO `city` VALUES ('311', '昌都地区', 'CHANGDOU', 'XZ-CD');
INSERT INTO `city` VALUES ('312', '山南地区', 'SHANNAN', 'XZ-SN');
INSERT INTO `city` VALUES ('313', '日喀则地区', 'RIKAZE', 'XZ-RKZ');
INSERT INTO `city` VALUES ('314', '那曲地区', 'NAQU', 'XZ-NQ');
INSERT INTO `city` VALUES ('315', '阿里地区', 'ALI', 'XZ-AL');
INSERT INTO `city` VALUES ('316', '林芝地区', 'LINZHI', 'XZ-LZ');
INSERT INTO `city` VALUES ('317', '兰州市', 'LANZHOU', 'GS-LZ');
INSERT INTO `city` VALUES ('318', '嘉峪关市', 'JIAYUGUAN', 'GS-JYG');
INSERT INTO `city` VALUES ('319', '金昌市', 'JINCHANG', 'GS-JC');
INSERT INTO `city` VALUES ('320', '白银市', 'BAIYIN', 'GS-BY');
INSERT INTO `city` VALUES ('321', '天水市', 'TIANSHUI', 'GS-TS');
INSERT INTO `city` VALUES ('322', '武威市', 'WUWEI', 'GS-WW');
INSERT INTO `city` VALUES ('323', '张掖市', 'ZHANGYE', 'GS-ZY');
INSERT INTO `city` VALUES ('324', '平凉市', 'PINGLIANG', 'GS-PL');
INSERT INTO `city` VALUES ('325', '酒泉市', 'JIUQUAN', 'GS-JQ');
INSERT INTO `city` VALUES ('326', '庆阳市', 'QINGYANG', 'GS-QY');
INSERT INTO `city` VALUES ('327', '定西市', 'DINGXI', 'GS-DX');
INSERT INTO `city` VALUES ('328', '陇南市', 'LONGNAN', 'GS-LN');
INSERT INTO `city` VALUES ('329', '临夏回族自治州', 'LINXIAHUIZU', 'GS-LXHZ');
INSERT INTO `city` VALUES ('330', '甘南藏族自治州', 'GANNANZANGZU', 'GS-GNZZ');
INSERT INTO `city` VALUES ('331', '银川市', 'YINCHUANG', 'NX-YC');
INSERT INTO `city` VALUES ('332', '石嘴山市', 'SHIZUISHAN', 'NX-SZS');
INSERT INTO `city` VALUES ('333', '吴忠市', 'WUZHONG', 'NX-WZ');
INSERT INTO `city` VALUES ('334', '固原市', 'GUYUAN', 'NX-GY');
INSERT INTO `city` VALUES ('335', '中卫市', 'ZHONGWEI', 'NX-ZW');

-- ----------------------------
-- Table structure for `mail`
-- ----------------------------
DROP TABLE IF EXISTS `mail`;
CREATE TABLE `mail` (
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `mails` varchar(255) DEFAULT NULL,
  `project` varchar(255) DEFAULT NULL,
  `paths` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mail
-- ----------------------------
INSERT INTO `mail` VALUES ('周璇璇', '15130150565', '123456', 'zhouxuanxuan@cdb.com.cn;', '石家庄国际展览中心项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0311hb/001AHB_HB-SJZ');
INSERT INTO `mail` VALUES ('刘治锐', '18731122331', '123456', 'liuzhirui@cdb.com.cn', '河北省2014年第一批棚户区改造项目（邯郸）', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0991xj/001AXJ_XJ-HT/');
INSERT INTO `mail` VALUES ('刘洋', '13582113162', '123456', 'liuyanghb@cdb.com.cn', '邯郸市道路客运中心枢纽项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0311hb/001AHB_HB-HD/');
INSERT INTO `mail` VALUES ('郑宗', '13673231029', '123456', 'zhengzonghb@cdb.com.cn', '年翻新40万套工程轮胎建设项目;年加工50000吨肉鸡熟食制品生产线（一期）', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0311hb/001AHB_HB-XT;/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0311hb/001AHB_HB-HD/    ');
INSERT INTO `mail` VALUES ('冯磊', '15731183370', '123456', 'fengleihb@cdb.com.cn', '年产20万吨野生酸枣汁扩建项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0311hb/001AHB_HB-ZH/');
INSERT INTO `mail` VALUES ('张晶', '18803113755', '123456', 'hb_zhangjing@cdb.com.cn', '河北分行所有项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0311hb');
INSERT INTO `mail` VALUES ('沈韵', '18156005919', '123456', 'shenyun@cdb.com.cn', '芜湖市G309项目（原G205示范改造工程项目）', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0551ah/001AAH_AH-WH/');
INSERT INTO `mail` VALUES ('宫成', '13635516969', '123456', null, '安庆市外环北路工程项目', null);
INSERT INTO `mail` VALUES ('姜珊', '18156005950', '123456', 'jiangshan_hf@cdb.com.cn', '阜阳合肥现代产业园区福和家园（美好乡村）——阜阳合肥现代产业园区起步区安置小区工程子项目', null);
INSERT INTO `mail` VALUES ('高伟', '18919697551', '123456', 'gaowei@cdb.com.cn', '新安江流域综合治理项目二期工程', null);
INSERT INTO `mail` VALUES ('丁伟杰', '18919600377', '123456', null, '安徽分行所有项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0551ah/');
INSERT INTO `mail` VALUES ('麦家星', '13925086035', '123456', 'maijiaxing@cdb.com.cn', '肇庆新区棚户区改造（第一期项目）', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/020gd/001AGD_GD-ZQ/');
INSERT INTO `mail` VALUES ('乔哲', '13632185886', '123456', 'qiaozhe@cdb.com.cn', '肇庆新区棚户区改造（第一期项目）', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/020gd/001AGD_GD-ZQ/');
INSERT INTO `mail` VALUES ('杨广武', '13609641712', '123456', 'yangguangwu@cdb.com.cn', '广东国粤韶关综合利用发电新建项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/020gd/001AGD_GD-SG/');
INSERT INTO `mail` VALUES ('冀莉莉', '13924202561', '123456', 'jilili@cdb.com.cn', '广东分行所有项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/020gd/');
INSERT INTO `mail` VALUES ('柯宇建', '13826111424', '123456', null, '广东国粤韶关综合利用发电新建项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/020gd/001AGD_GD-SG/');
INSERT INTO `mail` VALUES ('孙馗', '13706967741', '123456', 'sunkui@cdb.com.cn', '海西高速公路网南平联络线项目', null);
INSERT INTO `mail` VALUES ('程路', '13950211266', '123456', 'chenglu@cdb.com.cn', '宁德市南阳原种猪场建设项目', null);
INSERT INTO `mail` VALUES ('罗葳', '15960021950', '123456', 'lowe@cdb.com.cn', '日本菊花选繁中心和商品化基地建设项目', null);
INSERT INTO `mail` VALUES ('师昀煜', '18759196198', '123456', 'shiyunyu@cdb.com.cn', '福州市马尾区魁岐片、三环魁岐互通周边等棚户区改造项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0591fj/001AFJ_FJ-FZ/');
INSERT INTO `mail` VALUES ('方恒', '18906910683', '123456', 'fangheng@cdb.com.cn', '福建项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0591fj');
INSERT INTO `mail` VALUES ('朱晨杰', '13429171997', '123456', 'zhuchenjie@cdb.com.cn', '绍兴市上虞区虞东河湖综合整治工程项目 ', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0571zj/001AZJ_ZJ-SX/');
INSERT INTO `mail` VALUES ('任颐', '13777866712', '123456', 'renyi0308@cdb.com.cn', '松阳县客运综合服务中心项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0571zj/001AZJ_ZJ-LS/');
INSERT INTO `mail` VALUES ('徐桦', '15968818766', '123456', 'xuhua@cdb.com.cn', '松阳县客运综合服务中心项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0571zj/001AZJ_ZJ-LS/');
INSERT INTO `mail` VALUES ('蒋进', '13777822706', '123456', 'jiangjin@cdb.com.cn', '贵州瓮安县花竹山风电场96MW风电项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0571zj/001AZJ_GZ-QNBYZ/');
INSERT INTO `mail` VALUES ('林璐茜', '18601296696', '123456', null, '贵州瓮安县花竹山风电场96MW风电项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0571zj/001AZJ_GZ-QNBYZ/');
INSERT INTO `mail` VALUES ('余利夫', '13738195997', '123456', 'yulifu@cdb.com.cn', '浦江县浦阳江棚户区改造项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0571zj/001AZJ_ZJ-JH/');
INSERT INTO `mail` VALUES ('张瑚', '13588714802', '123456', 'zhanghu@cdb.com.cn', '浦江县浦阳江棚户区改造项目;台州市黄岩江北片大桥村、五里牌村城中村改造工程项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0571zj/001AZJ_ZJ-JH;/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0571zj/001AZJ_ZJ-TZ/');
INSERT INTO `mail` VALUES ('高冠栋', '13575750317', '123456', 'gaoguandong@cdb.com.cn', '浦江县浦阳江棚户区改造项目;台州市黄岩江北片大桥村、五里牌村城中村改造工程项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0571zj/001AZJ_ZJ-JH;/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0571zj/001AZJ_ZJ-TZ/');
INSERT INTO `mail` VALUES ('陈向前', '13505781249', '123456', 'chenxiangqian@cdb.com.cn', '浦江县浦阳江棚户区改造项目;台州市黄岩江北片大桥村、五里牌村城中村改造工程项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0571zj/001AZJ_ZJ-JH;/out/dhjk/0571zj/001AZJ_ZJ-TZ/');
INSERT INTO `mail` VALUES ('刘健', '15958017998', '123456', 'ljian@cdb.com.cn', '黄泽山石油中转储运工程项目', null);
INSERT INTO `mail` VALUES ('张卫', '13588811239', '123456', 'zhangwei_hz@cdb.com.cn', '浙江项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0571zj');
INSERT INTO `mail` VALUES ('崔迎春', '15202510976', '123456', 'themissingsky2003@cdb.com.cn', '永录民俗博物馆建设项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0971qh/001AQH_QH-HD/');
INSERT INTO `mail` VALUES ('郭大江', '13619711987', '123456', 'guodajiang@cdb.com.cn', '永录民俗博物馆建设项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0971qh/001AQH_QH-HD/');
INSERT INTO `mail` VALUES ('马建平', '13897248923', '123456', null, '青海项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0971qh');
INSERT INTO `mail` VALUES ('周昊', '13869160818', '123456', 'zhouhaosd@cdb.com.cn;tpgj@cdb.com.cn', '山东省棚户区改造项目（一期）', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0531sd/001ASD_SD-DY');
INSERT INTO `mail` VALUES ('王崇', '15275137896', '123456', 'wangroy@cdb.com.cn', '山东项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0531sd');
INSERT INTO `mail` VALUES ('于兆东', '15969692899', '123456', 'yuzhaodong@cdb.com.cn', '新建60万头/年生猪屠宰项目', null);
INSERT INTO `mail` VALUES ('张伟宏', '15099579935', '123456', 'zhangweihong@cdb.com.cn', '新疆华威和田热电新建工程项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0991xj/001AXJ_XJ-HT');
INSERT INTO `mail` VALUES ('贺海波', '15022938786', '123456', 'hehaibo@cdb.com.cn', '新疆华威和田热电新建工程项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0991xj/001AXJ_XJ-HT');
INSERT INTO `mail` VALUES ('吴帅', '18210191510', '123456', 'wu_shuai@cdb.com.cn', '新疆华威和田热电新建工程项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0991xj/001AXJ_XJ-HT');
INSERT INTO `mail` VALUES ('袁方', '13699966728', '123456', 'yuanfangX@cdb.com.cn', '哈密弗光20MWp聚光光伏发电项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0991xj/001AXJ_XJ-HM/');
INSERT INTO `mail` VALUES ('赵牧', '13639969468', '123456', 'zhaomu@cdb.com.cn', '哈密弗光20MWp聚光光伏发电项目                       新疆阿勒泰柯赛依水电站工程项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0991xj/001AXJ_XJ-HM/');
INSERT INTO `mail` VALUES ('张建新', '13809959372', '123456', 'zhangjianxin@cdb.com.cn', '哈密弗光21MWp聚光光伏发电项目                        新疆阿勒泰柯赛依水电站工程项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0991xj/001AXJ_XJ-HM/');
INSERT INTO `mail` VALUES ('白银广', '13009629219', '123456', null, '新疆华威和田热电新建工程项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0991xj/001AXJ_XJ-HT/');
INSERT INTO `mail` VALUES ('赵二项', '13579250025', '123456', 'zhaoerxiang@cdb.com.cn', '新疆阿勒泰柯赛依水电站工程项目', null);
INSERT INTO `mail` VALUES ('冯姝', '13899962262', '123456', 'fengshu@cdb.com.cn', '新疆项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0991xj');
INSERT INTO `mail` VALUES ('刘越', '13838005827', '123456', null, '哈密弗光20MWp聚光光伏发电项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0991xj/001AXJ_XJ-HM/');
INSERT INTO `mail` VALUES ('王利勇', '13523568255', '123456', null, '哈密弗光20MWp聚光光伏发电项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0991xj/001AXJ_XJ-HM/');
INSERT INTO `mail` VALUES ('吴晗', '13804745485', '123456', 'wuhan@cdb.com.cn', '年产8000吨牛肉制品生产线新建项目', null);
INSERT INTO `mail` VALUES ('冯骁骋', '13847109610', '123456', null, '年产8000吨牛肉制品生产线新建项目', null);
INSERT INTO `mail` VALUES ('张妍', '13947113331', '123456', 'zhangyannmg@cdb.com.cn', '内蒙古十三五易地扶贫搬迁项目', null);
INSERT INTO `mail` VALUES ('王刚', '15047802055', '123456', 'gangwang@cdb.com.cn', '内蒙古十三五易地扶贫搬迁项目', null);
INSERT INTO `mail` VALUES ('康征', '15124726412', '123456', 'kangzheng@cdb.com.cn', '内蒙古项目', null);
INSERT INTO `mail` VALUES ('马妍', '15148013707', '123456', 'zoema@cdb.com.cn', '呼伦贝尔北方药业有限公司年产400吨可利霉素项目                   满洲里市纳达中俄农副产品贸储基地建设工程', null);
INSERT INTO `mail` VALUES ('杨子皓', '15754857650', '123456', 'yzh1988@cdb.com.cn', '赤峰铁南棚户区项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0471nm/001ANM_NM-CF/');
INSERT INTO `mail` VALUES ('李晗晗', '15804719327', '123456', 'lihanhan@cdb.com.cn', '内蒙古项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0471nm');
INSERT INTO `mail` VALUES ('李忠义', '15804719332', '123456', 'lizhongyi@cdb.com.cn', '内蒙古项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0471nm');
INSERT INTO `mail` VALUES ('乔艳', '15804719378', '123456', 'qiaoyan@cdb.com.cn', '年产8000吨牛肉制品生产线新建项目', null);
INSERT INTO `mail` VALUES ('王帅杰', '15847109964', '123456', 'wangshuaijie@cdb.com.cn', '赤峰铁南棚户区项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0471nm/001ANM_NM-CF/');
INSERT INTO `mail` VALUES ('何耀东', '15847140826', '123456', 'heyaodong@cdb.com.cn', '呼伦贝尔北方药业有限公司年产400吨可利霉素项目;                   满洲里市纳达中俄农副产品贸储基地建设工程', null);
INSERT INTO `mail` VALUES ('白哥乐', '15849106195', '123456', 'baigele@cdb.com.cn', '内蒙古十三五易地扶贫搬迁项目', null);
INSERT INTO `mail` VALUES ('马宇飞', '15849106232', '123456', 'mayufei@cdb.com.cn', '赤峰铁南棚户区项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0471nm/001ANM_NM-CF/');
INSERT INTO `mail` VALUES ('刘相芳', '15849106582', '123456', 'liuxiangfang@cdb.com.cn', '内蒙古项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0471nm');
INSERT INTO `mail` VALUES ('张丹阳', '18947163588', '123456', 'zhangdanyang@cdb.com.cn', '呼伦贝尔北方药业有限公司年产400吨可利霉素项目;                   满洲里市纳达中俄农副产品贸储基地建设工程', null);
INSERT INTO `mail` VALUES ('张瑞鑫', '13469693465', '123456', null, '宁夏项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0971qh');
INSERT INTO `mail` VALUES ('姜海', '15809601767', '123456', 'jianghai@cdb.com.cn', '彭阳县第一批扶贫开发统贷流动资金贷款项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0971qh/001AQH_QH-HD/');
INSERT INTO `mail` VALUES ('卢文轩', '18904518839', '123456', 'hrb_luwenxuan@cdb.com.cn', '肇东市天禹世纪城安置小区2014年城市棚户区改造（新建）项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0451hlj/001AHLJ_HLJ-ZD/');
INSERT INTO `mail` VALUES ('车茂嵩', '18904518878', '123456', 'chemaosong@cdb.com.cn', '黑龙江项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0451hlj');
INSERT INTO `mail` VALUES ('赵岩', '15588623456', '123456', 'hlj_zhaoyan@cdb.com.cn', '平度市第一批棚户区改造项目', null);
INSERT INTO `mail` VALUES ('王效彬', '13645325665', '123456', 'wangxb@cdb.com.cn', '平度市第一批棚户区改造项目', null);
INSERT INTO `mail` VALUES ('贾晶', '18661886650', '123456', 'jiajingqd@cdb.com.cn', '青岛西海岸经济新区中央商务区保障性住房建设项目 ', null);
INSERT INTO `mail` VALUES ('刑辰', '15966875651', '123456', null, '青岛项目', null);
INSERT INTO `mail` VALUES ('杨广辉', '13905320320', '123456', 'yangguanghui@cdb.com.cn', '青岛项目', null);
INSERT INTO `mail` VALUES ('马智远', '18300237511', '123456', 'mazhiyuan@cdb.com.cn', '青岛西海岸经济新区中央商务区保障性住房建设项目平度市第一批棚户区改造项目 ', null);
INSERT INTO `mail` VALUES ('王晓强', '18561568856', '123456', 'wangxiaoqiang@cdb.com.cn', '青岛-海阳城际（蓝色硅谷段）轨道交通工程BOT项', null);
INSERT INTO `mail` VALUES ('敖晓航', '18663943210', '123456', 'aoxiaohang@cdb.com.cn', '青岛-海阳城际（蓝色硅谷段）轨道交通工程BOT项', null);
INSERT INTO `mail` VALUES ('付学文', '18703710328', '123456', 'fuxuewen@cdb.com.cn', '新蔡县村级光伏电站扶贫项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0371ha/001AHN_HN-ZMD/');
INSERT INTO `mail` VALUES ('汪鹏飞', '15937126376', '123456', null, '平顶山市大香山国学文化园一期工程项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0371ha/001AHN_HN-PDS/');
INSERT INTO `mail` VALUES ('崔康宁', '15837123699', '123456', 'cuikangning@cdb.com.cn', '河南项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0371ha');
INSERT INTO `mail` VALUES ('王苏雅', '13554042266', '123456', 'wangsuya@cdb.com.cn', '湖北省孝感市2014年第一批棚户区改造项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/027he/001AHE_HE-XG/');
INSERT INTO `mail` VALUES ('张锐', '13554147797', '123456', 'hkzhangrui@cdb.com.cn', '湖北项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/027he');
INSERT INTO `mail` VALUES ('沈骁智', '18871430570', '123456', 'shenxiaozhi@cdb.com.cn', '湖北省孝感市2014年第一批棚户区改造项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/027he/001AHE_HE-XG/');
INSERT INTO `mail` VALUES ('张宇坤', '15878777825', '123456', 'zhangyukun@cdb.com.cn', '贺州市棚户区改造项目（一期）——平桂管理区改造项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0771gx/001AGX-GX-HZ/');
INSERT INTO `mail` VALUES ('李铭', '13707870128', '123456', 'mingli@cdb.com.cn', '广西项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0771gx');
INSERT INTO `mail` VALUES ('赵璐', '13689850228', '123456', 'zhaolu@cdb.com.cn', '吉林项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0431jl');
INSERT INTO `mail` VALUES ('李滨', '13756665872', '123456', null, '吉林众合稻壳发电热电联产综合利用项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0431jl/001AJL_JL-BC/');
INSERT INTO `mail` VALUES ('胡力达', '13803153366', '123456', 'hulida@cdb.com.cn', '江西项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0991xj/001AJX_XJ-KS/');
INSERT INTO `mail` VALUES ('袁树新', '13576101962', '123456', 'yuanshuxin@cdb.com.cn', '金坛正信喀什麦盖提20兆瓦光伏并网发电项目     新疆中建材喀什疏附20MW光伏并网发电项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0991xj/001AJX_XJ-KS/               ');
INSERT INTO `mail` VALUES ('曾国栋', '13902469715', '123456', 'zengguodong@cdb.com.cn', '拓日新能源喀什20WM光伏并网发电项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0991xj/001ASZ_XJ-KS');
INSERT INTO `mail` VALUES ('脱贫攻坚项目组', '10000', '123456', 'tpgj@cdb.com.cn', '脱贫攻坚项目', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0531sd/');

-- ----------------------------
-- Table structure for `MenuBank`
-- ----------------------------
DROP TABLE IF EXISTS `MenuBank`;
CREATE TABLE `MenuBank` (
  `id` varchar(255) DEFAULT NULL,
  `bank_name` varchar(255) DEFAULT NULL,
  `cid` varchar(255) DEFAULT NULL,
  `bank_path` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of MenuBank
-- ----------------------------
INSERT INTO `MenuBank` VALUES ('1', '河北分行', '1', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0311hb');

-- ----------------------------
-- Table structure for `MenuProject`
-- ----------------------------
DROP TABLE IF EXISTS `MenuProject`;
CREATE TABLE `MenuProject` (
  `id` varchar(255) DEFAULT NULL,
  `project_name` varchar(255) DEFAULT NULL,
  `cid` varchar(255) DEFAULT NULL,
  `project_path` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of MenuProject
-- ----------------------------
INSERT INTO `MenuProject` VALUES ('1', '年加工50000吨肉鸡熟食制品生产线', '1', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0311hb/001AHB_HB-XT/FP001');
INSERT INTO `MenuProject` VALUES ('2', '邯郸市道路客运中心枢纽项目', '1', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0311hb/001AHB_HB-HD/JT001');
INSERT INTO `MenuProject` VALUES ('3', '河北遵化年产20万吨野生酸枣汁扩建项目', '1', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0311hb/001AHB_HB-ZH/NL001');
INSERT INTO `MenuProject` VALUES ('4', '年翻新40万套工程轮胎建设项目', '1', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0311hb/001AHB_HB-XT/XD001');
INSERT INTO `MenuProject` VALUES ('5', '河北省2014年第一批棚户区改造项目', '1', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0311hb/001AHB_HB-HD/PG001');
INSERT INTO `MenuProject` VALUES ('6', '河北省魏县易地扶贫搬迁工程2016年度贺祥社区建设项目', '1', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0311hb/001AHB_HB-XT/FP001');
INSERT INTO `MenuProject` VALUES ('7', '阿勒泰水电项目', '1', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0311hb/001AHB_HB-XT/FP001');
INSERT INTO `MenuProject` VALUES ('8', '新疆华威和田热电新建工程项目', '1', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0311hb/001AHB_HB-HD/JT001');
INSERT INTO `MenuProject` VALUES ('9', '哈密弗光20MWp聚光光伏发电项目', '1', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0311hb/001AHB_HB-ZH/NL001');

-- ----------------------------
-- Table structure for `project`
-- ----------------------------
DROP TABLE IF EXISTS `project`;
CREATE TABLE `project` (
  `id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of project
-- ----------------------------
INSERT INTO `project` VALUES ('1', '儋州海阳城老年公寓项目', '信贷', '001AHI_HI-DZ_YL001');
INSERT INTO `project` VALUES ('2', '海南老城经济开发区污水管网延伸工程项目', '信贷', '001AHI_HI-CM_HB001');
INSERT INTO `project` VALUES ('3', '西安地铁4号线项目', '信贷', '001ASN_SN-XA_JD001');
INSERT INTO `project` VALUES ('4', '白山市金辉福利纸业有限责任公司流动资金贷款项目', '信贷', '001AJL_JL-BC_XD001');
INSERT INTO `project` VALUES ('5', '白山市信诺牧业有限公司流动资金贷款项目', '信贷', '001AJL_JL-BC_XD002');
INSERT INTO `project` VALUES ('6', '年存栏720万只蛋鸡标准化养殖扶贫一期建设项目', '扶贫', '001AJL_JL-BC_QG001');
INSERT INTO `project` VALUES ('7', '京港澳高速复线岳阳至望城段', '信贷', '001AHN_HN-YY_GS001');
INSERT INTO `project` VALUES ('8', '浦江县浦阳江棚户区改造项目', '棚改', '001AZJ_ZJ-JH_PG001');
INSERT INTO `project` VALUES ('9', '太行山高速公路京冀界至蔚县段', '扶贫', '001AHB_HB-ZJK_GS001');
INSERT INTO `project` VALUES ('10', '太行山高速公路涞源至曲阳段', '扶贫', '001AHB_HB-BD_GS001');
INSERT INTO `project` VALUES ('11', '西柏坡至阜平高速公路保定段', '扶贫', '001AHB_HB-BD_GS002');
INSERT INTO `project` VALUES ('12', '北京至秦皇岛高速公路（GIN)遵化至秦皇岛段', '信贷', '001AHB_HB-QHD_GS001');
INSERT INTO `project` VALUES ('13', '唐山至廊坊高速公路唐山段', '信贷', '001AHB_HB-TS_GS001');
INSERT INTO `project` VALUES ('14', '黄河玛尔挡水电站项目', '信贷', '001AQH_QH-GLZZ_SD001');
INSERT INTO `project` VALUES ('15', '新疆华威和田热电新建工程项目', '信贷', '001AXJ_XJ-HT_RD001');
INSERT INTO `project` VALUES ('16', '维西县岩瓦河水电站项目', '信贷', '001AYN_YN-DQZZ_SD001');
INSERT INTO `project` VALUES ('17', '赤峰铁南棚户区项目', '棚改', '001ANM_NM-CF_PG001');
INSERT INTO `project` VALUES ('18', '肇庆新区棚户区改造（第一期项目）', '棚改', '001AGD_GD-ZQ_PG001');
INSERT INTO `project` VALUES ('19', '吉林省幸福里居家养老综合项目', '信贷', '001AJL_JL-CC_YL001');
INSERT INTO `project` VALUES ('20', '华帝矿业恰东铜矿30万吨/年选矿厂及尾矿库建设项目', '信贷', '001AQH_QH-HNZZ_CK001');
INSERT INTO `project` VALUES ('21', '吉林省2013-2017年棚户区改造一期建设项目—20白城市', '棚改', '001AJL_JL-BC_PG001');
INSERT INTO `project` VALUES ('22', '吉林扶余三井子风电场三期项目', '信贷', '001AJL_JL-FY_FD001');
INSERT INTO `project` VALUES ('23', '100兆瓦生态农业大棚光伏电站项目', '信贷', '001ASZ_HA-AY_GD001');
INSERT INTO `project` VALUES ('24', '广东国粤韶关综合利用发电新建项目', '信贷', '001AGD_GD-SG_ZD001');
INSERT INTO `project` VALUES ('25', '肇东市天禹世纪城安置小区2014年城市棚户区改造（新建）项目', '棚改', '001AHLJ_HLJ-ZD_PG001');
INSERT INTO `project` VALUES ('26', '山东省棚户区改造项目（一期）—东营市2014年棚户区改造项目—文汇街道东营社区村居改造二期棚改项目', '棚改', '001ASD_SD-DY_PG001');
INSERT INTO `project` VALUES ('27', '新蔡县村级光伏电站扶贫项目', '扶贫', '001AHA_HA-ZMD_GD001');
INSERT INTO `project` VALUES ('28', '10万吨/年新工艺湿法炭黑及6000KW尾气发电工程项目', '信贷', '001ASH_XJ-CJ_FD001');
INSERT INTO `project` VALUES ('29', '年加工50000吨肉鸡熟食制品生产线（一期）', '扶贫', '001AHB_HB-XT_QG001');
INSERT INTO `project` VALUES ('30', '芜湖市G309项目（原G205示范改造工程项目）', '信贷', '001AAH_AH-WH_XD001');
INSERT INTO `project` VALUES ('31', '松阳县客运综合服务中心项目', '信贷', '001AZJ_ZJ-LS_JT001');
INSERT INTO `project` VALUES ('32', '福州市马尾区魁岐片、三环魁岐互通周边等棚户区改造项目', '棚改', '001AFJ_FJ-FZ_PG001');
INSERT INTO `project` VALUES ('33', '宁德市南阳原种猪场建设项目', '信贷', '001AFJ_FJ-ND_XM001');
INSERT INTO `project` VALUES ('34', '永录民俗博物馆建设项目', '信贷', '001AQH_QH-HD_WH001');
INSERT INTO `project` VALUES ('35', '石家庄国际展览中心项目', '信贷', '001AHB_HB-SJZ_WH001');
INSERT INTO `project` VALUES ('36', '河北省2014年第一批棚户区改造项目（邯郸）', '棚改', '001AHB_HB-HD_PG001');
INSERT INTO `project` VALUES ('37', '年翻新40万套工程轮胎建设项目', '信贷', null);
INSERT INTO `project` VALUES ('38', '赛维湖南桃江20MW光伏电站项目', '信贷', '001AJX_HN-TJ_GD001');
INSERT INTO `project` VALUES ('39', '拓日新能源喀什20WM光伏并网发电项目', '信贷', '001ASZ_XJ-KS_GD001');
INSERT INTO `project` VALUES ('40', '广西国家储备林基地建设暨生态扶贫项目（一期）-广西壮族自治区国有大桂山林场项目', '信贷', '001AGX_GX-HZ_FP001');
INSERT INTO `project` VALUES ('41', '汉中汉文化旅游设施建设项目', '信贷', '001ASX_SX-HZ_WH001');
INSERT INTO `project` VALUES ('42', '平顶山市大香山国学文化园一期工程项目', '信贷', '001AHN_HN-PDS_WH001');
INSERT INTO `project` VALUES ('43', '贵州瓮安县花竹山风电场96MW风电项目', '信贷', '001AZJ_GZ-QNBYZ_FD001');
INSERT INTO `project` VALUES ('44', '邯郸市道路客运中心枢纽项目', '信贷', '001AHB_HB-HD_JT001');
INSERT INTO `project` VALUES ('45', '新建60万头/年生猪屠宰项目', '信贷', '001SDB_SD-LY_QG001');
INSERT INTO `project` VALUES ('46', '吉林众合稻壳发电热电联产综合利用项目', '信贷', '001AJL_JL-BC_RD001');
INSERT INTO `project` VALUES ('47', '尚德红星二场并网光伏电站一期30MWp工程项目', '信贷', '001AJX_XJ-HM_GD001');
INSERT INTO `project` VALUES ('48', '新疆哈密浚鑫科技红星二场30MW并网光伏发电项目', '信贷', '001AJX_XJ-HM_GD002');
INSERT INTO `project` VALUES ('49', '金坛正信喀什麦盖提20兆瓦光伏并网发电项目', '信贷', '001AJX_XJ-KS_GD001');
INSERT INTO `project` VALUES ('50', '新疆浚鑫科技喀什疏附20兆瓦光伏并网发电项目', '信贷', '001AJX_XJ-KS_GD002');
INSERT INTO `project` VALUES ('51', '新疆中建材喀什疏附20MW光伏并网发电项目 ', '信贷', '001AJX_XJ-KS_GD003');
INSERT INTO `project` VALUES ('52', '新奥巴州焉耆20MW光伏并网发电项目', '信贷', '001AJX_XJ-BZ_GD001');
INSERT INTO `project` VALUES ('53', '正信巴州和静20兆瓦光伏并网发电项目', '信贷', '001AJX_XJ-BZ_GD002');
INSERT INTO `project` VALUES ('54', '哈密弗光20MWp聚光光伏发电项目', '信贷', '001AXJ_XJ-HM_GD001');
INSERT INTO `project` VALUES ('55', '新疆阿勒泰柯赛依水电站工程项目', '信贷', '001AXJ_XJ-ALT_SD001');
INSERT INTO `project` VALUES ('56', '绍兴市上虞区虞东河湖综合整治工程项目 ', '信贷', '001AZJ_ZJ-SX_HB001');
INSERT INTO `project` VALUES ('57', '日本菊花选繁中心和商品化基地建设项目', '信贷', '001AFJ_XJ-CJ_HG001');
INSERT INTO `project` VALUES ('58', '贺州市棚户区改造项目（一期）——平桂管理区改造项目', '棚改', '001AGX_GX-HZ_PG001');
INSERT INTO `project` VALUES ('59', '彭阳县第一批扶贫开发统贷流动资金贷款项目（古城镇200户“建档立卡”贫困农户）等5个项目', '信贷', '001ANX_NX-GY_FP001');
INSERT INTO `project` VALUES ('60', '湖北省孝感市2014年第一批棚户区改造项目', '棚改', '001AHE_HE-XG_PG001');
INSERT INTO `project` VALUES ('61', '科华众生（市北）云计算中心项目', '信贷', '001AXM_SH_SJ001');
INSERT INTO `project` VALUES ('62', '年产20万吨野生酸枣汁扩建项目', '信贷', '001AHB_HB-ZH_NL001');
INSERT INTO `project` VALUES ('63', '台州市黄岩江北片大桥村、五里牌村城中村改造工程项目', '棚改', '001AZJ_ZJ-TZ_PG001');
INSERT INTO `project` VALUES ('64', '海西高速公路网南平联络线项目', '信贷', '001AFJ_FJ-NP_GS001');
INSERT INTO `project` VALUES ('65', '汨罗市恒源资产管理有限公司项下中小企业流动资金贷款', '信贷', '001AHN_HN-YY_XD001');
INSERT INTO `project` VALUES ('66', '呼伦贝尔北方药业有限公司年产400吨可利霉素项目', '信贷', '001ANM_NM-HLBE_YY001');
INSERT INTO `project` VALUES ('67', '内蒙古十三五易地扶贫搬迁项目', '扶贫', null);
INSERT INTO `project` VALUES ('68', '安庆市外环北路工程项目', '信贷', '001AAH_AH-AQ_GS001');
INSERT INTO `project` VALUES ('69', '满洲里市纳达中俄农副产品贸储基地建设工程', '信贷', '001ANM_NM-MZL_NL001');
INSERT INTO `project` VALUES ('70', '年产8000吨牛肉制品生产线新建项目', '信贷', '001ANM_NM-TL_QG001');
INSERT INTO `project` VALUES ('71', '青岛-海阳城际（蓝色硅谷段）轨道交通工程BOT项', '信贷', '001AQD_SD-QD_JT001');
INSERT INTO `project` VALUES ('72', '黄泽山石油中转储运工程项目', '信贷', '001AZJ_ZJ-ZS_SY001');
INSERT INTO `project` VALUES ('73', '阜阳合肥现代产业园区福和家园（美好乡村）——阜阳合肥现代产业园区起步区安置小区工程子项目', '信贷', '001AAH_AH-FY_XD001');
INSERT INTO `project` VALUES ('74', '平度市第一批棚户区改造项目', '棚改', '001AQD_SD-PD_PG001');
INSERT INTO `project` VALUES ('75', '青岛西海岸经济新区中央商务区保障性住房建设项目 ', '棚改', '001AQD_SD-QD_PG001');
INSERT INTO `project` VALUES ('76', '海棠湾复星亚特兰蒂斯商旅发展有限公司项目', '信贷', '001AHI_HI-SY_LY001');
INSERT INTO `project` VALUES ('77', '新安江流域综合治理项目二期工程', '信贷', '001AAH_AH-HS_HB001');
INSERT INTO `project` VALUES ('78', '平安鑫海资源开发有限公司镍铁还原生产线技改项目', '信贷', null);
INSERT INTO `project` VALUES ('79', '安徽省2013-2017年棚户区改造一期建设项目-灵璧县', '棚改', '001AAH_AH-SZ_PG001');
INSERT INTO `project` VALUES ('80', '安徽省2013-2017年棚户区改造一期建设项目-35金寨县', '棚改', '001AAH_AH-LA_PG001');
INSERT INTO `project` VALUES ('81', '湖南华菱涟源钢铁有限公司2015年B组授信项目', '信贷', null);
INSERT INTO `project` VALUES ('82', '高陵县船张社区棚户区改造（二期）项目', '棚改', '001ASX_SX-XA_PG001');
INSERT INTO `project` VALUES ('83', '唐山市路南区老交大城市棚户区改造安置项目', '棚改', '001AHB_HB-TS_PG001');
INSERT INTO `project` VALUES ('84', '曹县戴老家水库项目', '扶贫', '001ASD_SD-HZ_FP001');
INSERT INTO `project` VALUES ('85', '湖北省仙桃市2014年第一批棚户区改造项目', '棚改', '001AHE_HE-XT_PG001');
INSERT INTO `project` VALUES ('86', '润峰格尔木电力有限公司格尔木二期10兆瓦光伏发电项目', '信贷', null);
INSERT INTO `project` VALUES ('87', '董家口港区基础设施及配套工程建设项目', '信贷', null);
INSERT INTO `project` VALUES ('88', '哈密十三师柳树泉农场100兆瓦并网光伏发电项目', '信贷', null);
INSERT INTO `project` VALUES ('89', '乐源牧业威县有限公司万头奶牛养殖科技示范基地项目', '扶贫', null);
INSERT INTO `project` VALUES ('90', '大盈江四级水电站设计变更项目', '扶贫', null);
INSERT INTO `project` VALUES ('91', '15万吨/年木薯燃料乙醇项目 ', '信贷', null);
INSERT INTO `project` VALUES ('92', '宁夏银川市贺兰县15000头肉牛股份制扶贫产业园区建设项目', '基金', null);

-- ----------------------------
-- Table structure for `province`
-- ----------------------------
DROP TABLE IF EXISTS `province`;
CREATE TABLE `province` (
  `id` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of province
-- ----------------------------
INSERT INTO `province` VALUES ('1', 'BJ', '北京市');
INSERT INTO `province` VALUES ('2', 'SH', '上海市');
INSERT INTO `province` VALUES ('3', 'TJ', '天津市');
INSERT INTO `province` VALUES ('4', 'CQ', '重庆市');
INSERT INTO `province` VALUES ('5', 'HK', '香港特别行政区');
INSERT INTO `province` VALUES ('6', 'MO', '澳门特别行政区');
INSERT INTO `province` VALUES ('7', 'HB', '河北省');
INSERT INTO `province` VALUES ('8', 'SX', '山西省');
INSERT INTO `province` VALUES ('9', 'NM', '内蒙古自治区');
INSERT INTO `province` VALUES ('10', 'JX', '江西省');
INSERT INTO `province` VALUES ('11', 'HA', '河南省');
INSERT INTO `province` VALUES ('12', 'HN', '湖南省');
INSERT INTO `province` VALUES ('13', 'GX', '广西壮族自治区');
INSERT INTO `province` VALUES ('14', 'SC', '四川省');
INSERT INTO `province` VALUES ('15', 'YN', '云南省');
INSERT INTO `province` VALUES ('16', 'SN', '陕西省');
INSERT INTO `province` VALUES ('17', 'QH', '青海省');
INSERT INTO `province` VALUES ('18', 'XJ', '新疆维吾尔族自治区');
INSERT INTO `province` VALUES ('19', 'LN', '辽宁省');
INSERT INTO `province` VALUES ('20', 'JL', '吉林省');
INSERT INTO `province` VALUES ('21', 'HL', '黑龙江省');
INSERT INTO `province` VALUES ('22', 'JS', '江苏省');
INSERT INTO `province` VALUES ('23', 'ZJ', '浙江省');
INSERT INTO `province` VALUES ('24', 'AH', '安徽省');
INSERT INTO `province` VALUES ('25', 'FJ', '福建省');
INSERT INTO `province` VALUES ('26', 'SD', '山东省');
INSERT INTO `province` VALUES ('27', 'HE', '湖北省');
INSERT INTO `province` VALUES ('28', 'GD', '广东省');
INSERT INTO `province` VALUES ('29', 'HI', '海南省');
INSERT INTO `province` VALUES ('30', 'GZ', '贵州省');
INSERT INTO `province` VALUES ('31', 'XZ', '西藏自治区');
INSERT INTO `province` VALUES ('32', 'GS', '甘肃省');
INSERT INTO `province` VALUES ('33', 'NX', '宁夏回族自治区');
INSERT INTO `province` VALUES ('34', 'TW', '台湾省');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `uid` int(255) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=97 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '15130150565', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0311hb/001AHB_HB-SJZ', '1');
INSERT INTO `user` VALUES ('2', '18731122331', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0991xj/001AXJ_XJ-HT/', '2');
INSERT INTO `user` VALUES ('3', '13582113162', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0311hb/001AHB_HB-HD/', '3');
INSERT INTO `user` VALUES ('4', '13673231029', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0311hb/001AHB_HB-XT;/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0311hb/001AHB_HB-HD/    ', '4');
INSERT INTO `user` VALUES ('5', '15731183370', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0311hb/001AHB_HB-ZH/', '5');
INSERT INTO `user` VALUES ('6', '18803113755', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0311hb', '6');
INSERT INTO `user` VALUES ('7', '18156005919', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0551ah/001AAH_AH-WH/', '7');
INSERT INTO `user` VALUES ('8', '13635516969', '123456', '', '8');
INSERT INTO `user` VALUES ('9', '18156005950', '123456', '', '9');
INSERT INTO `user` VALUES ('10', '18919697551', '123456', '', '10');
INSERT INTO `user` VALUES ('11', '18919600377', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0551ah/', '11');
INSERT INTO `user` VALUES ('12', '13925086035', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/020gd/001AGD_GD-ZQ/', '12');
INSERT INTO `user` VALUES ('13', '13632185886', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/020gd/001AGD_GD-ZQ/', '13');
INSERT INTO `user` VALUES ('14', '13609641712', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/020gd/001AGD_GD-SG/', '14');
INSERT INTO `user` VALUES ('15', '13924202561', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/020gd/', '15');
INSERT INTO `user` VALUES ('16', '13826111424', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/020gd/001AGD_GD-SG/', '16');
INSERT INTO `user` VALUES ('17', '13706967741', '123456', '', '17');
INSERT INTO `user` VALUES ('18', '13950211266', '123456', '', '18');
INSERT INTO `user` VALUES ('19', '15960021950', '123456', '', '19');
INSERT INTO `user` VALUES ('20', '18759196198', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0591fj/001AFJ_FJ-FZ/', '20');
INSERT INTO `user` VALUES ('21', '18906910683', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0591fj', '21');
INSERT INTO `user` VALUES ('22', '13429171997', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0571zj/001AZJ_ZJ-SX/', '22');
INSERT INTO `user` VALUES ('23', '13777866712', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0571zj/001AZJ_ZJ-LS/', '23');
INSERT INTO `user` VALUES ('24', '15968818766', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0571zj/001AZJ_ZJ-LS/', '24');
INSERT INTO `user` VALUES ('25', '13777822706', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0571zj/001AZJ_GZ-QNBYZ/', '25');
INSERT INTO `user` VALUES ('26', '18601296696', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0571zj/001AZJ_GZ-QNBYZ/', '26');
INSERT INTO `user` VALUES ('27', '13738195997', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0571zj/001AZJ_ZJ-JH/', '27');
INSERT INTO `user` VALUES ('28', '13588714802', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0571zj/001AZJ_ZJ-JH;/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0571zj/001AZJ_ZJ-TZ/', '28');
INSERT INTO `user` VALUES ('29', '13575750317', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0571zj/001AZJ_ZJ-JH;/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0571zj/001AZJ_ZJ-TZ/', '29');
INSERT INTO `user` VALUES ('30', '13505781249', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0571zj/001AZJ_ZJ-JH;/out/dhjk/0571zj/001AZJ_ZJ-TZ/', '30');
INSERT INTO `user` VALUES ('31', '15958017998', '123456', '', '31');
INSERT INTO `user` VALUES ('32', '13588811239', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0571zj', '32');
INSERT INTO `user` VALUES ('33', '15202510976', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0971qh/001AQH_QH-HD/', '33');
INSERT INTO `user` VALUES ('34', '13619711987', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0971qh/001AQH_QH-HD/', '34');
INSERT INTO `user` VALUES ('35', '13897248923', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0971qh;;', '35');
INSERT INTO `user` VALUES ('36', '13869160818', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0531sd/001ASD_SD-DY', '36');
INSERT INTO `user` VALUES ('37', '15275137896', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0531sd', '37');
INSERT INTO `user` VALUES ('38', '15969692899', '123456', '', '38');
INSERT INTO `user` VALUES ('39', '15099579935', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0991xj/001AXJ_XJ-HT', '39');
INSERT INTO `user` VALUES ('40', '15022938786', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0991xj/001AXJ_XJ-HT', '40');
INSERT INTO `user` VALUES ('41', '18210191510', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0991xj/001AXJ_XJ-HT', '41');
INSERT INTO `user` VALUES ('42', '13699966728', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0991xj/001AXJ_XJ-HM/', '42');
INSERT INTO `user` VALUES ('43', '13639969468', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0991xj/001AXJ_XJ-HM/', '43');
INSERT INTO `user` VALUES ('44', '13809959372', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0991xj/001AXJ_XJ-HM/', '44');
INSERT INTO `user` VALUES ('45', '13009629219', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0991xj/001AXJ_XJ-HT/', '45');
INSERT INTO `user` VALUES ('46', '13579250025', '123456', '', '46');
INSERT INTO `user` VALUES ('47', '13899962262', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0991xj', '47');
INSERT INTO `user` VALUES ('48', '13838005827', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0991xj/001AXJ_XJ-HM/', '48');
INSERT INTO `user` VALUES ('49', '13523568255', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0991xj/001AXJ_XJ-HM/', '49');
INSERT INTO `user` VALUES ('50', '13804745485', '123456', '', '50');
INSERT INTO `user` VALUES ('51', '13847109610', '123456', '', '51');
INSERT INTO `user` VALUES ('52', '13947113331', '123456', '', '52');
INSERT INTO `user` VALUES ('53', '15047802055', '123456', '', '53');
INSERT INTO `user` VALUES ('54', '15124726412', '123456', '', '54');
INSERT INTO `user` VALUES ('55', '15148013707', '123456', '', '55');
INSERT INTO `user` VALUES ('56', '15754857650', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0471nm/001ANM_NM-CF/', '56');
INSERT INTO `user` VALUES ('57', '15804719327', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0471nm', '57');
INSERT INTO `user` VALUES ('58', '15804719332', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0471nm', '58');
INSERT INTO `user` VALUES ('59', '15804719378', '123456', '', '59');
INSERT INTO `user` VALUES ('60', '15847109964', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0471nm/001ANM_NM-CF/', '60');
INSERT INTO `user` VALUES ('61', '15847140826', '123456', '', '61');
INSERT INTO `user` VALUES ('62', '15849106195', '123456', '', '62');
INSERT INTO `user` VALUES ('63', '15849106232', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0471nm/001ANM_NM-CF/', '63');
INSERT INTO `user` VALUES ('64', '15849106582', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0471nm', '64');
INSERT INTO `user` VALUES ('65', '18947163588', '123456', '', '65');
INSERT INTO `user` VALUES ('66', '13469693465', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0971qh', '66');
INSERT INTO `user` VALUES ('67', '15809601767', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0971qh/001AQH_QH-HD/', '67');
INSERT INTO `user` VALUES ('68', '18904518839', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0451hlj/001AHLJ_HLJ-ZD/', '68');
INSERT INTO `user` VALUES ('69', '18904518878', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0451hlj', '69');
INSERT INTO `user` VALUES ('70', '15588623456', '123456', '', '70');
INSERT INTO `user` VALUES ('71', '13645325665', '123456', '', '71');
INSERT INTO `user` VALUES ('72', '18661886650', '123456', '', '72');
INSERT INTO `user` VALUES ('73', '15966875651', '123456', '', '73');
INSERT INTO `user` VALUES ('74', '13905320320', '123456', '', '74');
INSERT INTO `user` VALUES ('75', '18300237511', '123456', '', '75');
INSERT INTO `user` VALUES ('76', '18561568856', '123456', '', '76');
INSERT INTO `user` VALUES ('77', '18663943210', '123456', '', '77');
INSERT INTO `user` VALUES ('78', '18703710328', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0371ha/001AHN_HN-ZMD/', '78');
INSERT INTO `user` VALUES ('79', '15937126376', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0371ha/001AHN_HN-PDS/', '79');
INSERT INTO `user` VALUES ('80', '15837123699', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0371ha', '80');
INSERT INTO `user` VALUES ('81', '13554042266', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/027he/001AHE_HE-XG/', '81');
INSERT INTO `user` VALUES ('82', '13554147797', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/027he', '82');
INSERT INTO `user` VALUES ('83', '18871430570', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/027he/001AHE_HE-XG/', '83');
INSERT INTO `user` VALUES ('84', '15878777825', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0771gx/001AGX-GX-HZ/', '84');
INSERT INTO `user` VALUES ('85', '13707870128', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0771gx', '85');
INSERT INTO `user` VALUES ('86', '13689850228', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0431jl', '86');
INSERT INTO `user` VALUES ('87', '13756665872', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0431jl/001AJL_JL-BC/', '87');
INSERT INTO `user` VALUES ('88', '13803153366', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0991xj/001AJX_XJ-KS/', '88');
INSERT INTO `user` VALUES ('89', '13576101962', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0991xj/001AJX_XJ-KS/               ', '89');
INSERT INTO `user` VALUES ('90', '13902469715', '123456', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0991xj/001ASZ_XJ-KS', '90');
INSERT INTO `user` VALUES ('91', 'gkh', '123', '/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk', '91');
INSERT INTO `user` VALUES ('92', 'yanghao', '123', '/', '92');
INSERT INTO `user` VALUES ('93', 'lbn', '123', '/data/lbn', '93');
INSERT INTO `user` VALUES ('22222', 'tttt1', null, '/', '94');
INSERT INTO `user` VALUES (null, '', null, '', '95');
INSERT INTO `user` VALUES (null, '', null, '', '96');
