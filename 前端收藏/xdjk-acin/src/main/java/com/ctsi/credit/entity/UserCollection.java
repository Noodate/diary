package com.ctsi.credit.entity;

public class UserCollection {

    private String id;
    private String usercollection_name;
    private String usercollection_path;
    private String userId;

    public UserCollection() {
    }

    public UserCollection(String id, String usercollection_name, String usercollection_path, String userId) {
        this.id = id;
        this.usercollection_name = usercollection_name;
        this.usercollection_path = usercollection_path;
        this.userId = userId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsercollection_name() {
        return usercollection_name;
    }

    public void setUsercollection_name(String usercollection_name) {
        this.usercollection_name = usercollection_name;
    }

    public String getUsercollection_path() {
        return usercollection_path;
    }

    public void setUsercollection_path(String usercollection_path) {
        this.usercollection_path = usercollection_path;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }
}
