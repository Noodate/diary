package com.handheld.UHFLongerDemo;

import java.util.ArrayList;
import java.util.List;
import java.util.Timer;
import java.util.TimerTask;

import com.handheld.UHFDemo2Longer.R;
import com.handheld.UHFLonger.UHFLongerManager;

import android.app.Application;
import android.content.Context;
import android.content.SharedPreferences;
import android.widget.Toast;

/**
 * use to save public variable
 *
 * @author Administrator
 */
public class MyApplication {
    public static MyApplication myapp;
    private List<String> listEpc = new ArrayList<String>(); //EPCs
    private String selectEPC = null;//
    private String password = null;//
    private UHFLongerManager manager = null; //

    public boolean mInitFlag = false;

    private List<String> listInputEPC = new ArrayList<String>();


    public UHFLongerManager getmanager() {
        if (manager == null)
            try {
                this.manager = UHFLongerManager.getInstance();
                mInitFlag = true;
            } catch (Exception e) {
                e.printStackTrace();
            }
        return manager;
    }

    public void closeUHF() {
        if (manager != null) {
            manager.close();
            manager = null;
            mInitFlag = false;
        }
    }


    public List<String> getListInputEPC() {
        return listInputEPC;
    }


    public void setListInputEPC(List<String> listInputEPC) {
        this.listInputEPC = listInputEPC;
    }


    public void setmanager(UHFLongerManager manager) {
        this.manager = manager;
    }


    public String getPassword() {
        return password;
    }


    public void setPassword(String password) {
        this.password = password;
    }


    public String getSelectEPC() {
        return selectEPC;
    }


    public void setSelectEPC(String selectEPC) {
        this.selectEPC = selectEPC;
    }


    public List<String> getListEpc() {
        return listEpc;
    }


    public void setListEpc(List<String> listEpc) {
        this.listEpc = listEpc;
    }


    public void addEPC(String epc) {
        if (listEpc != null) {
            listEpc.add(epc);
        }
    }
}
