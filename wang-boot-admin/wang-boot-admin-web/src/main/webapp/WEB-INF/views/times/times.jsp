<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<jsp:include page="../common/include/head.jsp"/>
<body>

	<div class="row">
		<div class="col-md-12 ui-sortable">
	        <div class="panel panel-inverse">
	            <div class="panel-heading">
	                <h4 class="panel-title">线程管理</h4>
	            </div>
	            <div class="panel-body">
		            <div class="btn-toolbar m-b-15">
			            <button type="button" class="btn btn-danger" id="add">添加任务5</button>
						<button type="button" class="btn btn-danger" id="pause">暂停任务1</button>
						<button type="button" class="btn btn-danger" id="resume">恢复任务1</button>
						<button type="button" class="btn btn-danger" id="delete">删除任务2</button>
						<button type="button" class="btn btn-danger" id="running">运行中任务</button>
						<button type="button" class="btn btn-danger" id="waiting">等待中任务</button>
		            </div>
	            	<table id="table_id_example" class="table table-bordered table-striped table-hover">
	            		<thead>
				            <tr>
				                <th>ID</th>
				                <th>线程名</th>
				                <th>线程组</th>
				                <th>运行时间</th>
				                <th>状态</th>
				                <th>类.方法</th>
				                <th>描述</th>
				                <th>操作</th>
				            </tr>
				        </thead>
				        <tbody>
				        </tbody>
					</table>
	            </div>
	        </div>
	    </div>
	</div>
<jsp:include page="../common/include/foot.jsp"/>
<script type="text/javascript">

	$(function() {
		$('#add').click(function() {
			$.ajax({
				url : 'times/add',
				type : 'GET',
				success : function(result) {

				}
			});
		});
		$('#pause').click(function() {
			$.ajax({
				url : 'times/pause',
				type : 'GET',
				success : function(result) {

				}
			});
		});
		$('#resume').click(function() {
			$.ajax({
				url : 'times/resume',
				type : 'GET',
				success : function(result) {

				}
			});
		});
		$('#delete').click(function() {
			$.ajax({
				url : 'times/delete',
				type : 'GET',
				success : function(result) {

				}
			});
		});
		$('#running').click(function() {
			var pools = [];
			$.ajax({
				url : 'times/running',
				type : 'GET',
				success : function(result) {
					$(result).each(function(index, th){
						pools.push('<tr><td>'+th.jobId+'</td><td>'+th.jobName+'</td><td>'+th.jobGroup+'</td><td>'+th.cronExpression+'</td>');
						pools.push('<td>'+th.jobStatus+'</td><td>'+th.className+'.'+th.methodName+'</td><td>'+th.description+'</td>');
						pools.push('<td>操作</td></tr>');
					});
					$('#table_id_example tbody').html(pools.join(''));
				}
			});
		});
		$('#waiting').click(function() {
			$.ajax({
				url : 'times/waiting',
				type : 'GET',
				success : function(result) {
					console.log(result);
				}
			});
		});
	});
</script>
</body>
</html>	