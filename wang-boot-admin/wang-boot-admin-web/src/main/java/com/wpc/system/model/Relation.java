package com.wpc.system.model;

import com.wpc.base.entity.BaseEntity;
import com.wpc.base.entity.DataEntity;
import org.apache.ibatis.type.Alias;

import javax.persistence.Table;

/**
 * <p>
 * 角色和菜单关联表
 * </p>
 *
 * @author 王鹏程
 * @since 2017-07-11
 */
@Alias("Relation")
@Table(name = "sys_relation")
public class Relation extends BaseEntity<Relation> {

    /**
     * 菜单id
     */
    private Long menuid;
    /**
     * 角色id
     */
    private Integer roleid;

    public Long getMenuid() {
        return menuid;
    }

    public void setMenuid(Long menuid) {
        this.menuid = menuid;
    }

    public Integer getRoleid() {
        return roleid;
    }

    public void setRoleid(Integer roleid) {
        this.roleid = roleid;
    }

    @Override
    public void preInsert() {

    }

    @Override
    public void preUpdate() {

    }

    @Override
    public String toString() {
        return "Relation{" +
                "id=" + id +
                ", menuid=" + menuid +
                ", roleid=" + roleid +
                "}";
    }
}
