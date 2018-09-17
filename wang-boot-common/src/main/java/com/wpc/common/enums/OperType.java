package com.wpc.common.enums;

/**
 * ${DESCRIPTION}
 *
 * @author wangpengcheng
 * @create 2017-05-18 11:46
 **/
public enum OperType {

    EXCEPTION("异常", "exception"),
    SYSTEM("系统操作", "system");

    OperType(String name, String value) {
        this.name = name;
        this.value =value;
    }

    private String name;
    private String value;

    public String getName() {
        return name;
    }

    public String getValue() {
        return value;
    }

}
