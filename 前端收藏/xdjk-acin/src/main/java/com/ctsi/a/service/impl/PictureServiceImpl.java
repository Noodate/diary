package com.ctsi.a.service.impl;

import com.ctsi.a.dao.PictureDao;
import com.ctsi.a.service.PictureService;
import com.ctsi.a.entity.Picture;
import com.ssm.promotion.core.util.AntiXssUtil;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;


@Service("ctsiPictureService")
public class PictureServiceImpl implements PictureService {
    @Resource
    private PictureDao ctsiPictureDao;

    public PictureServiceImpl() {
    }

    @Override
    public List<Picture> findPicture(Map<String, Object> map) {
        return ctsiPictureDao.findPictures(map);
    }

    @Override
    public Long getTotalPicture(Map<String, Object> map) {
        return ctsiPictureDao.getTotalPictures(map);
    }

    @Override
    public int addPicture(Picture picture) {
        if (picture.getPath() == null || getTotalPicture(null) > 90 || picture.getPath().length() > 100 || picture.getUrl().length() > 100) {
            return 0;
        }
        picture.setUrl(AntiXssUtil.replaceHtmlCode(picture.getUrl()));
        return ctsiPictureDao.insertPicture(picture);
    }

    @Override
    public int updatePicture(Picture picture) {
        if (picture.getPath() == null || getTotalPicture(null) > 90 || picture.getPath().length() > 100 || picture.getUrl().length() > 100) {
            return 0;
        }
        picture.setUrl(AntiXssUtil.replaceHtmlCode(picture.getUrl()));
        return ctsiPictureDao.updPicture(picture);
    }

    @Override
    public int deletePicture(String id) {
        return ctsiPictureDao.delPicture(id);
    }

    @Override
    public Picture findById(String id) {
        return ctsiPictureDao.findPictureById(id);
    }

}
