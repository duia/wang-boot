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
                    <h4 class="panel-title">菜单按钮</h4>
                </div>
                <div class="alert alert-info">
                    <i class="fa fa-info-circle fa-fw"></i> 菜单按钮树，其实是从权限表中加载的权限树。
                </div>
                <div class="panel-body">
                	<div class="zTreeDemoBackground left">
						<ul id="per_tree" class="ztree"></ul>
					</div>
					<button type="button" class="btn btn-primary" id="saveRolePer">保存</button>
                </div>
            </div>
        </div>
    </div>
<jsp:include page="../common/include/foot.jsp"/>
<script>
(function(){

    var setting = {
    	data: {
   			simpleData: {
   				enable: true,
   				pIdKey: "parentId",
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
    
    var per_setting = {
    	data: {
    		simpleData: {
    			enable: true,
    			idKey: "resourceId",
    			pIdKey: "parentId",
    			rootPId: null
    		}
   		},
   		check: {
   			enable: true
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
   		}
   	}, perTreeObj;

   	var TimeFn = null;
   	function onClick(event, treeId, treeNode){
   		// 取消上次延时未执行的方法
   	    clearTimeout(TimeFn);
   	    //执行延时
   	    TimeFn = setTimeout(function(){
   	        //do function在此处写单击事件要执行的代码
   	     	getPermissions(treeNode.id);
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
		roles.push({ id:0, parentId:null, roleName:'<i class="fa fa-users"></i> 所有角色', open:true});
		$.ajax({
			url:'/sys/role/allRoles',
	    	data:{},
	    	type:'post',
	    	success:function(result){
	    		$(result).each(function(index, role){
	    			role.roleName = '<i class="fa fa-user"></i> '+role.roleName;
	    			role.parentId = 0;
	    			roles.push(role);
	    		});
	    		treeObj = $.fn.zTree.init($("#treeDemo"), setting, roles);
	    		treeObj.expandAll(true);
	    	}
		});
	}
   	
   	var getPermissions = function(rid){
   		rid && $.post('/sys/permission/getPermissions', {
   			rid: rid
   		}, function(data){
   			var permissions = $.map(data, function(item, index){
   				return {
   					id: item.id,
   					resourceId: item.permissionType=='menu'?'menu_'+item.resourceId:'element_'+item.resourceId,
   					parentId: item.permissionType=='menu'?0:'menu_'+item.parentId,
   					name: item.permissionName,
   					checked: item.roleId == rid
   				}
   			});
	   		permissions.push({ id: 0, resourceId:0, parentId:null, name:'<i class="fa fa-users"></i> 所有权限', open:true});;
	   		perTreeObj = $.fn.zTree.init($("#per_tree"), per_setting, permissions);
   		});
   	}
   	
   	$('#saveRolePer').on('click', function(){
   		var selectedNodes = treeObj.getSelectedNodes()[0],
   			checkedNodes = perTreeObj.getCheckedNodes(true),
   			pers = [];
   		
   		$(checkedNodes).each(function(index, node){
   			node.id && pers.push(node.id);
   		});
		if(!selectedNodes){
			alert('请先选择角色！');
			return;
		}
		if(pers.length == 0){
			alert('请先选择权限！');
			return;
		}
		$.post('/sys/permission/saveRolePermissions', {
			roleId: selectedNodes.id,
			pers: pers
		}, function(data){
			if(verIfy(data)){
				
			}
		});
   	});

   	initRoles();
    
})();
</script>
</body>
</html>