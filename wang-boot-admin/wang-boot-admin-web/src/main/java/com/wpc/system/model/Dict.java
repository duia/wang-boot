package com.wpc.system.model;

import com.wpc.base.entity.DataEntity;
import com.wpc.base.entity.TreeEntity;
import org.apache.ibatis.type.Alias;

import javax.persistence.Table;

/**
 * <p>
 * 字典表
 * </p>
 *
 * @author 王鹏程
 * @since 2017-07-11
 */
@Alias("Dict")
@Table(name = "sys_dict")
public class Dict extends TreeEntity<Dict> {

    /**
     * 名称
     */
    private String name;

    /**
     * 编码
     */
    private String code;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    @Override
    public String toString() {
        return "Dict{" +
                "id=" + id +
                ", parentId=" + parentId +
                ", name='" + name + '\'' +
                ", code='" + code + '\'' +
                '}';
    }
}
