<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page isELIgnored="false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>  
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>  
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%> 

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Qunee + EasyUI 同步示例</title>
<link rel="stylesheet" type="text/css" href="<c:url value="/static/js/bootstrap-3.3.5-dist/css/bootstrap.min.css"/>"/>
<link rel="stylesheet" type="text/css" href="<c:url value="/static/js/jquery-easyui-1.4.4/themes/gray/easyui.css"/>">
<link rel="stylesheet" type="text/css" href="<c:url value="/static/js/jquery-easyui-1.4.4/themes/icon.css"/>">
<link rel="stylesheet" type="text/css" href="<c:url value="/static/css/graph.editor.css"/>"/>
<style type="text/css">
#editor{
		position: absolute;
		 box-sizing: border-box; 
		 top: 220px ! important;
		 background-color: #181717;
	}
</style>
</head>
<body class="layout" style="padding: 0; margin: 0; width: 1920px; height: 858px;">
<div style="width: 1920px; height: 222px">1111</div>
<div id="editor" data-options="region:'center'" style="background-color: #11171a;"></div>
<script src="../static/js/qunee/js.js"></script>
<script src="../static/js/qunee/qunee.js"></script>
<script src="../static/js/qunee/graph.editor2.js"></script>
<script src="../static/js/qunee/demo2.js"></script>
<script>
// prompt("随便写点儿啥吧","比如我叫啥");
// alert(t);
// console.log(Q.aB);
</script>
</body>
</html>