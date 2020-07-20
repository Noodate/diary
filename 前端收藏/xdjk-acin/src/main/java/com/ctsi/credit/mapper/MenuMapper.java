package com.ctsi.credit.mapper;

import com.ctsi.credit.entity.Menu;
import com.ctsi.credit.entity.MenuBank;
import com.ctsi.credit.entity.MenuProject;

import java.util.List;
import java.util.Map;

public interface MenuMapper {

    // 根据分行id查询对应的项目信息
    public List<MenuProject> getProject(String cid);

    //展示分行
    public List<MenuBank> getMenuBank();

    public List<Menu> getMenuByUser(Map map);
}
