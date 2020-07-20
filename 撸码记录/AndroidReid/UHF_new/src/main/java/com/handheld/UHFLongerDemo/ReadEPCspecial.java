package com.handheld.UHFLongerDemo;

import android.app.Fragment;
import android.content.Context;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.View.OnClickListener;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.BRMicro.Tools;
import com.handheld.UHFDemo2Longer.R;
import com.handheld.UHFLonger.UHFLongerManager;

public class ReadEPCspecial extends Fragment implements OnClickListener{
	private Context context;
	private View rootView;

	private MyApplication myAppli;
//	private UHFRemoteManager uhf;
	
	private TextView textTips ;
	private Button buttonReadSpecial ;
	private UHFLongerManager manager  ;
	private Toast toast;
	private void showToast(String info){
		if (toast==null) {
			toast = Toast.makeText(context,info, Toast.LENGTH_SHORT);
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
//		uhf = UHFRemoteManager.getInstance();
		super.onCreate(savedInstanceState);
	}
	
	@Override
	public View onCreateView(LayoutInflater inflater, ViewGroup container,
			Bundle savedInstanceState) {
		rootView = inflater
				.inflate(R.layout.fragment_epc_special, container, false);
		initView();
		return rootView;
	}
	
	private void initView(){
		textTips = (TextView) rootView.findViewById(R.id.textView_epc_special);
		buttonReadSpecial = (Button) rootView.findViewById(R.id.button_read_epc_special);
		buttonReadSpecial.setOnClickListener(this);
	}

	@Override
	public void onClick(View v) {
		String selectEPC = myAppli.getSelectEPC();
		String access = myAppli.getPassword();
		if (selectEPC == null) {
			showToast(getActivity().getString(R.string._please_select_epc));
			return;
		}
		if (access.length() != 8) {
			showToast(getActivity().getString(R.string._password_length_error));
			return;
		}
		byte[] accessBytes = Tools.HexString2Bytes(access);
		int flag = readEPCSpecial(accessBytes);
		switch (flag) {
		case EPC_TRUE:
			textTips.setText(getString(R.string._return_true));
			break;
		case EPC_FALSE:
			textTips.setText(getString(R.string._return_false));
			break;
		case NO_CARD:
			textTips.setText(getString(R.string._no_tag));
			break;

		default:
			break;
		}
		
		
	}
	
	private final int EPC_TRUE = 1; 
	private final int EPC_FALSE = 0; 
	private final int NO_CARD = -1; 
	//special word in EPC,start address:0x20,length:1
	/**
	 * 
	 * @param access
	 * @return 1 true false -1 no card
	 */
	private int readEPCSpecial(byte[] access){
//		byte[] data = uhf.readFrom6C(UHFRemoteManager.MEMBANK_EPC, 32, 1, access);
		byte[] data = manager.readData(UHFLongerManager.MEMBANK_EPC, 32, 1, access);
		if(data != null){
			Log.e("data---", Tools.Bytes2HexString(data, data.length));
			if(data.length > 1){
				//judge hight bit 1
				if((byte)(data[0]&0x80) == (byte)0x80){
					showToast("true");
					return EPC_TRUE;
				}else{
					return EPC_FALSE;
				}
			}
		}
		return NO_CARD ;
	}
	/**
	 * 
	 * @param access 
	 * @param data data 2 bytes byte[] data = Tools.HexString2Bytes("8877")
	 * @return
	 */
	private boolean writeEPCSpecial(byte[] access, byte[] data){
		boolean flag = manager.writeData(UHFLongerManager.MEMBANK_EPC, 32, access, data);
		return flag;
	}

}
