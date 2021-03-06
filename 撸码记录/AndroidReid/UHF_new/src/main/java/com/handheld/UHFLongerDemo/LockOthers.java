package com.handheld.UHFLongerDemo;

import android.app.Fragment;
import android.content.Context;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.View.OnClickListener;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemSelectedListener;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.CompoundButton;
import android.widget.CompoundButton.OnCheckedChangeListener;
import android.widget.RadioButton;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import com.BRMicro.Tools;
import com.handheld.UHFDemo2Longer.R;
import com.handheld.UHFLonger.UHFLongerManager;

public class LockOthers extends Fragment implements OnClickListener{
	private Context context;
	private View rootView;

	private RadioButton radioEpc;
	private RadioButton radioTid;
	private RadioButton radioUser;
	private Spinner spinnerLockType;
	private TextView textTips;
	private Button buttonSetting;
	private MyApplication myAppli;
//	private UHFRemoteManager uhf;
	private String[] lockTypeArray;
	private int lockType = 0;
	private int membank = UHFLongerManager.LOCK_MEM_EPC;
	private UHFLongerManager manager ;

	@Override
	public void onCreate(Bundle savedInstanceState) {
		lockTypeArray = new String[] { getString(R.string._no_password_can_be_writed),
				getString(R.string._password_write),
				getString(R.string._Always_read_write), getString(R.string._never_read_and_write) };
		context = getActivity();
		myAppli = MyApplication.myapp;
		manager = myAppli.getmanager();
//		uhf = UHFRemoteManager.getInstance();
		super.onCreate(savedInstanceState);
	}

	@Override
	public View onCreateView(LayoutInflater inflater, ViewGroup container,
			Bundle savedInstanceState) {
		rootView = inflater.inflate(R.layout.fragment_lock_other, container,
				false);
		initView();

		return rootView;
	}

	private void initView() {
		radioEpc = (RadioButton) rootView.findViewById(R.id.radioButton_epc);
		radioTid = (RadioButton) rootView.findViewById(R.id.radioButton_tid);
		radioUser = (RadioButton) rootView.findViewById(R.id.radioButton_user);
		textTips = (TextView) rootView
				.findViewById(R.id.textView_lock_other_tips);
		buttonSetting = (Button) rootView
				.findViewById(R.id.button_other_lock_set);
		spinnerLockType = (Spinner) rootView
				.findViewById(R.id.spinner_other_lock_type);
		radioEpc.setOnCheckedChangeListener(new OnCheckedChangeListener() {

			@Override
			public void onCheckedChanged(CompoundButton buttonView,
					boolean isChecked) {
				if (isChecked) {
					membank = UHFLongerManager.LOCK_MEM_EPC;
				}
			}
		});
		radioTid.setOnCheckedChangeListener(new OnCheckedChangeListener() {

			@Override
			public void onCheckedChanged(CompoundButton buttonView,
					boolean isChecked) {
				if (isChecked) {
					membank = UHFLongerManager.LOCK_MEM_TID;
				}
			}
		});
		radioUser.setOnCheckedChangeListener(new OnCheckedChangeListener() {

			@Override
			public void onCheckedChanged(CompoundButton buttonView,
					boolean isChecked) {
				if (isChecked) {
					membank = UHFLongerManager.LOCK_MEM_USER;
				}
			}
		});
		buttonSetting.setOnClickListener(this);
		spinnerLockType.setAdapter(new ArrayAdapter<String>(context,
				android.R.layout.simple_selectable_list_item,
				lockTypeArray));
		spinnerLockType.setOnItemSelectedListener(new OnItemSelectedListener() {

			@Override
			public void onItemSelected(AdapterView<?> parent, View view,
					int position, long id) {
				Log.e("position", ":"+position);
				switch (position) {
				case 0:
					lockType = UHFLongerManager.UNLOCK;
					break;
				case 1:
					lockType = UHFLongerManager.LOCK_PSD;
					break;
				case 2:
					lockType = UHFLongerManager.UNLOCK;
					break;
				case 3:
					lockType = UHFLongerManager.LOCK_PERM;
					break;
				default:
					break;
				}
			}

			@Override
			public void onNothingSelected(AdapterView<?> parent) {
				
			}
		
		});
	}

	@Override
	public void onClick(View v) {
		// select EPC
		String selectEPC = myAppli.getSelectEPC();
		String access = myAppli.getPassword();
		if (selectEPC == null) {
			Toast.makeText(context, R.string._please_select_epc, Toast.LENGTH_SHORT).show();
			return;
		}
		// judge password
		if (access.length() != 8) {
			Toast.makeText(context, R.string._password_length_error, Toast.LENGTH_SHORT).show();
			return;
		}
		byte[] accessPassword = Tools.HexString2Bytes(access);
		// select EPC
//		uhf.selectEPC(Tools.HexString2Bytes(selectEPC));
		boolean flag = manager.lockTag(lockType, membank, accessPassword);
//		boolean flag = uhf.lock6C(accessPassword, membank, lockType);
		if(flag){
			textTips.setText(R.string._operation_success);
			Toast.makeText(context, R.string._operation_success, Toast.LENGTH_SHORT).show();
		}else{
			textTips.setText(R.string._operation_fail);
			Toast.makeText(context, R.string._operation_fail, Toast.LENGTH_SHORT).show();
		}
	}
}
