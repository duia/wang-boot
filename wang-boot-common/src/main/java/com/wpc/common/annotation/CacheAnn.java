/**
 * 文件名：CacheAnn.java <br>
 * 版本信息：TODO <br>
 * 作者：王鹏程 E-mail：wpcfree@qq.com QQ:376205421
 * 日期：2017年3月15日-下午2:03:03<br>
 * Copyright (c) 2017 王鹏程-版权所有<br>
 *
 */
package com.wpc.common.annotation;

import com.wpc.common.enums.ECacheDataSource;

import java.lang.annotation.*;

/**
 *
 * 类名称：CacheAnn <br>
 * 类描述：缓存公用注解 <br>
 * 创建人：王鹏程 <br>
 * 修改人：王鹏程 <br>
 * 修改时间：2017年3月15日 下午2:03:03 <br>
 * 修改备注：TODO <br>
 *
 */
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface CacheAnn {

	/**
	 * 缓存的过期时间，单位：秒，如果为0则表示永久缓存
	 * @return 时间
	 */
	int expire() default 300;

	/**
	 * 方法：customKey <br>
	 * 描述：自定义缓存Key，支持表达式，可为空，如果为空则默认按照入口参数名及值来生成key <br>
	 * 作者：王鹏程 E-mail:wpcfree@qq.com QQ:376205421
	 * 日期： 2017年3月23日 下午1:54:02 <br>
	 *
	 * @return
	 */
	String key() default "";

	/**
	 * 方法：groupKey <br>
	 * 描述：分组key,必选,用来指定此缓存针对的模块,在isClean参数为true时则直接清空groupKey为组的所有缓存
	 * 只有clean为true为数组,为false时为字符
	 * 可支持多个,只要符合其中一个就进行删除,如果groupKey被{}修饰且为入口参数名,则用相应的入口参数值来代替作为组key,删除时同理,如{groupKey}<br>
	 * 作者：王鹏程 E-mail:wpcfree@qq.com QQ:376205421
	 * 日期： 2017年3月23日 下午2:04:24 <br>
	 *
	 * @return
	 */
	String[] groupKey();

	/**
	 * 方法：isClean <br>
	 * 描述：是否为清除操作,如果此值为true 则直接按照groupKey进行清除,并不执行缓存操作,用于数据变动后清空相关缓存的 <br>
	 * 作者：王鹏程 E-mail:wpcfree@qq.com QQ:376205421
	 * 日期： 2017年3月23日 下午2:06:09 <br>
	 *
	 * @return
	 */
	boolean isClean() default false;

	/**
	 * 方法：eCacheDataSource <br>
	 * 描述：缓存数据源 目前只支持区分题库 <br>
	 * 作者：王鹏程 E-mail:wpcfree@qq.com QQ:376205421
	 * 日期： 2017年3月23日 下午2:19:54 <br>
	 *
	 * @return
	 */
	ECacheDataSource eCacheDataSource();

}
