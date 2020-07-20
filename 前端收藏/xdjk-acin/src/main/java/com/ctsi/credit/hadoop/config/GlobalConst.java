package com.ctsi.credit.hadoop.config;

public class GlobalConst {
    private static GlobalConst ourInstance = new GlobalConst();

    public static GlobalConst getInstance() {
        return ourInstance;
    }
    IConst constA;
    private GlobalConst() {
         constA = new ConstDebug();
        //    constA = new ConstProduct();
    }

    public String getHadoopusername() {
        return constA.getHadoopusername();
    }

    public String getHadoopUrl() {
        return constA.getHadoopUrl();
    }

    public String getDownloadUrl() {
        return constA.getDownloadUrl();
    }
}
