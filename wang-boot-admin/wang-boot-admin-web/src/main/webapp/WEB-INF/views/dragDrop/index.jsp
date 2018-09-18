<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%    
String path = request.getContextPath();    
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%> 
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>首页</title>
<base href="${basePath}">
<link href="static/plugins/bootstrap-3.3.5-dist/css/bootstrap.css" rel="stylesheet" />
<link href="/static/plugins/font-awesome-4.5.0/css/font-awesome.css" rel="stylesheet"/>
<link href="/static/plugins/jquery-ui-1.11.4.custom/jquery-ui.css" rel="stylesheet"/>
<style>
	.one,.two,.three {
		border: 1px solid #ebccd1;
	}
	#a,#b,#c {
		height: 400px;
	}
    .ui-draggable,.ui-droppable { /*可拖拽样式*/
        background-color: #48CFAD;
        color: #3c763d;
    }
    .ui-draggable-dragging { /*拖拽过程中元素样式*/
        background-color: #A0D468;
        color: #F5F7FA;
    }
    .ui-droppable-active { /*可拖拽区域激活后的样式*/
        background-color: #4FC1E9;
        color: #F5F7FA;
    }
    .ui-droppable-hover { /*拖拽元素拖到区域的样式*/
    background-color: #BE90D4;
        color: #F5F7FA;
    }
</style>
</head>
<body>

<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Brand</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
      </ul>
      <form class="navbar-form navbar-left" role="search">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>

<div class="container con">
	<div class="row">
		<div class="col-md-3">
			<div class="panel panel-danger one">
				<div class="panel-heading">
				  	<h3 class="panel-title">Panel title</h3>
				</div>
			  	<ul id="a" class="list-group">
				  <li class="list-group-item" id="11"><span>Cras justo odio</span><span class="pull-right"><i class="fa fa-arrow-up"></i><i class="fa fa-arrow-down"></i></span></li>
				  <li class="list-group-item" id="12"><span>Dapibus ac facilisis in</span></li>
				  <li class="list-group-item" id="13"><span>Morbi leo risus</span></li>
				  <li class="list-group-item" id="14"><span>Porta ac consectetur ac</span></li>
				  <li class="list-group-item" id="15"><span>Vestibulum at eros</span></li>
				</ul>                                                 
				<div class="panel-footer">Panel footer</div>          
			</div>                                                    
		</div>                                                        
		<div class="col-md-3">                                        
			<div class="panel panel-danger two">                          
				<div class="panel-heading">                           
				  	<h3 class="panel-title">Panel title</h3>          
				</div>                                                
				<ul id="b" class="list-group">                        
				  <li class="list-group-item" id="21"><span>Cras justo odio</span></li>
				  <li class="list-group-item" id="22"><span>Dapibus ac facilisis in</span></li>
				  <li class="list-group-item" id="23"><span>Morbi leo risus</span></li>
				  <li class="list-group-item" id="24"><span>Porta ac consectetur ac</span></li>
				  <li class="list-group-item" id="25"><span>Vestibulum at eros</span></li>
				</ul>                                                
				<div class="panel-footer">Panel footer</div>         
			</div>                                                   
		</div>                                                       
		<div class="col-md-3">                                       
			<div class="panel panel-danger three">                         
				<div class="panel-heading">                          
				  	<h3 class="panel-title">Panel title</h3>         
				</div>                                               
				<ul id="c" class="list-group">                       
				  <li class="list-group-item" id="31"><span>hahahahahahaha</span></li>
				  <li class="list-group-item" id="32"><span>2222Dapibus ac facilisis in</span></li>
				  <li class="list-group-item" id="33"><span>Morbi leo risus</span></li>
				  <li class="list-group-item" id="34"><span>Porta ac consectetur ac</span></li>
				  <li class="list-group-item" id="35"><span>Vestibulum at eros</span></li>
				</ul>
				<div class="panel-footer">Panel footer</div>
			</div>
		</div>
		<div class="col-md-3">
		</div>
	</div>
</div>
<div class="container" id="target">
123
</div>
<script id="test" type="text/html">
<< if (isAdmin) { >>

<h1><<=title>></h1>
<ul>
    << for (var i = 0; i < list.length; i ++) { >>
        <li>索引 <<= i + 1 >> ：<<= list[i] >></li>
    << } >>
</ul>
<<=#formatDate(time, 'yyyy<b>年</b> MM<b>月</b> dd<b>日</b> HH:mm:ss.S')>>
<< } >>
</script>
<script type="text/javascript" src="/static/js/jquery-2.1.3.min.js"></script>
<script type="text/javascript" src="/static/plugins/bootstrap-3.3.5-dist/js/bootstrap.js"></script>
<!-- <script src="/static/js/DragDrop/modernizr.custom.js"></script>
<script src="/static/js/DragDrop/draggabilly.pkgd.min.js"></script>
<script src="/static/js/DragDrop/dragdrop.js"></script> -->
<!-- <script src="https://npmcdn.com/draggabilly@2.1/dist/draggabilly.pkgd.js"></script> -->
<script src="/static/plugins/jquery-ui-1.11.4.custom/jquery-ui.js"></script>
<script src="/static/plugins/artTemplate/dist/template-native.js"></script>

<script type="text/javascript">
$.extend({formatDate: function(date,format){if(!format)format="yyyy-MM-dd HH:mm:ss";date=new Date(parseInt(date));var dict={"yyyy":date.getFullYear(),"M":date.getMonth()+1,"d":date.getDate(),"H":date.getHours(),"m":date.getMinutes(),"s":date.getSeconds(),"S":(""+(date.getMilliseconds()+1000)).substr(1),"MM":(""+(date.getMonth()+101)).substr(1),"dd":(""+(date.getDate()+100)).substr(1),"HH":(""+(date.getHours()+100)).substr(1),"mm":(""+(date.getMinutes()+100)).substr(1),"ss":(""+(date.getSeconds()+100)).substr(1)};return format.replace(/(y+|M+|d+|H+|s+|m+|S)/g,function(a){return dict[a]})}});
(function() {
	console.log($.formatDate(new Date().getTime()));
	template.helper('formatDate', $.formatDate);
	var data = {
		title: '基本例子',
		isAdmin: true,
		list: ['文艺', '博客', '摄影', '电影', '民谣', '旅行', '吉他'],
		time: new Date().getTime()
	};
	var html = template('test', data);
	$('#target').html(html);

	$('.two .list-group-item').draggable({
        containment: '.con',
        revert: "invalid",
        scope: 'two-one',
        cursor: "move",
        //iframeFix: true,
        //stack: ".products",
        zIndex: 100,
        //snap: true,
        //opacity: 0.35,
        start: function(event, ui){
            //$(this).css('z-index','1052');
            //$('.two,.one').css({'z-index':'1051','position':'relative'});
            //$('.bs-example-modal-sm').modal('show')
        },
        stop: function(event, ui) {
//        $(this).css('z-index','');
//        $('.two,.one').css({'z-index':'','position':''});
//        $('.bs-example-modal-sm').modal('hide')
        }
    });
    $('.one .list-group-item').droppable({
        scope: 'two-one',
        activeClass: 'ui-droppable-active',
        hoverClass: 'ui-droppable-hover',
        over: function(event, ui) {
        },
        out: function(event, ui) {
        },
        drop: function( event, ui ) {
        	if(confirm('确定？')){
            	ui.draggable.remove();
        	}else{
	        	ui.draggable.css({
	        		left: '0px',
	        		top: '0px'
	        	});
        	}
        }
    });
    $('.three .list-group-item').draggable({
        containment: '.con',
        revert: "invalid",
        scope: 'three-two',
        cursor: "move",
        //iframeFix: true,
        //stack: ".products",
        zIndex: 100,
        //snap: true,
        //opacity: 0.35,
        start: function(event, ui){
            //$(this).css('z-index','1052');
            //$('.three,.two').css({'z-index':'1051','position':'relative'});
            //$('body').css("overflow","hidden")
            // $("#cover").show();
            //$('.bs-example-modal-sm').modal('show')
        },
        stop: function(event, ui) {
            //$(this).css('z-index','');
            //$('.three,.two').css({'z-index':'','position':''});
            //$('.bs-example-modal-sm').modal('hide')
        }
    });
    $('.two .list-group-item').droppable({
        scope: 'three-two',
        activeClass: 'ui-droppable-active',
        hoverClass: 'ui-droppable-hover',
        over: function(event, ui) {
        },
        out: function(event, ui) {
        },
        drop: function( event, ui ) {
            ui.draggable.remove();
        }
    });
    $('li span').popover({
        animation:true,
        delay: { "show": 200, "hide": 100 },
        trigger: 'hover ',
        template: '<div class="popover" role="tooltip" style="width: 300px;"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
        title: '提示',
        content: '概要信息 ',
        placement: 'top'
    });
})();
</script>
</body>
</html>	