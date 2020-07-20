package com.ctsi.credit.utils;

import org.apache.log4j.Logger;

public class ConvertUtils {
	static Logger logger=Logger.getLogger(ConvertUtils.class);
	public static String getType(String s){
		String ups = s.toUpperCase();
		if (ups.contains("XD001")) {
			return "信贷项目";
		}else if (ups.matches("FP001")) {
			return "扶贫项目";
		}else if (ups.matches("PG001")) {
			return "棚改项目";
		}else if (ups.matches("JD001")) {
			return "地铁基建项目";
		}else if (ups.matches("GS001")) {
			return "高速基建项目";
		}else if (ups.matches("NL001")) {
			return "农林基建项目";
		}else if (ups.matches("WH001")) {
			return "文化基建项目";
		}else if (ups.matches("LY001")) {
			return "旅游基建项目";
		}else if (ups.matches("YL001")) {
			return "养老基建项目";
		}else if (ups.matches("HG001")) {
			return "化工基建项目";
		}else if (ups.matches("JC001")) {
			return "基础建设项目";
		}else if (ups.matches("RD001")) {
			return "热电项目";
		}else if (ups.matches("SD001")) {
			return "水电项目";
		}else if (ups.matches("FD001")) {
			return "风电项目";
		}else if (ups.matches("GD001")) {
			return "光电项目";
		}else if (ups.matches("ZD001")) {
			return "综合发电项目";
		}else if (ups.matches("JT001")) {
			return "交通运输项目";
		}else if (ups.matches("HB001")) {
			return "环保绿化项目";
		}else if (ups.matches("SJ001")) {
			return "数据中心项目";
		}else if (ups.matches("YY001")) {
			return "医药卫生项目";
		}else if (ups.matches("CK001")) {
			return "采矿项目";
		}else if (ups.matches("QG001")) {
			return "轻工食品项目";
		}else if (ups.matches("SY001")) {
			return "石油化工项目";
		}else if (ups.matches("CY001")) {
			return "产业园项目";		
		}else if (ups.matches("ZZ001")) {
			return "种猪项目";
		}
		return "";
	}
	public static String getCamera(String s){
		String ups = s.toUpperCase();
		if (ups.contains("D")) {
			return "球机";
		}else if (ups.contains("G")) {
			return "枪机";
		}
		return "";
	}
	public static String getProvince(String s){
		logger.warn("==========getProvince============="+s);
		String ups = s.toUpperCase();
		if (ups.equals("020GD")) {
			return "广东分行";
		}else if (ups.equals("027HE")) {
			return "湖北分行";
		}else if (ups.equals("010BJ")) {
			return "北京分行";
		}else if (ups.equals("021SH")) {
			return "上海分行";
		}else if (ups.equals("022TJ")) {
			return "天津分行";
		}else if (ups.equals("023CQ")) {
			return "重庆分行";
		}else if (ups.equals("852HK")) {
			return "香港分行";
		}else if (ups.equals("853AO")) {
			return "澳门分行";
		}else if (ups.equals("0311HB")) {
			return "河北分行";
		}else if (ups.equals("0571ZJ")) {
			return "浙江分行";
		}else if (ups.equals("024LN")) {
			return "辽宁分行";
		}else if (ups.equals("027HE")) {
			return "湖北分行";
		}else if (ups.equals("025JS")) {
			return "江苏分行";
		}else if (ups.equals("0471NM")) {
			return "内蒙古分行";
		}else if (ups.equals("0791JX")) {
			return "江西分行";
		}else if (ups.equals("0351SX")) {
			return "山西分行";
		}else if (ups.equals("0931GS")) {
			return "甘肃分行";
		}else if (ups.equals("0531SD")) {
			return "山东分行";
		}else if (ups.equals("0451HLJ")) {
			return "黑龙江分行";
		}else if (ups.equals("0591FJ")) {
			return "福建分行";
		}else if (ups.equals("020GD")) {
			return "广东分行";
		}else if (ups.equals("028SC")) {
			return "四川分行";
		}else if (ups.equals("0731HN")) {
			return "河南分行";
		}else if (ups.equals("0371HA")) {
			return "湖南分行";
		}else if (ups.equals("0871YN")) {
			return "云南分行";
		}else if (ups.equals("0551AH")) {
			return "安徽分行";
		}else if (ups.equals("0431JL")) {
			return "吉林分行";
		}else if (ups.equals("0771GX")) {
			return "广西分行";
		}else if (ups.equals("0851GZ")) {
			return "贵州分行";
		}else if (ups.equals("029SN")) {
			return "陕西分行";
		}else if (ups.equals("0971QH")) {
			return "青海分行";
		}else if (ups.equals("0898HI")) {
			return "海南分行";
		}else if (ups.equals("0951NX")) {
			return "宁夏分行";
		}else if (ups.equals("0891XZ")) {
			return "西藏分行";
		}else if (ups.equals("0991XJ")) {
			return "新疆分行";
		}
		return "";
	}

}
