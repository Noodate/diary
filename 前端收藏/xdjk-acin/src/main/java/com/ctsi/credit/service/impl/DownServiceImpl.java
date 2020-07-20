package com.ctsi.credit.service.impl;


import com.ctsi.credit.hadoop.config.GlobalConst;
import com.ctsi.credit.service.DownService;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.*;
import org.apache.hadoop.io.IOUtils;
import org.springframework.stereotype.Service;

import java.io.*;
import java.net.URI;
import java.util.*;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

@Service
public class DownServiceImpl implements DownService {

    private static Log log = LogFactory.getLog(DownServiceImpl.class) ;

    static String HADOOP_USER_NAME = GlobalConst.getInstance().getHadoopusername();
    //static String HADOOP_USER_NAME = "xdjk";
    static String HADOOP_URL = GlobalConst.getInstance().getHadoopUrl();
    static String HADOOP_URL2 = "hdfs://10.13.141.52:9000";
    //static String HADOOP_URL2 = "hdfs://192.168.58.111:9000";
    //static String HADOOP_URL = "hdfs://beh";
    static Configuration conf = new Configuration(true);
    static FileSystem fs = null;

    public void getDocument(String path){
        log.info("getDocument 1");
        try {
            InputStream inputStream = null;
            inputStream = null;
            ByteArrayOutputStream outputStream = null;
            String fileContent = null;
            fs = FileSystem.get(URI.create(HADOOP_URL2), conf, HADOOP_USER_NAME);
            try {
                inputStream = fs.open(new Path(path));
                outputStream = new ByteArrayOutputStream(inputStream.available());
                String fileNewPath = GlobalConst.getInstance().getDownloadUrl() +  StringUtils.substringAfterLast("/" + path, "/");
                log.info("getDocument 2 : " + fileNewPath);
                File fileNew  = new File(fileNewPath);
                try {
                    Runtime.getRuntime().exec("chmod 777 -R " +  fileNew);
                }catch(Exception e){
                    log.error(e,e);
                }
                IOUtils.copyBytes(inputStream, new FileOutputStream(fileNew), 2048, true);
                log.info("getDocument 3 : " );


                fileContent = outputStream.toString();
                log.info("getDocument 4 : " + fileContent);
            } finally {
                IOUtils.closeStream(inputStream);
                IOUtils.closeStream(outputStream);
                fs.close();
            }
        } catch (Exception e) {
            log.error(e,e);
            e.printStackTrace();
        }
    }
    public String getFileZip(String[] path){
        log.info("getFileZip 3");
        List<String> list = new ArrayList();
        File[] srcFiles = new File[path.length];
        for (int i = 0; i < path.length; i++) {
            srcFiles[i]=new File( GlobalConst.getInstance().getDownloadUrl()+ path[i].substring(path[i].lastIndexOf('/')+1,path[i].length()));
        }
        log.info("getFileZip 4");
        File zipFile = new File(GlobalConst.getInstance().getDownloadUrl() + "/ZipFile.zip" );
        try {
            Runtime.getRuntime().exec("chmod 777 -R " + GlobalConst.getInstance().getDownloadUrl() + "/ZipFile.zip");
        }catch(Exception e){
            log.error(e,e);
        }
        // 调用压缩方法
        log.info("getFileZip5");
        zipFiles(srcFiles, zipFile);
        return GlobalConst.getInstance().getDownloadUrl()+ "/ZipFile.zip";
    }

    public static void zipFiles(File[] srcFiles, File zipFile) {
        // 判断压缩后的文件存在不，不存在则创建
//        if (!zipFile.exists()) {
//            try {
//                zipFile.createNewFile();
//            } catch (IOException e) {
//                e.printStackTrace();
//            }
//        }
        // 创建 FileOutputStream 对象
        FileOutputStream fileOutputStream = null;
        // 创建 ZipOutputStream
        ZipOutputStream zipOutputStream = null;
        // 创建 FileInputStream 对象
        FileInputStream fileInputStream = null;
log.info("zipFiles 1");
        try {
            // 实例化 FileOutputStream 对象
            fileOutputStream = new FileOutputStream(zipFile);
            // 实例化 ZipOutputStream 对象
            zipOutputStream = new ZipOutputStream(fileOutputStream);
            // 创建 ZipEntry 对象
            ZipEntry zipEntry = null;

            log.info("zipFiles 2" + srcFiles.length);
            // 遍历源文件数组
            for (int i = 0; i < srcFiles.length; i++) {
                // 将源文件数组中的当前文件读入 FileInputStream 流中
                fileInputStream = new FileInputStream(srcFiles[i]);
                // 实例化 ZipEntry 对象，源文件数组中的当前文件
                zipEntry = new ZipEntry(srcFiles[i].getName());
                zipOutputStream.putNextEntry(zipEntry);
                // 该变量记录每次真正读的字节个数
                int len;
                // 定义每次读取的字节数组
                byte[] buffer = new byte[1024];
                while ((len = fileInputStream.read(buffer)) > 0) {
                    zipOutputStream.write(buffer, 0, len);
                }
            }

            log.info("zipFiles 3" );
            zipOutputStream.closeEntry();
            zipOutputStream.close();
            fileInputStream.close();
            fileOutputStream.close();
        } catch (IOException e) {
            log.error(e,e);
//            e.printStackTrace();
        }

    }

}
