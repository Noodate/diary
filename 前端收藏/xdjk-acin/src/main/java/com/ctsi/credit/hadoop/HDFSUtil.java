package com.ctsi.credit.hadoop;

import com.ctsi.credit.hadoop.config.GlobalConst;
import com.ctsi.credit.service.impl.DownServiceImpl;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.*;
import org.apache.hadoop.io.IOUtils;
import org.apache.log4j.Logger;
import org.bytedeco.javacpp.opencv_core;
import org.bytedeco.javacv.FFmpegFrameGrabber;
import org.bytedeco.javacv.Frame;
import org.springframework.util.StringUtils;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.*;
import java.net.URI;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


import java.awt.Image;
import java.awt.image.BufferedImage;
import java.io.File;
import javax.imageio.ImageIO;
import org.bytedeco.javacv.FFmpegFrameGrabber;
import org.bytedeco.javacv.Frame;
//import org.bytedeco.javacv.Java2DFrameConverter;

/**
 * HDFS操作类,使用此类
 */
public class HDFSUtil {

    private static final Log log = LogFactory.getLog(HDFSUtil.class);

    /**
     * 链接hadoop
     */
    public FileSystem connectHadoop() {
        String HADOOP_USER_NAME = GlobalConst.getInstance().getHadoopusername();
        String HADOOP_URL = GlobalConst.getInstance().getHadoopUrl();
        FileSystem fs = null;
        try {
            Configuration conf = new Configuration();
            conf.addResource(new Path("/home/user/lbn/core-site.xml"));
            conf.addResource(new Path("/home/user/lbn/hdfs-site.xml"));
            conf.set("fs.hdfs.impl.disable.cache", "true");
            fs  = FileSystem.get(new URI(HADOOP_URL), conf, HADOOP_USER_NAME);
            System.out.println(fs);
            log.info("==================hadoop连接成功====================");
        } catch (Exception e) {
            log.error(e.getMessage(), e);
        }
        return fs;
    }

    /**
     * 在hdfs创建文件夹
     *
     * @param pathName
     * @return
     */
    public boolean mkdirFolder(String pathName,FileSystem fs) {
        boolean flag = false;
        if (!StringUtils.isEmpty(pathName)) {
            try {
                flag = fs.mkdirs(new Path("/bdp_data_intergation/inner_data/o_data/xdjk"+pathName));
                System.out.println(flag);
                if (flag) {
                    log.info("==================文件夹创建成功====================");
                } else {
                    log.info("==================文件夹创建失败====================");
                }
            } catch (Exception e) {
                log.error(e.getMessage(), e);
            }
        }
        return flag;
    }

    /**
     * 判断hdfs上是否存在目录
     */
    public boolean exit(String path) {
       FileSystem fs =  connectHadoop();
        boolean flag = false;
        if (!StringUtils.isEmpty(path)) {
            try {
                flag = fs.exists(new Path(path));
            } catch (IOException e) {
                log.error(e.getMessage(), e);
            }
        }

        return flag;
    }

    /**
     * 根据文件全路径名读取文件的内容
     */
    public byte[] getFileContent(String fileName) {
        FileSystem fs =  connectHadoop();
        if (!StringUtils.isEmpty(fileName) && exit(fileName)) {
            try {
                InputStream in = fs.open(new Path(fileName));
                ByteArrayOutputStream out = new ByteArrayOutputStream(in.available());
                IOUtils.copyBytes(in, out, 1024);
                log.info("==================获取文件流====================");
                byte[] fileContent = out.toByteArray();
                if (!StringUtils.isEmpty(fileContent)) {
                    log.info("==================获取文件流成功====================");
                } else {
                    log.info("==================获取文件流失败====================");
                }
                return fileContent;
            } catch (IOException e) {
                log.error(e.getMessage(), e);
            }

        }
        return null;
    }

    /**
     * 根据项目路径，列出路径下所有目录的名称及全路径
     */
    public List<Map<String, String>> getDatePathMap(String path) throws Exception {
        FileSystem fs =  connectHadoop();
        List<Map<String, String>> list = new ArrayList<>();
        boolean flag = exit(path);
        if (flag == true && !StringUtils.isEmpty(path)) {
            FileStatus[] fileStatuses = fs.listStatus(new Path(path));
            for (FileStatus fileStatus : fileStatuses) {
                Map<String, String> map = new HashMap();
                //判断当前迭代对象是否是目录
                if (fileStatus.isDirectory()) {
                    String dirPath = fileStatus.getPath().toString();
                    for (int i = 0; i < 3; i++) {
                        dirPath = dirPath.substring(dirPath.indexOf("/") + 1, dirPath.length());
                    }
                    String name = dirPath.substring(dirPath.lastIndexOf("/") + 1, dirPath.length());
                    map.put("name", name);
                    map.put("value", "/" + dirPath);
                    list.add(map);
                }
            }
        }
        return list;
    }

    /**
     * 根据项目的日期路径 获取下面文件的全路径名
     */
    public List<Map<String, String>> getFilePathMap(String path) throws Exception {
        FileSystem fs =  connectHadoop();
        List<Map<String, String>> list = new ArrayList<>();
        RemoteIterator<LocatedFileStatus> files = fs.listFiles(new Path(
                path), true);
        while (files.hasNext()) {

            LocatedFileStatus file = files.next();
            Path filePath = file.getPath();
            String fileName = filePath.getName();
            if(fileName.contains("mp4")||fileName.contains("jpg")){
                Map<String, String> map = new HashMap<>();
                map.put("name", fileName);
                map.put("path", path + "/" + fileName);
                list.add(map);
            }
        }
        return list;
    }


    public byte[] getFile(String filepath,FileSystem fs) throws Exception {
        byte[] fileContent = null;

        try {
            Path path = new Path(filepath);
            if (fs.exists(path)) {
                InputStream inputStream = null;
                ByteArrayOutputStream outputStream = null;
                try {
                    inputStream = fs.open(path);
                    outputStream = new ByteArrayOutputStream(inputStream.available());
                    IOUtils.copyBytes(inputStream, outputStream, 1024);
                    fileContent = outputStream.toByteArray();
                } finally {
                    IOUtils.closeStream(inputStream);
                    IOUtils.closeStream(outputStream);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return fileContent;
    }

    /**
     * 根据视频或图片的路径 复制到指定目录下
     * dirName 目录名
     * path 文件全路径名
     */
    public boolean copyIntoDir(String dirName, String path) throws Exception {
        /**
         * 1:建立输入流
         * 2：建立输出流
         * 3:两个流的对接
         * 4:资源的关闭
         */
        FileSystem fs =  connectHadoop();
        //1:建立输入流
        FSDataInputStream input = fs.open(new Path(path));
        System.out.println(dirName);
        //2:建立输出流
        FSDataOutputStream output = fs.create(new Path(dirName));
        //3:两个流的对接
        byte[] b = new byte[1024];
        int hasRead = 0;
        while ((hasRead = input.read(b)) > 0) {
            output.write(b, 0, hasRead);
        }
        //4:资源的关闭
        input.close();
        output.close();
        fs.close();

        return true;
    }


    /**
     * 删除hdfs文件
     *
     * @param filePath
     * @throws IOException
     */
    public void delete(String filePath) throws IOException {
        FileSystem fs =  connectHadoop();
        Path path = new Path(filePath);
        boolean isok = fs.delete(path,true);
        if (isok) {
            System.out.println("delete file " + filePath + " success!");
        } else {
            System.out.println("delete file " + filePath + " failure");
        }
        //fs.close();

    }


    /**
     * 获取指定视频的帧并保存为图片至指定目录
     * @throws Exception
     */
    public  void fetchFrame(FFmpegFrameGrabber ff, String framefile)
            throws Exception {
        System.out.println("diyizhen5");
        long start = System.currentTimeMillis();
        System.out.println("diyizhen6");
        File targetFile = new File(framefile);
        System.out.println("diyizhen7");
        ff.start();
        System.out.println("diyizhen8");
        ff.start();
        System.out.println("diyizhen9");
        int lenght = ff.getLengthInFrames();
        System.out.println("diyizhen10");
        int i = 0;
        System.out.println("diyizhen11");
        Frame f = null;
        System.out.println("diyizhen12");
        while (i < lenght) {
            // 过滤前5帧，避免出现全黑的图片，依自己情况而定
            f = ff.grabFrame();
            if ((i > 5) && (f.image != null)) {
                break;
            }
            i++;
        }
        System.out.println("diyizhen13");
        opencv_core.IplImage img = f.image;
        System.out.println("diyizhen14");
        int owidth = img.width();
        int oheight = img.height();
        // 对截取的帧进行等比例缩放
        System.out.println("diyizhen15");
        int width = 800;
        int height = (int) (((double) width / owidth) * oheight);
        System.out.println("diyizhen16");
        BufferedImage bi = new BufferedImage(width, height, BufferedImage.TYPE_3BYTE_BGR);
        System.out.println("diyizhen17");
        bi.getGraphics().drawImage(f.image.getBufferedImage().getScaledInstance(width, height, Image.SCALE_SMOOTH),
                0, 0, null);
        System.out.println("diyizhen18");
        ImageIO.write(bi, "jpg", targetFile);
        System.out.println("diyizhen19");
        //ff.flush();
        ff.stop();
        System.out.println(System.currentTimeMillis() - start);
        System.out.println("diyizhen20");
    }


//    public final static   synchronized   void fetchFrame(FFmpegFrameGrabber ff , String framefile) throws Exception{
//
//        ff.start();
//        System.out.println("zhen4");
//        int lenght = ff.getLengthInFrames();
//        System.out.println("zhen5");
//        File targetFile = new File(framefile);
//        System.out.println("zhen6");
//        int i = 0;
//        Frame frame = null;
//        while (i < lenght) {
//            // 过滤前5帧，避免出现全黑的图片，依自己情况而定
//            frame = ff.grabFrame();
//            if ((i > 5) && (frame.image != null)) {
//                break;
//            }
//            i++;
//        }
//        System.out.println("zhen7");
//        String imgSuffix = "jpg";
//        if(framefile.indexOf('.') != -1){
//            String[] arr = framefile.split(".");
//            if(arr.length>=2){
//                imgSuffix = arr[1];
//            }
//        }
//        System.out.println("zhen8");
//        Java2DFrameConverter converter =new Java2DFrameConverter();
//        BufferedImage srcBi =converter.getBufferedImage(frame);
//        int owidth = srcBi.getWidth();
//        int oheight = srcBi.getHeight();
//        // 对截取的帧进行等比例缩放
//        int width = 800;
//        int height = (int) (((double) width / owidth) * oheight);
//        BufferedImage bi = new BufferedImage(width, height, BufferedImage.TYPE_3BYTE_BGR);
//        bi.getGraphics().drawImage(srcBi.getScaledInstance(width, height, Image.SCALE_SMOOTH),0, 0, null);
//        System.out.println("zhen9");
//        try {
//            ImageIO.write(bi, imgSuffix, targetFile);
//        }catch (Exception e) {
//            e.printStackTrace();
//        }
//
//        System.out.println("zhen10");
//        ff.flush();
//        ff.stop();
//        System.out.println("zhen11");
//    }



    /**
     * 下载 hdfs上的文件
     *
     * @param remote
     * @param local
     * @throws IOException
     */
    public void download(String remote, String local,FileSystem fs){
//        MyThread t1 = new HDFSUtil().new MyThread(remote,local,fs);
//        Thread m1     = new Thread(t1);
//        m1.start();
        try {
            File file = new File(local);
            if (null!=file&&null!=file.getParentFile()&&!file.getParentFile().exists()&&!file.isDirectory()){
                file.getParentFile().mkdirs();
            }
            if(!file.exists()&&local.charAt(local.length()-1)=='~'){
                file.mkdirs();
            }
            if (file.exists()) {
                return;
            }
            Path remotePath = new Path(remote);
            FileOutputStream outputStream = new FileOutputStream(file, false);
            IOUtils.copyBytes(fs.open(remotePath), outputStream, 2048, true);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

//    class MyThread implements Runnable {
//
//
//
//        private String remote;
//        private String local;
//        private FileSystem fs;
//
//        public MyThread() {
//        }
//
//        public MyThread(String remote, String local, FileSystem fs) {
//            this.remote = remote;
//            this.local = local;
//            this.fs = fs;
//        }
//
//        public void run() {
//            try {
//                File file = new File(local);
//                if (null!=file&&null!=file.getParentFile()&&!file.getParentFile().exists()&&!file.isDirectory()){
//                    file.getParentFile().mkdirs();
//                }
//                if(!file.exists()&&local.charAt(local.length()-1)=='~'){
//                    file.mkdirs();
//                }
//                if (file.exists()) {
//                    return;
//                }
//                synchronized (this){
//                    Path remotePath = new Path(remote);
//                    FileOutputStream outputStream = new FileOutputStream(file, false);
//                    IOUtils.copyBytes(fs.open(remotePath), outputStream, 2048, true);
//                }
//
//            } catch (Exception e) {
//                e.printStackTrace();
//            }
//        }
//
//    }




    //视频抽第一帧
    public  void extractFrames(File folder) {
        System.out.println(folder.toString());
        String[] listOfFiles = folder.list();
        System.out.println("listOfFiles"+listOfFiles.toString());
        System.out.println("listOfFiles"+listOfFiles.length);
        for (int i = 0; i <listOfFiles.length-1; i++) {
            System.out.println("第"+i+"个视频正在抽帧...");
            File  newFile=new File(folder+"/"+listOfFiles[i]);
            if (newFile.isFile()) {
                System.out.println("File f = listOfFiles[i];");
                String name = newFile.getName();
                System.out.println("String name = f.getName();");
                String path = newFile.getAbsolutePath().replace(newFile.getName(),"");
                System.out.println(" String path = f.getAbsolutePath().replace(f.getName(),\"\");");
                if(name.endsWith(".mp4")) {
                    String cmd = "ffmpeg -i "+path+name+" -y -f  image2  -ss 00:00:01 -vframes 1 "+path+name.substring(0,name.length()-4)+".jpg";
                    System.out.println("String cmd = ffmpeg -i +path+name+ -y -f  image2  ");
                    try {
                        System.out.println(cmd);
//                        File imgFolder = new File(path + "images");
//                        if (!imgFolder.exists()) {
//                            imgFolder.mkdir();
//                        }
                        Process vlc = Runtime.getRuntime().exec(cmd);
                        System.out.println("Process vlc = Runtime.getRuntime().exec(cmd); ");
                        vlc.waitFor();
                        //File macro = getNextMacro(path + "images\\");
                        //generateMacro(macro);
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
            } else {
                //extractFrames(listOfFiles[i]);
                System.out.println("bushi wenjian");
            }
        }
    }
}
