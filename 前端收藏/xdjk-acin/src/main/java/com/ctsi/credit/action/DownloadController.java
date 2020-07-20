package com.ctsi.credit.action;

import com.ctsi.credit.service.DownService;
import com.ctsi.credit.utils.HdfsUtils;
import com.ctsi.credit.utils.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/download")
public class DownloadController {

    private  Log log = LogFactory.getLog(DownloadController.class) ;

    @Autowired
    private DownService downServiceImpl;

    @RequestMapping(value = "/down",method = RequestMethod.GET)
    public void down(@RequestParam(value = "downUrlList1") String  downUrlList1, HttpServletRequest request, HttpServletResponse response) {
        log.info("down ");
        String[] downUrlList = new String[]{};
        if(!org.springframework.util.StringUtils.isEmpty(downUrlList1)){
            downUrlList=downUrlList1.split(",");
        }
        log.info("down 2");
        if(!org.springframework.util.StringUtils.isEmpty(downUrlList)){
            for (String path : downUrlList) {
                //下载文件到指定目录
                downServiceImpl.getDocument(path);
            }

            log.info("down 333");
            //从指定目录压缩下载的文件包
            String downUrl=  downServiceImpl.getFileZip(downUrlList);
            downFile(response,downUrl);
        }
    }

    private void downFile(HttpServletResponse response, String str) {
        try {
            log.info("downFile 3");
            String path = str;
            File file = new File(path);
            if (file.exists()) {
                InputStream ins = new FileInputStream(path);
                BufferedInputStream bins = new BufferedInputStream(ins);// 放到缓冲流里面
                OutputStream outs = response.getOutputStream();// 获取文件输出IO流
                BufferedOutputStream bouts = new BufferedOutputStream(outs);
                response.setContentType("application/x-download");// 设置response内容的类型
                response.setHeader(
                        "Content-disposition",
                        "attachment;filename="
                                + URLEncoder.encode(str, "UTF-8"));// 设置头部信息
                int bytesRead = 0;
                byte[] buffer = new byte[8192];
                // 开始向网络传输文件流
                while ((bytesRead = bins.read(buffer, 0, 8192)) != -1) {
                    bouts.write(buffer, 0, bytesRead);
                }
                bouts.flush();// 这里一定要调用flush()方法
                ins.close();
                bins.close();
                outs.close();
                bouts.close();
            } else {
                response.sendRedirect("../error.jsp");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
