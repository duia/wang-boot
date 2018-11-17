package com.wpc.system.service;

import com.wpc.base.service.BaseService;
import com.wpc.system.model.Notice;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 通知表 服务类
 * </p>
 *
 * @author 王鹏程
 * @since 2018-02-22
 */
public interface INoticeService extends BaseService<Notice> {

    /**
     * 获取通知列表
     */
    List<Map<String, Object>> list(String condition);
}
