package com.ctsi.credit.utils;

import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.util.StringUtils;

public class UserUtils {

	public static void setPathToSession(String userpath, HttpSession session) {
		if (!StringUtils.isEmpty(userpath)) 
		{
			String[] paths = userpath.split(";");
			if (paths!=null&&paths.length>0) {
				List<String> list = Arrays.asList(paths);
				session.setAttribute("pathlist", list); 
				session.setAttribute("userpath", userpath);
			}
		}		
	}

}
