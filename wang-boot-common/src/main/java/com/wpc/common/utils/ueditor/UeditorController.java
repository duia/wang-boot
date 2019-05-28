package com.wpc.common.utils.ueditor;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@Controller
public class UeditorController {

    @RequestMapping("/ueditor/config")
    public void config(HttpServletRequest request, HttpServletResponse response) {
        // response.setContentType("application/json");
        String rootPath = "/home/htdocs/static-mars/";
        response.setHeader("Content-Type" , "text/html");
        try {
            String exec = new ActionEnter(request, rootPath).exec();
            PrintWriter writer = response.getWriter();
            writer.write(exec);
            writer.flush();
            writer.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

}
