package com.ctsi.credit.entity;

import com.sun.org.apache.xpath.internal.operations.String;


public class RoleMove {

    private String area_id;
    private String role_number;
    private String[] list;

    public String getArea_id() {
        return area_id;
    }

    public void setArea_id(String area_id) {
        this.area_id = area_id;
    }

    public String getRole_number() {
        return role_number;
    }

    public void setRole_number(String role_number) {
        this.role_number = role_number;
    }

    public String[] getList() {
        return list;
    }

    public void setList(String[] list) {
        this.list = list;
    }
}
