package com.wpc.system.controller;

import com.wpc.base.controller.BaseController;
import com.wpc.common.Global;
import com.wpc.common.bean.ResponseResult;
import com.wpc.system.factory.ConstantFactory;
import com.wpc.system.model.Role;
import com.wpc.system.model.User;
import com.wpc.system.node.ZTreeNode;
import com.wpc.system.service.IRoleService;
import com.wpc.system.service.IUserService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;

/**
 * 角色控制器
 *
 * @author 王鹏程
 * @Date 2017年2月12日21:59:14
 */
@Controller
@RequestMapping("/role")
public class RoleController extends BaseController {

    private static String PREFIX = "/system/role";

    @Autowired
    private IUserService userService;

    @Autowired
    private IRoleService roleService;

    /**
     * 跳转到角色列表页面
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "/role";
    }

    /**
     * 跳转到添加角色
     */
    @RequestMapping(value = "/role_add")
    public String roleAdd() {
        return PREFIX + "/role_add";
    }

    /**
     * 跳转到修改角色
     */
    @RequestMapping(value = "/role_edit/{roleId}")
    public String roleEdit(@PathVariable Long roleId, Model model) {
        Role role = this.roleService.findById(roleId);
        model.addAttribute(role);
        model.addAttribute("pName", ConstantFactory.me().getSingleRoleName(role.getPid()));
        model.addAttribute("deptName", ConstantFactory.me().getDeptName(role.getDeptid()));
//        LogObjectHolder.me().set(role);
        return PREFIX + "/role_edit";
    }

    /**
     * 跳转到角色分配
     */
    @RequestMapping(value = "/role_assign/{roleId}")
    public String roleAssign(@PathVariable("roleId") Long roleId, Model model) {
        model.addAttribute("roleId", roleId);
        model.addAttribute("roleName", ConstantFactory.me().getSingleRoleName(roleId));
        return PREFIX + "/role_assign";
    }

    /**
     * 获取角色列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(@RequestParam(required = false) String roleName) {
        List<Map<String, Object>> roles = this.roleService.selectRoles(roleName);
        return roles;
    }

    /**
     * 角色新增
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public ResponseResult add(@Valid Role role, BindingResult result) {
        if (result.hasErrors()) {
//            throw new ServiceException(BizExceptionEnum.REQUEST_NULL);
        }
        role.setId(null);
        this.roleService.insert(role);
        return SUCCESS_TIP;
    }

    /**
     * 角色修改
     */
    @RequestMapping(value = "/edit")
    @ResponseBody
    public ResponseResult edit(@Valid Role role, BindingResult result) {
        if (result.hasErrors()) {
//            throw new ServiceException(BizExceptionEnum.REQUEST_NULL);
        }
        this.roleService.update(role);

        return SUCCESS_TIP;
    }

    /**
     * 删除角色
     */
    @RequestMapping(value = "/remove")
    @ResponseBody
    public ResponseResult remove(@RequestParam Integer roleId) {

        //不能删除超级管理员角色
        if (roleId.equals(Global.ADMIN_ROLE_ID)) {
//            throw new ServiceException(BizExceptionEnum.CANT_DELETE_ADMIN);
        }

        //缓存被删除的角色名称
//        LogObjectHolder.me().set(ConstantFactory.me().getSingleRoleName(roleId));

        this.roleService.delRoleById(roleId);

        return SUCCESS_TIP;
    }

    /**
     * 查看角色
     */
    @RequestMapping(value = "/view/{roleId}")
    @ResponseBody
    public ResponseResult view(@PathVariable Long roleId) {
        this.roleService.findById(roleId);
        return SUCCESS_TIP;
    }

    /**
     * 配置权限
     */
    @RequestMapping("/setAuthority")
    @ResponseBody
    public ResponseResult setAuthority(@RequestParam("roleId") Integer roleId, @RequestParam("ids") String ids) {
        this.roleService.setAuthority(roleId, ids);
        return SUCCESS_TIP;
    }

    /**
     * 获取角色列表
     */
    @RequestMapping(value = "/roleTreeList")
    @ResponseBody
    public List<ZTreeNode> roleTreeList() {
        List<ZTreeNode> roleTreeList = this.roleService.roleTreeList();
        roleTreeList.add(ZTreeNode.createParent());
        return roleTreeList;
    }

    /**
     * 获取角色列表
     */
    @RequestMapping(value = "/roleTreeListByUserId/{userId}")
    @ResponseBody
    public List<ZTreeNode> roleTreeListByUserId(@PathVariable Long userId) {
        User theUser = this.userService.findById(userId);
        String roleid = theUser.getRoleid();
        if (StringUtils.isEmpty(roleid)) {
            return this.roleService.roleTreeList();
        } else {
            String[] strArray = roleid.split(",");
            return this.roleService.roleTreeListByRoleId(strArray);
        }
    }

}
