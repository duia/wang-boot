<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getServerName() + ":"
			+ request.getServerPort() + path + "/";
	String basePath2 = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>webSocket测试</title>
<!-- 新 Bootstrap 核心 CSS 文件 -->
<link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css">
<!-- 可选的Bootstrap主题文件（一般不用引入） -->
<link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">

</head>
<body>
<div class="panel panel-default">
	<div class="panel-body">
		<div class="page-header" id="tou">
    	webSocket及时聊天Demo程序
		</div>
		<div class="well" id="msg">
		</div>
		<div class="col-lg">
			<div class="input-group">
		    	<input type="text" class="form-control" placeholder="发送信息..." id="message">
		      	<span class="input-group-btn">
		        	<button class="btn btn-default" type="button" id="send" >发送</button>
		      	</span>
		    </div><!-- /input-group -->
		</div><!-- /.col-lg-6 -->
	</div>
</div>
<script src="http://cdn.sockjs.org/sockjs-0.3.min.js"></script>
<!-- jQuery文件。务必在bootstrap.min.js 之前引入 -->
<script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
<!--<script type="text/javascript" src="js/jquery-1.7.2.js"></script>-->
<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
<script src="//cdn.bootcss.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<script type="text/javascript">

 $(function(){
   
     var websocket;
     if ('WebSocket' in window) {
         websocket = new WebSocket("ws://localhost:8080/echo");
     } else if ('MozWebSocket' in window) {
         websocket = new MozWebSocket("ws://localhost:8080/echo");
     } else {
         websocket = new SockJS("http://localhost:8080/sockjs/echo");
     }
     websocket.onopen = function (evnt) {
         $("#tou").html("链接服务器成功!")
     };
     websocket.onmessage = function (evnt) {
         $("#msg").html($("#msg").html() + "<br/>" + evnt.data);
     };
     websocket.onerror = function (evnt) {
     };
     websocket.onclose = function (evnt) {
         $("#tou").html("与服务器断开了链接!")
     }
     $('#send').bind('click', function() {
         send();
     });
     function send(){
         if (websocket != null) {
             var message = document.getElementById('message').value;
             websocket.send(message);
         } else {
             alert('未与服务器链接.');
         }
     }
 });

</script>
</body>
</html>	