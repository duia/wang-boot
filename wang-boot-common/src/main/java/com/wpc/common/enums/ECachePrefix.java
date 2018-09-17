/**
 * 文件名：ECachePrefix.java <br>
 * 版本信息：TODO <br>
 * 作者：王鹏程 E-mail：wpcfree@qq.com QQ:376205421
 * 日期：2017年5月23日-下午3:21:42<br>
 * Copyright (c) 2017 王鹏程-版权所有<br>
 *
 */
package com.wpc.common.enums;

/**
 *
 * 类名称：ECachePrefix <br>
 * 类描述：缓存前缀 <br>
 * 创建人：王鹏程 <br>
 * 修改人：王鹏程 <br>
 * 修改时间：2017年5月23日 下午3:21:42 <br>
 * 修改备注：TODO <br>
 *
 */
public enum ECachePrefix {

	TI_KU("tiku"), TI_KU_PAPER("tiku.paper"), TI_KU_TITLE("tiku.title");

	private String des;

	/**
	 * 标题：构造器 <br>
	 * 描述：TODO <br>
	 * 作者：王鹏程 E-mail：wpcfree@qq.com QQ:376205421
	 * 日期： 2017年5月23日 下午3:22:47 <br>
	 *
	 * @param des
	 */
	private ECachePrefix(String des) {
		this.des = des;
	}

	/**
	 * @retrun the des <br>
	 *
	 *         时间: 2017年5月23日 下午3:23:43 <br>
	 */

	public String getDes() {
		return des;
	}

	/**
	 * @param des
	 *            the des to set <br>
	 *
	 *            时间: 2017年5月23日 下午3:23:43
	 */
	public void setDes(String des) {
		this.des = des;
	}

	/**
	 * 方法：getKey <br>
	 * 描述：获取真实key <br>
	 * 作者：王鹏程 E-mail:wpcfree@qq.com QQ:376205421
	 * 日期： 2017年6月1日 上午11:58:16 <br>
	 *
	 * @param keySuffix
	 * @return
	 */
	public String getKey(Object keySuffix) {
		return getDes() + "." + String.valueOf(keySuffix);
	}
}
