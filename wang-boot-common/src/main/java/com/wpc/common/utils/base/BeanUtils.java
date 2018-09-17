package com.wpc.common.utils.base;

import java.beans.BeanInfo;
import java.beans.Introspector;
import java.beans.PropertyDescriptor;
import java.lang.reflect.*;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

public class BeanUtils {

	private static final String SPLIT_STR="_";

	@SuppressWarnings("rawtypes")
	private static final ConcurrentHashMap<Class, Field[]> FIELDS_CAHCE=new ConcurrentHashMap<Class, Field[]>();

	/**
	 * @功能: map转成object
	 * @作者: wangpengcheng
	 * @创建日期: 2016年4月26日 下午12:26:07
	 * @param map
	 * @param clazz
	 * @return
	 */
	public static <T> T map2Object(Map<String, Object> map, Class<T> clazz) {
		if (map != null) {
			try {
				T obj = clazz.newInstance();
				BeanInfo beanInfo = Introspector.getBeanInfo(obj.getClass());
				PropertyDescriptor[] propertyDescriptors = beanInfo.getPropertyDescriptors();
				for (PropertyDescriptor property : propertyDescriptors) {
					Method setter = property.getWriteMethod();
					if (setter != null) {
						setter.invoke(obj, map.get(property.getName()));
					}
				}
				return obj;
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return null;
	}

	/**
	 * @功能: object转成map
	 * @作者: wangpengcheng
	 * @创建日期: 2016年4月26日 下午12:26:30
	 * @param obj
	 * @return
	 */
	public static Map<String, Object> object2Map(Object obj) {
		if (obj != null) {
			try {
				Map<String, Object> map = new HashMap<String, Object>();
				BeanInfo beanInfo = Introspector.getBeanInfo(obj.getClass());
				PropertyDescriptor[] propertyDescriptors = beanInfo.getPropertyDescriptors();
				for (PropertyDescriptor property : propertyDescriptors) {
					String key = property.getName();
					if (!key.equalsIgnoreCase("class")) {
						Method getter = property.getReadMethod();
						Object value = getter == null ? null : getter.invoke(obj);
						map.put(key, value);
					}
				}
				return map;
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return null;
	}

	/**
	 * 是否为基础数据类型
	 * @param obj Object
	 * @return boolean true or false
	 */
	public static boolean isPrimitive(Object obj) {
		boolean rv=obj.getClass().isPrimitive() || obj instanceof String || obj instanceof Integer || obj instanceof Long || obj instanceof Byte || obj instanceof Character || obj instanceof Boolean
				|| obj instanceof Short || obj instanceof Float || obj instanceof Double || obj instanceof BigDecimal || obj instanceof BigInteger;
		return rv;
	}

	/**
	 * 把Bean转换为字符串
	 * @param obj Object
	 * @return String String
	 */
	@SuppressWarnings("rawtypes")
	public static String toString(Object obj) {
		if(obj == null) {
			return "null";
		}
		Class cl=obj.getClass();
		if(isPrimitive(obj)) {
			return String.valueOf(obj);
		} else if(obj instanceof Enum) {
			return ((Enum)obj).name();
		} else if(obj instanceof Date) {
			return String.valueOf(((Date)obj).getTime());
		} else if(obj instanceof Calendar) {
			return String.valueOf(((Calendar)obj).getTime().getTime());
		} else if(cl.isArray()) {
			String r="[";
			int len= Array.getLength(obj);
			for(int i=0; i < len; i++) {
				if(i > 0) {
					r+=",";
				}
				Object val=Array.get(obj, i);
				r+=toString(val);
			}
			return r + "]";
		} else if(obj instanceof Collection) {
			Collection tempCol=(Collection)obj;
			Iterator it=tempCol.iterator();
			String r="[";
			for(int i=0; it.hasNext(); i++) {
				if(i > 0) {
					r+=",";
				}
				Object val=it.next();
				r+=toString(val);
			}
			return r + "]";
		} else if(obj instanceof Map) {
			Map tempMap=(Map)obj;
			String r="{";
			Iterator it=tempMap.entrySet().iterator();
			while(it.hasNext()) {
				Map.Entry entry=(Map.Entry)it.next();
				Object key=entry.getKey();
				r+=toString(key);
				r+="=";
				Object val=entry.getValue();
				r+=toString(val);
				if(it.hasNext()) {
					r+=",";
				}
			}
			return r + "}";
		} else if(obj instanceof Class) {
			Class tmpCls=(Class)obj;
			return tmpCls.getName();
		}
		String r=cl.getName();
		do {
			Field[] fields=FIELDS_CAHCE.get(cl);
			if(null == fields) {
				fields=cl.getDeclaredFields();
				if(null != fields) {
					AccessibleObject.setAccessible(fields, true);
				}
				FIELDS_CAHCE.put(cl, fields);
			}
			if(null == fields || fields.length == 0) {
				cl=cl.getSuperclass();
				continue;
			}
			r+="[";
			// get the names and values of all fields
			for(Field f: fields) {
				if(Modifier.isStatic(f.getModifiers())) {
					continue;
				}
				if(f.isSynthetic() || f.getName().indexOf("this$") != -1) {
					continue;
				}
				r+=f.getName() + "=";
				try {
					Object val=f.get(obj);
					r+=toString(val);
				} catch(Exception e) {
					e.printStackTrace();
				}
				r+=",";

			}
			String comma = ",";
			if(r.endsWith(comma)) {
				r=r.substring(0, r.length() - 1);
			}
			r+="]";
			cl=cl.getSuperclass();
		} while(cl != null);
		return r;
	}

	@SuppressWarnings("rawtypes")
	public static boolean isEmpty(Object obj) {
		if(null == obj) {
			return true;
		}
		if(obj instanceof String) {
			return ((String)obj).length() == 0;
		}
		Class cl=obj.getClass();
		if(cl.isArray()) {
			int len= Array.getLength(obj);
			return len == 0;
		}
		if(obj instanceof Collection) {
			Collection tempCol=(Collection)obj;
			return tempCol.isEmpty();
		}
		if(obj instanceof Map) {
			Map tempMap=(Map)obj;
			return tempMap.isEmpty();
		}
		return false;
	}

	/**
	 * 生成字符串的HashCode
	 * @param buf
	 * @return int hashCode
	 */
	private static int getHashCode(String buf) {
		int hash=5381;
		int len=buf.length();

		while(len-- > 0) {
			hash=((hash << 5) + hash) + buf.charAt(len);
		}
		return hash;
	}

	/**
	 * 将Object 对象转换为唯一的Hash字符串
	 * @param obj Object
	 * @return Hash字符串
	 */
	public static String getUniqueHashStr(Object obj) {
		return getMiscHashCode(toString(obj));
	}

	/**
	 * 通过混合Hash算法，将长字符串转为短字符串（字符串长度小于等于20时，不做处理）
	 * @param str String
	 * @return Hash字符串
	 */
	public static String getMiscHashCode(String str) {
		if(null == str || str.length() == 0) {
			return "";
		}
		int originSize = 20;
		if(str.length() <= originSize) {
			return str;
		}
		StringBuilder tmp=new StringBuilder();
		tmp.append(str.hashCode()).append(SPLIT_STR).append(getHashCode(str));

		int mid=str.length() / 2;
		String str1=str.substring(0, mid);
		String str2=str.substring(mid);
		tmp.append(SPLIT_STR).append(str1.hashCode());
		tmp.append(SPLIT_STR).append(str2.hashCode());

		return tmp.toString();
	}

}
