package com.ctsi.credit.entity;

import java.util.List;

public class User {

	private String id;
	private String user_name;
	private String user_pwd;
	private String email;
	private List<RolePermissions> rolepermissions;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getUser_name() {
		return user_name;
	}

	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}

	public String getUser_pwd() {
		return user_pwd;
	}

	public void setUser_pwd(String user_pwd) {
		this.user_pwd = user_pwd;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public List<RolePermissions> getRolepermissions() {
		return rolepermissions;
	}

	public void setRolepermissions(List<RolePermissions> rolepermissions) {
		this.rolepermissions = rolepermissions;
	}
}

