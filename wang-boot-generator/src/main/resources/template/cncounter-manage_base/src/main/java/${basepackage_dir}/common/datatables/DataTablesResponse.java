package ${basepackage}.common.datatables;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * 功能描述: 搭配jquery.datatable.js使用的返回请求数据对象的封装类
 * @Author: 王鹏程
 * @E-mail: wpcfree@qq.com @QQ: 376205421
 * @Blog: http://www.wpcfree.com
 */
public class DataTablesResponse<T extends Serializable> {

	/**
	 * 必要。出于安全的考虑，强烈要求把这个转换为整形
	 */
	private Integer draw;
	/**
	 * 必要。即没有过滤的记录数（数据库里总共记录数）
	 */
	private Integer recordsTotal;
	/**
	 * 必要。过滤后的记录数
	 */
	private Integer recordsFiltered;
	private String error;
	private List<T> data = new ArrayList<T>();
	public Integer getDraw() {
		return draw;
	}
	public void setDraw(Integer draw) {
		this.draw = draw;
	}
	public Integer getRecordsTotal() {
		return recordsTotal;
	}
	public void setRecordsTotal(Integer recordsTotal) {
		this.recordsTotal = recordsTotal;
	}
	public Integer getRecordsFiltered() {
		return recordsFiltered;
	}
	public void setRecordsFiltered(Integer recordsFiltered) {
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
