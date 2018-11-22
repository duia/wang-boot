package com.wpc.system.model;

import com.wpc.base.entity.TreeEntity;
import org.apache.ibatis.type.Alias;

import javax.persistence.Table;

/**
 * <p>
 * 部门表
 * </p>
 *
 * @author 王鹏程
 * @since 2017-07-11
 */
@Alias("Dept")
@Table(name = "sys_dept")
public class Dept extends TreeEntity<Dept> {

    /**
     * 简称
     */
    private String simplename;
    /**
     * 全称
     */
    private String fullname;
    /**
     * 版本（乐观锁保留字段）
     */
    private Integer version;

    public String getSimplename() {
        return simplename;
    }

    public void setSimplename(String simplename) {
        this.simplename = simplename;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public Integer getVersion() {
        return version;
    }

    public void setVersion(Integer version) {
        this.version = version;
    }

}
