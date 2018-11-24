<#include "/macro.include"/>
<#include "/java_copyright.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first>
<#assign ignoreTreeCols = ['parent_id','parent_ids']>
<#assign ignoreCols = ['id','sort','create_by','create_date','update_by','update_date','del_flag','remarks'] + ignoreTreeCols>
package ${basepackage}.${subpackage}.model;

import ${basepackage}.common.base.entity.<#if table.tree=='true'>TreeEntity<#else>DataEntity</#if>;

/**
 * 功能描述: ${table.tableAlias}
 * @Author: 王鹏程
 * @E-mail: wpcfree@qq.com @QQ: 376205421
 * @Blog: http://www.wpcfree.com
 * @Date:
 */
public class ${className} extends <#if table.tree=='true'>TreeEntity<#else>DataEntity</#if><${className}> {

	<#list table.columns as column>
	<#if !ignoreCols?seq_contains(column)>
	// ${column.columnAlias}
	private ${column.simpleJavaType} ${column.columnNameLower};
	</#if>
	</#list>
		
	<#list table.columns as column>
	<#if !ignoreCols?seq_contains(column)>
	public void set${column.columnName}(${column.simpleJavaType} ${column.columnNameLower}) {
		this.${column.columnNameLower} = ${column.columnNameLower};
	}
	
	public ${column.simpleJavaType} get${column.columnName}() {
		return this.${column.columnNameLower};
	}

	</#if>
	</#list>
	<#--@Override
	public String toString(){
		StringBuilder sb = new StringBuilder();
		sb.append("${className}[");
		<#list table.columns as column>
		sb.append("<#if column_index gt 0>, </#if>${column.columnNameLower}=");
		sb.append(${column.columnNameLower});
		</#list>
		sb.append("]");
		return sb.toString();
	}-->
}
<#macro generateJavaColumns>
	<#list table.columns as column>
    <@generateBycondition column.sqlName>
	public void set${column.columnName}(${column.simpleJavaType} ${column.columnNameLower}) {
		this.${column.columnNameLower} = ${column.columnNameLower};
	}
	
	public ${column.simpleJavaType} get${column.columnName}() {
		return this.${column.columnNameLower};
	}
	
	</@generateBycondition>
	</#list>
</#macro>