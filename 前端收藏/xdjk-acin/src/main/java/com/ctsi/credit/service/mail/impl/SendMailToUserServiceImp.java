package com.ctsi.credit.service.mail.impl;

import java.io.File;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import javax.annotation.Resource;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.ctsi.credit.entity.MailModel;
import com.ctsi.credit.mail.entity.UserInfo;
import com.ctsi.credit.mapper.MailMapper;
import com.ctsi.credit.service.EmailService;
import com.ctsi.credit.service.SendMailToUserService;
import com.ctsi.credit.utils.MailHdfsUtils;

@Service
public class SendMailToUserServiceImp implements SendMailToUserService {
	private static Logger logger = Logger.getLogger(EmailServiceImpl.class);
	@Resource
	MailMapper mailMapper;
	@Resource
	EmailService emailService;

	@Override
	public void sendMailToUser() {
		List<UserInfo> list = getUserInfo();
		if (list != null && list.size() > 0) {
			for (int i = 0; i < list.size(); i++) {
				UserInfo info = list.get(i);
				String mails = info.getMails();
								
				String path = info.getPaths();
				//没有邮箱不发
				if (!StringUtils.isEmpty(path) && !StringUtils.isEmpty(mails)) {
					String[] paths = path.split(";");
					if (null != paths && paths.length > 0) {
						for (int j = 0; j < paths.length; j++) {
							String p = paths[j];
							try {
								Object[] objs = MailHdfsUtils.getLatestFiles(p);
								String finalDirName=(String)objs[0];
								Map<String,File> files=(Map<String,File>)objs[1];
								
								MailModel mail=new MailModel();
								
								mail.setToEmails(mails);
								//内容
						        StringBuilder builder = new StringBuilder();
						        
						        String name = info.getName();
						        String phone=info.getPhone();
						        String project = info.getProject();
						        
						        if (!StringUtils.isEmpty(name)) {
						        	 builder.append("<html><body>"+name+" 经理，您好！<br /><br />");
								}else {
									 builder.append("<html><body>经理，您好！<br /><br />");
								}
						        
						        builder.append("附件是您所管控的项目的最新标志性图片，请您查收。<br /><br />");
						        
						        if (!StringUtils.isEmpty(project)) {						        	
						        	 mail.setSubject(project+"最新标志性图片");
								}else {
									 mail.setSubject("信贷监控最新标志性图片");
								}
						        
						        if (!StringUtils.isEmpty(phone)) {
						        	 builder.append("您也可以通过内网访问xdjk.cdb.com.cn，登录账号为您的手机号码"+phone+"，初始密码为123456。<br /><br />");
								}else {
									 builder.append("您也可以通过内网访问xdjk.cdb.com.cn，登录账号为您的手机号码，初始密码为123456。<br /><br />");
								}
						        
						        builder.append("此邮件为程序自动发送，请勿回复~<br/><br />");						       
						        builder.append("</body></html>");
						        String content = builder.toString();
								mail.setContent(content);
						
								if (null!=files) {
									mail.setFileAttachments(files);
								}
								emailService.sendEmail(mail);
							} catch (Exception e) {
								
								e.printStackTrace();
							}
							
						}
					}
				}
			}
		}
	}

	private List<UserInfo> getUserInfo() {
		List<UserInfo> mailInfo = null;
		try {
			mailInfo = mailMapper.findAllUserMailInfo();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return mailInfo;
	}

}
