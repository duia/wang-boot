package com.wpc.system.controller;

import com.wpc.base.controller.BaseController;
import com.wpc.common.bean.ResponseResult;
import com.wpc.common.utils.base.BeanUtils;
import com.wpc.constant.MenuStatus;
import com.wpc.system.factory.ConstantFactory;
import com.wpc.system.model.Menu;
import com.wpc.system.model.node.ZTreeNode;
import com.wpc.system.service.IMenuService;
import com.wpc.system.warpper.MenuWarpper;
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
 * 菜单控制器
 *
 * @author 王鹏程
 * @Date 2017年2月12日21:59:14
 */
@Controller
@RequestMapping("/menu")
public class MenuController extends BaseController {

    private static String PREFIX = "/system/menu/";

    @Autowired
    private IMenuService menuService;

    /**
     * 跳转到菜单列表列表页面
     */
    @RequestMapping("")
    public String index() {
        return PREFIX + "menu";
    }

    /**
     * 跳转到菜单列表列表页面
     */
    @RequestMapping(value = "/menu_add")
    public String menuAdd() {
        return PREFIX + "menu_add";
    }

    /**
     * 跳转到菜单详情列表页面
     */
    @RequestMapping(value = "/menu_edit/{menuId}")
    public String menuEdit(@PathVariable Long menuId, Model model) {
//        if (ToolUtil.isEmpty(menuId)) {
//            throw new ServiceException(BizExceptionEnum.REQUEST_NULL);
//        }
        Menu menu = this.menuService.findById(menuId);

        //获取父级菜单的id
        Menu query = new Menu();
        query.setCode(menu.getPcode());
        Menu pMenu = this.menuService.selectOne(query);

        //如果父级是顶级菜单
        if (pMenu == null) {
            menu.setPcode("0");
        } else {
            //设置父级菜单的code为父级菜单的id
            menu.setPcode(String.valueOf(pMenu.getId()));
        }

        Map<String, Object> menuMap = BeanUtils.object2Map(menu);
        menuMap.put("pcodeName", ConstantFactory.me().getMenuNameByCode(query.getCode()));
        model.addAttribute("menu", menuMap);
//        LogObjectHolder.me().set(menu);
        return PREFIX + "menu_edit";
    }

    /**
     * 修该菜单
     */
    @RequestMapping(value = "/edit")
    @ResponseBody
    public ResponseResult edit(@Valid Menu menu, BindingResult result) {
//        if (result.hasErrors()) {
//            throw new ServiceException(BizExceptionEnum.REQUEST_NULL);
//        }
        //设置父级菜单编号
        menuSetPcode(menu);

        menu.setStatus(MenuStatus.ENABLE.getCode());
        this.menuService.update(menu);
        return SUCCESS_TIP;
    }

    /**
     * 获取菜单列表
     */
    @RequestMapping(value = "/list")
    @ResponseBody
    public Object list(@RequestParam(required = false) String menuName, @RequestParam(required = false) String level) {
        List<Map<String, Object>> menus = this.menuService.selectMenus(menuName, level);
        return new MenuWarpper(menus).wrap();
    }

    /**
     * 新增菜单
     */
    @RequestMapping(value = "/add")
    @ResponseBody
    public ResponseResult add(@Valid Menu menu, BindingResult result) {
//        if (result.hasErrors()) {
//            throw new ServiceException(BizExceptionEnum.REQUEST_NULL);
//        }

        //判断是否存在该编号
        String existedMenuName = ConstantFactory.me().getMenuNameByCode(menu.getCode());
        if (StringUtils.isNotEmpty(existedMenuName)) {
            throw new RuntimeException("菜单编号重复，不能添加");
        }

        //设置父级菜单编号
        menuSetPcode(menu);

        menu.setStatus(MenuStatus.ENABLE.getCode());
        this.menuService.insert(menu);
        return SUCCESS_TIP;
    }

    /**
     * 删除菜单
     */
    @RequestMapping(value = "/remove")
    @ResponseBody
    public ResponseResult remove(@RequestParam Long menuId) {
//        if (ToolUtil.isEmpty(menuId)) {
//            throw new ServiceException(BizExceptionEnum.REQUEST_NULL);
//        }

        //缓存菜单的名称
//        LogObjectHolder.me().set(ConstantFactory.me().getMenuName(menuId));

        this.menuService.delMenuContainSubMenus(menuId);
        return SUCCESS_TIP;
    }

    /**
     * 查看菜单
     */
    @RequestMapping(value = "/view/{menuId}")
    @ResponseBody
    public ResponseResult view(@PathVariable Long menuId) {
//        if (ToolUtil.isEmpty(menuId)) {
//            throw new ServiceException(BizExceptionEnum.REQUEST_NULL);
//        }
        this.menuService.findById(menuId);
        return SUCCESS_TIP;
    }

    /**
     * 获取菜单列表(首页用)
     */
    @RequestMapping(value = "/menuTreeList")
    @ResponseBody
    public List<ZTreeNode> menuTreeList() {
        return this.menuService.menuTreeList();
    }

    /**
     * 获取菜单列表(选择父级菜单用)
     */
    @RequestMapping(value = "/selectMenuTreeList")
    @ResponseBody
    public List<ZTreeNode> selectMenuTreeList() {
        List<ZTreeNode> roleTreeList = this.menuService.menuTreeList();
        roleTreeList.add(ZTreeNode.createParent());
        return roleTreeList;
    }

    /**
     * 获取角色列表
     */
    @RequestMapping(value = "/menuTreeListByRoleId/{roleId}")
    @ResponseBody
    public List<ZTreeNode> menuTreeListByRoleId(@PathVariable Long roleId) {
        List<Long> menuIds = this.menuService.getMenuIdsByRoleId(roleId);
        if (null == menuIds || menuIds.size() == 0) {
            return this.menuService.menuTreeList();
        } else {
            return this.menuService.menuTreeListByMenuIds(menuIds);
        }
    }

    /**
     * 根据请求的父级菜单编号设置pcode和层级
     */
    private void menuSetPcode(@Valid Menu menu) {
        if (StringUtils.isEmpty(menu.getPcode()) || menu.getPcode().equals("0")) {
            menu.setPcode("0");
            menu.setPcodes("[0],");
            menu.setLevels(1);
        } else {
            long code = Long.parseLong(menu.getPcode());
            Menu pMenu = menuService.findById(code);
            Integer pLevels = pMenu.getLevels();
            menu.setPcode(pMenu.getCode());

            //如果编号和父编号一致会导致无限递归
            if (menu.getCode().equals(menu.getPcode())) {
                throw new RuntimeException("菜单编号和副编号不能一致");
            }

            menu.setLevels(pLevels + 1);
            menu.setPcodes(pMenu.getPcodes() + "[" + pMenu.getCode() + "],");
        }
    }

}
