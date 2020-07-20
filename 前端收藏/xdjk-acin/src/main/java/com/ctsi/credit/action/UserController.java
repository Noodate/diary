package com.ctsi.credit.action;

import com.ctsi.credit.common.Result;
import com.ctsi.credit.common.ResultGenerator;
import com.ctsi.credit.entity.Area;
import com.ctsi.credit.entity.Role;
import com.ctsi.credit.entity.User;
import com.ctsi.credit.service.RoleService;
import com.ctsi.credit.service.UserService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/user")
public class UserController {

    private static final Logger log = Logger.getLogger(LoginController.class);// 日志文件

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/getUsers", method = RequestMethod.POST)
    @ResponseBody
    public Result getUsers(HttpSession session) {
        String userid = (String)session.getAttribute("id");
        List<User> list = userService.getUserAll(userid);
        if(!StringUtils.isEmpty(list)){
            return ResultGenerator.genSuccessResult(list);
        } else {
            return ResultGenerator.genSuccessResult("没有查询到用户列表请联系管理员");
        }
    }


//    @RequestMapping(value = "/setUsers", method = RequestMethod.POST)
//    @ResponseBody
//    public Result setUsers(HttpSession session,User user) {
//        String userid = (String)session.getAttribute("id");
//        List<User> list = userService.getUsersService(userid);
//
//        return null;
//    }


    @RequestMapping(value = "/getSelect", method = RequestMethod.POST)
    @ResponseBody
    public Result getSelect(HttpSession session,@RequestBody String id) {
        List list = new ArrayList();
        String userid = (String)session.getAttribute("id");
        //获取当前用户
        User user = userService.getUser(id);
        list.add(user);
        // 根据当前用户权限获取用户列表
        List<Area> list_area = userService.getAreaSelect(userid);
        List<Role> list_role = userService.getRoleSelect(userid);
       // System.out.println(role.getRole_name());
        list.add(list_area);
        list.add(list_role);
        return ResultGenerator.genSuccessResult(list);
    }

    @RequestMapping(value = "/setUser", method = RequestMethod.POST)
    @ResponseBody
    public Result setUser(@RequestBody User user) {
        userService.setUserService(user);
        return ResultGenerator.genSuccessResult("ok");
    }
    @RequestMapping(value = "/addUser", method = RequestMethod.POST)
    @ResponseBody
    public Result addUser(HttpSession session,@RequestBody User user) {
        String userid = (String)session.getAttribute("id");
        System.out.println(user);
        userService.addUserService(userid,user);
        return ResultGenerator.genSuccessResult("ok");
    }

}
