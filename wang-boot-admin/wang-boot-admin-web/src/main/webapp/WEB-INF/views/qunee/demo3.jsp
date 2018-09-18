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
<title>Qunee拓扑图编辑</title>
<link rel="stylesheet" type="text/css" href="<c:url value="/static/js/bootstrap-3.3.5-dist/css/bootstrap.min.css"/>"/>
<link rel="stylesheet" type="text/css" href="<c:url value="/static/css/graph.editor.css"/>"/>
<link rel="stylesheet" type="text/css" href="<c:url value="/static/css/qunee/demo.css"/>"/>
</head>
<body class="layout" style="padding: 0; margin: 0;">
<div id="editor" data-options="region:'center'" style="background-color: #11171a"></div>
<script src="../static/js/qunee/js.js"></script>
<script src="../static/js/qunee/qunee.js"></script>
<script src="../static/js/qunee/graph.editor.js"></script>
<script>

$('#editor').graphEditor({
	data:'../static/data/67.json',
	callback: function(editor){
	  var graph = editor.graph;
	  //graph.originAtCenter = false;

	  graph.callLater(function(){
      	graph.zoomToOverview();
      	graph.moveToCenter();
      	//graph.interactionMode = Q.Consts.INTERACTION_MODE_VIEW;
      });
	  
	}
});

</script>
</body>
</html>