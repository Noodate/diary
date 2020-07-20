package com.ctsi.credit.service.impl;

import com.ctsi.credit.entity.*;
import com.ctsi.credit.mapper.UserDao;
import com.ctsi.credit.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.*;

@Service("credit_user")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    public User login(User user){
        if(!StringUtils.isEmpty(user)){
            User resultUser = userDao.login(user);
            System.out.println(user);
            return resultUser;
        }
        return null;
    }

    public List<User> getUsersService(User user){
        ArrayList<User> list = new ArrayList<User>() ;
        if (user.getId().equals("1")){
            //超级管理员查所有
            list= (ArrayList<User>) userDao.selectAllUsers();
        }else{
            for (RolePermissions rolePermissions :   user.getRolepermissions() ) {
                Map map = new HashMap();
                map.put("area",rolePermissions.getArea());
                map.put("role_number",rolePermissions.getRole_number());
                ArrayList<User> list2 = (ArrayList<User>) userDao.selectUsers(map);
                if(list2.size()!=0){
                    list.addAll(list2);
                }
            }
        }
        if(list!=null){
            for (User user2 : list) {
                // 根据查询出来的用户id 查询用户的角色信息
                List<RolePermissions> roles  =  userDao.selectRoleByUser(user2.getId());
                user2.setRolepermissions(roles);
            }
        }
        return list;
    }




    /**
     * 根据当前用户权限，展示相关的地区列表
     */
    public List<Area> getAreaSelect(String userid){
        if (!StringUtils.isEmpty(userid)) {
            List<Area> list = userDao.getAreaSelect(userid);
            return list;
        }
        return null;
    }
    /**
     * 根据当前用户权限，展示相关的地区列表
     */
    public List<Role> getRoleSelect(String userid){
        if (!StringUtils.isEmpty(userid)) {
            List<Role> list_role = userDao.getRoleSelect(userid);
            return list_role;
        }
        return null;
    }

    /**
     *
     */
    public User getUser(String userid){
        if (!StringUtils.isEmpty(userid)) {
            User user = userDao.getUserOne(userid);
            return user;
        }
        return null;
    }

    public void setUserService(User user){
        Map map = new HashMap<>();
        map.put("id",user.getId());
        map.put("email",user.getEmail());
        // 修改user表
        userDao.setUser(map);
        // 添加user的角色 删除原有角色  添加现有角色
        // 删除原有用户角色
        userDao.deleteRolesOfUser(user.getId());
        addRole(user);
    }
    public void addRole(User user){
        List<RolePermissions> list = user.getRolepermissions();
        for (RolePermissions rolePermissions : list) {
            Map params = new HashMap();
            params.put("id",user.getId());
            params.put("role_number",rolePermissions.getRole_number());
            params.put("area_id",rolePermissions.getId());
            // 添加角色
            userDao.addRolePermissions(params);
            params.clear();
        }
    }
    @Override
    public void addUserService(String userid,User user) {
        Map<String,String> map = new HashMap();
        String id=(int)((Math.random()*9+1)*100)+"";
        // 首次添加用户 默认密码123456 这里使用md5加密的字符串
        map.put("id",id);
        map.put("user_pwd","e10adc3949ba59abbe56e057f20f883e");
        map.put("user_name",user.getUser_name());
        map.put("email",user.getEmail());
        map.put("parent_id",userid);
        //添加用户基本信息
        userDao.addUser(map);
        for (RolePermissions r : user.getRolepermissions()) {
            Map<String,String> mapAreaRole = new HashMap();
            mapAreaRole.put("id",id);
            mapAreaRole.put("role_number",r.getRole_number());
            mapAreaRole.put("area_id",r.getId());
            //添加角色对应关系
            userDao.addUserArea(mapAreaRole);
            //添加地区关系
            userDao.addUser_Area(mapAreaRole);
            mapAreaRole.clear();
        }
    }

    @Override
    public List<User> getUserAll(String userid) {
        //后期修改待两个参数，当前用户的地区角色对，循环去查
        List<User> userList =userDao.getUser(userid);
        for (User u : userList) {
            List<RolePermissions> roles  =  userDao.selectRoleByUser_roleid(u.getId());
            u.setRolepermissions(roles);
        }
        return userList;
    }

    public List<Menu> getParentMenu(String area_id,String parent_id){
        // 根据父菜单id 查询出子菜单的list
        List<Menu> list = userDao.getSonMenuDao(parent_id);
        return list;
    }

}
