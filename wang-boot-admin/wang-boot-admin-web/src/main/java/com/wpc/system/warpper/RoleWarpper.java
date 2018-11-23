package com.wpc.system.warpper;

import com.github.pagehelper.PageInfo;
import com.wpc.base.warpper.BaseWrapper;
import com.wpc.system.factory.ConstantFactory;

import java.util.List;
import java.util.Map;

/**
 * 角色列表的包装类
 *
 * @author 王鹏程
 * @date 2017年2月19日10:59:02
 */
public class RoleWarpper extends BaseWrapper {

    public RoleWarpper(Map<String, Object> single) {
        super(single);
    }

    public RoleWarpper(List<Map<String, Object>> multi) {
        super(multi);
    }

    public RoleWarpper(PageInfo<Map<String, Object>> page) {
        super(page);
    }

    @Override
    protected void wrapTheMap(Map<String, Object> map) {
        Long pid = (Long) map.get("parent_id");
        map.put("parentId", pid);
        map.put("pName", ConstantFactory.me().getSingleRoleName(pid));
        map.put("deptName", ConstantFactory.me().getDeptName((Long) map.get("deptid")));
    }

}
