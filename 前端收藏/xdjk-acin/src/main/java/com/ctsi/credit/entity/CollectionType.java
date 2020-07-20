package com.ctsi.credit.entity;

public class CollectionType {

    private String userid;
    private String path;
    private String name;
    private byte ioStr[];

    public CollectionType() {
    }

    public CollectionType(String userid, String path, String name, byte[] ioStr) {
        this.userid = userid;
        this.path = path;
        this.name = name;
        this.ioStr = ioStr;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public byte[] getIoStr() {
        return ioStr;
    }

    public void setIoStr(byte[] ioStr) {
        this.ioStr = ioStr;
    }
}
