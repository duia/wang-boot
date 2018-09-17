/**  
 * @Title:  MailSenderUtil.java   
 * @Package com.wpc.util   
 * @Description:    TODO(用一句话描述该文件做什么)   
 * @author: wangpengcheng     
 * @date:   2016年12月2日 下午6:52:02   
 * @version V1.0 
 */
package com.wpc.common.utils.email;

import com.wpc.common.utils.prop.PropertiesUtils;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

/**   
 * @ClassName:  MailSenderUtil   
 * @Description:TODO(这里用一句话描述这个类的作用)   
 * @author: wangpengcheng 
 * @date:   2016年12月2日 下午6:52:02   
 *     
 */
//@Component
public class MailSenderUtil {
	
	private static final String UTF_8 = "UTF-8";

	private static final String FILE_PATH = "/config/prop.properties";
	
	private static JavaMailSenderImpl mailSender;
	
	static {
		mailSender = new JavaMailSenderImpl();
		mailSender.setHost(PropertiesUtils.getProperty(FILE_PATH, "email.host"));
		mailSender.setPort(Integer.parseInt(PropertiesUtils.getProperty(FILE_PATH, "email.port")));
		mailSender.setUsername(PropertiesUtils.getProperty(FILE_PATH, "email.username"));
		mailSender.setPassword(PropertiesUtils.getProperty(FILE_PATH, "email.password"));
		Properties javaMailProperties = new Properties();
		javaMailProperties.put("mail.smtp.auth", true);
		javaMailProperties.put("mail.smtp.ssl.enable", true);
		javaMailProperties.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
		javaMailProperties.put("mail.smtp.timeout", 25000);
		mailSender.setJavaMailProperties(javaMailProperties);
	}
	
	private MailSenderUtil() {}
	
	public static void send(String[] to, String title, String text) throws MessagingException{
		MimeMessage message = mailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message, true, UTF_8);
		helper.setFrom(PropertiesUtils.getProperty(FILE_PATH, "email.username"));
		helper.setTo(to);
		helper.setSubject(title);  
		helper.setText(text);
        mailSender.send(message);
	}
	
	public static void main(String[] args) {
		String[] tos = {"376205421@qq.com"};
		try {
			MailSenderUtil.send(tos, "测试", "测试内容");
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
