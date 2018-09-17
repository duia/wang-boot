package com.wpc.base.entity.datatables;

public class Order {
	private Integer column;
	private String dir;
	public Integer getColumn() {
		return column;
	}
	public void setColumn(Integer column) {
		this.column = column;
	}
	public String getDir() {
		return dir;
	}
	public void setDir(String dir) {
		this.dir = dir;
	}
	@Override
	public String toString() {
		return "Order [column=" + column + ", dir=" + dir + "]";
	}
}
