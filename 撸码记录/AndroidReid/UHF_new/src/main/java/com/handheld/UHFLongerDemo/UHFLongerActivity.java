package com.handheld.UHFLongerDemo;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.ProgressDialog;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.util.Log;
import android.view.KeyEvent;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.ListView;
import android.widget.Toast;

import com.bean.MyAdapter;
import com.handheld.UHFDemo2Longer.R;
import com.handheld.UHFDemo2Longer.R.array;
import com.handheld.UHFLonger.UHFLongerManager;
import com.senter.iot.support.openapi.uhf.UhfI;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Timer;
import java.util.TimerTask;

public class UHFLongerActivity extends Activity implements OnClickListener {

    private final String TAG = UHFLongerActivity.class.getSimpleName();

    private static UHFLongerManager manager;

    private Button button_out;
    private Button buttonStart;
    private Button buttonExport;
    private ListView listViewData;
    private ArrayList<EPC> listEPC;
    private ArrayList<Map<String, Object>> listMap;
    private boolean runFlag = true;
    private boolean startFlag = false;
    private boolean connectFlag = false;
    private boolean runReadFlag = false;
    private boolean runExportFlag = false;
    private File excelFile = null;
    CompareUtil compareUtil = null;
    private MyApplication myAppli;


    private ListView listView;
    List<Map<String, ?>> ListMs = new ArrayList<Map<String, ?>>();
    MyAdapter Adapter;
    Map<String, String> h = new HashMap<String, String>();
    String[] Coname = new String[]{"序号", "标签号", "盘点状态", "状态", "资产类别", "品牌", "机构", "设备型号", "序列号", "使用人"};
    public static String fileEnd = "";
    public static int succeedNum;
    public static int allNum;
    public String path = "";
    public static String newPath = "";
    Map<String, UhfI.ST_TagInfo> TagsMap = new LinkedHashMap();//有序
    private ProgressDialog mProgressDialog;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //verifyStoragePermissions(this);
        setContentView(R.layout.activity_uhflonger);
        myAppli = new MyApplication();
        MyApplication.myapp = myAppli;
        initView();
        Util.initSoundPool(this);//
        Thread thread = new InventoryThread();
        thread.start();

        keyReceiver = new KeyReceiver();
        IntentFilter intentFilter = new IntentFilter();
        intentFilter.addAction("android.rfid.FUN_KEY");
        registerReceiver(keyReceiver, intentFilter);


        listView = (ListView) findViewById(R.id.listView_epclist);

    }

    private KeyReceiver keyReceiver;

    private void initView() {
        buttonStart = (Button) findViewById(R.id.button_start);
        buttonExport = (Button) findViewById(R.id.button_export);
        button_out = (Button) findViewById(R.id.button_out);
        listViewData = (ListView) findViewById(R.id.listView_data);
        buttonStart.setOnClickListener(this);
        buttonExport.setOnClickListener(this);
        button_out.setOnClickListener(this);
        setButtonClickable(buttonStart, false);
        listEPC = new ArrayList<EPC>();
        myAppli.setListEpc(new ArrayList<String>());

    }

    @Override
    protected void onPause() {
        if (!mIsNeedDisconnect) {
            super.onPause();
            return;
        }
        startFlag = false;
        buttonStart.setText(getString(R.string.inventory));
        myAppli.closeUHF();
        super.onPause();
    }

    @Override
    protected void onResume() {
        if (!mIsNeedDisconnect) {
            mIsNeedDisconnect = true;
            super.onResume();
            return;
        }
        showProgress("初始化中，请勿退出关闭程序", false);
        new Thread(new Runnable() {
            @Override
            public void run() {
                connect();
                if (manager != null) {
                    manager.clearSelect();
                }
                mHandler.sendEmptyMessage(0);
            }
        }).start();
        super.onResume();
    }

    @Override
    protected void onDestroy() {
        startFlag = false;
        runFlag = false;
        if (manager != null) {
            manager.close();
            manager = null;
        }
        unregisterReceiver(keyReceiver);
        super.onDestroy();
    }

    private long exitSytemTime = 0;
    //	@Override
//	public boolean onKeyDown(int keyCode, KeyEvent event) {
////		if (keyCode == KeyEvent.KEYCODE_HOME) {
////			Barcode1D2DManager.Scan();
////		}
//		if (keyCode == KeyEvent.KEYCODE_BACK) {
//			if (System.currentTimeMillis() - exitSytemTime > 2000) {
//				Toast.makeText(getApplicationContext(), R.string.exitSystem,
//						Toast.LENGTH_SHORT).show();
//				exitSytemTime = System.currentTimeMillis();
//				return true;
//			} else {
//				finish();
//			}
//		}
//		return super.onKeyDown(keyCode, event);
//	}
    private int count = 5;

    /**
     * invertory thread
     *
     * @author Administrator
     */
    class InventoryThread extends Thread {
        private List<String> epcList;

        @Override
        public void run() {
            super.run();
            while (runFlag) {

                if (startFlag) {
//					manager.stopInventoryMulti()
                    epcList = manager.inventoryRealTime(); //
                    if (epcList != null && !epcList.isEmpty()) {
                        //
                        Util.play(1, 0);
                        for (String epc : epcList) {
//							String epcStr = new String(epc);
                            if (null == epc || epc.trim().equals("")) {
                                continue;
                            }
                            // TODO 长码转换为短码 20200511
                            String shartEpc = com.ny.rfidlabel.NyReadLabel.getLabelNo(epc);
                            if (null == shartEpc || shartEpc.trim().equals("")) {
                                continue;
                            }
                            Log.i("[longEPC][shortEPC]", "[" + epc + "][" + shartEpc + "]");
                            addToList(listEPC, shartEpc);
                        }
                    }
                    epcList = null;
                    try {
                        Thread.sleep(20);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            }
        }
    }

    //EPC and to LISTVIEW
    private void addToList(final List<EPC> list, final String epc) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                UhfI.ST_TagInfo tf = TagsMap.get(epc);
//				String epcstr = epc;
//				if (epcstr.length() < 24)
//					epcstr = String.format("%-24s", epcstr);
                for (int k = 1; k < ListMs.size(); k++) {
                    @SuppressWarnings("unchecked")
                    Map<String, String> m = (Map<String, String>) ListMs.get(k);
                    m.put(Coname[0], String.valueOf(k));
                    if (m.get(Coname[1]).equals(epc)) {
                        System.out.println("---------" + m.get(Coname[2]));
                        if (!m.get(Coname[2]).equals("已盘点")) {
                            listSort(ListMs, k);
                            succeedNum++;
                            m.put(Coname[2], "已盘点");
                            //变色——肖庆
//							listView.getChildAt(listView.getLastVisiblePosition() - succeedNum - 1).findViewById(R.id.textView_readcnt).setBackgroundColor(Color.GREEN);
                        }
                        break;
                    }
                }

                Adapter = new MyAdapter(getApplicationContext(),
                        ListMs, R.layout.listitemview_inv, Coname,
                        new int[]{R.id.textView_readsort,
                                R.id.textView_readepc,
                                R.id.textView_readcnt,
                                R.id.textView_readant,
                                R.id.textView_readpro,
                                R.id.textView_readrssi,
                                R.id.textView_readfre,
                                R.id.textView_reademd,
                                R.id.textView_assetClass,
                                R.id.textView_serialNumber});
                listView.setAdapter(Adapter);
            }
        });
    }

    private void setButtonClickable(Button button, boolean flag) {
        button.setClickable(flag);
        if (flag) {
            button.setTextColor(Color.BLACK);
        } else {
            button.setTextColor(Color.GRAY);
        }
    }

    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.button_export:
                NewScan();
                break;
            case R.id.button_start:
                Scan();
                break;
            case R.id.button_out:
                outScan();
                break;
            default:
                break;
        }
    }


    public static List readExcel(String path) {

        List lists = new ArrayList();
        File file = new File(path);
        // 读取文件
        InputStream fs = null;
        try {
            fs = new FileInputStream(file);
            //  InputStream is = new FileInputStream(file);i
            // 创建一个工作簿
            Workbook workbook = null;
            //xls
            if (path.substring(path.length() - 1, path.length()).equals("s")) {
                fileEnd = ".xls";
                workbook = new HSSFWorkbook(fs);
            }
            //xlsx
            else if (path.substring(path.length() - 1, path.length()).equals("x")) {
                fileEnd = ".xlsx";
                workbook = new XSSFWorkbook(fs);
            }
            // 获取第一个sheet
            Sheet sheet = workbook.getSheetAt(0);
            System.out.println(sheet.getSheetName());
            // 获取第一行
            Row row = null;
            //6:标签号，盘点状态：14，状态：9，资产类别：1，品牌：2，机构：7，设备型号：3，序列号：4，使用人：8
            int[] cellList = {6, 14, 9, 1, 2, 7, 3, 4, 8};
            for (int num : cellList) {
                List<String> list = new ArrayList();
                for (int i = 0; i <= sheet.getLastRowNum(); i++) {
                    row = sheet.getRow(i);
                    row.getCell(num).setCellType(Cell.CELL_TYPE_STRING);
                    String str = row.getCell(num).getStringCellValue();
                    list.add(row.getCell(num).getStringCellValue());
                }
                lists.add(list);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return lists;
    }

    public void outScan() {
        if (path.equals("")) {
            showToast("请先导入文件");
            return;
        }

        new AlertDialog.Builder(UHFLongerActivity.this).setTitle("是否保存")//设置对话框标题
                .setMessage("本次盘点成功" + succeedNum + "    剩余" + (allNum - succeedNum))//设置显示的内容
                .setPositiveButton("确定", new DialogInterface.OnClickListener() {//添加确定按钮
                    @Override
                    public void onClick(DialogInterface dialog, int which) {//确定按钮的响应事件
                        List<String> list = new ArrayList();
                        for (int k = 1; k < ListMs.size(); k++) {
                            Map<String, String> m = (Map<String, String>) ListMs.get(k);
                            if (m.get(Coname[2]).equals("已盘点")) {
                                list.add(m.get(Coname[1]));
                            }
                        }
                        //获取年月日
                        Calendar c = Calendar.getInstance();//
                        String mYear = c.get(Calendar.YEAR) + ""; // 获取当前年份
                        String mMonth = (c.get(Calendar.MONTH) + 1) + "";// 获取当前月份
                        String mDay = c.get(Calendar.DAY_OF_MONTH) + "";// 获取当日期
                        if (!path.equals("")) {
                            newPath = path.substring(0, path.indexOf(".")) + mYear + "-" + mMonth + "-" + mDay + fileEnd;
                            if (copyFile(path, newPath)) {
//                                outListToExcle(ListMs, newPath);
								outExcel(list, newPath);
//								//刷新缓存
								scanFileAsync(getApplicationContext(), newPath);
                                showToast("Excle导出成功");
                            }
                        } else {
                            showToast("Excle尚未导入");
                        }
                    }
                }).setNegativeButton("取消", new DialogInterface.OnClickListener() {//添加取消按钮
            @Override
            public void onClick(DialogInterface dialog, int which) {//取消按钮的响应事件

            }
        }).show();//显示此对话框
    }


    public void outExcel(List<String> list, String path) {
		File file = new File(path);
		// 读取文件
		InputStream  fs = null;
		try {
			fs = new FileInputStream(file);
			//  InputStream is = new FileInputStream(file);i
			// 创建一个工作簿
			Workbook workbook = null;
			//xls
			if (fileEnd.equals(".xls")) {
				workbook = new HSSFWorkbook(fs);
			}
			//xlsx
			else if (fileEnd.equals(".xlsx")) {
				workbook = new XSSFWorkbook(fs);
			}
			// 获取第一个sheet
			Sheet sheet = workbook.getSheetAt(0);
			System.out.println(sheet.getSheetName());

			// 获取第一行
			Row row = null;
			List<List> listbase = readExcel(path);
			for (String str : list) {
				for (int i = 0; i < listbase.get(0).size(); i++) {
					if (str.equals(listbase.get(0).get(i))) {
						System.out.println(i);
						row = sheet.getRow(i);
						Cell cell = row.getCell(14);
						cell.setCellValue("已盘点");
					}
				}
			}
			// 创建输出流
			FileOutputStream os = new FileOutputStream(new File(path));
			// 输出文件
			workbook.write(os);

		} catch (Exception e) {
			e.printStackTrace();
		}
    }

    private void NewScan() {
        //选择文件
        Intent intent = new Intent(Intent.ACTION_GET_CONTENT);
        intent.setType("*/*");//设置类型，我这里是任意类型，任意后缀的可以这样写。
        intent.addCategory(Intent.CATEGORY_OPENABLE);
        mIsNeedDisconnect = false;
        startActivityForResult(intent, 1);
        allNum = 0;
        succeedNum = 0;
    }

    //选择文件后续
    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        Log.e(TAG, "onActivityResult: " + requestCode);
        if (data == null) {
            return;
        }
        Uri uri = data.getData();
        path = uri.getPath();
        path = path.substring(path.indexOf(":") + 1, path.length());
        if (!path.contains("storage")) {
            path = "/storage/emulated/0/" + path;
        }
        ListMs.clear();
        // if (Adapter == null) {
//		ListMs.add(h);
        //读取文件list
        if (path.length() > 0) {
            showProgress("正在导入，请勿退出或关闭程序", false);
            new Thread(new Runnable() {
                @Override
                public void run() {
                    List<List> lists = readExcel(path);
                    for (int i = 0; i < lists.get(0).size(); i++) {
//				"序号","EPC ID","次数","天线","协议","RSSI","频率","附加数据"
                        Map<String, String> m = new HashMap<String, String>();
                        m.put(Coname[0], String.valueOf(TagsMap.size()));
                        m.put(Coname[1], lists.get(0).get(i) + "");
                        m.put(Coname[2], lists.get(1).get(i) + "");
                        m.put(Coname[3], lists.get(2).get(i) + "");
                        m.put(Coname[4], lists.get(3).get(i) + "");
                        m.put(Coname[5], lists.get(4).get(i) + "");
                        m.put(Coname[6], lists.get(5).get(i) + "");
                        m.put(Coname[7], lists.get(6).get(i) + "");
                        m.put(Coname[8], lists.get(7).get(i) + "");
                        m.put(Coname[9], lists.get(8).get(i) + "");
                        ListMs.add(m);
                        //  }
                    }
                    allNum = ListMs.size() - 1;
                    mHandler.sendEmptyMessage(10086);
                }
            }).start();
        } else {
            Toast.makeText(UHFLongerActivity.this, "取消读取", Toast.LENGTH_LONG).show();
        }
    }

    /**
     * 排序 ——肖庆
     */
    private void listSort(List<Map<String, ?>> listMs, int j) {
        while (true) {
            if (j < listMs.size() - 1) {
                Collections.swap(ListMs, j, j + 1);
                j++;
            } else {
                break;
            }
        }
    }

    private void connect() {
        try {
            manager = myAppli.getmanager();
            Timer timer = new Timer();
            timer.schedule(new TimerTask() {
                @Override
                public void run() {
                    SharedPreferences shared = getSharedPreferences("settings", 0);
                    final int value = shared.getInt("power", 30);
                    if (manager.setOutPower((short) value)) {
                        runOnUiThread(new Runnable() {
                            public void run() {
                                Toast.makeText(UHFLongerActivity.this, getString(R.string._power_now) + value, Toast.LENGTH_SHORT).show();
                            }
                        });
                    }
                    final int reg = shared.getInt("freband", 1);
                    if (manager.setFreBand((short) reg)) {
                        runOnUiThread(new Runnable() {
                            public void run() {
                                Toast.makeText(UHFLongerActivity.this, getString(R.string._freBand) + getResources().getStringArray(array.freBandArray)[reg], Toast.LENGTH_SHORT).show();
                            }
                        });
                    }
                }
            }, 1000);
        } catch (Exception e) {

            e.printStackTrace();
        }
        if (manager == null) {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    Toast.makeText(UHFLongerActivity.this, UHFLongerActivity.this.getString(R.string.serialport_init_fail), Toast.LENGTH_SHORT).show();
                    setButtonClickable(buttonStart, false);
                }
            });
//			setButtonClickable(buttonClear, false);
//			setButtonClickable(buttonConnect, false);
//            mHandler.sendEmptyMessage(12);
            return;
        } else {
            connectFlag = true;
        }
        myAppli.setmanager(manager);
        Util.play(1, 0);
//		setButtonClickable(buttonConnect, false);
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                setButtonClickable(buttonStart, true);
            }
        });
//		setButtonClickable(buttonMore, true);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.main, menu);

        return true;
    }

    @Override
    public boolean onMenuItemSelected(int featureId, MenuItem item) {
        // TODO Auto-generated method stub
        if (connectFlag) {
            Intent intent = new Intent(this, SettingActivity.class);
            startActivity(intent);
        }
        return super.onMenuItemSelected(featureId, item);
    }

    public static UHFLongerManager getUhfmanager() {
        return manager;
    }

    public class KeyReceiver extends BroadcastReceiver {

        private String TAG = "KeyReceiver";

        @Override
        public void onReceive(Context context, Intent intent) {
            int keyCode = intent.getIntExtra("keyCode", 0);
            boolean keyDown = intent.getBooleanExtra("keydown", false);
            if (myAppli.getmanager() == null || !myAppli.mInitFlag) {
                Log.e(TAG, "scan manager == null");
                return;
            }

//			Log.e("down", ""+keyDown);
            if (keyDown) {
                switch (keyCode) {
                    case KeyEvent.KEYCODE_F1:
                        Scan();
                        break;
                    case KeyEvent.KEYCODE_F2:
                        Scan();
                        break;
                    case KeyEvent.KEYCODE_F3:
                        Scan();
                        break;
                    case KeyEvent.KEYCODE_F5:
                        Scan();
                        break;
                    case KeyEvent.KEYCODE_F4:
                        Scan();
                        break;
                }
            }

        }

    }

    private void Scan() {
        if (path.equals("")) {
            showToast("请先导入文件");
            return;
        }
        if (myAppli.getmanager() == null || !myAppli.mInitFlag) {
            Log.e(TAG, "scan manager == null");
            return;
        }
        if (!startFlag) {
            startFlag = true;
            buttonStart.setText(getString(R.string.stop_inventory));
        } else {
            startFlag = false;
            buttonStart.setText(getString(R.string.inventory));
        }
    }

    private Toast mToast;

    private void showToast(String message) {
        if (mToast == null) {
            mToast = Toast.makeText(UHFLongerActivity.this, message, Toast.LENGTH_SHORT);
            mToast.show();
        } else {
            mToast.setText(message);
            mToast.show();
        }
    }


    public boolean copyFile(String oldPath$Name, String newPath$Name) {
        try {
            File oldFile = new File(oldPath$Name);
            if (!oldFile.exists()) {
                Log.e("--Method--", "copyFile:  oldFile not exist.");
                return false;
            } else if (!oldFile.isFile()) {
                Log.e("--Method--", "copyFile:  oldFile not file.");
                return false;
            } else if (!oldFile.canRead()) {
                Log.e("--Method--", "copyFile:  oldFile cannot read.");
                return false;
            }

            /* 如果不需要打log，可以使用下面的语句
            if (!oldFile.exists() || !oldFile.isFile() || !oldFile.canRead()) {
                return false;
            }
            */

            FileInputStream fileInputStream = new FileInputStream(oldPath$Name);
            FileOutputStream fileOutputStream = new FileOutputStream(newPath$Name);
            byte[] buffer = new byte[1024];
            int byteRead;
            while (-1 != (byteRead = fileInputStream.read(buffer))) {
                fileOutputStream.write(buffer, 0, byteRead);
            }
            fileInputStream.close();
            fileOutputStream.flush();
            fileOutputStream.close();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public void scanFileAsync(Context ctx, String filePath) {
        Intent scanIntent = new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE);
        scanIntent.setData(Uri.fromFile(new File(filePath)));
        ctx.sendBroadcast(scanIntent);
    }

    private boolean mIsNeedDisconnect = true;

    /**
     * 进度条提示框
     * @param message 提示框信息
     * @param cancelable 是否可以被用户手动取消
     */
    private void showProgress(String message, boolean cancelable){
        mProgressDialog = new ProgressDialog(this);
        mProgressDialog.setMessage(message);
        mProgressDialog.setCancelable(false);
        mProgressDialog.setProgressStyle(ProgressDialog.STYLE_SPINNER);
        mProgressDialog.show();
    }

    /**
     * 取消进度条提示框
     */
    private void dismissProgress() {
        if (mProgressDialog != null) {
            mProgressDialog.dismiss();
            mProgressDialog = null;
        }
    }

    /**
     * 消息Handler，用以接收子线程更新UI的请求
     */
    private Handler mHandler = new MessageHandler(this);

    private static class MessageHandler extends Handler {

        private WeakReference<UHFLongerActivity> mWeakReference;

        private MessageHandler(UHFLongerActivity activity) {
            mWeakReference = new WeakReference<>(activity);
        }

        @Override
        public void handleMessage(Message msg) {
            UHFLongerActivity activity = mWeakReference.get();
            activity.dismissProgress();
            int what = msg.what;
            if (what == 10086) {
                activity.Adapter = new MyAdapter(activity.getApplicationContext(),
                        activity.ListMs, R.layout.listitemview_inv, activity.Coname,
                        new int[]{R.id.textView_readsort,
                                R.id.textView_readepc,
                                R.id.textView_readcnt,
                                R.id.textView_readant,
                                R.id.textView_readpro,
                                R.id.textView_readrssi,
                                R.id.textView_readfre,
                                R.id.textView_reademd,
                                R.id.textView_assetClass,
                                R.id.textView_serialNumber});
                activity.listView.setAdapter(activity.Adapter);
                activity.showToast("读取数据" + allNum + "条");
            } else if (what == 12) {
                Toast.makeText(activity, activity.getString(R.string.serialport_init_fail), Toast.LENGTH_SHORT).show();
            }
        }
    }
}
