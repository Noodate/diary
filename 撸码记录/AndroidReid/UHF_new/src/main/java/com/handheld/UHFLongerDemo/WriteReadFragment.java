package com.handheld.UHFLongerDemo;

import android.app.Fragment;
import android.content.Context;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.View.OnClickListener;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemSelectedListener;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Spinner;
import android.widget.Toast;

import com.BRMicro.Tools;
import com.handheld.UHFDemo2Longer.R;
import com.handheld.UHFLonger.UHFLongerManager;

public class WriteReadFragment extends Fragment implements OnClickListener {
	private Context context;
	private View rootView;
	private MyApplication myAppli;
//	private UHFRemoteManager uhf;

	private Spinner spinnerMembank;
	private EditText editAddr;
	private EditText editLen;
	private Button buttonRead;
	private Button buttonWrite;
	private EditText editWriteData;
	private EditText editInfo;

	private String[] memArrays = new String[] { "reserve", "EPC", "TID", "USER" };
	private UHFLongerManager manager ;
	private int membank = UHFLongerManager.MEMBANK_USER;// data defult user

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
		rootView = inflater.inflate(R.layout.fragment_read_write, container,
				false);
		initView();
		return rootView;
	}

	private void initView() {
		spinnerMembank = (Spinner) rootView.findViewById(R.id.spinner_membank);
		editAddr = (EditText) rootView.findViewById(R.id.editText_start_addr);
		editLen = (EditText) rootView.findViewById(R.id.editText_read_len);
		editWriteData = (EditText) rootView
				.findViewById(R.id.editText_write_data);
		editInfo = (EditText) rootView.findViewById(R.id.editText_info);
		buttonRead = (Button) rootView.findViewById(R.id.button_read);
		buttonWrite = (Button) rootView.findViewById(R.id.button_write);
		spinnerMembank.setAdapter(new ArrayAdapter<String>(context,
				android.R.layout.simple_selectable_list_item, memArrays));
		spinnerMembank.setSelection(3);
		buttonRead.setOnClickListener(this);
		buttonWrite.setOnClickListener(this);
		spinnerMembank.setOnItemSelectedListener(new OnItemSelectedListener() {

			@Override
			public void onItemSelected(AdapterView<?> parent, View view,
					int position, long id) {
				switch (position) {
				case 0:
					membank = UHFLongerManager.MEMBANK_RESEVER;
					break;
				case 1:
					membank = UHFLongerManager.MEMBANK_EPC;
					break;
				case 2:
					membank = UHFLongerManager.MEMBANK_TID;
					break;
				case 3:
					membank = UHFLongerManager.MEMBANK_USER;
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
		int address = 0;  //begin address 
		int length = 1 ;  //read length ,1 word = 2 bytes
		// select EPC
		String selectEPC = myAppli.getSelectEPC();
		// access
		String access = myAppli.getPassword();
		String addrStr = editAddr.getText().toString();
		String lenStr = editLen.getText().toString();
		String writeStr = editWriteData.getText().toString();
		if (selectEPC == null) {
			Toast.makeText(context, context.getString(R.string._please_select_epc), 0).show();
			return;
		}
		if (access.length() != 8) {
			Toast.makeText(context, context.getString(R.string._password_length_error), 0).show();
			return;
		}
		if(addrStr.trim() == null || addrStr.length() == 0){
			Toast.makeText(context, R.string._please_input_begin_address, Toast.LENGTH_SHORT).show();
			return;
		}
		address = Integer.valueOf(addrStr);
		byte[] accessPassword = Tools.HexString2Bytes(access);
		//Select EPC
		manager.selectEPC(Tools.HexString2Bytes(selectEPC));
//		uhf.selectEPC(Tools.HexString2Bytes(selectEPC));
		switch (v.getId()) {
		case R.id.button_read:// 
			if(lenStr.trim() == null || lenStr.length() == 0){
				Toast.makeText(context, R.string._length_cannot_be_null, Toast.LENGTH_SHORT).show();
				return;
			}
			length = Integer.valueOf(lenStr);
			
			byte[] data = manager.readData(membank, address, length, accessPassword);
			if(data != null && data.length > 1){
				editInfo.append(getActivity().getString(R.string._read_success) + Tools.Bytes2HexString(data, data.length) + "\n");
			}else{
				if(data != null){
					editInfo.append(getActivity().getString(R.string._read_fail)  + "\n");
					return;
				}
				editInfo.append(getActivity().getString(R.string._read_data_fail_return_null)  + "\n");
				
			}
			break;
		case R.id.button_write:// 
			if(writeStr.length()%4 != 0){
				Toast.makeText(context, R.string._data_length_error, 0).show();
				return ;
			}
			byte[] writeData = Tools.HexString2Bytes(writeStr);
			
			boolean writeFlag = manager.writeData(membank, address, accessPassword, writeData);
			if(writeFlag){
				editInfo.append(getActivity().getString(R.string._write_success)+ "\n");
			}else{
				editInfo.append(getActivity().getString(R.string._write_fail)+ "\n");
			}
			break;

		default:
			break;
		}

	}

}
