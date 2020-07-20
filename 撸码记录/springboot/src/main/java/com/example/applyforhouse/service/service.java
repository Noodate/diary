package com.example.applyforhouse.service;

import com.example.applyforhouse.bean.Auditor;
import com.example.applyforhouse.bean.LoginUser;
import com.example.applyforhouse.bean.Person;
import com.example.applyforhouse.bean.Record;
import com.example.applyforhouse.mapper.mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class service {

    @Autowired
    private mapper lmap;

    @Transactional
    public List<Record> selectRecord() {
        List<Record> list=lmap.selectRecord();
        return list;
    }

    @Transactional
    public String selectUserPwd(String username) {
        return lmap.selectUserPwd(username);
    }

    public int addRecord(Record record) {
        return lmap.addRecord(record);
    }

    public List<Auditor> selectAuditorList() {
        return lmap.selectAuditorList();
    }

    public int addPerson(LoginUser loginUser) {
        return lmap.addPerson(loginUser);
    }

    public void addRecordPersonAuditor(String recordId, String personId, String auditorId) {
        lmap.addRecordPersonAuditor(recordId,personId,auditorId);
    }
}
