package com.example.applyforhouse.ctrl;


import com.example.applyforhouse.bean.Auditor;
import com.example.applyforhouse.bean.LoginUser;
import com.example.applyforhouse.bean.Person;
import com.example.applyforhouse.bean.Record;
import com.example.applyforhouse.service.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;


@Controller
public class controller {
    @Autowired
    private  service lser;

    @RequestMapping(value = "/add/addRecord",method = RequestMethod.POST)
    @ResponseBody
    public String addRecord(@RequestBody Map<String, Object> models) {
        LoginUser loginUser= translateLoginUser((Map) models.get("loginUser"));
        Record record=translateRecord((Map) models.get("record"));
        String auditorId=models.get("auditorId")+"";
        lser.addRecord(record);
        lser.addPerson(loginUser);
        lser.addRecordPersonAuditor(record.getId()+"",loginUser.getId()+"",auditorId);
        return "ok";
    }

    private Record translateRecord(Map recordMap) {
        Record record =new Record();
        record.setAreaSelect(recordMap.get("areaSelect")+"");
        record.setComputerName(recordMap.get("computerName")+"");
        record.setComputerCompany(recordMap.get("computerCompany")+"");
        record.setName(recordMap.get("name")+"");
        record.setPhone(recordMap.get("phone")+"");
        record.setCompany(recordMap.get("company")+"");
        record.setReason(recordMap.get("reason")+"");
        return  record;
    }

    private LoginUser translateLoginUser(Map loginUserMap) {
        LoginUser loginUser=new LoginUser();
        loginUser.setNickName(loginUserMap.get("nickName")+"");
        loginUser.setGender(loginUserMap.get("gender")+"");
        loginUser.setCountry(loginUserMap.get("country")+"");
        loginUser.setProvince(loginUserMap.get("province")+"");
        loginUser.setCity(loginUserMap.get("city")+"");
        return  loginUser;
    }

    @RequestMapping(value = "/select/selectUserPwd")
    @ResponseBody
    public String selectUserPwd(HttpServletRequest request) {
        String username=request.getParameter("username");
        System.out.println(username);
        return lser.selectUserPwd(username);
    }

    @RequestMapping(value = "/select/record")
    @ResponseBody
    public List<Record> selectRecord() {
        List<Record> list=lser.selectRecord();
        return list;
    }

    @RequestMapping(value = "/select/selectAuditorList")
    @ResponseBody
    public List<Auditor> selectAuditorList() {
        List<Auditor> list=lser.selectAuditorList();
        return list;
    }


}