package com.wpc.system.warpper;

import com.github.pagehelper.PageInfo;
import com.wpc.base.warpper.BaseWrapper;
import com.wpc.common.Global;
import com.wpc.system.factory.ConstantFactory;

import java.util.List;
import java.util.Map;

/**
 * 菜单列表的包装类
 *
 * @author 王鹏程
 * @date 2017年2月19日15:07:29
 */
public class MenuWarpper extends BaseWrapper {

    public MenuWarpper(Map<String, Object> single) {
        super(single);
    }

    public MenuWarpper(List<Map<String, Object>> multi) {
        super(multi);
    }

    public MenuWarpper(PageInfo<Map<String, Object>> page) {
        super(page);
    }

    @Override
    protected void wrapTheMap(Map<String, Object> map) {
        map.put("statusName", ConstantFactory.me().getMenuStatusName((Integer) map.get("status")));
        map.put("isMenuName", Global.YES.equals(map.get("ismenu"))?"是":"否");
    }

}
