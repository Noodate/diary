package com.ctsi.credit.service;

import com.ctsi.credit.entity.Menu;

import java.util.List;

public interface RoleService {

    public List<Menu> getMenuForAreaRole(String area, String role_number);

    public void setRolesService(String area_id, String role_number, List<String> list);

    public String  getParentId(String area_id);
}
