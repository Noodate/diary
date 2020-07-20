package com.ctsi.credit.utils;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URI;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.ctsi.credit.hadoop.config.GlobalConst;
import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.FileStatus;
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.IOUtils;
import org.apache.log4j.Logger;
import org.springframework.util.StringUtils;

public class MailHdfsUtils {
	static Logger logger = Logger.getLogger(MailHdfsUtils.class);

	static String HADOOP_USER_NAME = "hadoop";
	static FileSystem fs;
	static {
		// 指定hadoop fs的地址,测试用
		/*
		 * static String HADOOP_URL = "hdfs://10.13.141.24:9000"; static String
		 * HADOOP_URL = "hdfs://localhost:8010"; Configuration conf = new
		 * Configuration(true); conf.set("fs.hdfs.impl",
		 * "org.apache.hadoop.hdfs.DistributedFileSystem");
		 * conf.set("fs.default.name", HADOOP_URL); try { fs =
		 * FileSystem.get(new URI(HADOOP_URL), conf, HADOOP_USER_NAME); } catch
		 * (Exception e) { // TODO Auto-ge nerated catch block
		 * e.printStackTrace(); }
		 */

		// 国开行内网访问
		Configuration conf = new Configuration();
		try {
			conf.addResource(new Path("/home/user/lbn/core-site.xml"));
			conf.addResource(new Path("/home/user/lbn/hdfs-site.xml"));
			conf.set("fs.hdfs.impl.disable.cache", "true");
			fs = FileSystem.get(new URI(GlobalConst.getInstance().getHadoopUrl()), conf, HADOOP_USER_NAME);
			//fs = FileSystem.get(new URI("hdfs://beh"), conf, HADOOP_USER_NAME);
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
	public static boolean exits(String path) {
		if (StringUtils.isEmpty(path)) {
			return false;
		}
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
	 * 列出指定目录下的文件\子目录信息（非递归） 获取最新的文件夹下面的图片。
	 * 
	 * @param dirPath
	 * @return
	 * @throws IOException
	 */
	@SuppressWarnings("restriction")
	public static Object[] getLatestFiles(String dirPath) throws IOException {
		if (StringUtils.isEmpty(dirPath)) {
			return null;
		}
		Object[] objs = new Object[2];
		Map<String, File> files = new HashMap<String, File>();
		try {
			// 获取最终的最新文件夹目录
			String finalPath = getFinalPath(dirPath);
			logger.info("========邮件最终的最新文件夹目录===" + finalPath);
			// 添加目录名称
			String finalDirName = StringUtils.getFilename(finalPath);
			objs[0] = finalDirName;

			Path requestPath = new Path(finalPath);
			if (!fs.exists(requestPath)) {
				return null;
			}
			FileStatus[] fileStatuses = fs.listStatus(requestPath);
			List<FileStatus> statusList = Arrays.asList(fileStatuses);
			Collections.sort(statusList, new Comparator<FileStatus>() {

				@Override
				public int compare(FileStatus o1, FileStatus o2) {
					long time1 = o1.getModificationTime();
					long time2 = o2.getModificationTime();
					long com=time1-time2;
					if (com>0) {
						return 1;
					}else if (com<0) {
						return -1;
					}
					return 0;
				}
			});

			if (statusList != null && statusList.size() > 0) {
				for (int i = statusList.size() - 1; i >= 0; i -= 2) {
					FileStatus fileStatus = statusList.get(i);
					String rawPath = fileStatus.getPath().toUri().getRawPath();
					String name = fileStatus.getPath().getName();
					if (fileStatus.isFile() && ImageUtils.isImageName(name)) {

						String localDir = System.getProperty("evan.webapp") + File.separator + "files";
						File dir = new File(localDir);
						if (!dir.exists()) {
							dir.mkdirs();
						}
						String localPicPath = localDir + File.separator + name;
						logger.info("======localPicPath=====" + localPicPath);
						File file = download(rawPath, localPicPath);
						if (null != file) {
							files.put(name, file);
						}

					}

				}

			}
			objs[1] = files;

		} catch (Exception e) {
			e.printStackTrace();
		}

		return objs;
	}

	public static File download(String remote, String local) throws IOException {
		try {
			File file = new File(local);
			Path remotePath = new Path(remote);
			FileOutputStream outputStream = new FileOutputStream(file, false);
			IOUtils.copyBytes(fs.open(remotePath), outputStream, 2048, true);
			return file;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 不包含目录则直接返回该路径；包含目录，则寻找最新目录，直至找到根目录并返回
	 */
	public static String getFinalPath(String dirPath) {
		if (StringUtils.isEmpty(dirPath)) {
			return null;
		}
		try {
			Path requestPath = new Path(dirPath);
			if (!fs.exists(requestPath)) {
				return null;// 不存在dir
			}
			FileStatus status = fs.getFileStatus(requestPath);
			if (status.isFile()) {
				return null;
			} else if (status.isDirectory()) {//是文件夹先判断包不包含文件夹
				
				if (containDir(dirPath)) {// 包含文件夹
					String latestDir = getLatestDir(dirPath);
					if (StringUtils.isEmpty(latestDir)) {
						return null;
					}
					return getFinalPath(latestDir);

				} else {//不包含文件夹
					return dirPath;

				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 不包含目录则直接返回false;避免杂糅在一起，分开写。
	 */
	public static boolean containDir(String dirPath) {
		if (StringUtils.isEmpty(dirPath)) {
			return false;
		}

		try {
			Path requestPath = new Path(dirPath);
			if (!fs.exists(requestPath)) {
				return false;// 不存在dir
			}
			FileStatus[] fileStatuses = fs.listStatus(requestPath);
			List<FileStatus> statusList = Arrays.asList(fileStatuses);
			if (null == statusList || statusList.size() < 1) {
				return false;// 不存在dir
			}
			for (int i = statusList.size() - 1; i >= 0; i--) {
				FileStatus status = statusList.get(i);
				if (status.isDirectory()) {
					return true;
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}

	/**
	 * 返回最新目录路径
	 */
	public static String getLatestDir(String dirPath) {
		if (StringUtils.isEmpty(dirPath)) {
			return null;
		}

		try {
			Path requestPath = new Path(dirPath);
			if (!fs.exists(requestPath)) {
				return null;// 不存在dir
			}
			FileStatus[] fileStatuses = fs.listStatus(requestPath);
			List<FileStatus> statusList = Arrays.asList(fileStatuses);
			Collections.sort(statusList, new Comparator<FileStatus>() {
				@Override
				public int compare(FileStatus o1, FileStatus o2) {
					long time1 = o1.getModificationTime();
					long time2 = o2.getModificationTime();
					long com=time1-time2;
					if (com>0) {
						return 1;
					}else if (com<0) {
						return -1;
					}
					return 0;
				}
			});
			if (null == statusList || statusList.size() < 1) {
				return null;// 不存在dir
			}
			for (int i = statusList.size() - 1; i >= 0; i--) {
				FileStatus status = statusList.get(i);
				if (status.isDirectory()) {
					return status.getPath().toUri().getRawPath();// 返回最新目录路径
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
}
