<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>webSocket测试</title>
<link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css">
</head>
<body>
<div class="panel panel-default">
	<div class="panel-body">
		<form role="form" action="/socket/login" method="post" style="margin-bottom: 10px;">
			<div class="form-group">
				<label for="exampleInputEmail1">选择用户</label>
				<select class="form-control" name="uid">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
			</div>
			<button type="submit" class="btn btn-primary">Primary</button>
		</form>
		<button type="button" class="btn btn-success">Success</button>
	</div>
</div>
<script src="http://cdn.sockjs.org/sockjs-0.3.min.js"></script>
<script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
<script src="//cdn.bootcss.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<script type="text/javascript">
$(function(){
  
});
</script>
</body>
</html>	