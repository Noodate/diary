package com.handheld.UHFLongerDemo;

import android.app.Activity;
import android.content.SharedPreferences;
import android.content.SharedPreferences.Editor;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.Toast;

import com.handheld.UHFDemo2Longer.R;
import com.handheld.UHFLonger.UHFLongerManager;
/**
 * 
 * @author Administrator
 *
 */
public class SettingActivity extends Activity implements OnClickListener{

	private Button buttonMin;
	private Button buttonPlus;
	private Button buttonSet;
	private EditText editValues ;
	private int value = 30 ;//
	private UHFLongerManager manager ;
	private Spinner spinnerFreBand;
	private Button button_setFreBand;

	private MyApplication myAppli ;
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		setContentView(R.layout.setting_power);
		super.onCreate(savedInstanceState);
		initView();
		myAppli = new MyApplication();
		MyApplication.myapp = myAppli;

	}
	@Override
	protected void onPause() {
		myAppli.closeUHF();
		super.onPause();
	}

	@Override
	protected void onResume() {
		manager = myAppli.getmanager();
		super.onResume();
	}
	private void initView(){
		buttonMin = (Button) findViewById(R.id.button_min);
		buttonPlus = (Button) findViewById(R.id.button_plus);
		buttonSet = (Button) findViewById(R.id.button_set);
		editValues = (EditText) findViewById(R.id.editText_power);
		
		buttonMin.setOnClickListener(this);
		buttonPlus.setOnClickListener(this);
		buttonSet.setOnClickListener(this);
		value =  getSharedValue();
		editValues.setText("" +value);
		button_setFreBand = (Button) findViewById(R.id.button_setFreBand);
		button_setFreBand.setOnClickListener(this);
		spinnerFreBand = (Spinner) findViewById(R.id.spinnerFreband);
		spinnerFreBand.setSelection(getSharedFreBand());

	}
	
	//get Value
	private int getSharedValue(){
		SharedPreferences shared = getSharedPreferences("settings", 0);
		return shared.getInt("power", 30);
	}
	private int getSharedFreBand(){
		SharedPreferences shared = getSharedPreferences("settings", 0);
		return shared.getInt("freband", 1);
	}//save Value
	private void saveSharedFreband(int value){
		SharedPreferences shared = getSharedPreferences("settings", 0);
		Editor editor = shared.edit();
		editor.putInt("freband", value);
		editor.commit();
	}

	//save power Value
	private void saveSharedValue(int value){
		SharedPreferences shared = getSharedPreferences("settings", 0);
		Editor editor = shared.edit();
		editor.putInt("power", value);
		editor.commit();
	}
	@Override
	public void onClick(View v) {
		switch (v.getId()) {
		case R.id.button_min://
			if(value > 5){
				value = value - 1;
			}else {
				value = 30;
			}
			editValues.setText(value + "");
			break;
		case R.id.button_plus://
			if(value < 30){
				value = value + 1;
			}else {
				value = 5;
			}
			editValues.setText(value + "");
			break;
		case R.id.button_set://
			value = Integer.parseInt(editValues.getText().toString());
			if(manager.setOutPower((short) value)){
				saveSharedValue(value);
				Toast.makeText(getApplicationContext(), getString(R.string._set_successs), Toast.LENGTH_SHORT).show();
			}else{
				Toast.makeText(getApplicationContext(), getString(R.string._set_fail), Toast.LENGTH_SHORT).show();
			}
			break;
			case R.id.button_setFreBand:
				int position = spinnerFreBand.getSelectedItemPosition();
				Log.e("poo",""+position);
				if(manager.setFreBand((short)position)){
					saveSharedFreband(position);
					saveSharedValue(value);
					Toast.makeText(getApplicationContext(), getString(R.string._set_successs), Toast.LENGTH_SHORT).show();
				}else{
					Toast.makeText(getApplicationContext(), getString(R.string._set_fail), Toast.LENGTH_SHORT).show();
				}
				break;
		default:
			break;
		}
		
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		getMenuInflater().inflate(R.menu.version, menu);

		return true;
	}
	@Override
	public boolean onMenuItemSelected(int featureId, MenuItem item) {
		// TODO Auto-generated method stub
		PackageManager packageManager = getPackageManager();
		PackageInfo packInfo = null;
		try {
			packInfo = packageManager.getPackageInfo(getPackageName(), 0);
		} catch (PackageManager.NameNotFoundException e) {
			e.printStackTrace();
		}
		String version = packInfo.versionName;//get this version
		Toast.makeText(SettingActivity.this,"Version:" + version
				+"\nDate:"+"2017-05-20",Toast.LENGTH_SHORT).show();
		return super.onMenuItemSelected(featureId, item);
	}
}
