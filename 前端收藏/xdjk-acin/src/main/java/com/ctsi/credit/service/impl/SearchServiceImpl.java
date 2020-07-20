package com.ctsi.credit.service.impl;

import com.ctsi.credit.entity.Bank;
import com.ctsi.credit.service.SearchService;
import com.ctsi.credit.utils.HdfsUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class SearchServiceImpl implements SearchService {

    @Autowired
    private UserService userService;


    public List<Map<String,String>> searchByDate(String start,String end, String projpath){
        try {
            List<Map<String,String>> dirs = HdfsUtils.findDirect(start, end, projpath);
            return dirs;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

}
