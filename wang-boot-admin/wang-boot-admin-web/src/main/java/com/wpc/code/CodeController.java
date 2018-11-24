package com.wpc.code;

import com.wpc.base.controller.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.sql.SQLException;
import java.util.Map;

@Controller
@RequestMapping({"/code"})
public class CodeController extends BaseController {
    private static String PREFIX = "/code/";
//    @Autowired
//    private TableService tableService;
//    @Autowired
//    private DruidProperties druidProperties;

    @RequestMapping({""})
    public String blackboard(Model model) {
//        model.addAttribute("tables", TableFactory.getInstance().getAllTablesInfo());
//        model.addAttribute("params", GeneratorProperties.getProperties());
//        model.addAttribute("templates", null);//DefaultTemplateFactory.getDefaultTemplates());
        return PREFIX + "code";
    }

    @RequestMapping(value = {"/generate"}, method = {RequestMethod.POST})
    @ResponseBody
    public Object generate(Map params) {
        return SUCCESS_TIP;
    }
}
