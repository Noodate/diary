package com.ctsi.a.service.impl;

import com.ctsi.a.dao.UserDao;
import com.ctsi.a.service.UserService;
import com.ctsi.a.entity.User;
import com.ssm.promotion.core.util.AntiXssUtil;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * @author 1034683568@qq.com
 * @project_name perfect-ssm
 * @date 2017-3-1
 */
@Service("ctsiUserService")
public class UserServiceImpl implements UserService {

    @Resource
    private UserDao ctsiUserDao;

    @Override
    public User login(User user) {
        return ctsiUserDao.login(user);
    }

    @Override
    public List<User> findUser(Map<String, Object> map) {
        return ctsiUserDao.findUsers(map);
    }

    @Override
    public int updateUser(User user) {
        //防止有人胡乱修改导致其他人无法正常登陆
        if ("admin".equals(user.getUserName())) {
            return 0;
        }
        user.setUserName(AntiXssUtil.replaceHtmlCode(user.getUserName()));
        return ctsiUserDao.updateUser(user);
    }

    @Override
    public Long getTotalUser(Map<String, Object> map) {
        return ctsiUserDao.getTotalUser(map);
    }

    @Override
    public int addUser(User user) {
        if (user.getUserName() == null || user.getPassword() == null || getTotalUser(null) > 90) {
            return 0;
        }
        user.setUserName(AntiXssUtil.replaceHtmlCode(user.getUserName()));
        return ctsiUserDao.addUser(user);
    }

    @Override
    public int deleteUser(Integer id) {
        //防止有人胡乱修改导致其他人无法正常登陆
        if (2 == id) {
            return 0;
        }
        return ctsiUserDao.deleteUser(id);
    }

}
