package com.ctsi.credit.mapper;

import com.ctsi.credit.entity.UserCollection;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

public interface CollectionMapper {

    public void insertCollection(Map<String, String> map);

    public int readCollection(Map<String, String> map);

    public void delectPath(Map<String, String> map);

    public List<UserCollection> showCollection(String userId);

    public UserCollection updateDirName(Map<String, String> map);
}
