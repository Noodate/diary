package com.handheld.UHFLongerDemo;

import android.util.Log;

import java.io.File;
import java.util.*;

/**
 * Created by DCKRML on 2020/4/28.
 */
public class CompareUtil {
    private static Map<String,ItemData> dataMap = new HashMap<>();
    private File excelFile;

    private CompareUtil(){}
    public CompareUtil(File excelFile){
        this.excelFile = excelFile;
    }
    /**
     * 读取excel文件内容
     */
    public int readExcel() throws Exception{
        dataMap.clear();
        //将Excel数据的行号、epc标识、盘点状态记录下来
        List<ItemData> datas = ExcelUtil.readData(excelFile);
        for(ItemData item : datas){
            dataMap.put(item.getEpc(),item);
            Log.i("CompareUtil",item.toString());
        }
        return dataMap.size();
    }

    public void updateData(List<String> epcList){
        ItemData itemData = null;
        for (String epc : epcList){
            itemData = dataMap.get(epc);
            if(itemData != null){
                itemData.setStatus("已盘点");
            }
        }
    }

    public void writeExcel(File destFile) throws Exception{
        /*ItemData itemTest = new ItemData();
        itemTest.setStatus("已盘点");
        itemTest.setRowNum(8);
        itemTest.setEpc("0200001801");

        dataMap.put(itemTest.getEpc(),itemTest);*/
        ExcelUtil.writeData(excelFile,destFile,dataMap);
        dataMap.clear();
    }

}
