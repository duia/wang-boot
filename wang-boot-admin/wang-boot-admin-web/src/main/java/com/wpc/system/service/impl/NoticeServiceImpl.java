package com.wpc.system.service.impl;

import com.wpc.base.service.impl.BaseServiceImpl;
import com.wpc.system.dao.NoticeMapper;
import com.wpc.system.model.Notice;
import com.wpc.system.service.INoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 通知表 服务实现类
 * </p>
 *
 * @author 王鹏程
 * @since 2018-02-22
 */
@Service
public class NoticeServiceImpl extends BaseServiceImpl<Notice> implements INoticeService {

    @Autowired
    private NoticeMapper noticeMapper;

    @Override
    public List<Map<String, Object>> list(String condition) {
        return this.noticeMapper.list(condition);
    }
}
