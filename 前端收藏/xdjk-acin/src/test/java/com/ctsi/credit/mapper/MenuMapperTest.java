package com.ctsi.credit.mapper;

import com.ctsi.credit.entity.Menu;
import com.ctsi.credit.entity.MenuBank;
import com.ctsi.credit.entity.MenuProject;
import com.ssm.promotion.core.dao.PictureDao;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.Assert.*;

@RunWith(SpringJUnit4ClassRunner.class) //指定测试用例的运行器 这里是指定了Junit4
@ContextConfiguration("classpath:ctsi/credit/spring.xml")
public class MenuMapperTest {

    @Autowired
    private MenuMapper menuMapper;

    @Before
    public void setUp() throws Exception {
    }

    @After
    public void tearDown() throws Exception {
    }

    @Test
    public void getProject() {
        List<MenuProject> list =  menuMapper.getProject("1");
    }

    @Test
    public void getMenuBank() {
        List<MenuBank> list =  menuMapper.getMenuBank();
    }

    @Test
    public void getMenuByUser() {
        Map<String,String> map = new HashMap<String,String>();
        map.put("id","1");
        map.put("parent_id","0");
        List<Menu> list = menuMapper.getMenuByUser(map);
    }
}