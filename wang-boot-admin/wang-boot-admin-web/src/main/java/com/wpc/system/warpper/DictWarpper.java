package com.wpc.system.warpper;

import com.github.pagehelper.PageInfo;
import com.wpc.base.warpper.BaseWrapper;
import com.wpc.system.factory.ConstantFactory;
import com.wpc.system.model.Dict;
import org.apache.commons.lang3.StringUtils;

import java.util.List;
import java.util.Map;

/**
 * 字典列表的包装
 *
 * @author 王鹏程
 * @date 2017年4月25日 18:10:31
 */
public class DictWarpper extends BaseWrapper {

    public DictWarpper(Map<String, Object> single) {
        super(single);
    }

    public DictWarpper(List<Map<String, Object>> multi) {
        super(multi);
    }

    public DictWarpper(PageInfo<Map<String, Object>> page) {
        super(page);
    }

    @Override
    protected void wrapTheMap(Map<String, Object> map) {
        StringBuffer detail = new StringBuffer();
        Long id = Long.valueOf(map.get("id").toString());
        List<Dict> dicts = ConstantFactory.me().findInDict(id);
        if (dicts != null) {
            for (Dict dict : dicts) {
                detail.append(dict.getCode() + ":" + dict.getName() + ",");
            }
            map.put("detail", StringUtils.removeEnd(detail.toString(), ","));
        }
    }
}
