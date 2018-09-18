<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

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
            <button type="button" class="btn btn-primary" id="btn-add"><i class="fa fa-plus"></i> 添加</button>
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
        <table id="user_table" class="table table-bordered table-striped table-hover display" cellspacing="0" width="100%">
        </table>
    </div>
</div>
<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">新增人员</h4>
            </div>
            <div class="modal-body">
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary" id="saveUser">保存</button>
            </div>
        </div>
    </div>
</div>
<script type="text/html" id="userformHtml">
    <form method="POST" class="form-horizontal" id="userform">
        <input type="hidden" id="id" value="<<=id>>" name="id">
        <div class="form-group">
            <label class="col-md-3 control-label">用户名</label>
            <div class="col-md-9">
                <input type="text" name="username" placeholder="用户名" class="form-control required" value="<<=username>>">
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-3 control-label">登陆账号</label>
            <div class="col-md-9">
                <input type="text" name="loginName" placeholder="登陆账号" class="form-control required" value="<<=loginName>>">
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-3 control-label">邮箱</label>
            <div class="col-md-9">
                <input type="text" name="email" placeholder="Email" class="form-control required" value="<<=email>>">
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-3 control-label">手机</label>
            <div class="col-md-9">
                <input type="text" name="mobile" placeholder="手机号码" class="form-control required" value="<<=mobile>>">
            </div>
        </div>
        <%--<div class="form-group">
            <label class="col-md-3 control-label">添加时间</label>
            <div class="col-md-9">
                <input type="datetime" name="" placeholder="添加时间" class="form-control">
            </div>
        </div>--%>
    </form>
</script>
<jsp:include page="../common/include/foot.jsp"/>
<script>
(function(){

    $("#toggle-advanced-search").click(function(){
		$("i",this).toggleClass("fa-angle-double-down fa-angle-double-up");
		$("#div-advanced-search").slideToggle("fast");
	});
    
    var table = $('#user_table').DataTable({
        //ajax: "/static/data/objects.txt",
        processing: true,
        serverSide: true,
        ajax:{
            url:'/sys/user/searchPage',
            type:'post',
            data:function (data) {
                data.condition = {
                    /* username:'123',//添加额外参数
                     password:'123456' */
                }
                return JSON.stringify(data);
            },
            dataType: "json",
            processData: true,
            contentType: 'application/json;charset=UTF-8'
        },
        language: {
		    url:'/static/plugins/DataTables-1.10.12/media/Chinese.json'
        },
        pagingType: "full_numbers",
        columns: [{
            title: '<input type="checkbox" name="checklist" id="checkall" /><label style="margin-left: 10px;">ID</label>',
       		data: null,
            render: function(data, type, row, meta) {
                return '<input type="checkbox" name="checklist" value="' + row.id + '" /><label style="margin-left: 10px;">' + row.id + '</label>';
            }
  		},{
            title: '用户名',
  			data: "username"
   		},{
            title: '登陆账号',
   			data: "loginName"
		},{
            title: '邮箱',
			data: "email"
		},{
            title: '更新时间',
			data: "updateDate"
		},{
            title: '操作',
			data: null,
            render: function (data, type, row, metad) {
                var html = [];
                html.push('<button type="button" data-id="'+data.id+'" class="btn btn-primary btn-sm updateUserBtn">修改</button>');
                html.push('<button type="button" class="btn btn-danger btn-sm deleteUserBtn">删除</button>');
                return html.join(' ');
            }
 		}],
        dom: "<'row'<'#mytool.col-xs-3'><'col-xs-9'>><'row'<'.col-xs-12'tr>><'row'<'col-xs-3'i><'col-xs-2'l><'col-xs-7'p>>",
		initComplete: function () {
		    //$("#mytool").append('<button id="datainit" type="button" class="btn btn-primary btn-sm">增加基础数据</button>&nbsp');
		    //$("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-target="#myModal">添加</button>');
		    //$("#datainit").on("click", initData);
		},
        fnDrawCallback: function(table) {
            var tableId = $(this).attr('id');
            $('#'+tableId+'_paginate').append("<div>到第 <input type='text' id='changePage' class='input-text' style='width:50px;height:27px'> 页 " +
                "<a class='btn btn-default shiny' href='javascript:void(0);' id='dataTable-btn' style='text-align:center'>确认</a></div>");
            var oTable = $('#'+tableId).dataTable();
            $('#dataTable-btn').click(function(e) {
                if($("#changePage").val() && $("#changePage").val() > 0) {
                    var redirectpage = $("#changePage").val() - 1;
                } else {
                    var redirectpage = 0;
                }
                oTable.fnPageChange(redirectpage);
            });
        }
    });

    $('#btn-add').on('click', function () {
        $('#myModal .modal-body').empty().html(template('userformHtml', {}));
        formAddValidate();
        $('#myModal').modal('show');
    });
    
    $('#saveUser').on('click', function(){
    	$('#userform').submit();
    });

    var formAddValidate = function () {
        $('#userform').validate({
            submitHandler: function(form) {
                $.ajax({
                    url:'/sys/user/addOrUpdate',
                    data:$('#userform').serialize(),
                    type:'post',
                    success:function(result){
                        if(result.code == '200'){
                            $('#myModal').modal('hide')
                            //table.draw(false);
                            table.ajax.reload(null, false);
                        }else{
                            alert(result.msg);
                        }
                    }
                });
            }
        });
    }

    $('#user_table').delegate('.updateUserBtn', 'click', function(e){
        $.post('/sys/user/findById', {
            id: $(e.target).attr('data-id')
        }, function (data) {
            $('#myModal .modal-body').empty().html(template('userformHtml', data.result));
            formAddValidate();
            $('#myModal').modal('show');
        });
    });
    
    $('#user_table').delegate('.deleteUserBtn', 'click', function(e){
    	BootstrapDialog.show({
            message: '删除用户',
            buttons: [{
                label: '删除',
                cssClass: 'btn-primary',
                action: function(dialogItself){
                    $.post('/user/delete', {
                    	id: 0
                    }, function(data){
                    	if(verIfy(data)){
	                    	console.log(data);
	                    	dialogItself.close();
                    	}
                    });
                }
            }, {
                icon: 'glyphicon glyphicon-ban-circle',
                label: '取消',
                cssClass: 'btn-warning',
                action: function(dialogItself){
                    dialogItself.close();
                }
            }]
        });
    });
    
})();
</script>
</body>
</html>