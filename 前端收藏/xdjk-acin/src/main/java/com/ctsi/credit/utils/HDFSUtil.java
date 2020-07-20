package com.ctsi.credit.utils;

import java.io.*;
import java.net.URI;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import com.ctsi.credit.hadoop.config.GlobalConst;
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.*;
import org.apache.hadoop.io.IOUtils;
import org.apache.log4j.Logger;
import com.ctsi.credit.entity.Project;
import com.ctsi.credit.service.impl.UserService;

/**
 * HDFS操作类,使用此类
 */
public class HDFSUtil {

	public HDFSUtil() {
	}
	static Logger logger=Logger.getLogger(HDFSUtil.class);
	// hadoop fs的配置文件

	static String HADOOP_USER_NAME = GlobalConst.getInstance().getHadoopusername();
	//static String HADOOP_USER_NAME = "xdjk";
	static FileSystem fs=null;
	static {
		Configuration conf =new Configuration();
		try {
			conf.addResource(new Path("/home/user/lbn/core-site.xml"));
			conf.addResource(new Path("/home/user/lbn/hdfs-site.xml"));
			conf.set("fs.hdfs.impl.disable.cache","true");   
			fs=FileSystem.get(new URI(GlobalConst.getInstance().getHadoopUrl()),conf,HADOOP_USER_NAME);
			//fs=FileSystem.get(new URI("hdfs://beh"),conf,HADOOP_USER_NAME);
//			fs=FileSystem.get(new URI("hdfs://192.168.33.222:9000"),conf,HADOOP_USER_NAME);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	/**
	 * 判断路径是否存在
	 * 
	 * @param path
	 * @return
	 * @throws IOException
	 */
	public static boolean exits(String path) throws IOException {
		
		boolean exists = false;
		try {
			
			exists = fs.exists(new Path(path));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return exists;
	}

	/**
	 * 创建文件
	 * 
	 * @param filePath
	 * @param contents
	 * @throws IOException
	 */
	public static void createFile(String filePath, byte[] contents) throws IOException {
		
		FSDataOutputStream outputStream = null;
		try {
			
			Path path = new Path(filePath);
			outputStream = fs.create(path);
			outputStream.write(contents);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			if (outputStream != null) {
				outputStream.close();
			}
			
		}

	}

	/**
	 * 创建文件
	 * 
	 * @param filePath
	 * @param fileContent
	 * @throws IOException
	 */
	public static void createFile(String filePath, String fileContent) throws IOException {
		createFile(filePath, fileContent.getBytes());
	}

	/**
	 * @param localFilePath
	 * @param remoteFilePath
	 * @throws IOException
	 */
	public static void copyFromLocalFile(String localFilePath, String remoteFilePath) throws IOException {
		try {
		
			Path localPath = new Path(localFilePath);
			Path remotePath = new Path(remoteFilePath);
			fs.copyFromLocalFile(false, true, localPath, remotePath);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * 删除目录或文件，不是级联删除recursive 为false
	 * 
	 * @param remoteFilePath
	 * @param recursive
	 * @return
	 * @throws IOException
	 */
	public static boolean deleteFile(String remoteFilePath, boolean recursive) throws IOException {
	
		boolean result = false;
		try {
			
			result = fs.delete(new Path(remoteFilePath), recursive);
		
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return result;
	}

	/**
	 * 删除目录或文件(如果有子目录,则级联删除)
	 * 
	 * @param remoteFilePath
	 * @return
	 * @throws IOException
	 */
	public static boolean deleteFile(String remoteFilePath) throws IOException {
		return deleteFile(remoteFilePath, true);
	}

	/**
	 * 文件重命名
	 * 
	 * @param oldFileName
	 * @param newFileName
	 * @return
	 * @throws IOException
	 */
	public static boolean renameFile(String oldFileName, String newFileName) throws IOException {
	
		boolean result = false;
		try {
		
			Path oldPath = new Path(oldFileName);
			Path newPath = new Path(newFileName);
			result = fs.rename(oldPath, newPath);
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return result;
	}

	/**
	 * 创建目录
	 * 
	 * @param dirName
	 * @return
	 * @throws IOException
	 */
	public static boolean createDirectory(String dirName) throws IOException {
	
		boolean result = false;
		try {
		
			Path dir = new Path(dirName);
			if (!fs.exists(dir)) {
				result = fs.mkdirs(dir);
			}
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return result;
	}

	/**
	 * 列出指定路径下的所有文件(不包含目录)
	 * 
	 * @param basePath
	 * @param recursive
	 */
	public static RemoteIterator<LocatedFileStatus> listFiles(String basePath, boolean recursive) throws IOException {
		
		RemoteIterator<LocatedFileStatus> fileStatusRemoteIterator = null;
		try {
			
			fileStatusRemoteIterator = fs.listFiles(new Path(basePath), recursive);
			@SuppressWarnings("unused")
			LocatedFileStatus fileStatus = fileStatusRemoteIterator.next();

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return fileStatusRemoteIterator;
	}

	/**
	 * 列出指定路径下的文件（非递归）
	 * 
	 * @param basePath
	 * @return
	 * @throws IOException
	 */
	public static RemoteIterator<LocatedFileStatus> listFiles(String basePath) throws IOException {
	
		RemoteIterator<LocatedFileStatus> remoteIterator = null;
		try {
		
			remoteIterator = fs.listFiles(new Path(basePath), false);
			remoteIterator.next();
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return remoteIterator;
	}

	/**
	 * 列出指定目录下的文件\子目录信息（非递归）
	 * 
	 * @return
	 * @throws IOException
	 */
	@SuppressWarnings("restriction")
	public static Object[] getDirStatus(String dirPath,UserService userService) throws IOException {
		if (org.springframework.util.StringUtils.isEmpty(dirPath)) {
			dirPath = "/";
		}
		
		List<HashMap<String, String>> filePathList = null;
		List<HashMap<String, String>> dirPathList = null;

		try {
		
			Path requestPath = new Path(dirPath);
			if (!fs.exists(requestPath)) {
				return null;
			}
			FileStatus[] fileStatuses = fs.listStatus(requestPath);
			List<FileStatus> statusList = Arrays.asList(fileStatuses);
			/*
			 * Collections.sort(statusList, new Comparator<FileStatus>(){
			 * 
			 * @Override public int compare(FileStatus o1, FileStatus o2) { if
			 * (o1!=null&&o2!=null) { return (int)
			 * (o1.getModificationTime()-o2.getModificationTime()); } return 0;
			 * }
			 * 
			 * });
			 */
			filePathList = new ArrayList<HashMap<String, String>>();
			dirPathList = new ArrayList<HashMap<String, String>>();
			if (statusList != null && statusList.size() > 0) {
				for (int i = 0; i < statusList.size(); i++) {
					FileStatus fileStatus = statusList.get(i);
					String rawPath = fileStatus.getPath().toUri().getRawPath();
					String name = fileStatus.getPath().getName();
					if (fileStatus.isDirectory()) {
						HashMap<String, String> map = new HashMap<String, String>();

						String province = ConvertUtils.getProvince(name);						
						if (!org.springframework.util.StringUtils.isEmpty(province)) {							
							map.put("name", province);
						}else if (!org.springframework.util.StringUtils.isEmpty(ConvertUtils.getType(name))) {
							map.put("name", ConvertUtils.getType(name));
						}else {
							String[] citys = name.split("_");
							if (citys.length==2) {
								String city = userService.getCity(citys[1]);
								if (!org.springframework.util.StringUtils.isEmpty(city)) {
									map.put("name", city);
								}else {
									map.put("name", name);
								}
							}else {
								map.put("name", name);
							}
							
						}			
						
						map.put("fullname", rawPath);
						dirPathList.add(map);
					} else if (fileStatus.isFile()) {
						HashMap<String, String> map = new HashMap<String, String>();
						if (ImageUtils.isImageName(rawPath)) {
							byte[] bs = readFile(rawPath);
							map.put("img", new sun.misc.BASE64Encoder().encode(bs));
						    
							String[] names = name.split("_");
							if (names.length==6||names.length==7) {
								String projectName=names[1]+"_"+names[2]+"_"+names[3];
								Project project = userService.getProject(projectName);
								System.out.println("=========project====="+project==null);
								logger.warn("=========project====="+project==null);
								if (project!=null) {
									map.put("pn", project.getName());//项目介绍	
									map.put("pt", project.getType());//项目类型
								}else {
									String cityname=userService.getCity(names[2]);
									map.put("cityname", cityname);
									map.put("projecttype", ConvertUtils.getType(names[3]));
									map.put("cameratype", ConvertUtils.getCamera(names[4]));
								}
						
							}	else if (names.length==5) {
								String projectName=names[0]+"_"+names[1]+"_"+names[2];
								Project project = userService.getProject(projectName);								
								if (project!=null) {
									map.put("pn", project.getName());//项目介绍	
									map.put("pt", project.getType());//项目类型
								}else {
									String cityname=userService.getCity(names[1]);
									map.put("cityname", cityname);
									map.put("projecttype", ConvertUtils.getType(names[2]));
									map.put("cameratype", ConvertUtils.getCamera(names[3]));
								}
						
							}
							
							map.put("name", name);
							map.put("fullname", rawPath);
							filePathList.add(map);
						} else if (VideoUtils.isMP4(rawPath)) {
							String[] names = name.split("_");
							if (names.length==6||names.length==7) {
								String projectName=names[1]+"_"+names[2]+"_"+names[3];
								Project project = userService.getProject(projectName);
								if (project!=null) {
									map.put("pn", project.getName());	
									map.put("pt", project.getType());	
								}else {
									String cityname=userService.getCity(names[2]);
									map.put("cityname", cityname);
									map.put("projecttype", ConvertUtils.getType(names[3]));
									map.put("cameratype", ConvertUtils.getCamera(names[4]));
								}
						
							}else if (names.length==5) {
								String projectName=names[0]+"_"+names[1]+"_"+names[2];
								Project project = userService.getProject(projectName);								
								if (project!=null) {
									map.put("pn", project.getName());//项目介绍	
									map.put("pt", project.getType());//项目类型
								}else {
									String cityname=userService.getCity(names[1]);
									map.put("cityname", cityname);
									map.put("projecttype", ConvertUtils.getType(names[2]));
									map.put("cameratype", ConvertUtils.getCamera(names[3]));
								}
						
							}
							
							map.put("img",
									"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");
						
							map.put("name", name);
							map.put("fullname", rawPath);
							filePathList.add(map);
						}else if (FileUtils.isTXT(rawPath)) {
							
						}else if (FileUtils.isFLAG(rawPath)) {
							
						}
						
					}
				}
			}
	
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return new Object[] { filePathList, dirPathList };
	}


	public static boolean isDirectory(String dirPath) throws IOException {
		boolean directory = false;
		
		try {
		
			FileStatus fileStatuses = fs.getFileStatus(new Path(dirPath));
			directory = fileStatuses.isDirectory();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			/*if (fs != null) {
				fs.close();
			}*/
		}
		return directory;
	}

	public static boolean isFile(String dirPath) throws IOException {
		boolean directory = false;
		
		try {
		
			FileStatus fileStatuses = fs.getFileStatus(new Path(dirPath));
			directory = fileStatuses.isFile();

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			/*if (fs != null) {
				fs.close();
			}*/
		}
		return directory;
	}

	/**
	 * 读取文件内容
	 * 
	 * @param filePath
	 * @return
	 * @throws IOException
	 */
	public static byte[] readFile(String filePath) throws IOException {
		byte[] fileContent = null;

		try {
			

			Path path = new Path(filePath);
			if (fs.exists(path)) {
				InputStream inputStream = null;
				ByteArrayOutputStream outputStream = null;
				try {
					inputStream = fs.open(path);
					outputStream = new ByteArrayOutputStream(inputStream.available());
					IOUtils.copyBytes(inputStream, outputStream,1024);
					fileContent = outputStream.toByteArray();
				} finally {
					IOUtils.closeStream(inputStream);
					IOUtils.closeStream(outputStream);
					/*if (fs!=null) {
						fs.close();
					}*/
				
				}
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return fileContent;
	}

//	/**
//	 * 下载 hdfs上的文件
//	 *
//	 * @param remote
//	 * @param local
//	 * @throws IOException
//	 */
//	public static void download(String remote, String local){
//		MyThread t1 = new HDFSUtil().new MyThread(remote,local);
//		Thread m1     = new Thread(t1);
//		m1.start();
//		MyThread t2 = new HDFSUtil().new MyThread(remote,local);
//		Thread m2     = new Thread(t2);
//		m2.start();
//
//		MyThread t3 = new HDFSUtil().new MyThread(remote,local);
//		Thread m3     = new Thread(t3);
//		m3.start();
//
//		MyThread t4 = new HDFSUtil().new MyThread(remote,local);
//		Thread m4     = new Thread(t4);
//		m4.start();
//
//		MyThread t5 = new HDFSUtil().new MyThread(remote,local);
//		Thread m5     = new Thread(t5);
//		m5.start();
//
//	}
//
//	class MyThread implements Runnable {
//
//		private String remote;
//		private String local;
//
//		public MyThread() {
//		}
//
//		public MyThread(String remote, String local) {
//			this.remote = remote;
//			this.local = local;
//		}
//
//		Object lock;
//		public void run() {
//			try {
//				File file = new File(local);
//				if (null!=file&&null!=file.getParentFile()&&!file.getParentFile().exists()&&!file.isDirectory()){
//					file.getParentFile().mkdirs();
//				}
//				if(!file.exists()&&local.charAt(local.length()-1)=='~'){
//					file.mkdirs();
//				}
//				if (file.exists()) {
//						return;
//				}
//				Path remotePath = new Path(remote);
//				FileOutputStream outputStream = new FileOutputStream(file, false);
//				IOUtils.copyBytes(fs.open(remotePath), outputStream, 2048, true);
//			} catch (Exception e) {
//				e.printStackTrace();
//			}
//		}
//
//	}



	public static byte[] getFile(String filepath) throws Exception{
		byte[] fileContent = null;

		try{
			Path path = new Path(filepath);
			if(fs.exists(path)){
				InputStream inputStream = null;
				ByteArrayOutputStream outputStream = null;
				try{
					inputStream = fs.open(path);
					outputStream = new ByteArrayOutputStream(inputStream.available());
					IOUtils.copyBytes(inputStream,outputStream,1024);
					fileContent = outputStream.toByteArray();
				}finally {
					IOUtils.closeStream(inputStream);
					IOUtils.closeStream(outputStream);
				}
			}
		}catch (Exception e){
			e.printStackTrace();
		}

		return fileContent;
	}

}