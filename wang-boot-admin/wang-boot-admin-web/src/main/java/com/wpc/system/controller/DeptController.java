/**
 * Copyright 2018-2020 stylefeng & fengshuonan (https://gitee.com/stylefeng)
 * <p>
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * <p>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.wpc.system.controller;

import com.wpc.base.controller.BaseController;
import com.wpc.system.factory.ConstantFactory;
import com.wpc.system.model.Dept;
import com.wpc.system.node.ZTreeNode;
import com.wpc.system.service.IDeptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

/**
 * 部门控制器
 *
 * @author fengshuonan
 * @Date 2017年2月17日20:27:22
 */
@Controller
@RequestMapping("/dept")
public class DeptController extends BaseController {

    private String PREFIX = "/system/dept/";

    @Autowired
    private IDeptService deptService;

    /**
     * 跳转到部门管理首页
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "dept";
    }

    /**
     * 跳转到添加部门
     */
    @RequestMapping("/dept_add")
    public String deptAdd() {
        return PREFIX + "dept_add";
    }

    /**
     * 跳转到修改部门
     */
    @RequestMapping("/dept_update/{deptId}")
    public String deptUpdate(@PathVariable Long deptId, Model model) {
        Dept dept = deptService.findById(deptId);
        model.addAttribute(dept);
        model.addAttribute("pName", ConstantFactory.me().getDeptName(dept.getPid()));
//        LogObjectHolder.me().set(dept);
        return PREFIX + "dept_edit";
    }

    /**
     * 获取部门的tree列表
     */
    @RequestMapping(value = "/tree")
    @ResponseBody
    public List<ZTreeNode> tree() {
        List<ZTreeNode> tree = this.deptService.tree();
        tree.add(ZTreeNode.createParent());
        return tree;
    }

    /**
     * 新增部门
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public Object add(Dept dept) {
//        if (Obj.isOneEmpty(dept, dept.getSimplename())) {
//            throw new ServiceException(BizExceptionEnum.REQUEST_NULL);
//        }
        //完善pids,根据pid拿到pid的pids
        deptSetPids(dept);
        this.deptService.insert(dept);
        return SUCCESS_TIP;
    }

    /**
     * 获取所有部门列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(String condition) {
        List<Map<String, Object>> list = this.deptService.list(condition);
        return list;
    }

    /**
     * 部门详情
     */
    @RequestMapping(value = "/detail/{deptId}")
    @ResponseBody
    public Object detail(@PathVariable("deptId") Long deptId) {
        return deptService.findById(deptId);
    }

    /**
     * 修改部门
     */
    @RequestMapping(value = "/update")
    @ResponseBody
    public Object update(Dept dept) {
        if (ObjectUtils.isEmpty(dept) || dept.getId() == null) {
//            throw new ServiceException(BizExceptionEnum.REQUEST_NULL);
        }
        deptSetPids(dept);
        deptService.update(dept);
        return SUCCESS_TIP;
    }

    /**
     * 删除部门
     */
    @RequestMapping(value = "/delete")
    @ResponseBody
    public Object delete(@RequestParam Integer deptId) {

        //缓存被删除的部门名称
//        LogObjectHolder.me().set(ConstantFactory.me().getDeptName(deptId));

        deptService.deleteDept(deptId);

        return SUCCESS_TIP;
    }

    private void deptSetPids(Dept dept) {
        if (ObjectUtils.isEmpty(dept.getPid()) || dept.getPid().equals(0)) {
            dept.setPid(0L);
            dept.setPids("[0],");
        } else {
            long pid = dept.getPid();
            Dept temp = deptService.findById(pid);
            String pids = temp.getPids();
            dept.setPid(pid);
            dept.setPids(pids + "[" + pid + "],");
        }
    }
}
