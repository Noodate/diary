package com.ctsi.credit.service.impl;

import com.ctsi.credit.entity.Menu;
import com.ctsi.credit.mapper.UserDao;
import com.ctsi.credit.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service("credit_role")
public class RoleServiceImpl implements RoleService {

    @Autowired
    private UserDao userDao;

    public List<Menu> getMenuForAreaRole(String area_id, String role_number){
        Map<String,String> map = new HashMap<>();
        map.put("area_id",area_id);
        map.put("role_number",role_number);
        List<Menu> list = userDao.getMenuForAreaRoleDao(map);

        return list;
    }

    public void setRolesService(String area_id,String role_number,List<String> list){

        // 删除原有的角色权限
        Map<String,String> map = new HashMap();
        map.put("area_id",area_id);
        map.put("role_number",role_number);
        userDao.deleteRolesMenu(map);
        // 保存分行id 根据项目id 查询出分行id
        Menu menu = userDao.selectBankId(list.get(0));
        map.put("menu_id",menu.getId());
        userDao.insertBankPermission(map);
        // 根据list里id 查询menu 在添加权限
        for(String id : list){
            Map params = new HashMap();
            params.put("role_number",role_number);
            params.put("area_id",area_id);
            //Menu menu = userDao.selectMenuById(id);
            params.put("menu_id",id);
            // 添加项目权限到中间表
           userDao.insertPermission(params);
        }
    }

    @Override
    public String getParentId(String area_id) {
        return userDao.getParentId(area_id);
    }
}
