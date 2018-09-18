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
<title>Ckeditor</title>
<link href="/static/plugins/mathquill-0.9.1/mathquill.css" rel="stylesheet" type="text/css" />
</head>
<body>
<div id="content" class="content">
	<div contenteditable="true" style="width:60%; border: 1px solid #ccc;">
	<p>凤凰体育讯 北京时间8月9日上午，2016年里约奥运会游泳赛场结束男子200米自由泳决赛的争夺，孙杨游出1分44秒65的成绩夺得冠军！<br></p><p>这是孙杨首次在世界大赛200米问鼎，南非选手勒克洛斯第2，美国选手戴尔第3。这是孙杨获得的第三枚奥运金牌。 夺冠之后，孙杨没有激动到哭泣，而是连续发生三声怒吼，他要将所有怒火发泄出去，随后双手比出第一的手势，霸气指天。<br></p><p>泳坛<strong>一哥不容置疑。 据此前报道，在孙杨参加过的所有比赛里，他一共哭了14次。有人说孙杨没有男子汉气概，但他们不知道孙杨承受了多大的压力，此次夺冠后孙杨霸气的宣泄着</strong>怒火，这次是泳坛一哥霸气所在。<br></p>
	<p style="color: #ff0000;">123</p>
	</div>
	<div contenteditable="true" style="width:60%; border: 1px solid #ccc;">内容2</div>
	<div contenteditable="true" style="width:60%; border: 1px solid #ccc;">内容3</div>
	<div contenteditable="true" style="width:60%; border: 1px solid #ccc;">内容4</div>
	<div contenteditable="true" style="width:60%; border: 1px solid #ccc;">内容5</div>
	<button id="add">添加一项</button>
	<br>
	<form name="serForm" action="/upload/fileUpload" method="post"  enctype="multipart/form-data">
	<h3>上传文件</h3>
	<input type="file" name="file1">
	<input type="file" name="file2">
	<input type="submit" value="upload"/>
	</form>
</div>
<script src="/static/js/jquery-2.1.3.min.js"></script>
<script src="/static/plugins/mathquill-0.9.1/mathquill.js"></script>
<script src="/static/plugins/ckeditor/ckeditor.js"></script>
<script type="text/javascript">
(function(){
	var index =6;
	$('#add').on('click', function(){
		$(this).before('<div id="content'+index+'" contenteditable="true" style="width:60%; border: 1px solid #ccc;">内容'+index+'</div>');
		CKEDITOR.inline('content'+(index++));
	});
	/* $('.content').sortable({
    }); */
})();
</script>
</body>
</html>	