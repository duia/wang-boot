package com.wpc;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.wpc.*.dao")
public class WangBootAdminWebApplication {

	/**
	 * 如果main 方法所在的项目是maven顶级项目，则用main方法运行，可以访问jsp
	 * 如果main方法所在的项目是maven的子模块项目（如 Main-Parent项目中，包含maven-A子模块，正好main方法就在maven-A 模块中）则main方法运行，无法访问jsp
	 */
	public static void main(String[] args) {
		SpringApplication.run(WangBootAdminWebApplication.class, args);
	}
}
