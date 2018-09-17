package com.wpc.common.utils.excel.excel;

import java.util.List;
import java.util.Map;

public class SheetBean {

	private String sheetName; // 工作簿名称
	private String title; // 标题
	private int rownum; // 起始行号
	private int mergeColCount; // 合并的列数
	private Map<Integer, String> headNames; // 表头名称
	private List<Map<String, Object>> tableContents; // 表格内容

	public String getSheetName() {
		return sheetName;
	}

	public void setSheetName(String sheetName) {
		this.sheetName = sheetName;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public int getRownum() {
		return rownum;
	}

	public void setRownum(int rownum) {
		this.rownum = rownum;
	}

	public int getMergeColCount() {
		return mergeColCount;
	}

	public void setMergeColCount(int mergeColCount) {
		this.mergeColCount = mergeColCount;
	}

	public Map<Integer, String> getHeadNames() {
		return headNames;
	}

	public void setHeadNames(Map<Integer, String> headNames) {
		this.headNames = headNames;
	}

	public List<Map<String, Object>> getTableContents() {
		return tableContents;
	}

	public void setTableContents(List<Map<String, Object>> tableContents) {
		this.tableContents = tableContents;
	}

}
