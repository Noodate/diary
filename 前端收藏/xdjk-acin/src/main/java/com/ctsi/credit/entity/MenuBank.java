package com.ctsi.credit.entity;

public class MenuBank {

    private String id;
    //分行中文名称
    private String bank_name;
    //对应的项目外键
    private String cid;
    //分行路径
    private String bank_path;

    public MenuBank() {
    }

    public MenuBank(String id, String bank_name, String cid, String bank_path) {
        this.id = id;
        this.bank_name = bank_name;
        this.cid = cid;
        this.bank_path = bank_path;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getBank_name() {
        return bank_name;
    }

    public void setBank_name(String bank_name) {
        this.bank_name = bank_name;
    }

    public String getCid() {
        return cid;
    }

    public void setCid(String cid) {
        this.cid = cid;
    }

    public String getBank_path() {
        return bank_path;
    }

    public void setBank_path(String bank_path) {
        this.bank_path = bank_path;
    }
}
