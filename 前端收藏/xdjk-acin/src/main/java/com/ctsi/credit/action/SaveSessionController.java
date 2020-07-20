package com.ctsi.credit.action;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionContext;
import java.util.Enumeration;

@Controller
@RequestMapping("/session")
public class SaveSessionController {

    /**
     * 存
     *
     * @return
     */
    @RequestMapping(value = "/saveSession", method = RequestMethod.POST)
    @ResponseBody
    public String saveSession(String path,HttpSession session) {
        session.setAttribute("curPath", path);
        System.out.println("session路径存储成功");
        return "ok";
    }

}
