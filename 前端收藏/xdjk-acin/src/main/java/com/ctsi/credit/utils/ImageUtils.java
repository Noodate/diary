package com.ctsi.credit.utils;

public class ImageUtils {
	public static boolean isImageName(String path){
		return path.endsWith(".jpg") || path.endsWith(".JPG") ||path.endsWith(".jpeg")||path.endsWith(".png")||path.endsWith(".bmp");
	}
	
}
