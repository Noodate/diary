package com.ctsi.credit.utils;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URI;

import com.ctsi.credit.hadoop.config.GlobalConst;
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.FSDataInputStream;
import org.apache.hadoop.fs.FSDataOutputStream;
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.IOUtils;

public class HdfsFileSystem {    
	// hadoop fs的配置文件
		static Configuration configration = new Configuration(true);
		static {
			// 指定hadoop fs的地址
			configration.set("fs.hdfs.impl", "org.apache.hadoop.hdfs.DistributedFileSystem");

            configration.set("fs.default.name", GlobalConst.getInstance().getHadoopUrl());
//			configration.addResource(new Path("/opt/hadoop/core-site.xml"));
//			configration.addResource(new Path("/opt/hadoop/hdfs-site.xml"));
			
		}


    /**
     * 按路径上传文件到hdfs
     * @param conf 
     * @param local 
     * @param remote 
     * @throws IOException 
     */  
    public static void copyFile(Configuration conf , String uri , String local, String remote) throws IOException {  
        FileSystem fs = FileSystem.get(URI.create(uri), conf);  
        fs.copyFromLocalFile(new Path(local), new Path(remote)); 
        System.out.println("copy from: " + local + " to " + remote);  
        fs.close();  
    }  
    
    /** 
     * 按路径下载hdfs上的文件 
     * @param fsrc  要下载的文件hadoop 目录
     * @param conf config.set("fs.default.name", "hdfs://127.0.0.1:9000");

     * @param uri   hdfs://127.0.0.1:9000
     * @param remote 
     * @param local 
     * @throws IOException 
     */  
    public static void download(String fsrc) throws IOException {  
    	FileSystem hdfs = null;
        FSDataInputStream fsdInputStream = null;
        FileOutputStream fos = null;
        try {
//        	本地（或服务器目录）存储路径
            String destDir = "F:/hadoopImg.jpg";


            hdfs = FileSystem
                    .get(new URI("hdfs://localhost:8010"), configration);

            Path srcPath = new Path(fsrc);
            fsdInputStream = hdfs.open(srcPath);
            fos = new FileOutputStream(destDir);

            byte[] buff = new byte[1024];
            int readCount = 0;
            
            readCount = fsdInputStream.read(buff);
            while (readCount != -1) {
                fos.write(buff, 0, readCount);
                readCount = fsdInputStream.read(buff);
            }

            System.out.println("It is over !");
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if(fos != null){
                try{
                    fos.close();
                }catch(Exception e){
                    e.printStackTrace();
                }
            }
            if(fsdInputStream != null){
                try{
                    fsdInputStream.close();
                }catch(Exception e){
                    e.printStackTrace();
                }
            }
            if (hdfs != null) {
                try {
                    hdfs.closeAll();
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }
 
   } 
    
    /** 
     * File对象上传到hdfs 
     * @param conf 
     * @param uri 
     * @param remote 
     * @param local 
     * @throws IOException 
     */  
    public static void createFile(File localPath, String hdfsPath) throws IOException {  
        InputStream in = null;  
        try {  
           /* Configuration conf = new Configuration(); 
            conf.set("fs.default.name", "hdfs://192.168.43.240:9000");*/

            FileSystem fileSystem = FileSystem.get(URI.create(hdfsPath), configration);  
            FSDataOutputStream out = fileSystem.create(new Path(hdfsPath));  
            in = new BufferedInputStream(new FileInputStream(localPath));  
            IOUtils.copyBytes(in, out, 4096, false);  
            out.hsync();  
            out.close();  
            System.out.println("create file in hdfs:" + hdfsPath);  
        } finally {  
            IOUtils.closeStream(in);  
        }  
    }
}