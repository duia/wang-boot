package com.wpc.base.entity.datatables;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class DataTablesRequest {

	private Integer draw;
	private Integer start;
	private Integer length;
	private Search search;
	@JsonProperty("order")
	private List<Order> orders;
	private List<Column> columns;
	
	private Map<String, Object> condition = new HashMap<String, Object>(); // 查询条件
	
	public DataTablesRequest() {
		super();
	}
	
	public void setOrder(){
		condition.put("orderColumn", this.columns.get(this.orders.get(0).getColumn()).getData());
		condition.put("orderDir", this.orders.get(0).getDir());
	}
	
	public Integer getDraw() {
		return draw;
	}
	public void setDraw(Integer draw) {
		this.draw = draw;
	}
	public Integer getStart() {
		return start;
	}
	public void setStart(Integer start) {
		this.start = start;
	}
	public Integer getLength() {
		return length;
	}
	public void setLength(Integer length) {
		this.length = length;
	}
	public Search getSearch() {
		return search;
	}
	public void setSearch(Search search) {
		this.search = search;
	}
	public List<Order> getOrders() {
		return orders;
	}
	public void setOrders(List<Order> orders) {
		this.orders = orders;
	}
	public List<Column> getColumns() {
		return columns;
	}
	public void setColumns(List<Column> columns) {
		this.columns = columns;
	}
	
	public Map<String, Object> getCondition() {
		return condition;
	}
	public void setCondition(Map<String, Object> condition) {
		this.condition = condition;
	}
	@Override
	public String toString() {
		return "DataTablesRequest [draw=" + draw + ", start=" + start + ", length=" + length + ", search=" + search
						+ ", orders=" + orders + ", columns=" + columns + ", condition=" + condition + "]";
	}
	
}


