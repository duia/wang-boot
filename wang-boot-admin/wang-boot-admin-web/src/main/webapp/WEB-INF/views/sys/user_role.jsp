<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/include/head.jsp"/>
<body>
    <div class="row">
        <div class="col-md-4 ui-sortable">
            <div data-sortable-id="tree-view-0" class="panel panel-inverse">
                <div class="panel-heading">
                    <div class="panel-heading-btn">
                        <a data-click="panel-expand" class="btn btn-xs btn-icon btn-circle btn-default" href="javascript:;" data-original-title="" title=""><i class="fa fa-expand"></i></a>
                        <a data-click="panel-reload" class="btn btn-xs btn-icon btn-circle btn-success" href="javascript:;" data-original-title="" title=""><i class="fa fa-repeat"></i></a>
                        <a data-click="panel-collapse" class="btn btn-xs btn-icon btn-circle btn-warning" href="javascript:;"><i class="fa fa-minus"></i></a>
                        <a data-click="panel-remove" class="btn btn-xs btn-icon btn-circle btn-danger" href="javascript:;"><i class="fa fa-times"></i></a>
                    </div>
                    <h4 class="panel-title">角色列表</h4>
                </div>
                <div class="alert alert-info">
                    <i class="fa fa-info-circle fa-fw"></i> 角色树说明。
                </div>
                <div class="panel-body">
              		<div class="zTreeDemoBackground left">
						<ul id="treeDemo" class="ztree"></ul>
					</div>
                </div>
            </div>
        </div>
        <div class="col-md-8 ui-sortable">
            <div data-sortable-id="tree-view-1" class="panel panel-inverse">
                <div class="panel-heading">
                    <div class="panel-heading-btn">
                        <a data-click="panel-expand" class="btn btn-xs btn-icon btn-circle btn-default" href="javascript:;"><i class="fa fa-expand"></i></a>
                        <a data-click="panel-reload" class="btn btn-xs btn-icon btn-circle btn-success" href="javascript:;"><i class="fa fa-repeat"></i></a>
                        <a data-click="panel-collapse" class="btn btn-xs btn-icon btn-circle btn-warning" href="javascript:;"><i class="fa fa-minus"></i></a>
                        <a data-click="panel-remove" class="btn btn-xs btn-icon btn-circle btn-danger" href="javascript:;"><i class="fa fa-times"></i></a>
                    </div>
                    <h4 class="panel-title">角色人员</h4>
                </div>
                <div class="alert alert-info">
                    <i class="fa fa-info-circle fa-fw"></i> 属于该角色下的人员。
                </div>
                <div class="panel-body">
                	<form class="form-inline m-b-15">
                        <input type="text" placeholder="搜索人员名称进行添加" id="name" name="name" class="form-control width-md required">
                        <input type="hidden" value="" id="userId" name="userId">
                        <a href="javascript:void(0);" class="btn btn-sm btn-primary m-r-5" id="saveUser">保存</a>
                    </form>
                    <div class="row" id="users">
                    	<div class="col-md-4 col-sm-6">
		                    <div class="widget widget-stats bg-purple">
				                <div class="stats-icon"><i class="fa fa-users"></i></div>
				                <div class="stats-info">
				                    <p>王鹏程</p>	
				                </div>
				                <div class="stats-link">
				                    <a href="javascript:;">删除 <i class="fa fa-trash"></i></a>
				                </div>
				            </div>
                    	</div>
                    	<div class="col-md-4 col-sm-6">
		                    <div class="widget widget-stats bg-purple">
				                <div class="stats-icon"><i class="fa fa-users"></i></div>
				                <div class="stats-info">
				                    <p>王鹏程</p>	
				                </div>
				                <div class="stats-link">
				                    <a href="javascript:;">删除 <i class="fa fa-trash"></i></a>
				                </div>
				            </div>
                    	</div>
                    	<div class="col-md-4 col-sm-6">
		                    <div class="widget widget-stats bg-purple">
				                <div class="stats-icon"><i class="fa fa-users"></i></div>
				                <div class="stats-info">
				                    <p>王鹏程</p>	
				                </div>
				                <div class="stats-link">
				                    <a href="javascript:;">删除 <i class="fa fa-trash"></i></a>
				                </div>
				            </div>
                    	</div>
                    	<div class="col-md-4 col-sm-6">
		                    <div class="widget widget-stats bg-purple">
				                <div class="stats-icon"><i class="fa fa-users"></i></div>
				                <div class="stats-info">
				                    <p>王鹏程</p>	
				                </div>
				                <div class="stats-link">
				                    <a href="javascript:;">删除 <i class="fa fa-trash"></i></a>
				                </div>
				            </div>
                    	</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script id="usertemp" type="text/html">
<<for(var i=0; i<users.length; i++){>>
<div class="col-md-4 col-sm-6">
	<div class="widget widget-stats bg-purple">
	    <div class="stats-icon"><i class="fa fa-users"></i></div>
	    <div class="stats-info">
	        <p><<=users[i].username>></p>	
	    </div>
	    <div class="stats-link">
	        <a href="javascript:;" data-id="<<=users[i].id>>">删除 <i class="fa fa-trash-o"></i></a>
	    </div>
	</div>
</div>
<<}>>
</script>
<jsp:include page="../common/include/foot.jsp"/>
<script>
(function(){

    var setting = {
    	data: {
   			simpleData: {
   				enable: true,
   				pIdKey: "pId",
   			},
   			key: {
   				url: '',
   				name: 'roleName'
   			}
   		},
   		view: {
   			//dblClickExpand: false,
   			showLine: true,
   			selectedMulti: false,
   			nameIsHTML: true, //为了可以使用fontawesome
   			showTitle:false,
   			showIcon: false
   		},
   		callback: {
   			onClick: onClick,
   			onDblClick: onDblClick
   		}
   	}, treeObj;

   	var TimeFn = null;
   	function onClick(event, treeId, treeNode){
   		// 取消上次延时未执行的方法
   	    clearTimeout(TimeFn);
   	    //执行延时
   	    TimeFn = setTimeout(function(){
   	        //do function在此处写单击事件要执行的代码
   	        console.log(treeNode.id);
   	        $.post('/sys/role/userByRole', {
   	        	roleId: treeNode.id
   	        }, function(data){
   	        	var html = template('usertemp', {'users':data});
   				$('#users').html(html);
   	        });
   	    },200);
   	}
   	function onDblClick(event, treeId, treeNode){
   		// 取消上次延时未执行的方法
   	    clearTimeout(TimeFn);
   	    //双击事件的执行代码
   		console.log('双击');
   	}

   	var initRoles = function(){
		var roles = [];
		roles.push({ id:0, pId:null, roleName:'<i class="fa fa-users"></i> 所有角色', open:true});
		$.ajax({
			url:'/sys/role/allRoles',
	    	data:{},
	    	type:'post',
	    	success:function(result){
	    		$(result).each(function(index, role){
	    			role.roleName = '<i class="fa fa-user"></i> '+role.roleName;
	    			role.pId = 0;
	    			roles.push(role);
	    		});
	    		treeObj = $.fn.zTree.init($("#treeDemo"), setting, roles);
	    		treeObj.expandAll(true);
	    	}
		});
	}

   	$("#name").autocomplete({
   		source: function(request, response){
   			$.ajax({
   				url: '/sys/user/likeName',
   				type: 'post',
   				data: {
   					name: request.term
   				},
   				success: function(data){
   					console.log(data);
   					response($.map(data, function (item) { //这里调用map函数对数据进行格式化处理  
                        return {  
                            id: item.id, 
                            label: item.username+' ( '+item.account+' )',  
                            value: item.username+' ( '+item.account+' )'
                        }  
                    })); 
   				}
   			});
   		},
        minLength: 1,
        select: function( event, ui ) {
        	$('#userId').val(ui.item.id);
        }
    });
   	
   	$('#saveUser').on('click', function(){
   		var selectedNodes = treeObj.getSelectedNodes()[0],
   			userId = $('#userId').val();
   		if(!selectedNodes){
   			alert('请先选择角色！');
   			return;
   		}
   		if(!userId){
   			alert('请先选择人员！');
   			return;
   		}
   		$.post('/sys/role/addUserRole', {
   			userId: userId,
   			roleId: selectedNodes.id
   		}, function(data){
   			console.log(data);
   		});
   	});
   	
   	initRoles();
    
})();
</script>