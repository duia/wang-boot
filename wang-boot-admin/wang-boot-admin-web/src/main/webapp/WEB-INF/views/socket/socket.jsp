<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>webSocket测试</title>
</head>
<body>
<noscript><h2 style="color: #ff0000">Seems your browser doesn't support Javascript! Websocket relies on Javascript being enabled. Please enable
	Javascript and reload this page!</h2></noscript>
<div>
	<div>
		<button id="connect" onclick="connect();">Connect</button>
		<button id="disconnect" disabled="disabled" onclick="disconnect();">Disconnect</button>
	</div>
	<div id="conversationDiv">
		<label>What is your name?</label><input type="text" id="name" />
		<button onclick="sendName();">Send</button>
		<button onclick="sendName2();">Send-User</button>
		<p id="response"></p>
	</div>
</div>
<script src="/static/js/jquery-2.1.3.min.js"></script>
<script src="/static/js/common/sockjs-1.1.1.min.js"></script>
<script src="/static/js/common/stomp.js"></script>
<script type="text/javascript">

    $(document).ready(function(){
        connect();
    });

     var stompClient = null;
     function setConnected(connected) {
         document.getElementById('connect').disabled = connected;
         document.getElementById('disconnect').disabled = !connected;
         document.getElementById('conversationDiv').style.visibility = connected ? 'visible' : 'hidden';
         document.getElementById('response').innerHTML = '';
     }
     // 开启socket连接
     function connect() {
         var socket = new SockJS('/socket');
         stompClient = Stomp.over(socket);
         stompClient.connect({}, function (frame) {
             setConnected(true);
//             console.log('Connected: ' + frame);
             stompClient.subscribe('/topic/notice', function (data) {
                 showGreeting(data.body);
             });
             stompClient.subscribe('/user/topic/notice', function (data) {
                 showGreeting(data.body);
             });
             stompClient.subscribe('/topic/queryUsers', function (data) {
                 showGreeting(data.body);
             });
         });
     }

     // 断开socket连接
     function disconnect() {
         if (stompClient != null) {
             stompClient.disconnect();
         }
         setConnected(false);
//         console.log("Disconnected");
     }
     // 向‘/app/change-notice’服务端发送消息
     function sendName() {
         var value = document.getElementById('name').value;
         stompClient.send("/app/queryUsers", {}, value);
     }
     function sendName2() {
         var value = document.getElementById('name').value;
         stompClient.send("/app/user-change-notice", {}, value);
     }

     function showGreeting(message) {
         var response = document.getElementById('response');
         var p = document.createElement('p');
         p.style.wordWrap = 'break-word';
         p.appendChild(document.createTextNode(message));
         response.appendChild(p);
     }

</script>
</body>
</html>	