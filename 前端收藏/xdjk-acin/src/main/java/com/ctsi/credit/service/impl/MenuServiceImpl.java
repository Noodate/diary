package com.ctsi.credit.service.impl;

import com.ctsi.credit.entity.Menu;
import com.ctsi.credit.entity.MenuBank;
import com.ctsi.credit.entity.MenuProject;
import com.ctsi.credit.mapper.MenuMapper;
import com.ctsi.credit.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class MenuServiceImpl implements MenuService {

    @Autowired
    private MenuMapper menuMapper;

    /**
     * 菜单展示分行信息
     * @return
     */
    public List<MenuBank> getMenuBank(){
        List<MenuBank> list = menuMapper.getMenuBank();
        return list;
    }


    /**
     * 菜单展示分行下项目信息
     * @param cid
     * @return
     */
    public List<MenuProject> getMenuProject(String cid){
       List<MenuProject> menuProjectList =  menuMapper.getProject(cid);
        return menuProjectList;
    }

    /**
     * 根据用户权限展示菜单
     * @param id
     * @param parent_id
     * @return
     */
    public List<Menu> getMenu(String id, String parent_id){
        if(!StringUtils.isEmpty(id)||StringUtils.isEmpty(parent_id)){
            Map<String,String> map = new HashMap<String,String>();
            map.put("id",id);
            map.put("parent_id",parent_id);
            //根据用户角色id 查找该角色下 且根节点为0的菜单
            List<Menu> list = menuMapper.getMenuByUser(map);
            return list;
        }
        return null;
    }
}
