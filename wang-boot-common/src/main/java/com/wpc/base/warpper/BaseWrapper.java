package com.wpc.base.warpper;

import com.github.pagehelper.PageInfo;
import com.wpc.base.entity.PageInfoBT;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public abstract class BaseWrapper {

    private Map<String, Object> single = null;
    private List<Map<String, Object>> multi = null;
    private PageInfo<Map<String, Object>> page = null;
    private PageInfoBT<PageInfo<Map<String, Object>>> pageBT = null;

    public BaseWrapper(Map<String, Object> single) {
        this.single = single;
    }

    public BaseWrapper(List<Map<String, Object>> multi) {
        this.multi = multi;
    }

    public BaseWrapper(PageInfo<Map<String, Object>> page) {
        if (page != null && page.getList() != null) {
            this.page = page;
            this.multi = page.getList();
        }

    }

    public BaseWrapper(PageInfoBT<PageInfo<Map<String, Object>>> pageBT) {
        if (pageBT != null && pageBT.getRows() != null) {
            this.pageBT = pageBT;
            this.multi = new ArrayList<>();
            for (PageInfo<Map<String, Object>> pages : pageBT.getRows()) {
                multi.addAll(pages.getList());
            }
        }
    }

    public Object wrap() {
        if (this.single != null) {
            this.wrapTheMap(this.single);
        }

        if (this.multi != null) {
            for (Map<String, Object> map : this.multi) {
                this.wrapTheMap(map);
            }
        }

        if (this.page != null) {
            return this.page;
        } else if (this.single != null) {
            return this.single;
        } else {
            return this.multi;
        }
    }

    protected abstract void wrapTheMap(Map<String, Object> map);

}
