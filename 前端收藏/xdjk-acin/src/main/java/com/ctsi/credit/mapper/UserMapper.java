package com.ctsi.credit.mapper;

import com.ctsi.credit.entity.DataUser;
import com.ctsi.credit.entity.Project;
import com.ctsi.credit.entity.User;

import java.util.List;

public interface UserMapper {

	User findUserById(long id);
	int updateUserById(User user);
	User findUserByName(String name);	
	Project getProject(String code);
	String getCityName(String code);

	//List<User> findAllUserPath() throws Exception;
	//DataUser findNameOfBank(String str);
	//DataUser findNameOfProject(String arr);
}
