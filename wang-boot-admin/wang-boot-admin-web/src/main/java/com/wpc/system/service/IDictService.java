package com.wpc.system.service;

import com.wpc.base.service.BaseService;
import com.wpc.system.model.Dict;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * 字典服务
 *
 * @author 王鹏程
 * @date 2017-04-27 17:00
 */
public interface IDictService extends BaseService<Dict> {

    /**
     * 添加字典
     */
    void addDict(String dictCode, String dictName, String dictTips, String dictValues);

    /**
     * 编辑字典
     */
    void editDict(Integer dictId, String dictCode, String dictName, String dictTips, String dicts);

    /**
     * 删除字典
     */
    void delteDict(Integer dictId);

    /**
     * 根据编码获取词典列表
     */
    List<Dict> selectByCode(@Param("code") String code);

    /**
     * 根据父类编码获取词典列表
     */
    List<Dict> selectByParentCode(@Param("code") String code);

    /**
     * 根据父类ID获取词典列表
     */
    List<Dict> selectByParentId(Long pid);

    /**
     * 查询字典列表
     */
    List<Map<String, Object>> list(@Param("condition") String conditiion);

}
