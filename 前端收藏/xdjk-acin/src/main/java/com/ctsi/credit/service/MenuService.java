package com.ctsi.credit.service;

import com.ctsi.credit.entity.Menu;
import com.ctsi.credit.entity.MenuBank;
import com.ctsi.credit.entity.MenuProject;

import java.util.List;

public interface MenuService {

    /**
     * 根据分行信息展示项目
      */
    public List<MenuProject> getMenuProject(String id);

    /**
     * 展示分行信息
     */
    public List<MenuBank> getMenuBank();


    /**
     * 根据用户权限展示菜单
     */
    public List<Menu> getMenu(String id, String parent_id);

}
