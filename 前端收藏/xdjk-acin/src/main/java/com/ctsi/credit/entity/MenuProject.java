package com.ctsi.credit.entity;

public class MenuProject {

    private String id;
    //分行下项目名称
    private String project_name;
    //对应的外键
    private String cid;
    //项目路径
    private String project_path;

    public MenuProject() {
    }

    public MenuProject(String id, String project_name, String cid, String project_path) {
        this.id = id;
        this.project_name = project_name;
        this.cid = cid;
        this.project_path = project_path;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getProject_name() {
        return project_name;
    }

    public void setProject_name(String project_name) {
        this.project_name = project_name;
    }

    public String getCid() {
        return cid;
    }

    public void setCid(String cid) {
        this.cid = cid;
    }

    public String getProject_path() {
        return project_path;
    }

    public void setProject_path(String project_path) {
        this.project_path = project_path;
    }
}
