package com.wpc.common.utils.file;

import com.wpc.common.Global;
import com.wpc.common.utils.file.entity.FileMeta;
import org.apache.commons.io.FilenameUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import javax.servlet.http.HttpServletRequest;
import java.io.*;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * 文件上传工具类
 * @author wpc
 *
 */
public class UploadUtils {
	
	private final static Logger logger = LoggerFactory.getLogger(UploadUtils.class);
	
	/**
	 * 文件上传，支持多文件上传
	 * @return 返回文件信息
	 * @throws IOException 
	 * @throws IllegalStateException 
	 */
	public static List<FileMeta> upload(HttpServletRequest request, String path) throws IllegalStateException, IOException{
		SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmssS", Locale.US);
		List<FileMeta> list = new ArrayList<>();
		//上传路径
        File newFile = new File(path);
        if(!newFile.exists()){
        	newFile.mkdirs();
        }
		//将当前上下文初始化给  CommonsMutipartResolver （多部分解析器）
        CommonsMultipartResolver multipartResolver=new CommonsMultipartResolver(request.getSession().getServletContext());
        //检查form中是否有enctype="multipart/form-data"
        if(multipartResolver.isMultipart(request)){
        	//将request变成多部分request
            MultipartHttpServletRequest multiRequest=(MultipartHttpServletRequest)request;
            //获取multiRequest 中所有的文件名
            Iterator<String> iter=multiRequest.getFileNames();
            //遍历所有文件
            while(iter.hasNext()){
            	MultipartFile file=multiRequest.getFile(iter.next());
            	if(file!=null && !file.isEmpty()){
            		//重命名上传后的文件名  
                    String fileName = new String(formatter.format(new Date()).getBytes("utf-8")) + file.getOriginalFilename();
                    //上传
                    file.transferTo(new File(path, fileName));
//                    FileUtils.copyInputStreamToFile(file.getInputStream(), new File(path + fileName));
                    FileMeta fileMeta = new FileMeta();
                    fileMeta.setSrc(Global.getConfig("uploadServerPath") + fileName);
                    fileMeta.setPath(path+fileName);
                    fileMeta.setFileName(file.getOriginalFilename());
                    fileMeta.setFileSize(file.getSize() / 1024 + " Kb");
                    fileMeta.setFileType(file.getContentType());
                    list.add(fileMeta);
            	}
            }
        }
		return list;
	}

    /**
     * 文件上传，支持多文件上传，支持大文件分块上传
     * @return 返回文件信息
     * author wangpengcheng
     * @throws IOException
     * @throws IllegalStateException
     */
    public static List<FileMeta> uploadChunk(HttpServletRequest request, String path) throws IllegalStateException, IOException{
        List<FileMeta> list = new ArrayList<>();
        //上传路径
        File newFile = new File(path);
        if(!newFile.exists()){
            newFile.mkdirs();
        }
        //将当前上下文初始化给  CommonsMutipartResolver （多部分解析器）
        CommonsMultipartResolver multipartResolver=new CommonsMultipartResolver(request.getSession().getServletContext());
        //检查form中是否有enctype="multipart/form-data"
        if(multipartResolver.isMultipart(request)){
            //将request变成多部分request
            MultipartHttpServletRequest multiRequest=(MultipartHttpServletRequest)request;

            Integer chunk = Integer.parseInt(multiRequest.getParameter("chunk"));  //分割块数
            Integer chunks = Integer.parseInt(multiRequest.getParameter("chunks"));  //总分割数
            String tempFileName = multiRequest.getParameter("name");
            //获取multiRequest 中所有的文件名
            Iterator<String> iter=multiRequest.getFileNames();
            //遍历所有文件
            while(iter.hasNext()){
                MultipartFile file=multiRequest.getFile(iter.next());
                if(file!=null && !file.isEmpty()){
                    //重命名上传后的文件名
                    String fileName = UUID.randomUUID().toString().replace( "-", "" )
                            .concat( "." )
                            .concat(FilenameUtils.getExtension(tempFileName));
                    File targetFile = new File(path, fileName);
                    //上传
                    if(chunks > 1){//用户上传文件总块数大于1，要进行合并

                        File tempFile = new File(path, file.getName());
                        //第一块直接从头写入，不用从末端写入
                        saveUploadFile(file.getInputStream(), tempFile, chunk != 0);

                        if(chunks - chunk==1){//全部块已经上传完毕，此时targetFile因为有被流写入而存在，要改文件名字
                            tempFile.renameTo(targetFile);
                        }
                    }
                    else{
                        //只有一块，就直接拷贝文件内容
                        file.transferTo(targetFile);
                    }

                    FileMeta fileMeta = new FileMeta();
                    fileMeta.setSrc(Global.getConfig("uploadServerPath") + fileName);
                    fileMeta.setPath(path+fileName);
                    fileMeta.setFileName(file.getOriginalFilename());
                    fileMeta.setFileSize(file.getSize() / 1024 + " Kb");
                    fileMeta.setFileType(file.getContentType());
                    list.add(fileMeta);
                }
            }
        }
        return list;
    }

    private static void saveUploadFile(InputStream inputStream, File tempFile, boolean flag){
        OutputStream outputStream = null;
        try {
            if (!flag) {
                //从头写入
                outputStream = new BufferedOutputStream(new FileOutputStream(tempFile));
            } else {
                //从末端写入
                outputStream = new BufferedOutputStream(new FileOutputStream(tempFile,true));
            }
            byte[] bytes = new byte[1024];
            int len = 0;
            while ((len = (inputStream.read(bytes)))>0){
                outputStream.write(bytes,0,len);
            }
        } catch (IOException e){
            e.printStackTrace();
        } finally {
            try{
                assert outputStream != null;
                outputStream.close();
                inputStream.close();
            } catch (IOException e){
                e.printStackTrace();
            }
        }
    }

}
