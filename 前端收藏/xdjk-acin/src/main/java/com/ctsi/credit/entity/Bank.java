package com.ctsi.credit.entity;

/**
 * 字符串处理时用到的实体类
 */
public class Bank {

    public String name;
    public String fullname;

    public Bank() {
    }

    public Bank(String name, String fullname) {
        this.name = name;
        this.fullname = fullname;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }
}
