package com.handheld.UHFLongerDemo;

/**
 * Created by DCKRML on 2020/4/28.
 */
public class ItemData {
    /**
     * excel行号
     */
    private int rowNum;
    /**
     * 标签ID
     */
    private String epc;
    /**
     * 盘点状态
     */
    private String status;

    public int getRowNum() {
        return rowNum;
    }

    public void setRowNum(int rowNum) {
        this.rowNum = rowNum;
    }

    public String getEpc() {
        return epc;
    }

    public void setEpc(String epc) {
        this.epc = epc;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "ItemData{" +
                "rowNum=" + rowNum +
                ", epc='" + epc + '\'' +
                ", status='" + status + '\'' +
                '}';
    }
}
