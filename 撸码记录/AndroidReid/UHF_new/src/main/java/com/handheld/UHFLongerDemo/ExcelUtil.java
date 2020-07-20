package com.handheld.UHFLongerDemo;

import android.content.Context;
import android.os.Environment;
import android.util.Log;
import android.widget.Toast;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import jxl.Cell;
import jxl.Sheet;
import jxl.Workbook;
import jxl.WorkbookSettings;
import jxl.format.Colour;
import jxl.write.Label;
import jxl.write.WritableCell;
import jxl.write.WritableCellFormat;
import jxl.write.WritableFont;
import jxl.write.WritableSheet;
import jxl.write.WritableWorkbook;
import jxl.write.WriteException;

public class ExcelUtil {    
	
	public static WritableFont arial14font = null;
    public static WritableCellFormat arial14format = null;
    public static WritableFont arial10font = null;
    public static WritableCellFormat arial10format = null;
    public static WritableFont arial12font = null;
    public static WritableCellFormat arial12format = null;

    public final static String UTF8_ENCODING = "UTF-8";
    public final static String GBK_ENCODING = "GBK";


    /**
     * 单元格的格式设置 字体大小 颜色 对齐方式、背景颜色等...
     */
    public static void format() {
        try {
        	arial14font = new WritableFont(WritableFont.ARIAL, 14, WritableFont.BOLD);
            arial14font.setColour(jxl.format.Colour.LIGHT_BLUE);
            arial14format = new WritableCellFormat(arial14font);
            arial14format.setAlignment(jxl.format.Alignment.CENTRE);
            arial14format.setBorder(jxl.format.Border.ALL, jxl.format.BorderLineStyle.THIN);
            arial14format.setBackground(jxl.format.Colour.VERY_LIGHT_YELLOW);

            arial10font = new WritableFont(WritableFont.ARIAL, 10, WritableFont.BOLD);
            arial10format = new WritableCellFormat(arial10font);
            arial10format.setAlignment(jxl.format.Alignment.CENTRE);
            arial10format.setBorder(jxl.format.Border.ALL, jxl.format.BorderLineStyle.THIN);
            arial10format.setBackground(Colour.GRAY_25);

            arial12font = new WritableFont(WritableFont.ARIAL, 10);
            arial12format = new WritableCellFormat(arial12font);
            //对齐格式
            arial10format.setAlignment(jxl.format.Alignment.CENTRE);
            //设置边框
            arial12format.setBorder(jxl.format.Border.ALL, jxl.format.BorderLineStyle.THIN);
        } catch (WriteException e) {
            Log.e("excel format", Log.getStackTraceString(e));
        }
    }

    /**
     * 初始化Excel
     * @param filePath  存放excel文件的路径（path/demo.xls）
     * @param sheetName Excel表格的表名
     * @param colName   excel中包含的列名（可以有多个）
     */
    public static void initExcel(String filePath,String sheetName, String[] colName) {
    	format();
        WritableWorkbook workbook = null;
        try {
            File file = new File(filePath);
            if (!file.exists()) {
                file.createNewFile();
            } else
                return;
            workbook = Workbook.createWorkbook(file);
            //设置表格的名字
            WritableSheet sheet = workbook.createSheet(sheetName, 0);
            //创建标题栏
            sheet.addCell((WritableCell) new Label(0, 0, filePath, arial14format));
            for (int col = 0; col < colName.length; col++) {
                sheet.addCell(new Label(col, 0, colName[col], arial10format));
            }
            //设置行高
            sheet.setRowView(0, 340);
            workbook.write();
        } catch (Exception e) {
        	Log.e("excel init", Log.getStackTraceString(e));
        } finally {
            if (workbook != null) {
                try {
                    workbook.close();
                } catch (Exception e) {
                	Log.e("excel close workbook", Log.getStackTraceString(e));
                }
            }
        }
    }

    @SuppressWarnings("unchecked")
    public static <T> void writeObjListToExcel(List<T> objList,String fileName, Context c) {
        if (objList != null && objList.size() > 0) {
            WritableWorkbook writebook = null;
            InputStream in = null;
            try {
                WorkbookSettings setEncode = new WorkbookSettings();
                setEncode.setEncoding(UTF8_ENCODING);
                in = new FileInputStream(new File(fileName));
                Workbook workbook = Workbook.getWorkbook(in);
                writebook = Workbook.createWorkbook(new File(fileName),workbook,setEncode);
                WritableSheet sheet = writebook.getSheet(0);

                for (int j = 0; j < objList.size(); j++) {
                    ArrayList<String> list = (ArrayList<String>) objList.get(j);
                    for (int i = 0; i < list.size(); i++) {
                        sheet.addCell(new Label(i, j + 1, list.get(i),arial12format));
                        if (list.get(i).length() <= 5){
                            sheet.setColumnView(i,list.get(i).length()+8); //设置列宽
                        }else {
                            sheet.setColumnView(i,list.get(i).length()+5); //设置列宽
                        }
                    }
                    sheet.setRowView(j+1,350); //设置行高
                }
                writebook.write();
                Toast.makeText(c, "导出Excel成功", Toast.LENGTH_SHORT).show();
            } catch (Exception e) {
            	Log.e("ExcelUtil","excel export workbook error ", e);
            } finally {
                if (writebook != null) {
                    try {
                        writebook.close();
                    } catch (Exception e) {
                    	Log.e("excel close workbook", Log.getStackTraceString(e));
                    }
                }
                if (in != null) {
                    try {
                        in.close();
                    } catch (IOException e) {
                    	Log.e("excel close inputsteam ", Log.getStackTraceString(e));
                    }
                }
            }
        }
    }

    public static String getSDPath() {
    	//判断是否有插入存储卡
    	File sdDir = null;
    	if(Environment.getExternalStorageState().equals(Environment.MEDIA_MOUNTED))
    		sdDir = Environment.getExternalStorageDirectory();
    	//取得sdcard文件路径
    	//StatFs statfs=new StatFs(sdDir.getPath());
    	String dir = sdDir.getPath();//sdDir.toString();
    	Log.i("sd path", dir);
        return dir;
    }

    public static void makeDir(File dir) {
        if (!dir.getParentFile().exists()) {
            makeDir(dir.getParentFile());
        }
        if (!dir.exists()){
            dir.mkdir();
        }
    }

    public static List<ItemData> readData(File file) throws Exception {
        List<ItemData> datas = new ArrayList<>();
        InputStream is = null;
        // 使用jxl
        Workbook rwb = null;
        try {
        	is = new FileInputStream(file);
        	rwb = Workbook.getWorkbook(is);
        	Sheet sheet = rwb.getSheet(0);//默认只取第一个sheet页
            // 有多少行
            int rows = sheet.getRows();
            //Log.i("read excel row.size", rows+"");
            int realRowNum = 0;
            ItemData item = null;
            String val = null;
            Cell cell = null;
            //行循环,不读取表头
            for(int k = 1 ; k < rows ; k++){
            	val = sheet.getCell(0, k).getContents();
            	if(val == null || "".equals(val.trim()))
            		break;//TODO 首列必须有值 ，否则 退出
            	cell = sheet.getCell(6, k);//读取第7列 EPC标签号列，用于判定是否继续读取行
                if(null == cell)continue;
                val = cell.getContents();
                //if(val == null || "".equals(val.trim())){
                if(val == null || "".equals(val.trim())){
                    continue;
                }
                item = new ItemData();
                item.setRowNum(k);
                item.setEpc(cell.getContents());
                //原 盘点状态
                cell = sheet.getCell(14, k);
                val = cell.getContents();
                item.setStatus(val);
                Log.i("ExcelUtil","行号：" + k + "状态为：" + val);
                datas.add(item);
                realRowNum = k;
            }
        Log.i("ExcelUtil","总数据行数：" + realRowNum);
        }catch(Exception e) {
        	Log.e("read file error ", Log.getStackTraceString(e));
        }finally {
        	if (rwb != null) {
                try {
                    rwb.close();
                } catch (Exception e) {
                    Log.e("ExcelUtil","excel read,close workbook error ", e);
                }
            }
            if (is != null) {
                try {
                    is.close();
                } catch (IOException e) {
                    Log.e("ExcelUtil","excel read,close inputsteam error ", e);
                }
            }
        }
        return datas;
    }

    public static void writeData(File srcFile,File destFile,Map<String,ItemData> dataMap) throws Exception{
        InputStream is = null;
        WritableWorkbook wwb = null;
        try {
            Log.i("开始更新写入数据：",dataMap.toString());
        	Workbook rwb = Workbook.getWorkbook(srcFile);        	
            WorkbookSettings settings = new WorkbookSettings();
            settings.setWriteAccess(null);
            settings.setUseTemporaryFileDuringWrite(true);
            File tmpPath = new File(getSDPath()+File.separator+"epcTmp");
            if(!tmpPath.exists())
            	tmpPath.mkdirs();
            settings.setTemporaryFileDuringWriteDirectory(tmpPath);
            //获取可写的writableWorkbook对象
            wwb = Workbook.createWorkbook(destFile, rwb,settings);
            //获取表，然后就可以获取行数，然后在原表后面插入数据了
            WritableSheet sheet = wwb.getSheet(0);//默认只取第一个sheet页
            //sheet.setName("盘点统计");
            WritableCellFormat format1 = null;
            Label label = null;
            ItemData item = null;
            WritableCell cell;
            for(String key : dataMap.keySet()) {
            	item = dataMap.get(key);
            	if(null == item || null == item.getEpc() || item.getEpc().trim().equals(""))
            		continue;
            	Log.i("write item ", item.toString());
                //获取3列1行的单元格格式
            	cell = sheet.getWritableCell(14, item.getRowNum());
            	if(null == cell )continue;
            	if(cell.getCellFormat() == null){
                    format1 = arial12format;
                }else {
                    format1 = new WritableCellFormat(cell.getCellFormat());
                }
                //定义2列1行的值和格式
                label = new Label(14, item.getRowNum(), item.getStatus(),format1);
                sheet.addCell(label);//把这一个label放到当前工作区间
            }
            if(wwb != null){
                wwb.write();
            }
        }catch (Exception e){
            Log.e("ExcelUtil","excel export workbook error ", e);
        }finally {
        	if (wwb != null) {
                try {
                    wwb.close();
                } catch (Exception e) {
                    Log.e("ExcelUtil","excel close workbook error ", e);
                }
            }
            if (is != null) {
                try {
                    is.close();
                } catch (IOException e) {
                    Log.e("ExcelUtil","excel close inputsteam error ", e);
                }
            }
        }
    }
}
