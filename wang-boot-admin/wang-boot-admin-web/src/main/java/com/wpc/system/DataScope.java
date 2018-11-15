package com.wpc.system;

import java.util.List;

public class DataScope {
    private String scopeName = "deptid";
    private List<Long> deptIds;

    public DataScope() {
    }

    public DataScope(List<Long> deptIds) {
        this.deptIds = deptIds;
    }

    public DataScope(String scopeName, List<Long> deptIds) {
        this.scopeName = scopeName;
        this.deptIds = deptIds;
    }

    public List<Long> getDeptIds() {
        return this.deptIds;
    }

    public void setDeptIds(List<Long> deptIds) {
        this.deptIds = deptIds;
    }

    public String getScopeName() {
        return this.scopeName;
    }

    public void setScopeName(String scopeName) {
        this.scopeName = scopeName;
    }
}
