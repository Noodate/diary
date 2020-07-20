package com.ctsi.credit.hadoop.config;


public class ConstDebug implements IConst {

    @Override
    public String getHadoopusername() {
        return "hadoop";
    }

    @Override
    public String getHadoopUrl() {
        return "hdfs://192.168.142.111:9000";
    }

    public String getDownloadUrl() {

        return "D://XinDaiYuanChengVideo/";
    }

}
