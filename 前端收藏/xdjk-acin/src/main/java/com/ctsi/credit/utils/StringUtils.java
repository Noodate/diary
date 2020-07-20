package com.ctsi.credit.utils;

import com.ctsi.credit.entity.Bank;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class StringUtils {

    /**
     * 根据特定格式字符串，转换为list集合
     * @param s2
     * @param
     * @return
     */
    public   static  List<Bank> str2Json(String s2) {
        s2 =   s2.replace("/", "@");
        Gson gson = new Gson();
        List<Bank> retList = gson.fromJson(s2,
                new TypeToken<List<Bank>>() {
                }.getType());
        return retList;
    }

    public static String getShortName(String sttr) {
        if (sttr.length() > 11)
            return sttr.substring(0, 10) + "..." + getExt(sttr);
        else
            return sttr;
    }
    /**
     * 获取字符串的扩展福
     */
    public static  String getExt(String sttr){
        if(sttr.contains(".")){
            return  sttr.substring(sttr.lastIndexOf('.')+1);
        }else{
            return "";
        }
    }


    /**
     * 只要字符串中的数字
     */

    public static String  upstr(String str) {
        String regEx="[^0-9]";
        Pattern p = Pattern.compile(regEx);
        Matcher m = p.matcher(str);
        return  m.replaceAll("").trim();
    }
}
