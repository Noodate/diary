package com.ctsi.credit.hadoop;

import org.apache.hadoop.fs.FileSystem;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.io.IOException;

import static org.junit.Assert.*;

@RunWith(SpringJUnit4ClassRunner.class) //指定测试用例的运行器 这里是指定了Junit4
@ContextConfiguration("classpath:ctsi/credit/spring.xml")
public class HDFSUtilTest {

    @Test
    public void connectHadoop() {

        HDFSUtil ff = new HDFSUtil();
        FileSystem aaa =  ff.connectHadoop();
        System.out.println(aaa);

    }

    @Test
    public void mkdirFolder() {
//        HDFSUtil ff = new HDFSUtil();
//        boolean flag = ff.mkdirFolder("/abc/abc~");
//        System.out.println(flag);
    }


    @Test
    public void getFileContent() {
        HDFSUtil ff = new HDFSUtil();
       byte[] bytes =  ff.getFileContent("/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0311hb/001AHB_HB-HD/JT001/20181212/1992.mp4");

     //   byte[] bytes =  ff.getFileContent("/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0311hb/001AHB_HB-HD/JT001/20181002/Hydrangeas.jpg");
        System.out.println(bytes.length);
    }

    @Test
    public void copyIntoDir() {
        HDFSUtil ff = new HDFSUtil();
        try {
            ff.copyIntoDir("/aaa~/01f9ea56e282836ac72531cbe0233b.jpg@2o.jpg","/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0311hb/001AHB_HB-XT/20181010/01f9ea56e282836ac72531cbe0233b.jpg@2o.jpg");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void delete() {
        HDFSUtil ff = new HDFSUtil();
        try {
            ff.delete("/aaa~/0c71d61303afb135b91c7b70f7b29b54.mp4");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}