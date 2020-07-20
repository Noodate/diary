package com.ctsi.credit.action;

import com.ctsi.credit.common.Result;
import com.ctsi.credit.common.ResultGenerator;
import com.ctsi.credit.entity.AreaParentId;
import com.ctsi.credit.entity.Menu;
import com.ctsi.credit.entity.RolePermissions;
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
@RequestMapping("/role")
public class RoleController {

    private static final Logger log = Logger.getLogger(LoginController.class);// 日志文件

    @Autowired
    private UserService userService;
    @Autowired
    private RoleService roleService;

    @RequestMapping(value = "/getRoles", method = RequestMethod.POST)
    @ResponseBody
    public Result getRoles(HttpSession session) {
        String userid = (String)session.getAttribute("id");
        List<User> listUser  = userService.getUserAll(userid);
        List<RolePermissions> rolePermissions=new ArrayList<RolePermissions>();
        for (User user : listUser) {
            rolePermissions.addAll(user.getRolepermissions());
        }
        for (RolePermissions rolePermission : rolePermissions) {
            // 根据角色和地区获取相关菜单
            List<Menu> list = roleService.getMenuForAreaRole(rolePermission.getArea_id(),rolePermission.getRole_number());
            rolePermission.setList(list);
        }
        for (RolePermissions rolePermission : rolePermissions) {
            rolePermission.setMenu_id(roleService.getParentId(rolePermission.getArea_id()));
        }
        if(!StringUtils.isEmpty(rolePermissions)){
            return ResultGenerator.genSuccessResult(rolePermissions);
        } else {
            return ResultGenerator.genSuccessResult("没有查询到角色列表请联系管理员");
        }
    }



    @RequestMapping(value = "/setAreaRoleMenu", method = RequestMethod.POST)
    @ResponseBody
    public String setAreaRoleMenu(@RequestBody String str) {
        String[] str2 = str.split("\\|");
        String area_id = str2[0];
        String role_number = str2[1];
        String menu = str2[2];
        System.out.println(menu);
        List<String> list = new ArrayList();
        String[] menu2 = menu.split(",");
        for(int i=0;i<menu2.length;i++){
            list.add(menu2[i]);
        }
        roleService.setRolesService(area_id,role_number,list);

        return "ok";
    }


    @RequestMapping(value = "/getRoleMenuList", method = RequestMethod.POST)
    @ResponseBody
    public Result getRoleMenuList(@RequestBody AreaParentId areaParentId) {
        String area_id = areaParentId.getArea_id();
        String parent_id = areaParentId.getParent_id();

        // 根据分行名称 查询子菜单
        List<Menu> list = userService.getParentMenu(area_id,parent_id);

        if(!StringUtils.isEmpty(list)){
            return ResultGenerator.genSuccessResult(list);
        } else {
            return ResultGenerator.genSuccessResult("没有查询到角色列表请联系管理员");
        }
    }
}
