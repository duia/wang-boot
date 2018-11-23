package com.wpc.system.warpper;

import com.github.pagehelper.PageInfo;
import com.wpc.base.warpper.BaseWrapper;
import com.wpc.common.utils.date.DateFormatUtils;
import com.wpc.common.utils.date.DateUtils;
import com.wpc.system.factory.ConstantFactory;

import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * 用户管理的包装类
 *
 * @author 王鹏程
 * @date 2017年2月13日 下午10:47:03
 */
public class UserWarpper extends BaseWrapper {

    public UserWarpper(Map<String, Object> single) {
        super(single);
    }

    public UserWarpper(List<Map<String, Object>> multi) {
        super(multi);
    }

    public UserWarpper(PageInfo<Map<String, Object>> page) {
        super(page);
    }

    @Override
    protected void wrapTheMap(Map<String, Object> map) {
        map.put("sexName", ConstantFactory.me().getSexName((Integer) map.get("sex")));
        map.put("roleName", ConstantFactory.me().getRoleName((String) map.get("roleid")));
        map.put("deptName", ConstantFactory.me().getDeptName((Long) map.get("deptid")));
        map.put("statusName", ConstantFactory.me().getStatusName((Integer) map.get("status")));
        map.put("birthday", DateFormatUtils.formatDate((Date) map.get("birthday"), DateFormatUtils.DATE_FORMAT1));
        map.put("createTime", DateFormatUtils.formatDate((Date) map.get("create_time"), DateFormatUtils.DATE_FORMAT2));
    }

}
