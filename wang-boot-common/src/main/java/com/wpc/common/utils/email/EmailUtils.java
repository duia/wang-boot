package com.wpc.common.utils.email;

import com.wpc.common.utils.prop.PropertiesUtils;
import org.apache.commons.mail.EmailAttachment;
import org.apache.commons.mail.EmailException;
import org.apache.commons.mail.HtmlEmail;
import org.springframework.util.StringUtils;

import javax.mail.internet.MimeUtility;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class EmailUtils {

	private static final String UTF_8 = "UTF-8";

	private static final String FILE_PATH = "/config/prop.properties";

	private static final Map<String, String> config = new HashMap<String, String>();

	static {
		config.put("host", PropertiesUtils.getProperty(FILE_PATH, "email.host"));
		config.put("port", PropertiesUtils.getProperty(FILE_PATH, "email.port"));
		config.put("username", PropertiesUtils.getProperty(FILE_PATH, "email.username"));
		config.put("password", PropertiesUtils.getProperty(FILE_PATH, "email.password"));
	}

	private EmailUtils() {
	}

	/**
	 * @功能: 发送邮件 (不要放在主线程调用, 请使用异步)
	 * @作者: wangpengcheng
	 * @创建日期: 2016年6月12日 下午5:51:36
	 * @param toAddresses
	 * @param subject
	 * @param content 支持html格式
	 * @param directory 附件的路径
	 * @param fileName 附件的文件名
	 * @return
	 */
	public static boolean send(List<String> toAddresses, String subject, String content, String directory, String fileName) {
		try {
			HtmlEmail email = new HtmlEmail();
			email.setHostName(config.get("host"));
			email.setAuthentication(config.get("username"), config.get("password"));
			email.setDebug(true);
			// google
			email.setSmtpPort(Integer.parseInt(config.get("port")));
			email.setSSLOnConnect(true);
			email.setStartTLSEnabled(true);
			email.setCharset(UTF_8);
			email.setFrom(config.get("username"));
			for (String toAddress : toAddresses) {
				email.addTo(toAddress);
			}
			email.setSubject(subject);
			email.setHtmlMsg(content);

			if (StringUtils.hasText(directory) && StringUtils.hasText(fileName)) {
				EmailAttachment attachment = new EmailAttachment();
				// 对附件名称进行编码, 防止乱码
				attachment.setName(MimeUtility.encodeText(fileName));
				attachment.setPath(directory + "/" + fileName);
				email.attach(attachment);
			}
			email.send();
			return true;
		} catch (EmailException e) {
			e.printStackTrace();
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return false;
	}

	public static void main(String[] args) {
		List<String> toAddresses = new ArrayList<String>();
		toAddresses.add("376205421@qq.com");
		toAddresses.add("980542887@qq.com");
		toAddresses.add("624605074@qq.com");
		String subject = "测试测试";
		String content = "<h2>大标题</h2><div>带附件   测试测试  艹  发出去了...</div>";
		// boolean result = EmailUtils.send(toAddresses, subject, content, "E:/", "文本编辑工具.zip");
		boolean result = EmailUtils.send(toAddresses, subject, content, "E:/", "wpc.ppk");
		System.out.println("结果为" + result);
	}

}
