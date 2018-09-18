<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%    
String path = request.getContextPath();    
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
<!--<![endif]-->

<head>
<meta charset="utf-8" />
<title>测试</title>
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
<meta content="" name="description" />
<meta content="" name="author" />
</head>
<body>
<div id="content" class="content">
	<ol class="breadcrumb pull-right">
		<li><a href="javascript:;">部门设置</a></li>
		<li class="active">成员列表</li>
	</ol>
			
	<h1 class="page-header">部门设置</h1>
			
	<div class="row">
		<div class="col-md-12 ui-sortable">
	        <div class="panel panel-inverse">
	            <div class="panel-heading">
	                <h4 class="panel-title">成员列表</h4>
	            </div>
	            <div class="panel-body">
		            <div class="btn-toolbar">
		                <button type="button" class="btn btn-success pull-right" id="btn-add" data-toggle="modal" data-target="#myModal"><i class="fa fa-plus"></i> 添加成员</button>
		                <button type="button" class="btn btn-danger" id="btn-del" data-toggle="modal" data-target="#myModal1"><i class="fa fa-remove"></i> 批量删除</button>
		            </div>
		            <div class="row-fluid" style="margin-top: 15px;" id="div-advanced-search">
						<form class="form-inline well">
							<span>姓名:</span>
							<input type="text" class="form-control" placeholder="姓名" id="name-search">
							<span>职位:</span>
							<input type="text" class="form-control" placeholder="职位" id="position-search">
							<span>工作地点:</span>
							<input type="text" class="form-control" placeholder="工作地点" id="office-search">
							<span>编号:</span>
							<input type="text" class="form-control" placeholder="编号" id="extn-search">
							<span>在线状态:</span>
							<select class="form-control" id="status-search">
								<option value="">全部</option>
								<option value="1">在线</option>
								<option value="0">离线</option>
							</select>
							<select class="form-control" id="role-search">
								<option value="">全部</option>
								<option value="1">管理员</option>
								<option value="0">操作员</option>
							</select>
							<button type="button" class="btn btn-primary" id="btn-advanced-search"><i class="fa fa-search"></i> 查询</button>
							<!-- <button class="btn btn-default" type="submit">重置</button> -->
						</form>
					</div>
	            	<table id="table_id_example" class="table table-bordered table-striped table-hover">
	            		<thead>
				            <tr>
				                <th>工号</th>
				                <th>姓名</th>
				                <th>邮箱</th>
				                <th>手机</th>
				                <th>小组</th>
				                <th>在职状态</th>
				                <th>操作</th>
				            </tr>
				        </thead>
					</table>
	            </div>
	        </div>
	    </div>
	</div>
</div>
<div class="modal fade bs-example-modal-sm" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-header bg-black-darker">
            	<div class="panel-heading-btn">
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-dismiss="modal" aria-label="Close"><i class="fa fa-times"></i></a>
                </div>
                <h4 class="modal-title text-white f-w-600" id="myModalLabel">添加成员</h4>
            </div>
            <div class="modal-body">
				<form method="POST" action="/" class="form-horizontal" id="userform">
                    <div class="form-group">
                        <label class="col-md-3 control-label">姓名</label>
                        <div class="col-md-9">
                            <input type="text" name="username" placeholder="请输入员工邮箱" class="form-control required">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-3 control-label">职位</label>
                        <div class="col-md-9">
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-success btn-sm" id="saveUser">确定</button>
                <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">取消</button>
            </div>
        </div>
    </div>
</div>
<div class="modal fade bs-example-modal-sm" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm">
        <div class="modal-content">
            <div class="modal-header bg-black-darker">
            	<div class="panel-heading-btn">
                    <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-dismiss="modal" aria-label="Close"><i class="fa fa-times"></i></a>
                </div>
                <h4 class="modal-title text-white f-w-600" id="myModalLabel">移动成员</h4>
            </div>
            <div class="modal-body">
				<form method="POST" action="/" class="form-horizontal" id="userform">
                    <div class="form-group">
                        <label class="col-md-4 control-label">原部门</label>
                        <div class="col-md-8">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-4 control-label">原小组</label>
                        <div class="col-md-8">
                        	
                        </div>
                    </div>
                    <!-- <div class="form-group">
                        <label class="col-md-3 control-label">姓名</label>
                        <div class="col-md-9">
                            <input type="text" name="username" placeholder="请输入员工邮箱" class="form-control required">
                        </div>
                    </div> -->
                    <div class="form-group">
                        <label class="col-md-4 control-label">移动至小组</label>
                        <div class="col-md-8">
                        	<select class="form-control">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-success btn-sm" id="saveUser">确定</button>
                <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">取消</button>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
$(document).ready(function() {
    $('#table_id_example').dataTable({
    	language: {
		    url:'/static/plugins/DataTables-1.10.12/media/Chinese.json'
        },
        pagingType: "full_numbers",
        ordering: false,
        dom: "<'row'<'#mytool.col-xs-3'><'col-xs-9'>>t<'row'<'col-xs-3'i><'col-xs-2'l><'col-xs-7'p>>",
    });
});
</script>
</body>
</html>