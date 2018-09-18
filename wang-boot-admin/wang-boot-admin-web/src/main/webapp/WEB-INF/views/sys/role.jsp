<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/include/head.jsp"/>
<body>
	<div class="panel panel-inverse">
	    <div class="panel-heading">
	        <div class="panel-title">
	        	人员列表
	        </div>
	    </div>
	    <div class="panel-body">
            <div class="btn-toolbar">
                <div class="pull-right">
                    <div class="input-group">
	                    <!-- <input type="text" placeholder="Enter message" class="form-control bg-silver"> -->
	                    <span class="btn-group">
	                        <!-- <button type="button" class="btn" id="btn-simple-search"><i class="fa fa-search"></i></button> -->
	                        <button type="button" class="btn" title="高级查询" id="toggle-advanced-search">
                                <i class="fa fa-angle-double-down"></i>
                            </button>
	                    </span>
	                </div>
                </div>
                <button type="button" class="btn btn-primary" id="btn-add" data-toggle="modal" data-target="#myModal"><i class="fa fa-plus"></i> 添加</button>
                <button type="button" class="btn btn-danger" id="btn-del"><i class="fa fa-remove"></i> 批量删除</button>
            </div>
            <div class="row-fluid" style="display: none; margin-top: 15px;" id="div-advanced-search">
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
					<button type="button" class="btn" id="btn-advanced-search"><i class="fa fa-search"></i> 查询</button>
					<button class="btn btn-default" type="submit">重置</button>
				</form>
			</div>
			<table id="table_id_example" class="table table-bordered table-striped table-hover">
			</table>
		</div>
	</div>
<jsp:include page="../common/include/foot.jsp"/>
<script>
(function(){

    var table = $('#table_id_example').DataTable({
        //ajax: "/static/data/objects.txt",
        ajax:{
        	url:'/role/searchPage',
        	type:'post',
        	data:function (data) {
        		data.condition = {
        			/* username:'123',//添加额外参数
        			password:'123456' */
        		}
                return JSON.stringify(data);
            },
            dataType: "json",
            processData: false,
            contentType: 'application/json;charset=UTF-8'
        },
        processing: true,
        serverSide: true,
        language: {
		    url:'/static/plugins/DataTables-1.10.12/media/Chinese.json'
        },
        pagingType: "full_numbers",
        columns: [{
       		"title":"<input type='checkbox' name='checklist' id='checkall' />&nbsp;&nbsp;&nbsp; ID",
       		"data": "id"
  		},{
  			"title":"角色名",
  			"data": "roleName"
   		},{
   			"title":"角色代码",
   			"data": "roleCode"
		},{
			"title":"更新时间",
			"data": "updateTime"
		},{
			"title":"操作",
			"data": null
 		}],
        columnDefs: [
			{
			    //   指定第一列，从0开始，0表示第一列，1表示第二列……
			    targets: 0,
			    render: function(data, type, row, meta) {
			        return '<input type="checkbox" name="checklist" value="' + row.id + '" />&nbsp;&nbsp;&nbsp;'+data;
			    }
			},
	        {
	            targets: 4,
	            render: function (data, type, row, metad) {
	                var html = [];
	                html.push('<button type="button" class="btn btn-primary btn-sm" onclick="">修改</button>');
	                html.push('<button type="button" class="btn btn-danger btn-sm" onclick="">删除</button>');
	                return html.join(' ');
	            }
	        }
	
	    ],
        dom: "<'row'<'#mytool.col-xs-3'><'col-xs-9'>>t<'row'<'col-xs-3'i><'col-xs-2'l><'col-xs-7'p>>",
		initComplete: function () {
		    //$("#mytool").append('<button id="datainit" type="button" class="btn btn-primary btn-sm">增加基础数据</button>&nbsp');
		    //$("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-target="#myModal">添加</button>');
		    //$("#datainit").on("click", initData);
		}
    });
    
})();
</script>