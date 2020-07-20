package com.my.thymeleaf.controller;

import org.springframework.stereotype.Controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class HelloController {

    // http://localhost:8088/hello.html
    @RequestMapping("/hello")
    public String hello(Model model){
        model.addAttribute("context","hello world");
        return "thymeleaf/hello";
    }
}
