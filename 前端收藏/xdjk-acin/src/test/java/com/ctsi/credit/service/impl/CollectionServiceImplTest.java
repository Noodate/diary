package com.ctsi.credit.service.impl;

import com.ctsi.credit.entity.UserCollection;
import com.ctsi.credit.mapper.CollectionMapper;
import com.ctsi.credit.service.CollectionService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

import static org.junit.Assert.*;

@RunWith(SpringJUnit4ClassRunner.class) //指定测试用例的运行器 这里是指定了Junit4
@ContextConfiguration("classpath:ctsi/credit/spring.xml")
public class CollectionServiceImplTest {

    @Autowired
    private CollectionMapper collectionMapper;
    @Autowired
    private CollectionService collectionService;

    @Test
    public void updateDirName() {
        CollectionServiceImpl aa = new CollectionServiceImpl();
        aa. updateDirName("aaa","abc","1");

    }

    @Test
    public void getDirList() {
        collectionService.getDirList("1");
    }
}