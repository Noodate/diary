package com.ctsi.credit.mapper;

import com.ctsi.credit.entity.*;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;


@Repository("credit_UserDao")
public interface UserDao {

    /**
     * 登录
     *
     * @param user
     * @return
     */
    public User login(User user);

    /**
     * 查询用户列表
     */
    public List<User> selectUsers(Map map);

    /**
     * 查询当前用户的角色
     */
    public List<RolePermissions> selectRoleByUser(String userid);

    /**
     * 根据当前用户权限 展示项目地区
     */
    public List<Area> getAreaSelect(String userid);

    public List<Role> getRoleSelect(String userid);
    public List<User> getUser(String userid);
    public User getUserOne(String userid);
    public void setUser(Map map);
    public void addRolePermissions(Map map);
    public void deleteRolesOfUser(String userid);

    public void addUser(Map map);

    public List<RolePermissions> selectRoleByUser_roleid(String userid);

    public List<User> selectAllUsers();
    public List<Menu> getMenuForAreaRoleDao(Map map);
    public Menu getParentMenuDao(String area);

    public List<Menu> getSonMenuDao(String parent_id);

    public void deleteRolesMenu(Map map);

    public Menu selectMenuById(String id);

    public void insertPermission(Map map);

    public Menu selectBankId(String id);
    public void insertBankPermission(Map map);

    public void addUserArea(Map<String, String> map);

    public void addUserRole(Map<String, String> map);

    public String getParentId(String area_id);

    public List<Power> getPowerList(String id);

    public void addUser_Area(Map map);
}
