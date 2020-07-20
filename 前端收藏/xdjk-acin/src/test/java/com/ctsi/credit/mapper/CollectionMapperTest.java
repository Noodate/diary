package com.ctsi.credit.mapper;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.HashMap;
import java.util.Map;

import static org.junit.Assert.*;

@RunWith(SpringJUnit4ClassRunner.class) //指定测试用例的运行器 这里是指定了Junit4
@ContextConfiguration("classpath:ctsi/credit/spring.xml")
public class CollectionMapperTest {

    @Autowired
    private CollectionMapper collectionMapper;

    @Test
    public void updateDirName() {
        Map param = new HashMap();
        param.put("dirName","aaa");
        param.put("oldDirName","abc");
        param.put("userId","1");
        collectionMapper.updateDirName(param);
    }
}