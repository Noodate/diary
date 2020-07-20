package com.ctsi.credit.utils;

import com.ctsi.credit.action.SearchController;
import com.ctsi.credit.hadoop.config.GlobalConst;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.*;
import org.apache.hadoop.io.IOUtils;

import java.io.*;
import java.net.URI;
import java.text.SimpleDateFormat;
import java.util.*;


public class HdfsUtils {

    private static Log log = LogFactory.getLog(HdfsUtils.class);

    static String HADOOP_USER_NAME = GlobalConst.getInstance().getHadoopusername();
    //static String HADOOP_USER_NAME = "xdjk";
    static String HADOOP_URL = GlobalConst.getInstance().getHadoopUrl();
    //static String HADOOP_URL = "hdfs://beh";
    //static String HADOOP_URL = "hdfs://192.168.142.111:9000";
    static Configuration conf = new Configuration(true);
    static FileSystem fs = null;


    /**
     * 从hdfs下载文件到指定路径src/main/resources/templates/employee/下
     *
     * @param path
     * @return
     * @throws IOException
     */
    public static void getvideo(String path) throws Exception {
        InputStream inputStream = null;
        ByteArrayOutputStream outputStream = null;
        String fileContent = null;
        fs = FileSystem.get(URI.create(HADOOP_URL), conf, HADOOP_USER_NAME);
        try {
            inputStream = fs.open(new Path(path));
            outputStream = new ByteArrayOutputStream(inputStream.available());
            IOUtils.copyBytes(inputStream, new FileOutputStream(new File("src/main/resources/templates/employee/" + StringUtils.substringAfterLast("/" + path, "/"))), 2048, true);
            fileContent = outputStream.toString();
        } finally {
            IOUtils.closeStream(inputStream);
            IOUtils.closeStream(outputStream);
            fs.close();
        }
    }


    /**
     * 判断路径是否存在
     *
     * @param path
     * @return
     * @throws IOException
     */
    public static boolean exits(String path) throws Exception {
        fs = FileSystem.get(URI.create(HADOOP_URL), conf, HADOOP_USER_NAME);
        boolean exists = false;
        try {

            exists = fs.exists(new Path(path));
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return exists;
    }


    /**
     *
     * @param path
     * @return
     * @throws IOException
     */
    public static Map<String, String> listFiles1(String path) throws Exception {
        fs = FileSystem.get(URI.create(HADOOP_URL), conf, HADOOP_USER_NAME);
        RemoteIterator<LocatedFileStatus> files = fs.listFiles(new Path(
                path), true);
        Map<String, String> map = new HashMap<>();
//        while (files.hasNext()) {
//            LocatedFileStatus file = files.next();
//            Path filePath = file.getPath();
//            String fileName = filePath.getName();
//            map.put(fileName, path);
//            System.out.println(map);
//        }
        return map;
    }

    public static void listFilesTest(String path) throws Exception {
        fs = FileSystem.get(URI.create(HADOOP_URL), conf, HADOOP_USER_NAME);
        FileStatus[] fileStatuses = fs.listStatus(new Path(path));
        Map<String,String> map = new HashMap();
        for (FileStatus fileStatus : fileStatuses) {
            //判断当前迭代对象是否是目录
            if (fileStatus.isDirectory()) {
                String dirPath = fileStatus.getPath().toString();
                System.out.println("文件夹名:" + fileStatus.getPath());
                //map.put("path",fileStatus.getPath());
                listFilesTest(dirPath);
            }else{
                System.out.println("文件名:" + fileStatus.getPath());
            }
        }
    }

    public static List<Date> findDates(Date dBegin, Date dEnd) {

        List lDate = new ArrayList();
        lDate.add(dBegin);
        Calendar calBegin = Calendar.getInstance();
        // 使用给定的 Date 设置此 Calendar 的时间
        calBegin.setTime(dBegin);
        Calendar calEnd = Calendar.getInstance();
        // 使用给定的 Date 设置此 Calendar 的时间
        calEnd.setTime(dEnd);
        // 测试此日期是否在指定日期之后
        while (dEnd.after(calBegin.getTime())) {
            // 根据日历的规则，为给定的日历字段添加或减去指定的时间量
            calBegin.add(Calendar.DAY_OF_MONTH, 1);
            lDate.add(calBegin.getTime());
        }
        return lDate;
    }

    /**
     * start,end为日期值yyyyMMdd格式字符串
     *
     * @return
     * @throws IOException
     */
    public static Map<String, String> findDate(String start, String end, String projpath) throws Exception {
        //
        Calendar cal = Calendar.getInstance();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
        Date dBegin = sdf.parse(start);
        Date dEnd = sdf.parse(end);
        List<Date> lDate = findDates(dBegin, dEnd);
        Map<String, String> map = new HashMap<>();
        for (Date date : lDate) {
            String path = projpath + sdf.format(date);
            if (HdfsUtils.exits(path)) {
                map.putAll(HdfsUtils.listFiles1(path));
            } else {
                System.out.println("");
            }
        }
        return map;
    }


    public static List<Map<String,String>> findDirect(String start,String end,String projpath) throws Exception{
        fs = FileSystem.get(URI.create(HADOOP_URL), conf, HADOOP_USER_NAME);
        //start,endΪ����ֵyyyyMMdd��ʽ�ַ���
        Calendar cal = Calendar.getInstance();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
        Date dBegin = sdf.parse(start);
        Date dEnd = sdf.parse(end);
        List<Date> lDate = findDates(dBegin, dEnd);
        List<Map<String,String>> list = new ArrayList<>();
        for (Date date : lDate)
        {
            String  path = projpath+sdf.format(date);
            boolean flag = fs.exists(new Path(path));
            if(flag){
                Map<String,String> map =new HashMap<>();
                System.out.println("path is :"+path);
                map.put("name",StringUtils.substringAfterLast(path,"/"));
                map.put("fullname",path);
                list.add(map);
            }else{
                System.out.println("");
                log.info("=================flag == false ============");
            }
        }
        return list;
    }

    /**
     * 判断获取到的文件只能是jpg和MP4
     *
     * @return
     * @throws IOException
     */
    public static boolean datasfiler(String dataname) {
        boolean boo = dataname.endsWith("jpg") || dataname.endsWith("mp4");
        return boo;
    }


}
