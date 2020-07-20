package com.example.applyforhouse.mapper;

import com.example.applyforhouse.bean.Auditor;
import com.example.applyforhouse.bean.LoginUser;
import com.example.applyforhouse.bean.Person;
import com.example.applyforhouse.bean.Record;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface mapper {

    public List<Record> selectRecord();

    public void addLogin(Record u);

    public String selectUserPwd(String username);

    public int addRecord(Record record);

    public List<Auditor> selectAuditorList();

    public int addPerson(LoginUser loginUser);

    public void addRecordPersonAuditor(String recordId, String personId, String auditorId);
}
