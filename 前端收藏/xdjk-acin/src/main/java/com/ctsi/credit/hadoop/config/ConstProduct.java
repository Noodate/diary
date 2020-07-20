package com.ctsi.credit.hadoop.config;

public class ConstProduct implements IConst {
    @Override
    public String getHadoopusername() {
        return "xdjk";
    }

    @Override
    public String getHadoopUrl() {
        return "hdfs://10.13.141.52:9000";
    }

    @Override
    public String getDownloadUrl() {

        return "/home/user/XinDaiYuanChengVideo/";
    }

}
