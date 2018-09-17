package com.wpc.base.entity.datatables;

public class Search {
	private String value;
	private Boolean regex;
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
	public Boolean getRegex() {
		return regex;
	}
	public void setRegex(Boolean regex) {
		this.regex = regex;
	}
	@Override
	public String toString() {
		return "Search [value=" + value + ", regex=" + regex + "]";
	}
}
