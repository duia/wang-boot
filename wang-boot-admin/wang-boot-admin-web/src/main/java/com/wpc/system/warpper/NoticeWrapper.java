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
public class NoticeWrapper extends BaseWrapper {

    public NoticeWrapper(Map<String, Object> single) {
        super(single);
    }

    public NoticeWrapper(List<Map<String, Object>> multi) {
        super(multi);
    }

    public NoticeWrapper(PageInfo<Map<String, Object>> page) {
        super(page);
    }

    @Override
    protected void wrapTheMap(Map<String, Object> map) {
        Long creater = (Long) map.get("creater");
        map.put("createrName", ConstantFactory.me().getUserNameById(creater));
    }
}
