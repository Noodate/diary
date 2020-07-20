package com.ctsi.credit.mapper;

import java.util.List;

import com.ctsi.credit.mail.entity.UserInfo;

public interface MailMapper {
	List<UserInfo> findAllUserMailInfo();

}
