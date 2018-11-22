package com.wpc.system.dao;

import com.wpc.system.model.Relation;
import org.apache.ibatis.annotations.Mapper;
import tk.mybatis.mapper.common.MySqlMapper;

/**
 * <p>
 * 角色和菜单关联表 Mapper 接口
 * </p>
 *
 * @author 王鹏程
 * @since 2017-07-11
 */
@Mapper
public interface RelationMapper extends tk.mybatis.mapper.common.Mapper<Relation>, MySqlMapper<Relation> {

}