<#include "/macro.include"/>
<#include "/java_copyright.include">
<#assign className = table.className>   
<#assign classNameLower = className?uncap_first>
<#assign shortName = table.shortName>
package ${basepackage}.${subpackage}.dao;

import ${basepackage}.${subpackage}.model.${className};
import ${basepackage}.common.base.dao.<#if table.tree=='true'>Tree</#if>BaseDao;

public interface ${className}Dao extends <#if table.tree=='true'>Tree</#if>BaseDao<${className}> {
    
}