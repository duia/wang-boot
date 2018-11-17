package com.wpc.system.model;

import com.wpc.base.entity.DataEntity;
import org.apache.ibatis.type.Alias;

import javax.persistence.Table;
import java.math.BigDecimal;

/**
 * <p>
 * 报销表
 * </p>
 *
 * @author 王鹏程
 * @since 2017-12-05
 */
@Alias("Expense")
@Table(name = "sys_expense")
public class Expense extends DataEntity<Expense> {

    /**
     * 报销金额
     */
    private BigDecimal money;
    /**
     * 描述
     */
    private String desc;
    /**
     * 状态: 1.待提交  2:待审核   3.审核通过
     */
    private Integer state;
    /**
     * 用户id
     */
    private Integer userid;
    /**
     * 流程定义id
     */
    private String processId;

    public BigDecimal getMoney() {
        return money;
    }

    public void setMoney(BigDecimal money) {
        this.money = money;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public Integer getState() {
        return state;
    }

    public void setState(Integer state) {
        this.state = state;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public String getProcessId() {
        return processId;
    }

    public void setProcessId(String processId) {
        this.processId = processId;
    }

    @Override
    public String toString() {
        return "Expense{" +
                "id=" + id +
                ", money=" + money +
                ", desc=" + desc +
                ", state=" + state +
                ", userid=" + userid +
                ", processId=" + processId +
                "}";
    }
}
