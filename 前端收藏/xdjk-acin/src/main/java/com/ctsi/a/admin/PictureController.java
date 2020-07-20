package com.ctsi.a.admin;

import com.ctsi.a.service.PictureService;
import com.ssm.promotion.core.common.Result;
import com.ssm.promotion.core.common.ResultGenerator;
import com.ctsi.a.entity.Picture;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/pictures3")
public class PictureController {
    @Resource
    private PictureService ctsiPictureService;
    private static final long serialVersionUID = 1L;
    private static final Logger log = Logger.getLogger(PictureController.class);// 日志文件

//    http://localhost:8088/pictures3/a
//    http://localhost:8088/pictures3/a.c

//     <!--ctsi-->
//    <servlet>
//        <servlet-name>dispatcher_ctsi</servlet-name>
//        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
//
//        <init-param>
//            <param-name>contextConfigLocation</param-name>
//            <param-value>classpath:ctsi/a/spring-context-mvc-ctsi.xml</param-value>
//        </init-param>
//        <load-on-startup>3</load-on-startup>
//    </servlet>
//    <servlet-mapping>
//        <servlet-name>dispatcher_ctsi</servlet-name>
//        <url-pattern>*.c</url-pattern>
//    </servlet-mapping>

    @RequestMapping(value = "/a", method = RequestMethod.GET)
    public Result list() throws Exception {
        Map<String, Object> map = new HashMap<String, Object>();
        List<Picture> pictureList = ctsiPictureService.findPicture(map);
        Result result = ResultGenerator.genSuccessResult();
        Long total = ctsiPictureService.getTotalPicture(map);
        Map data = new HashMap();
        data.put("rows", pictureList);
        data.put("total", total);
        log.info("request: picture/list , map: " + map.toString());
        result.setData(data);
        return result;
    }

}