package com.ctsi.credit.utils;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

/**
 * 时间工具类
 */
public class DateUtils {

    /**
     * 获取当月第一天
     */
    public static String getFirstDayOfMonth() {
        //规定返回日期格式
        SimpleDateFormat sf = new SimpleDateFormat("yyyyMMdd");
        Calendar calendar = Calendar.getInstance();
        Date theDate = calendar.getTime();
        GregorianCalendar gcLast = (GregorianCalendar) Calendar.getInstance();
        gcLast.setTime(theDate);
        //设置为第一天
        gcLast.set(Calendar.DAY_OF_MONTH, 1);
        String day_first = sf.format(gcLast.getTime());
        //打印本月第一天
        return day_first;
    }

    /**
     * 获取当月最后一天
     */
    public static String getLastDayOfMonth() {
        //获取Calendar
        Calendar calendar = Calendar.getInstance();
        //设置日期为本月最大日期
        calendar.set(Calendar.DATE, calendar.getActualMaximum(calendar.DATE));
        //设置日期格式
        SimpleDateFormat sf = new SimpleDateFormat("yyyyMMdd");
        String ss = sf.format(calendar.getTime());
        return ss;
    }

    /**
     * 获取当年第一天
     */
    public static String getCurrYearFirst(){
        Calendar currCal=Calendar.getInstance();
        int currentYear = currCal.get(Calendar.YEAR);
        Date currYearFirst = getYearFirst(currentYear);
        SimpleDateFormat sf = new SimpleDateFormat("yyyyMMdd");
        String ss = sf.format(currYearFirst);
        return ss;
    }

    /**
          * 获取当年的最后一天
          * @param year
          * @return
          */
    public static String getCurrYearLast(){
        Calendar currCal = Calendar.getInstance();
        int currentYear = currCal.get(Calendar.YEAR);
        Date currYearLast = getYearLast(currentYear);
        SimpleDateFormat sf =  new SimpleDateFormat("yyyyMMdd");
        String ss = sf.format(currYearLast);
        return ss;
    }


    /**
     * 获取某年第一天日期
     * @param year 年份
     * @return Date
     */
    public static Date  getYearFirst(int year){
        Calendar calendar = Calendar.getInstance();
        calendar.clear();
        calendar.set(Calendar.YEAR,year);
        Date currYearFirst = calendar.getTime();
        return currYearFirst;
    }

    /**
          * 获取某年最后一天日期
          * @param year 年份
          * @return Date
          */
    public static Date getYearLast(int year){
        Calendar calendar = Calendar.getInstance();
        calendar.clear();
        calendar.set(Calendar.YEAR, year);
        calendar.roll(Calendar.DAY_OF_YEAR, -1);
        Date  currYearLast = calendar.getTime();
        return currYearLast;
    }


    /**
     * 获取当前时间
     */
    public static String getNowDate(){
        SimpleDateFormat df = new SimpleDateFormat("yyyyMMdd");//设置日期格式
        String date = df.format(new Date());
        return date;
    }
}
