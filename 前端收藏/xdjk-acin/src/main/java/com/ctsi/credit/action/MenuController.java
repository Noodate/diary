package com.ctsi.credit.action;

import com.ctsi.credit.entity.Menu;
import com.ctsi.credit.service.MenuService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/menu")
public class MenuController {

    private static final Logger log = Logger.getLogger(LoginController.class);// 日志文件

    @Autowired
    private MenuService menuService;
    @RequestMapping(value = "/getMenu", method = RequestMethod.POST)
    @ResponseBody
    public List<Menu> getMenu(String id, String parent_id) {
        // 调用业务方法根据用户权限展示菜单
        List<Menu> list = menuService.getMenu(id, parent_id);
        if (!StringUtils.isEmpty(list))
            log.info("==========一级菜单展示成功==============");
        //mv.setViewName("vwCredit/jsp/home.jsp");
        return list;
    }

}
