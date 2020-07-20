package com.ctsi.credit.action;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.ctsi.credit.service.EmailService;
import com.ctsi.credit.service.SendMailToUserService;

@Controller
@RequestMapping("test")
public class HelloWorldController {
    
    @RequestMapping("/hello")  
    public ModelAndView hello() {   
        String message = "Hello World, Spring 3.0!";  
        System.out.println(message);  
        return new ModelAndView("hello1", "message", message);  
    }   
   
    
    private static final Logger logger = LoggerFactory.getLogger(HelloWorldController.class);

    @Resource 
    EmailService emailService;
    @Resource 
    SendMailToUserService sendMailService;
    
    @RequestMapping("/sendmail")
    @ResponseBody
    public Map<String,String> sendEmailTask() {
        logger.info("-------------执行发送邮件START---------------");
            //写入excel
            //insuranceService.excelManage();
            //发邮件
        sendMailService.sendMailToUser();;
        
        logger.info("-------------执行发送邮件END---------------");
        Map<String, String> map=new HashMap<String, String>();
        map.put("result", "成功");
        return map;
        
    }
    
    @RequestMapping("/testmail")
    @ResponseBody
    public Map<String,String> testSendEmailTask() {
        logger.info("-------------执行发送邮件START---------------");
            //写入excel
            //insuranceService.excelManage();
            //发邮件
        emailService.emailManage();
        
        logger.info("-------------执行发送邮件END---------------");
        Map<String, String> map=new HashMap<String, String>();
        map.put("result", "成功");
        return map;
        
    }
}