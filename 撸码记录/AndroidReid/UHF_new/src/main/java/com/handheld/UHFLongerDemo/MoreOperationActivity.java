package com.handheld.UHFLongerDemo;

import android.app.Activity;
import android.app.Fragment;
import android.app.FragmentManager;
import android.app.FragmentTransaction;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemSelectedListener;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.Spinner;

import com.BRMicro.Tools;
import com.handheld.UHFDemo2Longer.R;
import com.handheld.UHFLonger.UHFLongerManager;

public class MoreOperationActivity extends Activity {
	private String[] operations;
	private Spinner  spinnerOperation ;//
	private LinearLayout operationLayout ;
	private Button buttonBack ;
	private Spinner spinnerEPC ;//
	
	private EditText editAccess ;//
	
	private Fragment settingEPC ;//
	private Fragment writeRead ;//
	private Fragment settingPassword ; //
	private Fragment readEpcSpecial ;//
	private Fragment lockResever ;//
	private Fragment lockOthers ;
	
	private MyApplication myAppli ;
	private UHFLongerManager manager ;
	
	/** Fragment **/
	private FragmentManager fragManager ;
	private FragmentTransaction fragTran;
	
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		// TODO Auto-generated method stub
		super.onCreate(savedInstanceState);
		operations = new String[]{getString(R.string._rewrite_epc),getString(R.string._read_and_write),getString(R.string._rewrite_password),getString(R.string._Reserve_read_write_protection),getString(R.string._other_read_write_protection),getString(R.string._read_epc_special_word)};
		setContentView(R.layout.activity_more);
		myAppli = MyApplication.myapp;
		initView();
		fragManager = getFragmentManager();
		settingEPC = new SettingEPC();
		writeRead = new WriteReadFragment();
		readEpcSpecial = new ReadEPCspecial();
		lockResever = new LockReseverFragment();
		lockOthers = new LockOthers();
		
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
		spinnerOperation = (Spinner) findViewById(R.id.spinner_operation);
		operationLayout = (LinearLayout) findViewById(R.id.layout_operation);
		spinnerEPC = (Spinner) findViewById(R.id.spinner_epc);
		buttonBack = (Button) findViewById(R.id.button_back);
		editAccess = (EditText) findViewById(R.id.editText_access);
		String access = editAccess.getText().toString();
		if(access != null && access.length()>0){
			myAppli.setPassword(access);
		}
		
		editAccess.addTextChangedListener(new TextWatcher() {
			
			@Override
			public void onTextChanged(CharSequence s, int start, int before, int count) {
				// TODO Auto-generated method stub
				
			}
			
			@Override
			public void beforeTextChanged(CharSequence s, int start, int count,
					int after) {
				// TODO Auto-generated method stub
				
			}
			
			@Override
			public void afterTextChanged(Editable s) {
				myAppli.setPassword(s.toString());
				
			}
		});
		spinnerOperation.setAdapter(new ArrayAdapter<String>(this, 
				android.R.layout.simple_selectable_list_item, 
				operations));
		spinnerEPC.setAdapter(new ArrayAdapter<String>(this, 
				R.layout.simple_spinner_item,
				myAppli.getListEpc()));
		
		//select operation type
		spinnerOperation.setOnItemSelectedListener(new OnItemSelectedListener() {

			@Override
			public void onItemSelected(AdapterView<?> parent, View view,
					int position, long id) {
				if(getString(R.string._rewrite_epc).equals(operations[position])){
					repleaceFragment(settingEPC);
				}else if(getString(R.string._read_and_write).equals(operations[position])){
					repleaceFragment(writeRead);
				}else if(getString(R.string._rewrite_password).equals(operations[position])){
					repleaceFragment(settingPassword);
				}else if(getString(R.string._Reserve_read_write_protection).equals(operations[position])){
					repleaceFragment(lockResever);
				}else if(getString(R.string._other_read_write_protection).equals(operations[position])){
					repleaceFragment(lockOthers);
				}else if(getString(R.string._read_epc_special_word).equals(operations[position])){
					repleaceFragment(readEpcSpecial);
				}
				
			}

			@Override
			public void onNothingSelected(AdapterView<?> parent) {
				// TODO Auto-generated method stub
				
			}
		});
		//EPC
		spinnerEPC.setOnItemSelectedListener(new OnItemSelectedListener() {

			@Override
			public void onItemSelected(AdapterView<?> parent, View view,
					int position, long id) {
				//select EPC

				manager.clearSelect();
				myAppli.setSelectEPC(myAppli.getListEpc().get(position));
				manager.selectEPC(Tools.HexString2Bytes(myAppli.getSelectEPC()));
				
			}

			@Override
			public void onNothingSelected(AdapterView<?> parent) {
				// TODO Auto-generated method stub
				
			}
			
		});
		
		//return 
		buttonBack.setOnClickListener(new OnClickListener() {
			
			@Override
			public void onClick(View v) {
				finish();
				
			}
		});
		
	}
	
	// Swith of Fragments
	private void repleaceFragment(Fragment fragment){
		fragTran = fragManager.beginTransaction();
		fragTran.replace(R.id.layout_operation, fragment);
		fragTran.commit();
	}
}
