package com.handheld.UHFLongerDemo;

import android.app.Fragment;
import android.content.Context;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.View.OnClickListener;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.BRMicro.Tools;
import com.handheld.UHFDemo2Longer.R;
import com.handheld.UHFLonger.UHFLongerManager;

public class SettingPassword extends Fragment implements OnClickListener {

	private Context context;
	private View rootView;

	private MyApplication myAppli;
//	private UHFRemoteManager uhf;

	private TextView textTips;
	private EditText editNewAccess;
	private EditText editNewKill;
	private Button buttonAccessSet;
	private Button buttonKillSet;
	
	private UHFLongerManager manager  ;

	@Override
	public void onCreate(Bundle savedInstanceState) {
		context = getActivity();
		myAppli = MyApplication.myapp;
		manager = myAppli.getmanager() ;
		super.onCreate(savedInstanceState);
	}

	@Override
	public View onCreateView(LayoutInflater inflater, ViewGroup container,
			Bundle savedInstanceState) {
		rootView = inflater
				.inflate(R.layout.fragment_reserve, container, false);
		initView();
		return rootView;
	}

	private void initView() {
		textTips = (TextView) rootView.findViewById(R.id.textView_resever_tips);
		editNewAccess = (EditText) rootView
				.findViewById(R.id.editText_new_access);
		editNewKill = (EditText) rootView.findViewById(R.id.editText_new_kill);
		buttonAccessSet = (Button) rootView
				.findViewById(R.id.button_set_access);
		buttonKillSet = (Button) rootView
				.findViewById(R.id.button_set_kill_password);
		buttonAccessSet.setOnClickListener(this);
		buttonKillSet.setOnClickListener(this);
	}

	@Override
	public void onClick(View v) {
		String selectEPC = myAppli.getSelectEPC();
		String access = myAppli.getPassword();
		
		String newAccess = editNewAccess.getText().toString();
		String newKillPassword = editNewKill.getText().toString();
		if (selectEPC == null) {
			Toast.makeText(context, getActivity().getString(R.string._please_select_epc), 0).show();
			return;
		}
		// 
		if (access.length() != 8) {
			Toast.makeText(context, getActivity().getString(R.string._password_length_error), 0).show();
			return;
		}
		byte[] accessBytes = Tools.HexString2Bytes(access);
		switch (v.getId()) {
		case R.id.button_set_access:
			if(newAccess == null || newAccess.length() != 8){
				Toast.makeText(context, getActivity().getString(R.string._password_length_error), 0).show();
				return;
			}
			byte[] newAccessByte = Tools.HexString2Bytes(newAccess);
			boolean flag = manager.writeAccess(newAccessByte, accessBytes);
//			boolean flag = writeAccess(accessBytes, newAccessByte);
			if(flag){
				Toast.makeText(context, getActivity().getString(R.string._write_visit_password_success), 0).show();
				return;
			}else{
				Toast.makeText(context, getActivity().getString(R.string.__write_visit_password_fail), 0).show();
			}
			break;
		case R.id.button_set_kill_password:
			if(newKillPassword == null || newKillPassword.length() != 8){
				Toast.makeText(context, getActivity().getString(R.string._password_length_error), 0).show();
				return;
			}
			byte[] newKillByte = Tools.HexString2Bytes(newKillPassword);
			boolean killFlag = manager.writeKillPsd(newKillByte, accessBytes);
			if(killFlag){
				Toast.makeText(context, getActivity().getString(R.string._write_destoy_password_success), Toast.LENGTH_SHORT).show();
				return;
			}else{
				Toast.makeText(context, getActivity().getString(R.string._write_destoy_password_fail), Toast.LENGTH_SHORT).show();
			}
			break;

		default:
			break;
		}
	}
}
