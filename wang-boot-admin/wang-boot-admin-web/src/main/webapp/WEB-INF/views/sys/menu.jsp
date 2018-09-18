<%@ page contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<jsp:include page="../common/include/head.jsp"/>
<style>
.ztree li span.button.add {margin-left:2px; margin-right: -1px; background-position:-144px 0; vertical-align:top; *vertical-align:middle}
.btn-span {
	position: relative;
	margin: 0 5px 5px 0;
	display: inline-block;
}
.btn-tr {
	border-bottom-left-radius: 100%;
    position: absolute;
    right: 0px;
    top: 0px;
    width: 16px;
    padding-left: 5px;
}
</style>
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
                    <h4 class="panel-title">菜单列表</h4>
                </div>
                <div class="alert alert-info">
                    <i class="fa fa-info-circle fa-fw"></i> 菜单树说明。
                </div>
                <div class="panel-body">
              		<div class="zTreeDemoBackground left">
						<ul id="treeDemo" class="ztree"></ul>
					</div>
                </div>
            </div>
        </div>
        <div class="col-md-4 ui-sortable">
            <div data-sortable-id="tree-view-1" class="panel panel-inverse">
                <div class="panel-heading">
                    <div class="panel-heading-btn">
                        <a data-click="panel-expand" class="btn btn-xs btn-icon btn-circle btn-default" href="javascript:;"><i class="fa fa-expand"></i></a>
                        <a data-click="panel-reload" class="btn btn-xs btn-icon btn-circle btn-success" href="javascript:;"><i class="fa fa-repeat"></i></a>
                        <a data-click="panel-collapse" class="btn btn-xs btn-icon btn-circle btn-warning" href="javascript:;"><i class="fa fa-minus"></i></a>
                        <a data-click="panel-remove" class="btn btn-xs btn-icon btn-circle btn-danger" href="javascript:;"><i class="fa fa-times"></i></a>
                    </div>
                    <h4 class="panel-title">添加菜单</h4>
                </div>
                <div class="alert alert-info">
                    <i class="fa fa-info-circle fa-fw"></i> 添加菜单说明。
                </div>
                <div class="panel-body">
                	<form id="menuform">
                        <fieldset>
                            <legend>菜单信息</legend>
                            <div class="form-group">
                                <label for="menuName">菜单名称</label>
                                <input type="text" placeholder="名称" id="menuName" name="menuName" class="form-control required">
                            </div>
                            <div class="form-group">
                                <label for="href">菜单链接</label>
                                <input type="text" placeholder="链接" id="href" name="href" class="form-control required">
                            </div>
                            <div class="form-group">
                                <label for="menuCode">菜单码</label>
                                <input type="text" placeholder="菜单码" id="menuCode" name="menuCode" class="form-control required">
                            </div>
                            <div class="form-group">
                                <label for="icon">图标</label>
                                <input type="text" placeholder="图标代码" id="icon" name="icon" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="sort">排序</label>
                                <input type="text" placeholder="序号" id="sort" name="sort" class="form-control">
                            </div>
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" name="isActive" id="isActive" value="1"> 是否启用
                                </label>
                            </div>
                            <input type="hidden" name="parent.id" value="" id="parentId">
                            <input type="hidden" name="id" value="" id="menuFromId">
                            <button class="btn btn-sm btn-primary m-r-5" type="submit">保存</button>
                            <button class="btn btn-sm btn-default" type="reset">重置</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-md-4 ui-sortable">
            <div data-sortable-id="tree-view-2" class="panel panel-inverse">
                <div class="panel-heading">
                    <div class="panel-heading-btn">
                        <a data-click="panel-expand" class="btn btn-xs btn-icon btn-circle btn-default" href="javascript:;"><i class="fa fa-expand"></i></a>
                        <a data-click="panel-reload" class="btn btn-xs btn-icon btn-circle btn-success" href="javascript:;"><i class="fa fa-repeat"></i></a>
                        <a data-click="panel-collapse" class="btn btn-xs btn-icon btn-circle btn-warning" href="javascript:;"><i class="fa fa-minus"></i></a>
                        <a data-click="panel-remove" class="btn btn-xs btn-icon btn-circle btn-danger" href="javascript:;"><i class="fa fa-times"></i></a>
                    </div>
                    <h4 class="panel-title">菜单操作</h4>
                </div>
                <div class="alert alert-info">
                    <i class="fa fa-info-circle fa-fw"></i> 菜单说明。
                </div>
                <div class="panel-body">
	                <div class="well" id="btns">
		            </div>
                	<form id="elementform" class="m-t-20">
                        <fieldset>
                            <legend>操作信息</legend>
                            <div class="form-group">
                                <label for="exampleInputEmail1">操作名称</label>
                                <input type="text" placeholder="名称" id="elementName" name="elementName" class="form-control required">
                            </div>
                            <div class="form-group">
                                <label for="url">操作代码</label>
                                <input type="text" placeholder="代码" id="elementCode" name="elementCode" class="form-control required">
                            </div>
                            <div class="form-group">
                                <label for="sortNum">描述</label>
                                <textarea class="form-control" id="elementDesc" name="elementDesc"></textarea>
                            </div>
                            <input type="hidden" name="menuId" value="" id="menuId">
                            <input type="hidden" name="id" value="" id="elementFromId">
                            <button class="btn btn-sm btn-primary m-r-5" type="submit">保存</button>
                            <button class="btn btn-sm btn-default" type="reset">重置</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
<script id="btnstemp" type="text/html">
<<for(var i=0; i<btns.length; i++){>>
<span class="btn-span" data-id="<<=btns[i].id>>">
	<button class="btn btn-sm btn-primary" type="submit"><<=btns[i].elementName>>&nbsp;&nbsp;</button>
	<a class="btn-tr btn-danger" href="javascript:;"><i class="fa fa-times"></i></a>
</span>
<<}>>
</script>
<jsp:include page="../common/include/foot.jsp"/>
<script>
(function(){

    var setting = {
		edit: {
			enable: true,
			showRemoveBtn: showRemoveBtn,
			showRenameBtn: false
		},
   		data: {
            key: {
                name: "menuName",
                icon: null,
                url: null
            },
            simpleData: {
                enable: true,
                pIdKey: "parentId"
            }
		},
		view: {
			addHoverDom: addHoverDom,
			removeHoverDom: removeHoverDom,
			//dblClickExpand: false,
			showLine: true,
			selectedMulti: false,
			nameIsHTML: true, //为了可以使用fontawesome
			showTitle:false,
			showIcon: false
		},
		callback: {
			//beforeRemove: beforeRemove,
			onRemove: onRemove,
			onClick: onClick,
			onDblClick: onDblClick
		}
	}, treeObj;

    /* function beforeRemove(treeId, treeNode) {
		treeObj.selectNode(treeNode);
		return confirm("确认删除 节点 -- " + treeNode.name + " 吗？");
	} */
	function onRemove(e, treeId, treeNode) {
		$.ajax({
	    	url:'/sys/menu/delete',
	    	data:{id:treeNode.id},
	    	type:'post',
	    	success:function(result){
	    		if(result.code == '200'){
	    		}else{
	    		}
	    	}
	    });
	}
	var TimeFn = null;
	function onClick(event, treeId, treeNode){
		// 取消上次延时未执行的方法
	    clearTimeout(TimeFn);
	    //执行延时
	    TimeFn = setTimeout(function(){
	        console.log(treeNode)
	        //do function在此处写单击事件要执行的代码
	        $('#menuName').val($(treeNode.menuName).text().trim() || treeNode.menuName);
	        $('#href').val(treeNode.href);
	        $('#menuCode').val(treeNode.menuCode);//.attr("disabled", 'true');
	        $('#icon').val(treeNode.icon);
	        $('#isActive').attr('checked',treeNode.isActive == 1);
	        $('#sort').val(treeNode.sort || 30);
	        $('#parentId').val(treeNode.parentId);
	        $('#menuFromId').val(treeNode.id);
	        getMenuBtns(treeNode.id);
	    },200);
	}
	function onDblClick(event, treeId, treeNode){
		// 取消上次延时未执行的方法
	    clearTimeout(TimeFn);
	    //双击事件的执行代码
		console.log('双击');
        console.log(treeNode);
	}
	function showRemoveBtn(treeId, treeNode) {
		return !treeNode.isParent;
	}

	function addHoverDom(treeId, treeNode) {
		if ((treeNode.id == 0 || treeNode.pid == 0 || treeNode.pid == null) && $("#addBtn_"+treeNode.tId).length==0){
			var sObj = $("#" + treeNode.tId + "_span");
			var addStr = "<span class='button add' id='addBtn_" + treeNode.tId
				+ "' title='add node' onfocus='this.blur();'></span>";
			sObj.after(addStr);
			var btn = $("#addBtn_"+treeNode.tId);
			if (btn) btn.bind("click", function(){
				treeObj.addNodes(treeNode, {id:null, pId:treeNode.id, menuName:"新增菜单"});
				return false;
			});
		}
		
	};
	function removeHoverDom(treeId, treeNode) {
		$("#addBtn_"+treeNode.tId).unbind().remove();
	};

	$("#menuform").validate({
		submitHandler: function(form) {
		    $.ajax({
		    	url:'/sys/menu/addOrUpdate',
		    	data:$(form).serialize(),
		    	type:'post',
		    	success:function(result){
		    		if(result.code == '200'){
		    			alert('OK');
			    		initMenus();
		    		}else{
						alert(result.msg);		    			
		    		}
		    	}
		    });
	    }
    });
	
	$("#elementform").validate({
		submitHandler: function(form) {
			var menu = $(form).find('#menuId').val();
			if(!menu){
				alert('请选选择菜单');
				return;
			}
		    $.ajax({
		    	url:'/sys/element/addOrUpdate',
		    	data:$(form).serialize(),
		    	type:'post',
		    	success:function(result){
		    		if(result.code == '200'){
			    		alert("操作成功");
		    		}else{
						alert(result.msg);		    			
		    		}
		    	}
		    });
	    }
    });
	
	var initMenus = function(){
		var menus = [];
		menus.push({ id:0, pId:null, menuName:"菜单", open:true});
		$.ajax({
			url:'/sys/menu/getAllMenus',
	    	data:{},
	    	type:'post',
	    	success:function(result){
	    		$(result).each(function(index, menu){
	    			menu.menuName = '<i class="'+menu.icon+'"></i> '+menu.menuName;
	    			//menu.pId = menu.pid;
	    			menus.push(menu);
	    		});
	    		treeObj = $.fn.zTree.init($("#treeDemo"), setting, menus);
	    		treeObj.expandAll(true);
	    	}
		});
	}
	
	/* var getMenuInfo = function(nemuId){
		$.post();
	} */
	var getMenuBtns = function(menuId){
		if(!menuId){
			$('#btns').html('');
			return;
		}
		$.post('/sys/element/queryElementByMenu', {
			menuId: menuId
		}, function(btns){
			var html = template('btnstemp', {'btns':btns});
			$('#btns').html(html);
			$('#menuId').val(menuId);
		});
	}
	
	$('#btns').delegate('button', 'click', function(event){
		$.post('/sys/element/findById', {
			id: $(event.target).parent().attr('data-id')
		}, function(btn){
			$('#elementName').val(btn.elementName);
			$('#elementCode').val(btn.elementCode);//.attr("disabled", 'true');
			$('#elementDesc').val(btn.elementDesc);
			$('#elementFromId').val(btn.id);
		});
	});
	
	$('#btns').delegate('a', 'click', function(event){
		$.post('/sys/element/delete', {
			id: $(event.currentTarget).parent().attr('data-id')
		}, function(result){
			alert(result.code);
		});
	});
	
	initMenus();
	
})();
</script>
