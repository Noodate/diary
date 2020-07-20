package com.ctsi.credit.service.impl;

import javax.annotation.Resource;

import com.ctsi.credit.hadoop.config.GlobalConst;
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.FileStatus;
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.fs.Path;
import org.springframework.stereotype.Service;

import com.ctsi.credit.entity.Project;
import com.ctsi.credit.entity.User;
import com.ctsi.credit.mapper.UserMapper;

import java.net.URI;

@Service("ctsiCreditUserService")
public class UserService {

	static String HADOOP_USER_NAME = GlobalConst.getInstance().getHadoopusername();
	//static String HADOOP_USER_NAME = "xdjk";
	static String HADOOP_URL= GlobalConst.getInstance().getHadoopUrl();;
	//static String HADOOP_URL="hdfs://beh";
	static Configuration conf = new Configuration(true);

	@Resource
	private UserMapper userMapper;

	public User findUserById(long id) {
		User user = null;
		try {
			user = userMapper.findUserById(id);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return user;

	}
	public int updateUserById(User user) {
		int updateUserById = 0;
		try {
			updateUserById = userMapper.updateUserById(user);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return updateUserById;		
	}
	// 根据用户名查询相关用户
	public User findUserByName(String name) {
		User user = null;
		try {
			user = userMapper.findUserByName(name);
			//listFile("/bdp_data_intergation/inner_data/o_data/xdjk/TM0001/dhjk");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return user;

	}

	// 根据用户权限 查询相关路径
//	public List getPathList(String name){
//		if("gkh".equals(name)){
//			try {
//				List list = userMapper.findAllUserPath();
//				return list;
//			} catch (Exception e) {
//				e.printStackTrace();
//			}
//		}
//		// 待完善
//		return null;
//	}

	// 根据用户，获取路径，并转化为相关文字
//	public boolean getWordsByUser(List<User> list) throws Exception{
//		boolean flag = false;
//		for (User user : list) {
//			String path = user.getPath();
//			if(!StringUtils.isEmpty(path)){
//				String[] arr = getLastPath(path);
//				String[] new_arr = getNameofPath(arr);
//				System.out.println(new_arr[0]);
//			}
//		}
//		return flag;
//	}

	//根据路径截取字符串
//	public String[] getLastPath(String path){
//		int index = path.indexOf("dhjk");
//		String value = null;
//		if(index > -1){
//			value = path.substring(index + 4);
//		}
//		String[] patharr = value.split("/");
//		return patharr;
//	}

	// 根据截取的字符串，获得相关的开户行和项目名称
//	public String[] getNameofPath(String[] arr){
//		String[] new_arr = new String[2];
//		if(!StringUtils.isEmpty(arr[1])){
//			//查找开户行名称
//			DataUser dataUser = userMapper.findNameOfBank(arr[1]);
//			if(!StringUtils.isEmpty(dataUser)){
//				new_arr[0] = dataUser.getName();
//			}
//		}
//		if(!StringUtils.isEmpty(arr[2])){
//			// 查找开户行下项目名称
//			DataUser dataUser = userMapper.findNameOfProject(arr[2]);
//			if(!StringUtils.isEmpty(dataUser)){
//				new_arr[1] = dataUser.getName();
//			}
//		}
//		return new_arr;
//	}

	//根据路径，列出指定目录下的文件和目录，不递归
	public  FileStatus[] listFile(String path) throws Exception {
		FileSystem fs=null;
		fs =  FileSystem.get(URI.create(HADOOP_URL),conf,HADOOP_USER_NAME);
		FileStatus[] fileStatuses = fs.listStatus(new Path(path));
		return fileStatuses;
	}


	// 根据路径名截取最后一个字符串，即该路径下的文件夹名
//	public String[] getNameOfPath(FileStatus[] fileStatuses){
//		for (FileStatus fileStatus : fileStatuses) {
//			String path = fileStatus.toString();
//			System.out.println(path);
//		}
//		return null;
//	}

	public Project getProject(String code) {
		Project p = null;
		try {
			p = userMapper.getProject(code.toUpperCase());
		} catch (Exception e) {			
			e.printStackTrace();
		}
		return p;
		
	}
	public String getCity(String code) {
		String p = null;
		try {
			p = userMapper.getCityName(code.toUpperCase());
		} catch (Exception e) {			
			e.printStackTrace();
		}
		return p;
		
	}

}
