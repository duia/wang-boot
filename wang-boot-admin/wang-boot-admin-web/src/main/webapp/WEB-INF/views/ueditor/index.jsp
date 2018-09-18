<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%    
String path = request.getContextPath();    
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%> 
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Hello</title>
    <style>
        table{margin-bottom:10px;border-collapse:collapse;display:table;border:1px dashed #ddd}
        #test td{padding:5px;border: 1px solid #DDD;}
    </style>
</head>
<body>
<h1>UEditor多编辑区域一个编辑器实例</h1>
<table id="test">
    <tr>
        <td width="10%">
            编辑区域一
        </td>
        <td class="content" id="content1"><script id="editor1" type="text/plain" style="width:1024px;height:200px;">内容1</script></td>
    </tr>
    <tr>
        <td>
            编辑区域二
        </td>
        <td class="content" id="content2">内容2</td>
    </tr>
    <tr>
        <td>
            编辑区域三
        </td>
        <td class="content" id="content3">内容3</td>
    </tr>
</table>
<script type="text/javascript">window.PROJECT_CONTEXT = "${path}/";</script>
<script src="/static/plugins/UEditor/ueditor.config.js"></script>
<script src="/static/plugins/UEditor/ueditor.all.js"></script>
<script src="/static/plugins/UEditor/lang/zh-cn/zh-cn.js"></script>
<script src="/static/plugins/UEditor/kityformula-plugin/addKityFormulaDialog.js"></script>
<script src="/static/plugins/UEditor/kityformula-plugin/getKfContent.js"></script>
<script src="/static/plugins/UEditor/kityformula-plugin/defaultFilterFix.js"></script>
<script src="/static/js/jquery-2.1.3.min.js"></script>
<script type="text/javascript">
//alert(document.cookie.username);
var ue = UE.getEditor('editor1');
ue.ready(function(){
    //阻止工具栏的点击向上冒泡
    $(this.container).click(function(e){
        e.stopPropagation()
    })
});
$('body').on('click', '.content', function(e){
    var $target = $(e.currentTarget);
    var content = $target.html();
    var currentParnet = ue.container.parentNode.parentNode;
    var currentContent = ue.getContent();
    $target.html('');
    $target.append(ue.container.parentNode);
    ue.reset();
    setTimeout(function(){
        ue.setContent(content);
    },200)
    $(currentParnet).html(currentContent);
})
</script>
</body>
</html>	