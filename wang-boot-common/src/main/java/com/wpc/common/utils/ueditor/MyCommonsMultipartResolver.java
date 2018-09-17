package com.wpc.common.utils.ueditor;

import org.springframework.web.multipart.commons.CommonsMultipartResolver;

public class MyCommonsMultipartResolver extends CommonsMultipartResolver {

    @Override
    public boolean isMultipart(javax.servlet.http.HttpServletRequest request) {
        String uri = request.getRequestURI();
        //过滤使用百度UEditor的URI
        //此处拦截路径即为上面编写的controller路径
        return !uri.contains("/ueditor") && super.isMultipart(request);
    }

}
