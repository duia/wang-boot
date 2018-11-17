package com.wpc.system.model;

import com.wpc.base.entity.DataEntity;
import org.apache.ibatis.type.Alias;

import javax.persistence.Table;
import java.io.Serializable;

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
public class Role extends DataEntity<Role> {

    /**
     * 序号
     */
    private Integer num;
    /**
     * 父角色id
     */
    private Long pid;
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
    private String tips;
    /**
     * 保留字段(暂时没用）
     */
    private Integer version;

    public Integer getNum() {
        return num;
    }

    public void setNum(Integer num) {
        this.num = num;
    }

    public Long getPid() {
        return pid;
    }

    public void setPid(Long pid) {
        this.pid = pid;
    }

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

    public String getTips() {
        return tips;
    }

    public void setTips(String tips) {
        this.tips = tips;
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
                ", num=" + num +
                ", pid=" + pid +
                ", name=" + name +
                ", deptid=" + deptid +
                ", tips=" + tips +
                ", version=" + version +
                "}";
    }
}
