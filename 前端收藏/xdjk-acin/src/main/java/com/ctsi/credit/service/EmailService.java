package com.ctsi.credit.service;

import com.ctsi.credit.entity.MailModel;

public interface EmailService {
    
    /**
     * email配置
     * @return
     */
    public void emailManage();
    
    /**
     * 发送邮件
     * @param mail
     */
    public void sendEmail(MailModel mail);

}