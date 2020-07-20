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

public class SettingEPC extends Fragment implements OnClickListener{
	
	private Context context ;
	private View rootView ;
	
	private EditText editNewEPC ;
	private EditText editPC ;
	private Button buttonSetEPC ;
	private TextView textTips ;
	
	private String selectEPC;//
	private String newEPC ;//
	private String access ;//
	private MyApplication myAppli ;
	private UHFLongerManager manager ;
	private Toast toast;
	private void showToast(String info){
		if (toast==null) {
			toast = Toast.makeText(context,info, 0);
		}else {
			toast.setText(info);
		}
		toast.show();
	}
	@Override
	public void onCreate(Bundle savedInstanceState) {
		context = getActivity();
		myAppli = MyApplication.myapp;
		manager = myAppli.getmanager();
		super.onCreate(savedInstanceState);
	}
	
	@Override
	public View onCreateView(LayoutInflater inflater, ViewGroup container,
			Bundle savedInstanceState) {
		rootView = inflater.inflate(R.layout.fragment_epc, container, false);
		editNewEPC = (EditText) rootView.findViewById(R.id.editText_new_epc);
		editPC = (EditText) rootView.findViewById(R.id.editText_pc);
		buttonSetEPC = (Button) rootView.findViewById(R.id.button_set_epc);
		textTips = (TextView) rootView.findViewById(R.id.editText_epc_tips);
		buttonSetEPC.setOnClickListener(this);
		return rootView;
	}

	@Override
	public void onClick(View v) {
		selectEPC = myAppli.getSelectEPC();
		newEPC = editNewEPC.getText().toString();
		access = myAppli.getPassword();
		if(selectEPC == null){
			showToast(getString(R.string._please_select_epc));
			return ;
		}
		//judge EPC
		if(newEPC == null || newEPC.length() < 4 || newEPC.length()%4 != 0 || newEPC.length() > 32){
			showToast(getActivity().getString(R.string._epc_error));
			return;
		}
		//judge access 
		if(access.length() != 8){
			showToast(getString(R.string._password_length_error));
			return;
		}
		byte[] accessByte = Tools.HexString2Bytes(access);
		byte[] newEPCByte = Tools.HexString2Bytes(newEPC);
		byte[] pcByte = new byte[]{0x00,0x00};
		pcByte[0] = (byte)(newEPCByte.length*4);
		editPC.setText(Tools.Bytes2HexString(pcByte, 2));
		boolean flag = manager.writeEPC(newEPCByte, accessByte);
		if(flag){
			showToast(getActivity().getString(R.string._rewrite_epc_success));
			textTips.setText(getActivity().getString(R.string._rewrite_epc_success));
		}else{
			showToast(getActivity().getString(R.string._write_fail));
			textTips.setText(getActivity().getString(R.string._write_fail));
		}
	}
	
	/**
	 * EPC
	 * @param pc
	 * @param newEPC
	 */
//	private boolean writeEPC(byte[] password,byte[] pc, byte[] newEPC){
//		byte[] data = new byte[pc.length + newEPC.length];
//		System.arraycopy(pc, 0, data, 0, 2);
//		System.arraycopy(newEPC, 0, data, 2, newEPC.length);
//		//
//		return uhf.writeTo6C(password, UHFRemoteManager.MEMBANK_EPC, 1, data.length/2, data);
//	}
//
}
