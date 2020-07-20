package com.ctsi.credit.action;

import com.ctsi.credit.entity.*;
import com.ctsi.credit.hadoop.HDFSUtil;
import com.ctsi.credit.service.SearchService;
import com.ctsi.credit.utils.DateUtils;
import com.ctsi.credit.utils.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.hadoop.fs.FileSystem;
import org.bytedeco.javacv.FFmpegFrameGrabber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.lang.reflect.Array;
import java.text.SimpleDateFormat;
import java.util.*;

@RequestMapping("/serach")
@Controller
public class SearchController {

    private Log log = LogFactory.getLog(SearchController.class);

    @Autowired
    private SearchService searchService;

    @RequestMapping(value = "/queryByMonth", method = RequestMethod.POST)
    @ResponseBody
    public  List<Map<String,String>> queryByMonth(HttpSession session){
        // 获取本月第一天
        String firstDay = DateUtils.getFirstDayOfMonth();
        System.out.println(firstDay);
        // 获取本月最后一天
        String lastDay = DateUtils.getLastDayOfMonth();
        String projpath = session.getAttribute("curPath")+"/";
        //String projpath = "/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0311hb/001AHB_HB-XT/";
        List<Map<String,String>> dirs = searchService.searchByDate(firstDay,lastDay,projpath);
       // System.out.println(path);
        return dirs;
    }
    @RequestMapping(value = "/queryByYear", method = RequestMethod.POST)
    @ResponseBody
    public List<Map<String,String>> queryByYear(HttpSession session){
        //获取本年第一天
        String firstDayOfYear = DateUtils.getCurrYearFirst();
        //获取本年最后一天
        String lastDayOfYear = DateUtils.getCurrYearLast();
        String projpath = session.getAttribute("curPath")+"/";
       // String projpath = "/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk/0311hb/001AHB_HB-XT/";
        List<Map<String,String>> list = searchService.searchByDate(firstDayOfYear,lastDayOfYear,projpath);
        System.out.println(list);
        return list;
    }
    @RequestMapping(value = "/queryByAll", method = RequestMethod.POST)
    @ResponseBody
    public List<Map<String,String>> queryByAll(HttpSession session){
        String projpath = session.getAttribute("curPath")+"/";
        List<Map<String,String>> list = searchService.searchByDate("20170101",DateUtils.getNowDate(),projpath);
        System.out.println(list.size());
        return list;
    }
    @RequestMapping(value = "/imgVideoList", method = RequestMethod.POST)
    @ResponseBody
    public List<CollectionType> imgVideoList(String path,HttpSession session) throws Exception {
        System.out.println("==========================jin ru shijian wenjianjia================");
        log.info("==========================jin ru shijian wenjianjia================");
        String ss = new SimpleDateFormat("yyyy-MM-dd HH-mm-ss SSS") .format(new Date() );
        System.out.println(ss);
       HDFSUtil util=new HDFSUtil();
        FileSystem fs = util.connectHadoop();
       List<Map<String, String>> list=util.getFilePathMap(path);
        System.out.println("=========================chaxun chu quan lu jing ming list===============");
        log.info("=========================chaxun chu quan lu jing ming list===============");
        List<CollectionType> list2 = new ArrayList<>();
        try {
            for (Map<String, String> userCollection : list) {
                HDFSUtil h =new HDFSUtil();
                CollectionType type = new CollectionType();
               String localVideoPath = session.getServletContext().getRealPath("/vwCredit/video") + userCollection.get("path");
                String subPath=localVideoPath.substring(0,localVideoPath.length()-4);
                h.download(userCollection.get("path"), localVideoPath,fs);
                //判断是否是视频
                if(localVideoPath.contains("mp4")){
                    File file = new File(session.getServletContext().getRealPath("/vwCredit/video") +path);
                    System.out.println("123");
                    System.out.println("123"+file.toString());
                    System.out.println("---开始抽帧---"+session.getServletContext().getRealPath("/vwCredit/video") +path);
                 //   h.extractFrames(file);
                    String cmd = "ffmpeg -i "+session.getServletContext().getRealPath("/vwCredit/video")+path+"/"+userCollection.get("name")+" -y -f  image2  -ss 00:00:01 -vframes 1 "+session.getServletContext().getRealPath("/vwCredit/video")+path+"/"+userCollection.get("name").substring(0,userCollection.get("name").length()-4)+".jpg";
                    try {
                         System.out.println(cmd);
                         Process vlc = Runtime.getRuntime().exec(cmd);
                        System.out.println(" Process vlc = Runtime.getRuntime().exec(cmd);");
                         vlc.waitFor();
                        System.out.println("  vlc.waitFor();");
                    } catch (Exception e) {
                        System.out.println("error!!!");
                         e.printStackTrace();
                    }
                    System.out.println("---抽帧完成---");
                    type.setName(userCollection.get("name").substring(0,userCollection.get("name").length()-4));
                    System.out.println("diyizhen3");
                    type.setPath(userCollection.get("path").substring(0,userCollection.get("path").length()-4));
                    System.out.println("diyizhen4");
                    list2.add(type);
                }else {
                    type.setName(userCollection.get("name"));
                    type.setPath(userCollection.get("path"));
                    list2.add(type);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        String sss = new SimpleDateFormat("yyyy-MM-dd HH-mm-ss SSS") .format(new Date() );
        System.out.println(sss);
        System.out.println("=====================list size=================="+list2.size());
       return  list2;
    }



    @RequestMapping(value = "/queryByTime", method = RequestMethod.POST)
    @ResponseBody
    public List<Map<String,String>> queryByTime(HttpSession session, @RequestBody QueryTime queryTime){
        String projpath = session.getAttribute("curPath")+"/";


        List<String> listBegin = Arrays.asList(queryTime.getBeginTime().split("-"));
        if (listBegin.get(1).length()<2){
            listBegin.set(1,"0"+listBegin.get(1));
        }
        if (listBegin.get(2).length()<2){
            listBegin.set(2,"0"+listBegin.get(2));
        }
        List<String> listEnd = Arrays.asList(queryTime.getEndTime().split("-"));
        if (listEnd.get(1).length()<2){
            listEnd.set(1,"0"+listEnd.get(1));
        }
        if (listEnd.get(2).length()<2){
            listEnd.set(2,"0"+listEnd.get(2));
        }
        String begin_time= listBegin.get(0)+listBegin.get(1)+listBegin.get(2);
        String end_time= listEnd.get(0)+listEnd.get(1)+listEnd.get(2);

        System.out.println(begin_time+"  "+end_time);
        List<Map<String,String>> list = searchService.searchByDate(begin_time,end_time,projpath);
        System.out.println(list.size()+"11111111111111111");

        log.info("=====================================list size "+list.size()+"====================================");
        return list;
    }

}
