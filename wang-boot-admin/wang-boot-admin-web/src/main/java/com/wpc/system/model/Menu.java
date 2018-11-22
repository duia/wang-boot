package com.wpc.system.model;

import com.wpc.base.entity.DataEntity;
import org.apache.ibatis.type.Alias;

import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;

/**
 * <p>
 * 菜单表
 * </p>
 *
 * @author 王鹏程
 * @since 2017-07-11
 */
@Alias("Menu")
@Table(name = "sys_menu")
public class Menu extends DataEntity<Menu> {

    /**
     * 菜单编号
     */
    private String code;
    /**
     * 菜单父编号
     */
    private String pcode;
    /**
     * 当前菜单的所有父菜单编号
     */
    private String pcodes;
    /**
     * 菜单名称
     */
    @NotBlank
    private String name;
    /**
     * 菜单图标
     */
    private String icon;
    /**
     * url地址
     */
    @NotBlank
    private String url;
    /**
     * 菜单层级
     */
    private Integer levels;
    /**
     * 是否是菜单（1：是  0：不是）
     */
    private Integer ismenu;
    /**
     * 菜单状态 :  1:启用   0:不启用
     */
    private Integer status;
    /**
     * 是否打开:    1:打开   0:不打开
     */
    private Integer isopen;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getPcode() {
        return pcode;
    }

    public void setPcode(String pcode) {
        this.pcode = pcode;
    }

    public String getPcodes() {
        return pcodes;
    }

    public void setPcodes(String pcodes) {
        this.pcodes = pcodes;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Integer getLevels() {
        return levels;
    }

    public void setLevels(Integer levels) {
        this.levels = levels;
    }

    public Integer getIsmenu() {
        return ismenu;
    }

    public void setIsmenu(Integer ismenu) {
        this.ismenu = ismenu;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Integer getIsopen() {
        return isopen;
    }

    public void setIsopen(Integer isopen) {
        this.isopen = isopen;
    }

    @Override
    public String toString() {
        return "Menu{" +
                "id=" + id +
                ", code=" + code +
                ", pcode=" + pcode +
                ", pcodes=" + pcodes +
                ", name=" + name +
                ", icon=" + icon +
                ", url=" + url +
                ", levels=" + levels +
                ", ismenu=" + ismenu +
                ", status=" + status +
                ", isopen=" + isopen +
                "}";
    }
}
