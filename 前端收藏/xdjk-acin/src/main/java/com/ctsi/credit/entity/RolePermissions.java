package com.ctsi.credit.entity;

import java.util.List;

public class RolePermissions {

    private String id;
    private String role_name;
    private String role_number;
    private String area;
    private String area_id;
    private String menu_id;
    private List<Menu> list;

    public String getArea_id() {
        return area_id;
    }

    public void setArea_id(String area_id) {
        this.area_id = area_id;
    }

    public List<Menu> getList() {
        return list;
    }

    public void setList(List<Menu> list) {
        this.list = list;
    }

    public String getRole_number() {
        return role_number;
    }

    public void setRole_number(String role_number) {
        this.role_number = role_number;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getRole_name() {
        return role_name;
    }

    public void setRole_name(String role_name) {
        this.role_name = role_name;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getMenu_id() {
        return menu_id;
    }

    public void setMenu_id(String menu_id) {
        this.menu_id = menu_id;
    }
}
