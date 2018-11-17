package com.wpc.system.controller;

import com.wpc.SessionUtil;
import com.wpc.base.controller.BaseController;
import com.wpc.common.Global;
import com.wpc.common.bean.ResponseResult;
import com.wpc.constant.ManagerStatus;
import com.wpc.system.DataScope;
import com.wpc.system.factory.ConstantFactory;
import com.wpc.system.factory.UserFactory;
import com.wpc.system.model.User;
import com.wpc.system.service.IUserService;
import com.wpc.system.transfer.UserDto;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.naming.NoPermissionException;
import javax.validation.Valid;
import java.io.File;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.UUID;

/**
 * 系统管理员控制器
 *
 * @author 王鹏程
 * @Date 2017年1月11日 下午1:08:17
 */
@Controller
@RequestMapping("/mgr")
public class UserMgrController extends BaseController {

    private static String PREFIX = "/system/user/";

    @Autowired
    private IUserService userService;

    /**
     * 跳转到查看管理员列表的页面
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "user";
    }

    /**
     * 跳转到查看管理员列表的页面
     */
    @RequestMapping("/user_add")
    public String addView() {
        return PREFIX + "user_add";
    }

    /**
     * 跳转到角色分配页面
     */
    @RequestMapping("/role_assign/{userId}")
    public String roleAssign(@PathVariable Long userId, Model model) {
        User user = this.userService.findById(userId);
        model.addAttribute("userId", userId);
        model.addAttribute("userAccount", user.getAccount());
        return PREFIX + "user_roleassign";
    }

    /**
     * 跳转到编辑管理员页面
     */
    @RequestMapping("/user_edit/{userId}")
    public String userEdit(@PathVariable Long userId, Model model) {
        assertAuth(userId);
        User user = this.userService.findById(userId);
        model.addAttribute(user);
        model.addAttribute("roleName", ConstantFactory.me().getRoleName(user.getRoleid()));
        model.addAttribute("deptName", ConstantFactory.me().getDeptName(user.getDeptid()));
//        LogObjectHolder.me().set(user);
        return PREFIX + "user_edit";
    }

    /**
     * 跳转到查看用户详情页面
     */
    @RequestMapping("/user_info")
    public String userInfo(Model model) {
        Long userId = SessionUtil.getUser().getId();
//        if (ToolUtil.isEmpty(userId)) {
//            throw new ServiceException(BizExceptionEnum.REQUEST_NULL);
//        }
        User user = this.userService.findById(userId);
        model.addAttribute(user);
        model.addAttribute("roleName", ConstantFactory.me().getRoleName(user.getRoleid()));
        model.addAttribute("deptName", ConstantFactory.me().getDeptName(user.getDeptid()));
//        LogObjectHolder.me().set(user);
        return PREFIX + "user_view";
    }

    /**
     * 跳转到修改密码界面
     */
    @RequestMapping("/user_chpwd")
    public String chPwd() {
        return PREFIX + "user_chpwd";
    }

    /**
     * 修改当前用户的密码
     */
    @RequestMapping("/changePwd")
    @ResponseBody
    public Object changePwd(@RequestParam String oldPwd, @RequestParam String newPwd, @RequestParam String rePwd) {
        if (!newPwd.equals(rePwd)) {
            throw new RuntimeException("两次输入密码不一致");
        }
        Long userId = SessionUtil.getUser().getId();
        User user = userService.findById(userId);
        String oldMd5 = SessionUtil.entryptPassword(oldPwd);
        if (user.getPassword().equals(oldMd5)) {
            String newMd5 = SessionUtil.entryptPassword(newPwd);
            user.setPassword(newMd5);
            userService.update(user);
            return SUCCESS_TIP;
        }
        return ResponseResult.error();
    }

    /**
     * 查询管理员列表
     */
    @RequestMapping("/list")
    @ResponseBody
    public Object list(@RequestParam(required = false) String name, @RequestParam(required = false) String beginTime,
                       @RequestParam(required = false) String endTime, @RequestParam(required = false) Integer deptid) {
        if (SessionUtil.isAdmin()) {
            List<Map<String, Object>> users = userService.selectUsers(null, name, beginTime, endTime, deptid);
            return users;
        } else {
            DataScope dataScope = new DataScope(SessionUtil.getDeptDataScope());
            List<Map<String, Object>> users = userService.selectUsers(dataScope, name, beginTime, endTime, deptid);
            return users;
        }
    }

    /**
     * 添加管理员
     */
    @RequestMapping("/add")
    @ResponseBody
    public ResponseResult add(@Valid UserDto userDto, BindingResult result) {
        if (result.hasErrors()) {
//            throw new ServiceException(BizExceptionEnum.REQUEST_NULL);
        }

        // 判断账号是否重复
        User theUser = userService.getByAccount(userDto.getAccount());
        if (theUser != null) {
            throw new RuntimeException("该用户已经注册");
        }

        // 完善账号信息
        userDto.setPassword(SessionUtil.entryptPassword(userDto.getPassword()));
        userDto.setStatus(ManagerStatus.OK.getCode());
        userDto.setCreatetime(new Date());

        User user = new User();
        BeanUtils.copyProperties(userDto, user);
        this.userService.insert(user);
        return SUCCESS_TIP;
    }

    /**
     * 修改管理员
     *
     * @throws NoPermissionException
     */
    @RequestMapping("/edit")
    @ResponseBody
    public ResponseResult edit(@Valid UserDto user, BindingResult result) throws NoPermissionException {
        if (result.hasErrors()) {
//            throw new ServiceException(BizExceptionEnum.REQUEST_NULL);
        }

        User oldUser = userService.findById(user.getId());

        if (SessionUtil.hasRole(Global.ADMIN_NAME)) {
            this.userService.update(UserFactory.editUser(user, oldUser));
            return SUCCESS_TIP;
        } else {
            assertAuth(user.getId());
            User shiroUser = SessionUtil.getUser();
            if (shiroUser.getId().equals(user.getId())) {
                this.userService.update(UserFactory.editUser(user, oldUser));
                return SUCCESS_TIP;
            } else {
                throw new RuntimeException("权限异常");
            }
        }
    }

    /**
     * 删除管理员（逻辑删除）
     */
    @RequestMapping("/delete")
    @ResponseBody
    public ResponseResult delete(@RequestParam Long userId) {
        //不能删除超级管理员
        if (userId.equals(Global.ADMIN_ID)) {
            throw new RuntimeException("不能删除超级管理员");
        }
        assertAuth(userId);
        this.userService.setStatus(userId, ManagerStatus.DELETED.getCode());
        return SUCCESS_TIP;
    }

    /**
     * 查看管理员详情
     */
    @RequestMapping("/view/{userId}")
    @ResponseBody
    public User view(@PathVariable Long userId) {
        assertAuth(userId);
        return this.userService.findById(userId);
    }

    /**
     * 重置管理员的密码
     */
    @RequestMapping("/reset")
    @ResponseBody
    public ResponseResult reset(@RequestParam Long userId) {
        assertAuth(userId);
        User user = this.userService.findById(userId);
        user.setPassword(SessionUtil.entryptPassword(Global.DEFAULT_PWD));
        this.userService.update(user);
        return SUCCESS_TIP;
    }

    /**
     * 冻结用户
     */
    @RequestMapping("/freeze")
    @ResponseBody
    public ResponseResult freeze(@RequestParam Long userId) {
        //不能冻结超级管理员
        if (userId.equals(Global.ADMIN_ID)) {
            throw new RuntimeException("不能冻结超级管理员");
        }
        assertAuth(userId);
        this.userService.setStatus(userId, ManagerStatus.FREEZED.getCode());
        return SUCCESS_TIP;
    }

    /**
     * 解除冻结用户
     */
    @RequestMapping("/unfreeze")
    @ResponseBody
    public ResponseResult unfreeze(@RequestParam Long userId) {
        assertAuth(userId);
        this.userService.setStatus(userId, ManagerStatus.OK.getCode());
        return SUCCESS_TIP;
    }

    /**
     * 分配角色
     */
    @RequestMapping("/setRole")
    @ResponseBody
    public ResponseResult setRole(@RequestParam("userId") Long userId, @RequestParam("roleIds") String roleIds) {
        //不能修改超级管理员
        if (userId.equals(Global.ADMIN_ID)) {
            throw new RuntimeException("不能修改超级管理员角色");
        }
        assertAuth(userId);
        this.userService.setRoles(userId, roleIds);
        return SUCCESS_TIP;
    }

    /**
     * 上传图片
     */
//    @RequestMapping(method = RequestMethod.POST, path = "/upload")
//    @ResponseBody
//    public String upload(@RequestPart("file") MultipartFile picture) {
//
//        String pictureName = UUID.randomUUID().toString() + "." + ToolUtil.getFileSuffix(picture.getOriginalFilename());
//        try {
//            String fileSavePath = gunsProperties.getFileUploadPath();
//            picture.transferTo(new File(fileSavePath + pictureName));
//        } catch (Exception e) {
//            throw new ServiceException(BizExceptionEnum.UPLOAD_ERROR);
//        }
//        return pictureName;
//    }

    /**
     * 判断当前登录的用户是否有操作这个用户的权限
     */
    private void assertAuth(Long userId) {
        if (SessionUtil.isAdmin()) {
            return;
        }
        List<Long> deptDataScope = SessionUtil.getDeptDataScope();
        User user = this.userService.findById(userId);
        Long deptid = user.getDeptid();
        if (deptDataScope.contains(deptid)) {
            return;
        } else {
            throw new RuntimeException("没权限");
        }

    }
}
