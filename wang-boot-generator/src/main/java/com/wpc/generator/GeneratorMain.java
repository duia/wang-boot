package com.wpc.generator;

/**
 * 功能描述: Main
 * @Author: 王鹏程
 * @E-mail: wpcfree@qq.com @QQ: 376205421
 * @Blog: http://www.wpcfree.com
 * @Date: 2017-07-29 15:32:59
 */
public class GeneratorMain {
	/**
	 * 请直接修改以下代码调用不同的方法以执行相关生成任务.
	 */
	public static void main(String[] args) throws Exception {
		GeneratorFacade g = new GeneratorFacade();
		String templatePath = GeneratorMain.class.getClassLoader().getResource("").getPath() + "template";
//		g.printAllTableNames();				//打印数据库中的表名称
		
//		g.deleteOutRootDir();							//删除生成器的输出目录
//		g.generateByTable("sys_log","template");	//通过数据库表生成文件,template为模板的根目录
		g.generateByAllTable(templatePath);	//自动搜索数据库中的所有表并生成文件,template为模板的根目录
//		g.generateByClass(Blog.class,"template_clazz");

//		g.deleteByTable("table_name", "template"); //删除生成的文件
		//打开文件夹
//		Runtime.getRuntime().exec("cmd.exe /c start "+ GeneratorProperties.getRequiredProperty("outRoot"));
	}
}
