package com.ctsi.credit.service;

import com.ctsi.credit.entity.Bank;

import java.util.List;
import java.util.Map;

public interface SearchService {

    public List<Map<String,String>> searchByDate(String start, String end, String projpath);


}
