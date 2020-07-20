package com.ctsi.credit.service.impl;

import com.ctsi.credit.entity.UserCollection;
import com.ctsi.credit.hadoop.HDFSUtil;
import com.ctsi.credit.mapper.CollectionMapper;
import com.ctsi.credit.service.CollectionService;
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.fs.Path;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CollectionServiceImpl implements CollectionService {

    @Autowired
    private CollectionMapper collectionMapper;

    public void InsertCollection(String name, String path, String userId) {
        Map<String, String> map = new HashMap<String, String>();
        map.put("path", path);
        map.put("userId", userId);
        map.put("name", name);
        collectionMapper.insertCollection(map);
    }

    public int readCollection(String userId, String usercollection_path) {
        Map<String, String> map = new HashMap<String, String>();
        map.put("userId", userId);
        map.put("usercollection_path", usercollection_path);
        int count = collectionMapper.readCollection(map);
        return count;
    }

    public void delectPath(String userId, String usercollection_path) {
        Map<String, String> map = new HashMap<String, String>();
        try {
            map.put("userid", userId);
            map.put("usercollection_path", usercollection_path);
            collectionMapper.delectPath(map);
            // 删除hdfs上对应的文件夹
            HDFSUtil h = new HDFSUtil();
            if(h.exit(usercollection_path)){
                Path fileOutPath = new Path(usercollection_path);
                FileSystem fs = h.connectHadoop();
                fs.delete(fileOutPath,true);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public List<UserCollection> showCollection(String userId) {
        List<UserCollection> list = collectionMapper.showCollection(userId);
        return list;
    }

    public boolean mkdir(String dirName, String userId) {
        // 在hdfs上新建文件夹 用于收藏图片
        HDFSUtil util = new HDFSUtil();
        FileSystem fs = util.connectHadoop();
        boolean flag = util.mkdirFolder("/" + dirName,fs);
        Map<String, String> map = new HashMap();
        map.put("name", dirName);
        map.put("path", "/bdp_data_intergation/inner_data/o_data/xdjk/" + dirName);
        map.put("userId", userId);
        collectionMapper.insertCollection(map);
        //将文件夹名称 根据用户id 存入到数据库中
        return flag;
    }

    public boolean copyIntoDir(String dirName, String path, String userId) {
        HDFSUtil util = new HDFSUtil();
        boolean flag = false;
        try {
            flag = util.copyIntoDir(dirName, path);
            Map<String, String> map = new HashMap();
            map.put("userid", userId);
            map.put("usercollection_path", path);
            //删除本地记录
            collectionMapper.delectPath(map);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return flag;
    }

    public void updateDirName(String dirName, String oldDirName, String userId) {
        Map param = new HashMap();
        param.put("dirName", dirName);
        param.put("oldDirName", oldDirName);
        param.put("userId", userId);
        collectionMapper.updateDirName(param);
    }

    public List<UserCollection> getDirList(String userId) {
        List<UserCollection> list = collectionMapper.showCollection(userId);
        List<UserCollection> list2 = new ArrayList<>();
        for (UserCollection userCollection : list) {
            if (userCollection.getUsercollection_name().endsWith("~")) {
                list2.add(userCollection);
            }
        }
        return list2;
    }


    public boolean shearIntoDir(String dirName, String path, String userId) {
        HDFSUtil util = new HDFSUtil();
        boolean flag = false;
        try {
            String dirpath="/bdp_data_intergation/inner_data/o_data/xdjk/"+dirName;
            // 复制
            flag = util.copyIntoDir(dirpath, path);
            // 删除源文件
            util.delete(path);
            // 添加一条记录到数据库中
            Map<String, String> map = new HashMap<String, String>();
            map.put("path", dirpath);
            map.put("userId", userId);
            System.out.println(dirName);
            map.put("name", "" + dirName.substring(dirName.lastIndexOf("/") + 1, dirName.length()));
            collectionMapper.insertCollection(map);
            flag = true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return flag;
    }

    public boolean shearIntoDirByThree(String dirName, String path,String userId){
        HDFSUtil util = new HDFSUtil();
        boolean flag = false;
        try {
            // 复制
            flag = util.copyIntoDir(dirName, path);
            // 删除源文件
            util.delete(path);
            flag = true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return flag;
    }

}
