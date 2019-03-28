/**
 * 文件名：CacheAnnotationAspectj.java <br>
 * 版本信息：TODO <br>
 * 作者：王鹏程 E-mail：wpcfree@qq.com QQ:376205421
 * 日期：2017年5月8日-下午5:32:56<br>
 * Copyright (c) 2017 王鹏程-版权所有<br>
 *
 */
package com.wpc.common.aop;

import com.wpc.common.annotation.CacheAnn;
import com.wpc.common.enums.ECacheDataSource;
import com.wpc.common.script.AbstractScriptParser;
import com.wpc.common.script.SpringELParser;
import com.wpc.common.utils.base.BeanUtils;
import com.wpc.common.redis.cache.AbstractCache;
import com.wpc.common.redis.cache.WpcCache;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 *
 * 类名称：CacheAnnotationAspectj <br>
 * 类描述：TODO <br>
 * 创建人：王鹏程 <br>
 * 修改人：王鹏程 <br>
 * 修改时间：2017年5月8日 下午5:32:56 <br>
 * 修改备注：TODO <br>
 *
 */
@Aspect
@Component
public class CacheAnnotationAspectj extends BaseAnnotationAspectj {

    private AbstractScriptParser scriptParser = new SpringELParser();

	@Autowired
	private WpcCache wpcCache;

	private AbstractCache cache;

	/** 存放数据的Field */
	private static final String FIELD_DATA = "data";

	/** 存放编码前的的Field内容 */
	private static final String FIELD_DECODE_FIELD = "field";

	/**
	 * 标题：构造器 <br>
	 * 描述：TODO <br>
	 * 作者：王鹏程 E-mail：wpcfree@qq.com QQ:376205421
	 * 日期： 2017年6月1日 上午10:19:57 <br>
	 *
	 * @param eCacheDataSource
	 *            缓存源
	 */
	private void setCacheDataSource(ECacheDataSource eCacheDataSource) {
		switch (eCacheDataSource) {
			case WPC:
				cache = wpcCache;
				break;
			default:
				break;
		}
	}

	/**
	 * 方法：around <br>
	 * 描述： 配置环绕通知,使用在方法aspect()上注册的切入点 缓存公用拦截器 <br>
	 * 作者：王鹏程 E-mail:wpcfree@qq.com QQ:376205421
	 * 日期： 2017年3月20日 上午11:52:33 <br>
	 *
	 * @param joinPoint
	 * @param cacheAnnotation
	 * @return
	 */
	@Around("execution(* com.wpc..*.*(..)) && @annotation(cacheAnnotation)")
	public Object around(ProceedingJoinPoint joinPoint, CacheAnn cacheAnnotation) throws Throwable {

		try {
			//设置缓存源
			setCacheDataSource(cacheAnnotation.eCacheDataSource());

			// 判断是否链接缓存
			if (cache.ping()) {

				String cacheKey = getCacheKey(joinPoint, cacheAnnotation);

				if(null == cacheKey) {
					return getData(joinPoint);
				}

				Object cacheObject = null;
				// 如果是清除操作,则直接根据分组KEY进行删除
				if (cacheAnnotation.isClean()) {
					cache.delete(cacheKey);
					return getData(joinPoint);
				}
				if (cache.hasKey(cacheKey)) {
					cacheObject = cache.get(cacheKey);// 从缓存中获取数据
				} else {
					cacheObject = getData(joinPoint);
					cache.set(cacheKey, cacheObject);
				}
				if (null != cacheObject && cacheAnnotation.expire() > 0) {
					cache.expire(cacheKey, cacheAnnotation.expire());
				}
				return cacheObject;
			} else {
				return getData(joinPoint);
			}
		} catch (Throwable throwable) {
			logger.error(throwable.getMessage());
			try {
				return getData(joinPoint);
			} catch (Throwable throwable1) {
				throw throwable1;
			}
		}
	}

	/**
	 * 生成缓存 Key
	 * @param joinPoint
	 * @param cacheAnnotation
	 * @return String 缓存Key
	 */
	private String getCacheKey(ProceedingJoinPoint joinPoint, CacheAnn cacheAnnotation) {
		String className = getTargetClass(joinPoint).getName();
		String methodName = getMethod(joinPoint).getName();
		Object[] arguments = getArgs(joinPoint);
		String keyExpression = cacheAnnotation.key();
		return getCacheKey(className, methodName, arguments, keyExpression);
	}

    /**
     * 生成缓存KeyTO
     * @param className 类名
     * @param methodName 方法名
     * @param arguments 参数
     * @param keyExpression key表达式
     * @return CacheKeyTO
     */
    private String getCacheKey(String className, String methodName, Object[] arguments, String keyExpression) {
        String key=null;
        if(null != keyExpression && keyExpression.trim().length() > 0) {
            try {
                key = scriptParser.getDefinedCacheKey(keyExpression, arguments);
            } catch(Exception ex) {
                logger.error(ex.getMessage(), ex);
            }
        } else {
            key = getDefaultCacheKey(className, methodName, arguments);
        }
        if(null == key || key.trim().length() == 0) {
            logger.error("{}.{}; cache key is empty", className, methodName);
            return null;
        }
        return key;
    }

    /**
     * 生成缓存Key
     * @param className 类名称
     * @param method 方法名称
     * @param arguments 参数
     * @return CacheKey 缓存Key
     */
    public static String getDefaultCacheKey(String className, String method, Object[] arguments) {
        StringBuilder sb=new StringBuilder();
        sb.append(getDefaultCacheKeyPrefix(className, method));
        if(null != arguments && arguments.length > 0) {
            sb.append(BeanUtils.getUniqueHashStr(arguments));
        }
        return sb.toString();
    }

    /**
     * 生成缓存Key的前缀
     * @param className 类名称
     * @param method 方法名称
     * @return CacheKey 缓存Key
     */
    public static String getDefaultCacheKeyPrefix(String className, String method) {
        StringBuilder sb=new StringBuilder();
        sb.append(className);
        if(null != method && method.length() > 0) {
            sb.append(".").append(method);
        }
        return sb.toString();
    }

}
