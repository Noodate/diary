package com.ctsi.credit.service.impl;

import com.ctsi.credit.entity.Menu;
import com.ctsi.credit.entity.User;
import com.ctsi.credit.mapper.UserDao;
import com.ctsi.credit.service.UserService;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

public class UserServiceImplTest {

    @Autowired
    private UserService userServiceImpl;
    @Autowired
    private UserDao userDao;
    @Test
    public void login() {
        User user = new User();
        user.setUser_name("gkh");
        user.setUser_pwd("e10adc3949ba59abbe56e057f20f883e");
       User aa = userServiceImpl.login(user);
        System.out.println(aa.getUser_name());
    }


    @Test
    public void getParentMenu() {
        //根据area名称 查询父菜单
        Menu menu = userDao.getParentMenuDao("辽宁分行");
        // 根据父菜单id 查询出子菜单的list
        List<Menu> list = userDao.getSonMenuDao(menu.getId());
    }
}