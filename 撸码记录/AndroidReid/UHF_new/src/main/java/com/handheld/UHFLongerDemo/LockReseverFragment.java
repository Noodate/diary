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

public class LockReseverFragment extends Fragment implements OnClickListener {
	private Context context;
	private View rootView;

	private MyApplication myAppli;
//	private UHFRemoteManager uhf;

	private RadioButton radioKill;
	private RadioButton radioAccess;
	private Spinner spinnerLockType;
	private Button buttonSetting;
	private TextView textTips ;
	private UHFLongerManager manager ;

	boolean isAccess = false;
	private String[] lockTypeArray ;
	private int lockType = 0;

	@Override
	public void onCreate(Bundle savedInstanceState) {
		lockTypeArray = new String[] { getString(R.string._no_password_can_be_writed),
				getString(R.string._password_write),
				getString(R.string._Always_read_write), getString(R.string._never_read_and_write) };
		context = getActivity();
		myAppli = MyApplication.myapp;
		manager = myAppli.getmanager() ;
//		uhf = UHFRemoteManager.getInstance();
		super.onCreate(savedInstanceState);
	}

	@Override
	public View onCreateView(LayoutInflater inflater, ViewGroup container,
			Bundle savedInstanceState) {
		rootView = inflater.inflate(R.layout.fragment_lock_reserve, container,
				false);
		initView();

		return rootView;
	}

	private void initView() {
		textTips = (TextView) rootView.findViewById(R.id.textView_lock_resever_tips);
		radioKill = (RadioButton) rootView.findViewById(R.id.radioButton_kill);
		radioAccess = (RadioButton) rootView
				.findViewById(R.id.radioButton_access);
		spinnerLockType = (Spinner) rootView
				.findViewById(R.id.spinner_resever_lock_type);
		buttonSetting = (Button) rootView
				.findViewById(R.id.button_resever_lock_set);

		spinnerLockType.setAdapter(new ArrayAdapter<String>(context,
				android.R.layout.simple_selectable_list_item, lockTypeArray));
		radioKill.setOnCheckedChangeListener(new OnCheckedChangeListener() {

			@Override
			public void onCheckedChanged(CompoundButton buttonView,
					boolean isChecked) {
				if (isChecked) {
					isAccess = false;
				}

			}
		});
		radioAccess.setOnCheckedChangeListener(new OnCheckedChangeListener() {

			@Override
			public void onCheckedChanged(CompoundButton buttonView,
					boolean isChecked) {
				if (isChecked) {
					isAccess = true;
				}
			}
		});
		buttonSetting.setOnClickListener(this);

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
		//
		String selectEPC = myAppli.getSelectEPC();
		//
		String access = myAppli.getPassword();
		if (selectEPC == null) {
			Toast.makeText(context, "Please Setlect EPC", Toast.LENGTH_SHORT).show();
			return;
		}
		//
		if (access.length() != 8) {
			Toast.makeText(context, "Password length error", Toast.LENGTH_SHORT).show();
			return;
		}
		byte[] accessPassword = Tools.HexString2Bytes(access);
		//
//		uhf.selectEPC(Tools.HexString2Bytes(selectEPC));
		boolean flag = false ;
		if (isAccess) {
			flag = manager.lockTag(lockType, UHFLongerManager.LOCK_MEM_ACCESS, accessPassword);
		} else {
			flag = manager.lockTag(lockType, UHFLongerManager.LOCK_MEM_KILL, accessPassword);
		}
		
		if(flag){
			textTips.setText("Successed");
			Toast.makeText(context, "Successed", Toast.LENGTH_SHORT).show();
		}else{
			textTips.setText("Failed");
			Toast.makeText(context, "Failed", Toast.LENGTH_SHORT).show();
		}
	}
}
