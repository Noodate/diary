package com.ctsi.credit.mapper;

import com.ctsi.credit.entity.Menu;
import com.ctsi.credit.entity.Role;
import com.ctsi.credit.entity.User;
import org.junit.Assert;
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
public class UserDaoTest {

    @Autowired
    private UserDao userDao;

    @Test
    public void login() {

//        User user = new User();
//        user.setUser_name("gkh");
//        user.setUser_pwd("e10adc3949ba59abbe56e057f20f883e");
//        User aa = userDao.login(user);
//        System.out.println(aa.getUser_name());
    }

//    @Test
//    public void selectUsers() {
//
//        List<User> list = userDao.selectUsers("1");
//        for (User user : list) {
////            List<Role> roles  =  userDao.selectRoleByUser(user.getId());
////            user.setRoles(roles);
//        }
//        System.out.println(list.size());
//    }


    @Test
    public void selectRoleByUser() {
//        List<Role> list = userDao.selectRoleByUser("2");
//
//        System.out.println(list.size());
    }

    @Test
    public void getMenuForAreaRoleDao() {
        Map<String,String> map = new HashMap<>();
        map.put("area","总");
        map.put("role_number","0");
        List<Menu> list = userDao.getMenuForAreaRoleDao(map);
    }

}