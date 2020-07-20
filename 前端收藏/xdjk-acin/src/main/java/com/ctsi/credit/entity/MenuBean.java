package com.ctsi.credit.entity;

import java.util.List;

public class MenuBean {

    private String OneName;
    private List<MenuProject> listSecond;
    private String url;

    public MenuBean() {
    }

    public MenuBean(String oneName, List<MenuProject> listSecond, String url) {
        OneName = oneName;
        this.listSecond = listSecond;
        this.url = url;
    }

    public String getOneName() {
        return OneName;
    }

    public void setOneName(String oneName) {
        OneName = oneName;
    }

    public List<MenuProject> getListSecond() {
        return listSecond;
    }

    public void setListSecond(List<MenuProject> listSecond) {
        this.listSecond = listSecond;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
