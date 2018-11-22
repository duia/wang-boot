package com.wpc.system.model;

import com.wpc.base.entity.TreeEntity;
import org.apache.ibatis.type.Alias;

import javax.persistence.Table;

/**
 * <p>
 * 角色表
 * </p>
 *
 * @author 王鹏程
 * @since 2017-07-11
 */
@Alias("Role")
@Table(name = "sys_role")
public class Role extends TreeEntity<Role> {

    /**
     * 角色名称
     */
    private String name;
    /**
     * 部门名称
     */
    private Long deptid;
    /**
     * 提示
     */
    private String code;
    /**
     * 保留字段(暂时没用）
     */
    private Integer version;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getDeptid() {
        return deptid;
    }

    public void setDeptid(Long deptid) {
        this.deptid = deptid;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Integer getVersion() {
        return version;
    }

    public void setVersion(Integer version) {
        this.version = version;
    }

    @Override
    public String toString() {
        return "Role{" +
                "id=" + id +
                ", name=" + name +
                ", deptid=" + deptid +
                ", code=" + code +
                ", version=" + version +
                "}";
    }
}
