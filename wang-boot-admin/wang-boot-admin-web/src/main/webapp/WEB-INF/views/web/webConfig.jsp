<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Web化配置</title>
<link href="static/js/bootstrap-3.3.5-dist/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="static/js/zTree_v3-master/css/zTreeStyle/zTreeStyle.css" type="text/css">
<link rel="stylesheet" href="static/js/zTree_v3-master/css/demo.css" type="text/css">
</head>
<body>
<div class="container">
  	<!-- <div class="row">
	  <div class="col-md-2">
	  	<button type="button" class="btn btn-success slapdConf">查看slapd.conf文件</button>
	  </div>
	  <div class="col-md-2">.col-md-2</div>
	  <div class="col-md-2">.col-md-2</div>
	  <div class="col-md-2">.col-md-2</div>
	  <div class="col-md-2">.col-md-2</div>
	  <div class="col-md-2">.col-md-2</div>
	</div> -->
	<div class="row">
	  	<div class="col-md-8">
	  		<div class="panel panel-info">
			  <div class="panel-heading">OpenLdap配置</div>
			  <div class="panel-body">
				<div class="panel panel-default">
				  <div class="panel-heading">配置</div>
				  <div class="panel-body">
				    <form class="form-horizontal">
					  <div class="form-group">
					    <label for="url" class="col-sm-2 control-label">当前节点</label>
					    <div class="col-sm-10">
					    	<select class="form-control">
							  <option>A1</option>
							  <option>A2</option>
							  <option>B</option>
							  <option>C</option>
							</select>
					  	</div>
					  </div>
					  <div class="form-group">
					    <label for="userDn" class="col-sm-2 control-label">登录名</label>
					    <div class="col-sm-10">
					    	<input type="text" class="col-sm-2 form-control" id="userDn" placeholder="">
					  	</div>
					  </div>
					  <div class="form-group">
					    <label for="password" class="col-sm-2 control-label">密码</label>
					    <div class="col-sm-10">
					    	<input type="text" class="col-sm-2 form-control" id="password" placeholder="">
					  	</div>
					  </div>
					</form>
				  </div>
				</div>
				<div class="panel panel-default">
				  <div class="panel-heading">级联配置</div>
				  <div class="panel-body">
				    <form class="form-horizontal">
					  <div class="form-group">
					    <label for="url" class="col-sm-2 control-label">级联节点</label>
					    <div class="col-sm-10">
					    	<select class="form-control">
							  <option>A1</option>
							  <option>A2</option>
							  <option>B</option>
							  <option>C</option>
							</select>
					  	</div>
					  </div>
					  <div class="form-group">
					    <label for="userDn" class="col-sm-2 control-label">级联节点</label>
					    <div class="col-sm-10">
					    	<input type="text" class="col-sm-2 form-control" id="userDn" placeholder="">
					  	</div>
					  </div>
					</form>
				  </div>
				</div>
				<div class="panel panel-default">
				  <div class="panel-heading">其他配置</div>
				  <div class="panel-body">
				    <form class="form-horizontal">
					  <div class="form-group">
					    <label for="url" class="col-sm-2 control-label">XXX</label>
					    <div class="col-sm-10">
					    	<input type="text" class="col-sm-2 form-control" id="userDn" placeholder="">
					  	</div>
					  </div>
					  <div class="form-group">
					    <label for="userDn" class="col-sm-2 control-label">XXX</label>
					    <div class="col-sm-10">
					    	<input type="text" class="col-sm-2 form-control" id="userDn" placeholder="">
					  	</div>
					  </div>
					</form>
				  </div>
				</div>
			  </div>
			</div>
		</div>
		<div class="col-md-4">
	  		<div class="panel panel-info">
			  <div class="panel-heading">组织结构</div>
			  <div class="panel-body">
			    <div class="content_wrap">
				    <div class="left">
						<ul id="treeDemo" class="ztree"></ul>
					</div>
					<!-- <div class="right">
						<ul id="treeDemo2" class="ztree"></ul>
					</div> -->
				</div>
				<!-- <button type="submit" class="btn btn-default pull-right" id="a">生成配置文件</button> -->
			  </div>
			</div>
	  	</div>
	  	<!-- <div class="col-md-6">
	  		<div class="panel panel-info">
			  <div class="panel-heading">openldap级联配置</div>
			  <div class="panel-body">
			    <div class="content_wrap">
				    <div class="left">
						<ul id="treeDemo" class="ztree"></ul>
					</div>
					<div class="right">
						<ul id="treeDemo2" class="ztree"></ul>
					</div>
				</div>
				<button type="submit" class="btn btn-default pull-right" id="a">生成配置文件</button>
			  </div>
			</div>
	  	</div> -->
	</div>
	<div class="row">
	  	<div class="col-md-12">
	  		<button type="submit" class="btn btn-default pull-right" id="a">保存配置</button>
	  	</div>
	</div>
</div>
<div class="modal fade" id="myModal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
      </div>
      <div class="modal-body">
      	<textarea class="form-control" rows="3" id="content"></textarea>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<script src="static/js/jquery-2.1.3.min.js"></script>
<script src="static/js/bootstrap-3.3.5-dist/js/bootstrap.min.js"></script>
<script src="static/js/zTree_v3-master/js/jquery.ztree.core.js"></script>
<script src="static/js/zTree_v3-master/js/jquery.ztree.excheck.js"></script>
<script src="static/js/zTree_v3-master/js/jquery.ztree.exedit.js"></script>
<script src="static/js/web/webConfig.js"></script>
</body>
</html>