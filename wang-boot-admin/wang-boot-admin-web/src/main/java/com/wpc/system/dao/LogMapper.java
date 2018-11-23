package com.wpc.system.dao;

import com.wpc.base.dao.BaseMapper;
import com.wpc.system.model.Log;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * <p>
 * 操作日志 Mapper 接口
 * </p>
 *
 * @author 王鹏程
 * @since 2017-07-11
 */
@Mapper
public interface LogMapper extends BaseMapper<Log> {

    /**
     * 获取操作日志
     */
    List<Map<String, Object>> getOperationLogs(@Param("beginTime") String beginTime, @Param("endTime") String endTime,
                                               @Param("logName") String logName, @Param("logType") String logType, @Param("orderByField") String orderByField, @Param("isAsc") boolean isAsc);

}