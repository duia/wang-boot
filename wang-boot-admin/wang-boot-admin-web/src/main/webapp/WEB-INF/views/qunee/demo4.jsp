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
<title>canvas</title>
<link rel="stylesheet" type="text/css" href="<c:url value="/static/js/bootstrap-3.3.5-dist/css/bootstrap.min.css"/>"/>
<link rel="stylesheet" type="text/css" href="<c:url value="/static/css/graph.editor.css"/>"/>
</head>
<body>
<canvas id="canvas" style="background-color: yellow;width: 600px; height:500px;"></canvas>
<script src="../static/js/qunee/js.js"></script>
<script src="../static/js/qunee/qunee.js"></script>
<script src="../static/js/qunee/graph.editor.js"></script>
<script>
var canvas=document.getElementById("canvas");
var cxt=canvas.getContext("2d");
var img1=new Image();
img1.src="../static/images/fx/3300A-1.png";
var img2=new Image();
img2.src="../static/images/fx/4052A.png";
var f = true;
setInterval(function(){
  if(f){
	cxt.drawImage(img1,20,20,100,25);
	f = false;
  }else{
	cxt.drawImage(img2,20,20,100,25);
    f = true;
  }
}, 1000);
</script>
</body>
</html>