/*
 * Copyright(c) 2016 cncounter.com All rights reserved.
 * distributed with this file and available online at
 * http://www.cncounter.com/
 */
package com.wpc.sys.model;

import com.wpc.base.entity.DataEntity;

/**
 * 功能描述: File
 * @Author: 王鹏程
 * @E-mail: wpcfree@qq.com @QQ: 376205421
 * @Blog: http://www.wpcfree.com
 * @Date:
 */
public class File extends DataEntity<File> {

	// fileName
	private String fileName;
	// fileCode
	private String fileCode;
	// filePath
	private String filePath;
		
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
	
	public String getFileName() {
		return this.fileName;
	}

	public void setFileCode(String fileCode) {
		this.fileCode = fileCode;
	}
	
	public String getFileCode() {
		return this.fileCode;
	}

	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}
	
	public String getFilePath() {
		return this.filePath;
	}

}
