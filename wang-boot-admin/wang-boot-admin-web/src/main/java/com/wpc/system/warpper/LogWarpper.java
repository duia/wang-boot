package com.wpc.system.warpper;

import com.github.pagehelper.PageInfo;
import com.wpc.base.entity.PageInfoBT;
import com.wpc.base.warpper.BaseWrapper;
import com.wpc.common.utils.date.DateFormatUtils;
import com.wpc.constant.LogType;
import com.wpc.system.factory.ConstantFactory;
import org.apache.commons.lang3.StringUtils;

import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * 日志列表的包装类
 *
 * @author 王鹏程
 * @date 2017年4月5日22:56:24
 */
public class LogWarpper extends BaseWrapper {

    public LogWarpper(Map<String, Object> single) {
        super(single);
    }

    public LogWarpper(List<Map<String, Object>> multi) {
        super(multi);
    }

    public LogWarpper(PageInfo<Map<String, Object>> page) {
        super(page);
    }

    public LogWarpper(PageInfoBT<PageInfo<Map<String, Object>>> pageBT) {
        super(pageBT);
    }


    @Override
    protected void wrapTheMap(Map<String, Object> map) {
        String logType = (String) map.get("log_type");
        map.put("logType", LogType.valueOfName(logType));
        Long userId = (Long) map.get("user_id");
        map.put("userName", ConstantFactory.me().getUserNameById(userId));
        if (map.get("oper_time") != null) {
            map.put("operTime", DateFormatUtils.formatDate((Date) map.get("oper_time"), DateFormatUtils.DATE_FORMAT2));
        }
        String message = (String) map.get("message");
        //如果信息过长,则只截取前100位字符串
        if (StringUtils.isNotEmpty(message) && message.length() >= 100) {
            String subMessage = message.substring(0, 100) + "...";
            map.put("message", subMessage);
        }

    }
}
