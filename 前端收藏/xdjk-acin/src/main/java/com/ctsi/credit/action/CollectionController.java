package com.ctsi.credit.action;

import com.ctsi.credit.common.Result;
import com.ctsi.credit.common.ResultGenerator;
import com.ctsi.credit.entity.CollectionType;
import com.ctsi.credit.entity.CopyIntoDir;
import com.ctsi.credit.entity.UpdateDirName;
import com.ctsi.credit.entity.UserCollection;
import com.ctsi.credit.hadoop.HDFSUtil;
import com.ctsi.credit.service.CollectionService;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.hadoop.fs.FileSystem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Controller
@RequestMapping("/collection")
public class CollectionController {

    private Log log = LogFactory.getLog(DownloadController.class);

    @Autowired
    private CollectionService collectionServiceImpl;

    @RequestMapping(value = "/byPath", method = RequestMethod.POST)
    @ResponseBody
    public void getCollection(HttpSession session, @RequestBody String downUrlList1) throws UnsupportedEncodingException {
        downUrlList1= URLDecoder.decode(downUrlList1, "UTF-8");
        System.out.println(downUrlList1);
        log.info("down ");
        String[] collectionUrlList = new String[]{};
        if (!org.springframework.util.StringUtils.isEmpty(downUrlList1)) {
            downUrlList1 = downUrlList1.substring(13, downUrlList1.length());
            collectionUrlList = downUrlList1.split(",");
        }
        if (!org.springframework.util.StringUtils.isEmpty(collectionUrlList)) {
            for (String path : collectionUrlList) {
                //收藏文件
                // 获取到userId,根据userId查询相关的收藏
                String userId = (String) session.getAttribute("id");
                // String userId = Long.toString(useridl);
                System.out.println(userId);
                //String path = session.getAttribute("curPath") + "";
                String name = path.substring(path.lastIndexOf('/') + 1, path.length());
                collectionServiceImpl.InsertCollection(name, path, userId);
            }
        }
    }

    @RequestMapping(value = "/delectPath", method = RequestMethod.POST)
    @ResponseBody
    public String delectPath(HttpSession session, @RequestBody String collectionUrlList1) throws UnsupportedEncodingException {
        collectionUrlList1= URLDecoder.decode(collectionUrlList1, "UTF-8");
        String[] downUrlList = new String[]{};
        if (!org.springframework.util.StringUtils.isEmpty(collectionUrlList1)) {
            collectionUrlList1 = collectionUrlList1.substring(13, collectionUrlList1.length());
            downUrlList = collectionUrlList1.split(",");
            if (!org.springframework.util.StringUtils.isEmpty(downUrlList)) {
                for (String usercollection_path : downUrlList) {
                    //根据用户id及视频图片路径 删除记录
                    String userId = (String) session.getAttribute("id");
                    // String usercollection_path = session.getAttribute("curPath") + "";
                    collectionServiceImpl.delectPath(userId, usercollection_path);
                }
            }
        }
        return "ok";
    }


    @RequestMapping(value = "/showCollection", method = RequestMethod.POST)
    @ResponseBody
    public List<CollectionType> showCollection(HttpSession session) {
        //根据用户id 读取所有收藏的路径
        String userId = (String) session.getAttribute("id");
        List<UserCollection> list = collectionServiceImpl.showCollection(userId);
        List<CollectionType> list2 = new ArrayList<>();
        try {
            for (UserCollection userCollection : list) {
                CollectionType type = new CollectionType();
                type.setUserid(userCollection.getUserId());
                type.setPath(userCollection.getUsercollection_path());
                type.setName(userCollection.getUsercollection_name());

                String localVideoPath = session.getServletContext().getRealPath("/vwCredit/video") + userCollection.getUsercollection_path();
                HDFSUtil h = new HDFSUtil();
                FileSystem fs = h.connectHadoop();
                h.download(userCollection.getUsercollection_path(), localVideoPath,fs);

                list2.add(type);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        modifyShort(list2);
        return list2;
    }

    private void modifyShort(List fileList) {
        Iterator it = fileList.iterator();
        while (it.hasNext()) {
            CollectionType map = (CollectionType) it.next();
            String oldNamne = map.getName();
            map.setName(com.ctsi.credit.utils.StringUtils.getShortName(oldNamne));
        }
    }

    /**
     * 在收藏中新建文件夹
     *
     * @return
     */
    @RequestMapping(value = "/mkdir", method = RequestMethod.POST)
    @ResponseBody
    public Result mkdir(HttpSession session) {
        String dirName = "newFile"+(int)((Math.random()*9+1)*100)+"~";
        String userId = (String) session.getAttribute("id");
        boolean flag = collectionServiceImpl.mkdir(dirName, userId);

        if (flag) {
            return ResultGenerator.genSuccessResult("新建文件夹成功");
        } else {
            return ResultGenerator.genFailResult("新建文件夹失败，请联系管理员");
        }
    }


    /**
     * 在收藏中修改文件夹
     *
     * @return
     */
    @RequestMapping(value = "/updateDirName", method = RequestMethod.POST)
    @ResponseBody
    public Result updateDirName(HttpSession session, @RequestBody UpdateDirName updateDirName) {
        String userId = (String) session.getAttribute("id");
        collectionServiceImpl.updateDirName(updateDirName.getNewName() + "~", updateDirName.getOldName() + "~", userId);
        return ResultGenerator.genSuccessResult("修改文件夹名称成功");
    }


    @RequestMapping(value = "/movemkdir", method = RequestMethod.POST)
    @ResponseBody
    public Result copyIntoDir(HttpSession session, @RequestBody CopyIntoDir copyIntoDir) {
        /**
         * 第一种情况 将图片归类到相关文件夹时，在hdfs上复制到文件夹中，删除本地那一条记录
         */
        String userId = (String) session.getAttribute("id");
        String[] str = copyIntoDir.getPathA().split(",");
        boolean flag = false;
        for (String s : str) {

            String name = "" + s.substring(s.lastIndexOf("/") + 1, s.length());
            if ("vf".equals(copyIntoDir.getIdea())) {
                flag = collectionServiceImpl.copyIntoDir(copyIntoDir.getPathB() + "/" + name, s, userId);
            }
            /**
             * 第二种情况，将收藏夹的视频或图片移出，并添加记录
             */
            if ("fv".equals(copyIntoDir.getIdea())) {
                flag = collectionServiceImpl.shearIntoDir("/"+copyIntoDir.getPathB() + "/" + name, s, userId);
            }
            /**
             * 第三种情况，将收藏夹的视频或图片移动到收藏夹，直接剪切
             */
            if ("ff".equals(copyIntoDir.getIdea())) {
                flag = collectionServiceImpl.shearIntoDirByThree(copyIntoDir.getPathB() + "/" + name, s, userId);
            }
        }
        if (flag) {
            return ResultGenerator.genSuccessResult(flag);
        } else {
            return ResultGenerator.genFailResult("拖拽文件失败，请联系管理员");
        }
    }

    /**
     * 查看当前用户下所有收藏夹  用于移动文件到指定文件夹
     */
    @RequestMapping(value = "/getDirList", method = RequestMethod.POST)
    @ResponseBody
    public List<UserCollection> getDirList(HttpSession session) {
        String userId = (String) session.getAttribute("id");
        List<UserCollection> list = collectionServiceImpl.getDirList(userId);
        return list;
    }

}
