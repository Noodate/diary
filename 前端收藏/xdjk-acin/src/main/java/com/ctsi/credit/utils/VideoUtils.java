package com.ctsi.credit.utils;

public class VideoUtils {
	public static boolean isVideoName(String path){
		return path.endsWith(".mp4")||path.endsWith(".MP4")||path.endsWith(".avi")||path.endsWith(".3gp")||path.endsWith(".rm")||path.endsWith(".rmvb")||path.endsWith(".wmv")||path.endsWith(".mkv");
	}
	public static boolean isMP4(String path){
		boolean isMP4=false;
		if (path.endsWith(".mp4")||path.endsWith(".MP4")||path.endsWith(".avi")||path.endsWith(".AVI")) {
			isMP4=true;
		}
		return isMP4;
	}
	
}
