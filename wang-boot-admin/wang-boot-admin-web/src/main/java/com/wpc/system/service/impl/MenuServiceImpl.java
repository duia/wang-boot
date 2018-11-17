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
package com.wpc.system.service.impl;

import com.wpc.base.service.impl.BaseServiceImpl;
import com.wpc.system.node.MenuNode;
import com.wpc.system.node.ZTreeNode;
import com.wpc.system.dao.MenuMapper;
import com.wpc.system.model.Menu;
import com.wpc.system.service.IMenuService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tk.mybatis.mapper.entity.Example;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * 菜单服务
 *
 * @author fengshuonan
 * @date 2017-05-05 22:20
 */
@Service
public class MenuServiceImpl extends BaseServiceImpl<Menu> implements IMenuService {

    @Resource
    private MenuMapper menuMapper;

    @Override
    @Transactional
    public void delMenu(Long menuId) {

        //删除菜单
        this.menuMapper.deleteByPrimaryKey(menuId);

        //删除关联的relation
        this.menuMapper.deleteRelationByMenu(menuId);
    }

    @Override
    @Transactional
    public void delMenuContainSubMenus(Long menuId) {

        Menu menu = menuMapper.selectByPrimaryKey(menuId);

        //删除当前菜单
        delMenu(menuId);

        //删除所有子菜单
        Example example = new Example(Menu.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andLike("pcodes", "%[" + menu.getCode() + "]%");
        List<Menu> menus = menuMapper.selectByExample(example);
        for (Menu temp : menus) {
            delMenu(temp.getId());
        }
    }

    @Override
    public List<Map<String, Object>> selectMenus(String condition, String level) {
        return this.menuMapper.selectMenus(condition, level);
    }

    @Override
    public List<Long> getMenuIdsByRoleId(Long roleId) {
        return this.menuMapper.getMenuIdsByRoleId(roleId);
    }

    @Override
    public List<ZTreeNode> menuTreeList() {
        return this.menuMapper.menuTreeList();
    }

    @Override
    public List<ZTreeNode> menuTreeListByMenuIds(List<Long> menuIds) {
        return this.menuMapper.menuTreeListByMenuIds(menuIds);
    }

    @Override
    public int deleteRelationByMenu(Long menuId) {
        return this.menuMapper.deleteRelationByMenu(menuId);
    }

    @Override
    public List<String> getResUrlsByRoleId(Long roleId) {
        return this.menuMapper.getResUrlsByRoleId(roleId);
    }

    @Override
    public List<MenuNode> getMenusByRoleIds(List<Long> roleIds) {
        return this.menuMapper.getMenusByRoleIds(roleIds);
    }
}
