//package com.handheld.UHFLongerDemo;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import com.handheld.UHFDemo2Longer.R;
//
//import android.app.Activity;
//import android.app.AlertDialog.Builder;
//import android.content.DialogInterface;
//import android.content.Intent;
//import android.os.Bundle;
//import android.view.KeyEvent;
//import android.view.LayoutInflater;
//import android.view.View;
//import android.view.View.OnClickListener;
//import android.view.ViewGroup;
//import android.widget.BaseAdapter;
//import android.widget.Button;
//import android.widget.EditText;
//import android.widget.ListView;
//import android.widget.TextView;
//import android.widget.Toast;
//
//
//public class InputActivity extends Activity implements OnClickListener {
//
//	private EditText editEpc;
//	private Button btnAdd; // add data
//	private Button btnDelAll; // delete all input data
//	private Button btnClear; // clear editEpc data
//	private ListView lvData; //
//
//	private List<String> listEpc = new ArrayList<String>(); //
//	private Madapter adapter ;
//	private MyApplication mApp ;
//
//	private Toast toast;
//	private void showToast(String info){
//		if (toast==null) {
//			toast = Toast.makeText(this, info, 0);
//		}else {
//			toast.setText(info);
//		}
//		toast.show();
//	}
//	@Override
//	protected void onCreate(Bundle savedInstanceState) {
//		// TODO Auto-generated method stub
//		super.onCreate(savedInstanceState);
//		setContentView(R.layout.activity_input);
//		initView();
//	}
//
//	// init UI
//	private void initView() {
//		mApp = MyApplication.myapp ;
//		editEpc = (EditText) findViewById(R.id.editText_input_epc);
//		btnAdd = (Button) findViewById(R.id.button_input_add);
//		btnDelAll = (Button) findViewById(R.id.button_input_del_all);
//		btnClear = (Button) findViewById(R.id.button_input_clear);
//		lvData = (ListView) findViewById(R.id.listView_input_data);
//		listEpc = mApp.getListInputEPC();
//		adapter = new Madapter() ;
//		lvData.setAdapter(adapter);
//
//		btnAdd.setOnClickListener(this);
//		btnDelAll.setOnClickListener(this);
//		btnClear.setOnClickListener(this);
//	}
//
//	@Override
//	public boolean onKeyDown(int keyCode, KeyEvent event) {
//		if(keyCode == KeyEvent.KEYCODE_BACK){
//			Intent intent = new Intent();
//			this.setResult(RESULT_OK);
//			finish();
//		}
//		return super.onKeyDown(keyCode, event);
//	}
//
//	@Override
//	public void onClick(View v) {
//		switch (v.getId()) {
//		case R.id.button_input_add://
//			String epc = editEpc.getText().toString().trim();
//			if(epc != null && epc.length() > 0){
//				//listepc
//				if(listEpc != null && ! listEpc.isEmpty()){
//					for(int i = 0; i < listEpc.size(); i++){
//						if(epc.equals(listEpc.get(i))){
//							showToast(getString(R.string._the_data_exsit));
//							return ;
//						}
//					}
//				}
//				listEpc.add(epc);
//				updateListView();
//			}else{
//				showToast(getString(R.string._input_data_first));
//			}
//			break;
//		case R.id.button_input_del_all://
//			listEpc = new ArrayList<String>();
//			mApp.setListInputEPC(listEpc) ;
//			updateListView();
//			showToast(getString(R.string._delete_all_data_success));
//			break;
//		case R.id.button_input_clear://
//			editEpc.setText("");
//			break;
//
//		default:
//			break;
//		}
//
//	}
//
//	/**
//	 * listView adapter
//	 * @author Administrator
//	 *
//	 */
//	private class Madapter extends BaseAdapter{
//
//		@Override
//		public int getCount() {
//			// TODO Auto-generated method stub
//			return listEpc.size();
//		}
//
//		@Override
//		public Object getItem(int position) {
//			// TODO Auto-generated method stub
//			return listEpc.get(position);
//		}
//
//		@Override
//		public long getItemId(int position) {
//			// TODO Auto-generated method stub
//			return position;
//		}
//
//		@Override
//		public View getView(int position, View convertView, ViewGroup parent) {
//			ViewHolder holder = null;
//			if(convertView == null){
//				holder = new ViewHolder();
//				convertView = LayoutInflater.from(InputActivity.this).inflate(R.layout.listview_input_item, null);
//				holder.tvEpc = (TextView) convertView.findViewById(R.id.textView_item_epc) ;
//				holder.btnDel = (Button) convertView.findViewById(R.id.button_item_del) ;
//				holder.btnChange = (Button) convertView.findViewById(R.id.button_item_change) ;
//				holder.btnDel.setOnClickListener(new MyItemonclick(position));
//				holder.btnChange.setOnClickListener(new MyItemonclick(position));
//				convertView.setTag(holder);
//			}else{
//				holder = (ViewHolder) convertView.getTag() ;
//			}
//			holder.tvEpc.setText(listEpc.get(position));
//			return convertView;
//		}
//
//	}
//
//	private class ViewHolder{
//		TextView tvEpc ;
//		Button btnDel ;
//		Button btnChange ;
//	}
//
//	//
//	private class MyItemonclick implements OnClickListener{
//		private int positon ;
//		public MyItemonclick(int position){
//
//		}
//		@Override
//		public void onClick(View v) {
//			switch (v.getId()) {
//			case R.id.button_item_del://
//				//
//				listEpc.remove(positon);
//				mApp.getListInputEPC().remove(positon);
//				updateListView();
//				break;
//			case R.id.button_item_change://
//				final String mEpc = listEpc.get(positon);
//				final int mPosition = positon ;
//				//
//				createDialog(mEpc , mPosition);
//				break;
//
//			default:
//				break;
//			}
//
//		}
//
//	}
//
//	EditText dialogEditepc ;  //dialog EDIT
//	private void createDialog(final String epc, final int position){
//		Builder builder = new Builder(this) ;
//		builder.setTitle(R.string._change_epc);
//		dialogEditepc = new EditText(this);
//		dialogEditepc.setText(epc) ;
//		builder.setView(dialogEditepc);
//		builder.setNegativeButton(R.string.cancel, null);
//		builder.setPositiveButton(R.string.sure, new DialogInterface.OnClickListener(){
//
//			@Override
//			public void onClick(DialogInterface dialog, int which) {
//				String mEpc = dialogEditepc.getText().toString();
//				if(mEpc != null && mEpc.length() > 0){
//					listEpc.set(position, mEpc);
//					mApp.getListInputEPC().set(position, mEpc);
//					updateListView();
//					showToast(getString(R.string._data_change_success));
//				}else{
//					showToast(getString(R.string._data_change_fail));
//				}
//			}
//
//		});
//		builder.create().show();
//
//
//	}
//
//
//	private void updateListView(){
//		adapter.notifyDataSetChanged();
//		mApp.setListInputEPC(listEpc);
//	}
//
//}
