package com.wpc.common.limit.lock;

/**
 * 功能描述: 分布式锁模板类
 * @Author: 王鹏程
 * @E-mail: wpcfree@qq.com @QQ: 376205421
 * @Blog: http://www.wpcfree.com
 * @Date: 2018-09-19 15:20:12
 */
public interface DistributedLockTemplate {

    /**
     * @param lockId 锁id(对应业务唯一ID)
     * @param timeout 单位毫秒
     * @param callback 回调函数
     * @return
     */
    public Object execute(String lockId, Integer timeout, Callback callback);
}
