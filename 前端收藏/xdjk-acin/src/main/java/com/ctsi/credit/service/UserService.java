package com.ctsi.credit.service;

import com.ctsi.credit.entity.Area;
import com.ctsi.credit.entity.Menu;
import com.ctsi.credit.entity.Role;
import com.ctsi.credit.entity.User;

import java.util.List;

public interface UserService {

    /**
     * @param user
     * @return
     */
    public User login(User user);

    /**
     * 获取所有用户列表
     */
    public List<User> getUsersService(User user);

    /**
     * 根据当前用户权限，展示相关的地区列表
     */
    public List<Area> getAreaSelect(String userid);
    public List<Role> getRoleSelect(String userid);
    public User getUser(String userid);
    /**
     * 添加用户
     */
    public void setUserService(User user);

    public void addUserService(String userid, User user);

    public List<User> getUserAll(String userid);

    public List<Menu> getParentMenu(String area_id, String parent_id);
}
