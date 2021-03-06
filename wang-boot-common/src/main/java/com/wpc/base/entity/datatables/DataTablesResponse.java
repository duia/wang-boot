package com.wpc.base.entity.datatables;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * 搭配jquery.datatable.js使用的返回前端的数据对象封装类
 * @author 鹏程
 *
 */
public class DataTablesResponse<T extends Serializable> {

	/**
	 * 必要。出于安全的考虑，强烈要求把这个转换为整形
	 */
	private Integer draw;
	/**
	 * 必要。即没有过滤的记录数（数据库里总共记录数）
	 */
	private Long recordsTotal;
	/**
	 * 必要。过滤后的记录数
	 */
	private Long recordsFiltered;
	private String error;
	private List<T> data = new ArrayList<T>();
	public Integer getDraw() {
		return draw;
	}
	public void setDraw(Integer draw) {
		this.draw = draw;
	}
	public Long getRecordsTotal() {
		return recordsTotal;
	}
	public void setRecordsTotal(Long recordsTotal) {
		this.recordsTotal = recordsTotal;
	}
	public Long getRecordsFiltered() {
		return recordsFiltered;
	}
	public void setRecordsFiltered(Long recordsFiltered) {
		this.recordsFiltered = recordsFiltered;
	}
	public String getError() {
		return error;
	}
	public void setError(String error) {
		this.error = error;
	}
	public List<T> getData() {
		return data;
	}
	public void setData(List<T> data) {
		this.data = data;
	}
	
}
