package com.wpc.common.quartz.dao;

import com.wpc.common.quartz.model.ScheduleJob;
import org.apache.ibatis.annotations.Mapper;
import tk.mybatis.mapper.common.BaseMapper;

@Mapper
public interface ScheduleJobMapper extends BaseMapper<ScheduleJob> {
}
