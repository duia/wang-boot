package com.wpc.system.warpper;

import com.github.pagehelper.PageInfo;
import com.wpc.base.warpper.BaseWrapper;
import com.wpc.system.factory.ConstantFactory;

import java.util.List;
import java.util.Map;

/**
 * 部门列表的包装
 *
 * @author 王鹏程
 * @date 2017年4月25日 18:10:31
 */
public class DeptWarpper extends BaseWrapper {

    public DeptWarpper(Map<String, Object> single) {
        super(single);
    }

    public DeptWarpper(List<Map<String, Object>> multi) {
        super(multi);
    }

    public DeptWarpper(PageInfo<Map<String, Object>> page) {
        super(page);
    }

    @Override
    protected void wrapTheMap(Map<String, Object> map) {
        Long pid = (Long) map.get("parent_id");
        map.put("parentId", pid);
        if (pid.equals(0L)) {
            map.put("pName", "--");
        } else {
            map.put("pName", ConstantFactory.me().getDeptName(pid));
        }
    }
}
