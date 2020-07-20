package com.ctsi.credit.action;

import com.ctsi.credit.common.Result;
import com.ctsi.credit.common.ResultGenerator;
import com.ctsi.credit.entity.User;
import com.ctsi.credit.service.UserService;
import com.ctsi.credit.util.MD5Util;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;


@Controller
@RequestMapping("/login")
public class LoginController {

    private static final Logger log = Logger.getLogger(LoginController.class);// 日志文件

    @Autowired
    private UserService userService;

    /**
     * 登录
     *
     * @param user
     * @return
     */
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    @ResponseBody
    public Result login(HttpSession session, User user) {

        try {
            String MD5pwd = MD5Util.MD5Encode(user.getUser_pwd(), "UTF-8");
            user.setUser_pwd(MD5pwd);
        } catch (Exception e) {
            user.setUser_pwd("");
            log.error(e.getMessage(), e);
        }
        // 调用登录方法
        User userResult = userService.login(user);
        log.info("============request: user/login , user: ==============" + user.toString());
        if (!StringUtils.isEmpty(userResult)) {
            userResult.setUser_pwd("PASSWORD");
            Map data = new HashMap();
            data.put("currentUser", userResult);
            session.setAttribute("id", userResult.getId());
            session.setAttribute("username", userResult.getUser_name());
            return ResultGenerator.genSuccessResult(data);
        } else {
            return ResultGenerator.genFailResult("请认真核对账号、密码！");
        }
    }
}
