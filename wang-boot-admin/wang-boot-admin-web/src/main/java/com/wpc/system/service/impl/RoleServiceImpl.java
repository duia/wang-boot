package com.wpc.system.service.impl;

import com.wpc.base.service.impl.BaseServiceImpl;
import com.wpc.system.node.ZTreeNode;
import com.wpc.system.dao.RelationMapper;
import com.wpc.system.dao.RoleMapper;
import com.wpc.system.model.Role;
import com.wpc.system.service.IRoleService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * 角色服务
 *
 * @author 王鹏程
 * @Date 2018/10/15 下午11:40
 */
@Service
public class RoleServiceImpl extends BaseServiceImpl<Role> implements IRoleService {

    @Resource
    private RoleMapper roleMapper;

    @Resource
    private RelationMapper relationMapper;

    @Override
    @Transactional
    public void setAuthority(Integer roleId, String ids) {

        // 删除该角色所有的权限
//        this.roleMapper.deleteRolesById(roleId);

        // 添加新的权限
//        for (Long id : Convert.toLongArray(ids.split(","))) {
//            Relation relation = new Relation();
//            relation.setRoleid(roleId);
//            relation.setMenuid(id);
//            this.relationMapper.insert(relation);
//        }
    }

    @Override
    @Transactional
    public void delRoleById(Integer roleId) {
        //删除角色
//        this.roleMapper.deleteById(roleId);

        // 删除该角色所有的权限
//        this.roleMapper.deleteRolesById(roleId);
    }

    @Override
    public List<Map<String, Object>> selectRoles(String condition) {
        return this.roleMapper.selectRoles(condition);
    }

    @Override
    public int deleteRolesById(Integer roleId) {
        return this.roleMapper.deleteRolesById(roleId);
    }

    @Override
    public List<ZTreeNode> roleTreeList() {
        return this.roleMapper.roleTreeList();
    }

    @Override
    public List<ZTreeNode> roleTreeListByRoleId(String[] roleId) {
        return this.roleMapper.roleTreeListByRoleId(roleId);
    }

}
