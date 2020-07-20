package com.ctsi.credit.service;

import com.ctsi.credit.entity.UserCollection;

import java.util.List;

public interface CollectionService {

    //写入收藏
    public void InsertCollection(String name, String path, String userId);

    // 读取收藏
    public int readCollection(String userId, String usercollection_path);

    //取消收藏
    public void delectPath(String userId, String path);

    //显示收藏列表
    public List<UserCollection> showCollection(String userId);

    //在收藏列表中创建文件夹
    public boolean mkdir(String dirName, String userId);

    //在hdfs上复制图片或者视频到指定目录,并保存到本地数据表
    public boolean copyIntoDir(String dirName, String path, String userId);

    // 文件夹重命名
    public void updateDirName(String dirName, String oldDirName, String userId);

    //查看当前用户下 所有的文件夹名
    public List<UserCollection> getDirList(String userId);

    //在hdfs上剪切文件到指定目录
    public boolean shearIntoDir(String dirName, String path, String userId);

    public boolean shearIntoDirByThree(String dirName, String path, String userId);
}
