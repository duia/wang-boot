package com.wpc.system.service.impl;

import com.wpc.base.service.impl.BaseServiceImpl;
import com.wpc.system.model.node.ZTreeNode;
import com.wpc.system.dao.DeptMapper;
import com.wpc.system.model.Dept;
import com.wpc.system.service.IDeptService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tk.mybatis.mapper.entity.Example;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * 部门服务
 *
 * @author 王鹏程
 * @Date 2018/10/15 下午11:39
 */
@Service
public class DeptServiceImpl extends BaseServiceImpl<Dept> implements IDeptService {

    @Resource
    private DeptMapper deptMapper;

    @Override
    @Transactional
    public void deleteDept(Integer deptId) {
        Dept dept = deptMapper.selectByPrimaryKey(deptId);

        Example example = new Example(Dept.class);
        Example.Criteria criteria = example.createCriteria();
        criteria.andLike("parentIds", "%[" + dept.getId() + "]%");
        List<Dept> subDepts = deptMapper.selectByExample(example);
        for (Dept temp : subDepts) {
            deptMapper.delete(temp);
        }

        deptMapper.delete(dept);
    }

    @Override
    public List<ZTreeNode> tree() {
        return this.deptMapper.tree();
    }

    @Override
    public List<Map<String, Object>> list(String condition) {
        return this.deptMapper.list(condition);
    }
}
