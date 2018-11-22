package com.wpc.system.dao;

import com.wpc.base.dao.BaseMapper;
import com.wpc.system.model.Dept;
import com.wpc.system.node.ZTreeNode;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 部门表 Mapper 接口
 * </p>
 *
 * @author 王鹏程
 * @since 2017-07-11
 */
@Mapper
public interface DeptMapper extends BaseMapper<Dept> {

    /**
     * 获取ztree的节点列表
     */
    List<ZTreeNode> tree();

    /**
     * 获取所有部门列表
     */
    List<Map<String, Object>> list(@Param("condition") String condition);

}