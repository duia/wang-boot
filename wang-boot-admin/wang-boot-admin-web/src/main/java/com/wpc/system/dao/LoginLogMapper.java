package com.wpc.system.dao;

import com.wpc.base.dao.BaseMapper;
import com.wpc.system.model.LoginLog;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import tk.mybatis.mapper.common.MySqlMapper;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 登录记录 Mapper 接口
 * </p>
 *
 * @author 王鹏程
 * @since 2017-07-11
 */
@Mapper
public interface LoginLogMapper extends tk.mybatis.mapper.common.Mapper<LoginLog>, MySqlMapper<LoginLog> {

    /**
     * 获取登录日志
     */
    List<Map<String, Object>> getLoginLogs(@Param("beginTime") String beginTime,
                                           @Param("endTime") String endTime, @Param("logName") String logName, @Param("orderByField") String orderByField, @Param("isAsc") boolean isAsc);

}