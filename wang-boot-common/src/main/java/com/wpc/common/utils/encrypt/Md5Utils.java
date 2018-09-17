package com.wpc.common.utils.encrypt;

import org.springframework.util.StringUtils;
import sun.nio.ch.FileChannelImpl;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.nio.MappedByteBuffer;
import java.nio.channels.FileChannel;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class Md5Utils {

	/**
	 * 默认的密码字符串组合，apache校验下载的文件的正确性用的就是默认的这个组合
	 */
	private static final char[] HEX_DIGITS = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f' };

	private Md5Utils() {
	}

	/**
	 * @功能: 向getMD5方法传入一个你需要转换的原始字符串,将返回字符串的MD5码
	 * @作者: wangpengcheng
	 * @创建日期: 2013-11-19 下午03:25:30
	 * @param str 原始字符串
	 * @return 返回字符串的MD5码
	 */
	public static String getMD5(String str) {
		if (StringUtils.hasText(str)) {
			MessageDigest digest = null;
			try {
				digest = MessageDigest.getInstance("MD5");
			} catch (NoSuchAlgorithmException e) {
				System.err.println(Md5Utils.class.getName() + "初始化失败, MessageDigest不支持Md5Utils");
				e.printStackTrace();
			}
			if (digest != null) {
				byte[] bytes = str.getBytes();
				byte[] results = digest.digest(bytes);
				StringBuilder sb = new StringBuilder();
				for (byte result : results) {
					// 将byte数组转化为16进制字符存入StringBuilder中
					sb.append(String.format("%02x", result));
				}
				return sb.toString();
			}
		}
		return null;
	}

	/**
	 * @功能: 适用于上G大的文件
	 * @作者: wangpengcheng
	 * @创建日期: 2013-11-19 下午03:25:30
	 * @param file
	 * @return 返回文件的MD5码
	 */
	public static String getMD5String(File file) {
		if (file != null) {
			MessageDigest digest = null;
			try {
				digest = MessageDigest.getInstance("MD5");
			} catch (NoSuchAlgorithmException e) {
				System.err.println(Md5Utils.class.getName() + "初始化失败, MessageDigest不支持Md5Utils");
				e.printStackTrace();
			}
			if (digest != null) {
				FileInputStream in = null;
				FileChannel ch = null;
				try {
					in = new FileInputStream(file);
					ch = in.getChannel();
					MappedByteBuffer byteBuffer = ch.map(FileChannel.MapMode.READ_ONLY, 0, file.length());
					digest.update(byteBuffer);
					// map之后不能删掉文件(sun bug), 手动unmap可以避开bug
					Method method = FileChannelImpl.class.getDeclaredMethod("unmap", MappedByteBuffer.class);
					method.setAccessible(true);
					method.invoke(FileChannelImpl.class, byteBuffer);
				} catch (FileNotFoundException e) {
					e.printStackTrace();
				} catch (IOException e) {
					e.printStackTrace();
				} catch (SecurityException e) {
					e.printStackTrace();
				} catch (NoSuchMethodException e) {
					e.printStackTrace();
				} catch (IllegalArgumentException e) {
					e.printStackTrace();
				} catch (IllegalAccessException e) {
					e.printStackTrace();
				} catch (InvocationTargetException e) {
					e.printStackTrace();
				} finally {
					try {
						if (ch != null) ch.close();
						if (in != null) in.close();
					} catch (IOException e) {
						e.printStackTrace();
					}
				}
				return bufferToHex(digest.digest());
			}
		}
		return null;
	}

	private static String bufferToHex(byte[] bytes) {
		StringBuilder sb = new StringBuilder(2 * bytes.length);
		for (int i = 0; i < bytes.length; i++) {
			appendHexPair(bytes[i], sb);
		}
		return sb.toString();
	}

	private static void appendHexPair(byte b, StringBuilder sb) {
		char c0 = HEX_DIGITS[(b & 0xf0) >> 4];
		char c1 = HEX_DIGITS[b & 0xf];
		sb.append(c0).append(c1);
	}

	public static String getMD5String(String str) {
		if (StringUtils.hasText(str)) {
			return getMD5String(str.getBytes());
		}
		return null;
	}

	public static String getMD5String(byte[] bytes) {
		if (bytes.length > 0) {
			MessageDigest digest = null;
			try {
				digest = MessageDigest.getInstance("MD5");
			} catch (NoSuchAlgorithmException e) {
				System.err.println(Md5Utils.class.getName() + "初始化失败, MessageDigest不支持Md5Utils");
				e.printStackTrace();
			}
			if (digest != null) {
				digest.update(bytes);
				return bufferToHex(digest.digest());
			}
		}
		return null;
	}

	public static void main(String[] args) {
		// 字符'a'的MD5码是0cc175b9c0f1b6a831c399e269772661
		System.out.println(Md5Utils.getMD5("a"));
		System.out.println(Md5Utils.getMD5String("a"));
		System.out.println(Md5Utils.getMD5(Md5Utils.getMD5("123456")));
		// 字符'123456'的MD5码是e10adc3949ba59abbe56e057f20f883e
		System.out.println(Md5Utils.getMD5String("123456").equals("e10adc3949ba59abbe56e057f20f883e"));
		System.out.println(Md5Utils.getMD5String(new File("E:/wpc.ppk")).getBytes().length);
	}

}
