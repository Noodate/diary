package com.ctsi.credit.utils;

import java.io.File;

import javax.servlet.ServletContext;

import org.springframework.web.context.ContextLoader;
import org.springframework.web.context.WebApplicationContext;

public class FileUtils {
   public static  void createVideoDir(String filePath){
	   WebApplicationContext webApplicationContext = ContextLoader.getCurrentWebApplicationContext();    
       ServletContext servletContext = webApplicationContext.getServletContext();  
	   String savePath = servletContext.getRealPath("/video")+"/"+filePath;
       System.out.println("savePath  :"+savePath);
       //在/webapp下创建一个
       File file = new File(savePath);
       if(!file.exists()){
           System.out.println("目录或文件不存在！");
           file.mkdir();
       }
   }
   public static boolean isTXT(String path){
	   boolean isTxt=false;
		if (path.endsWith(".txt")||path.endsWith(".TXT")) {
			isTxt=true;
		}
		return isTxt;
   }
   public static boolean isFLAG(String path){
	   boolean isTxt=false;
	   if (path.endsWith(".flg")||path.endsWith(".flag")||path.endsWith(".FLG")||path.endsWith(".FLAG")) {
		   isTxt=true;
	   }
	   return isTxt;
   }
}
