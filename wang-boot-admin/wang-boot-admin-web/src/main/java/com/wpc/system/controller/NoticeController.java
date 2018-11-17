package com.wpc.system.controller;

import com.wpc.SessionUtil;
import com.wpc.base.controller.BaseController;
import com.wpc.system.model.Notice;
import com.wpc.system.service.INoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

/**
 * 通知控制器
 *
 * @author 王鹏程
 * @Date 2017-05-09 23:02:21
 */
@Controller
@RequestMapping("/notice")
public class NoticeController extends BaseController {

    private String PREFIX = "/system/notice/";

    @Autowired
    private INoticeService noticeService;

    /**
     * 跳转到通知列表首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "notice";
    }

    /**
     * 跳转到添加通知
     */
    @RequestMapping("/notice_add")
    public String noticeAdd() {
        return PREFIX + "notice_add";
    }

    /**
     * 跳转到修改通知
     */
    @RequestMapping("/notice_update/{noticeId}")
    public String noticeUpdate(@PathVariable Long noticeId, Model model) {
        Notice notice = this.noticeService.findById(noticeId);
        model.addAttribute("notice", notice);
//        LogObjectHolder.me().set(notice);
        return PREFIX + "notice_edit";
    }

    /**
     * 跳转到首页通知
     */
    @RequestMapping("/hello")
    public String hello(HttpServletRequest request) {
        List<Map<String, Object>> notices = noticeService.list(null);
        request.setAttribute("noticeList", notices);
        return "/blackboard";
    }

    /**
     * 获取通知列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        List<Map<String, Object>> list = this.noticeService.list(condition);
        return list;
    }

    /**
     * 新增通知
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(Notice notice) {
//        if (ToolUtil.isOneEmpty(notice, notice.getTitle(), notice.getContent())) {
//            throw new ServiceException(BizExceptionEnum.REQUEST_NULL);
//        }
        notice.setCreateBy(SessionUtil.getUser().getId());
        this.noticeService.insert(notice);
        return SUCCESS_TIP;
    }

    /**
     * 删除通知
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Long noticeId) {

        //缓存通知名称
//        LogObjectHolder.me().set(ConstantFactory.me().getNoticeTitle(noticeId));
        this.noticeService.delete(noticeId);

        return SUCCESS_TIP;
    }

    /**
     * 修改通知
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(Notice notice) {
//        if (ToolUtil.isOneEmpty(notice, notice.getId(), notice.getTitle(), notice.getContent())) {
//            throw new ServiceException(BizExceptionEnum.REQUEST_NULL);
//        }
        Notice old = this.noticeService.findById(notice.getId());
        old.setTitle(notice.getTitle());
        old.setContent(notice.getContent());
        noticeService.update(old);
        return SUCCESS_TIP;
    }

}
