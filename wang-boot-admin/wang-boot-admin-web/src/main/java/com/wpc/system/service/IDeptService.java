package com.wpc.system.service;

import com.wpc.base.service.BaseService;
import com.wpc.system.node.ZTreeNode;
import com.wpc.system.model.Dept;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * 部门服务
 *
 * @author 王鹏程
 * @date 2017-04-27 17:00
 */
public interface IDeptService extends BaseService<Dept> {

    /**
     * 删除部门
     */
    void deleteDept(Integer deptId);

    /**
     * 获取ztree的节点列表
     */
    List<ZTreeNode> tree();

    /**
     * 获取所有部门列表
     */
    List<Map<String, Object>> list(@Param("condition") String condition);
}
