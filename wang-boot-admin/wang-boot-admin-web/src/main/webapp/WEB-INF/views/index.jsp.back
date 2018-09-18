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
<title>首页</title>
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
<meta content="" name="description" />
<meta content="" name="author" />

<!-- ================== BEGIN BASE CSS STYLE ================== -->
<link href="/static/plugins/jquery-ui-1.11.4.custom/jquery-ui.min.css" rel="stylesheet" />
<link href="/static/plugins/bootstrap-3.3.5-dist/css/bootstrap.min.css" rel="stylesheet" />
<link href="/static/plugins/font-awesome-4.5.0/css/font-awesome.min.css" rel="stylesheet" />
<link href="/static/plugins/color_admin/css/animate.min.css" rel="stylesheet" />
<link href="/static/plugins/color_admin/css/style.min.css" rel="stylesheet" />
<link href="/static/plugins/color_admin/css/style-responsive.min.css" rel="stylesheet" />
<link href="/static/plugins/color_admin/css/theme/default.css" rel="stylesheet" id="theme" />
<!-- ================== END BASE CSS STYLE ================== -->
<link href="/static/plugins/DataTables-1.10.12/media/css/dataTables.bootstrap.css" rel="stylesheet" id="theme" />
<link href="/static/plugins/bootstrap3-dialog-master/dist/css/bootstrap-dialog.css" rel="stylesheet">
<link href="/static/plugins/zTree_v3-master/css/zTreeStyle/zTreeStyle.css" rel="stylesheet" />
<link href="/static/plugins/jquery-validation-1.14.0/css/validation.css" rel="stylesheet" />

<!-- ================== BEGIN PAGE LEVEL STYLE ================== -->
<script src="/static/plugins/pace/pace.min.js"></script>
<!-- ================== END PAGE LEVEL STYLE ================== -->
</head>
<body>
	<!-- begin #page-loader -->
	<div id="page-loader" class="fade in">
		<span class="spinner"></span>
	</div>
	<!-- end #page-loader -->
	<!-- begin #page-container -->
	<div id="page-container" class="fade page-sidebar-fixed page-header-fixed">
		<!-- 头部 -->
		<div id="header" class="header navbar navbar-default navbar-fixed-top">
			<!-- begin container-fluid -->
			<div class="container-fluid">
				<!-- begin mobile sidebar expand / collapse button -->
				<div class="navbar-header">
					<a href="javascript:;" class="navbar-brand">
						<span class="navbar-logo"></span> wpc
					</a>
				</div>
				<!-- end mobile sidebar expand / collapse button -->

				<!-- begin header navigation right -->
				<ul class="nav navbar-nav navbar-right">
					<li class="dropdown navbar-user">
						<a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown">
							<img src="/static/plugins/color_admin/img/user-11.jpg" alt="" />
							<span class="hidden-xs">Adam Schwartz</span> <b class="caret"></b>
						</a>
						<ul class="dropdown-menu animated fadeInLeft">
							<li class="arrow"></li>
							<li><a href="javascript:;">Edit Profile</a></li>
							<li><a href="javascript:;"><span class="badge badge-danger pull-right">2</span> Inbox</a></li>
							<li><a href="javascript:;">Calendar</a></li>
							<li><a href="javascript:;">Setting</a></li>
							<li class="divider"></li>
							<li><a href="/logout">注销</a></li>
						</ul>
					</li>
				</ul>
				<!-- end header navigation right -->
			</div>
			<!-- end container-fluid -->
		</div>
		<!-- 头部 -->

		<!-- 菜单 -->
		<div id="sidebar" class="sidebar">
			<!-- begin sidebar scrollbar -->
			<div data-scrollbar="true" data-height="100%">
				<!-- begin sidebar user -->
				<ul class="nav">
					<li class="nav-profile">
						<div class="image">
							<a href="javascript:;">
								<img src="/static/plugins/color_admin/img/user-11.jpg" alt="" />
							</a>
						</div>
						<div class="info">
							W鹏程 <small>个人网站</small>
						</div>
					</li>
				</ul>
				<!-- end sidebar user -->
				<!-- begin sidebar nav -->
				<ul class="nav">
					<li class="nav-header">菜单</li>
					<!-- 这里加载动态加在来的菜单 -->
					<!-- 静态帮助菜单 -->
					<li class="has-sub">
						<a href="javascript:;">
						    <b class="caret pull-right"></b>
						    <i class="fa fa-align-left"></i> 
						    <span>帮助</span>
						</a>
						<ul class="sub-menu">
							<li class="has-sub">
								<a href="javascript:;">
						            <b class="caret pull-right"></b>
						            Menu 1.1
						        </a>
								<ul class="sub-menu">
									<li class="has-sub">
										<a href="javascript:;">
										    <b class="caret pull-right"></b>
										    Menu 2.1
										</a>
										<ul class="sub-menu">
											<li><a href="javascript:;">Menu 3.1</a></li>
											<li><a href="javascript:;">Menu 3.2</a></li>
										</ul>
									</li>
									<li><a href="javascript:;">Menu 2.2</a></li>
									<li><a href="javascript:;">Menu 2.3</a></li>
								</ul>
							</li>
							<li class="has-sub">
								<a href="javascript:;">
						            <b class="caret pull-right"></b>
						            UI
						        </a>
								<ul class="sub-menu">
									<li><a href="#static/plugins/color_admin/html/ui_general.html" data-toggle="ajax">General</a></li>
									<li><a href="#static/plugins/color_admin/html/ui_typography.html" data-toggle="ajax">Typography</a></li>
									<li><a href="#static/plugins/color_admin/html/ui_tabs_accordions.html" data-toggle="ajax">Tabs & Accordions</a></li>
									<li><a href="#static/plugins/color_admin/html/ui_unlimited_tabs.html" data-toggle="ajax">Unlimited Nav Tabs</a></li>
									<li><a href="#static/plugins/color_admin/html/ui_modal_notification.html" data-toggle="ajax">Modal & Notification</a></li>
									<li><a href="#static/plugins/color_admin/html/ui_widget_boxes.html" data-toggle="ajax">Widget Boxes</a></li>
									<li><a href="#static/plugins/color_admin/html/ui_media_object.html" data-toggle="ajax">Media Object</a></li>
									<li><a href="#static/plugins/color_admin/html/ui_buttons.html" data-toggle="ajax">Buttons</a></li>
									<li><a href="#static/plugins/color_admin/html/ui_icons.html" data-toggle="ajax">Icons</a></li>
								</ul>
							</li>
							<li class="has-sub">
								<a href="javascript:;">
						            <b class="caret pull-right"></b>
				            		表单
						        </a>
								<ul class="sub-menu">
									<li><a href="#static/plugins/color_admin/html/form_elements.html" data-toggle="ajax">Form Elements</a></li>
									<li><a href="#static/plugins/color_admin/html/form_plugins.html" data-toggle="ajax">Form Plugins</a></li>
									<li><a href="#static/plugins/color_admin/html/form_slider_switcher.html" data-toggle="ajax">Form Slider + Switcher</a></li><!--  -->
									<li><a href="#static/plugins/color_admin/html/form_validation.html" data-toggle="ajax">Form Validation</a></li><!--  -->
									<li><a href="#static/plugins/color_admin/html/form_wizards.html" data-toggle="ajax">Wizards</a></li><!--  -->
									<li><a href="#static/plugins/color_admin/html/form_wizards_validation.html" data-toggle="ajax">Wizards + Validation</a></li><!--  -->
									<li><a href="#static/plugins/color_admin/html/form_wysiwyg.html" data-toggle="ajax">WYSIWYG</a></li>
									<li><a href="#static/plugins/color_admin/html/form_multiple_upload.html" data-toggle="ajax">Multiple File Upload</a></li>
								</ul>
							</li>
							<li class="has-sub">
								<a href="javascript:;">
						            <b class="caret pull-right"></b>
				            		其他
						        </a>
								<ul class="sub-menu">
									<li><a href="#static/plugins/color_admin/html/index.html" data-toggle="ajax">首页一</a></li>
									<li><a href="#static/plugins/color_admin/html/index_v2.html" data-toggle="ajax">首页二</a></li>
									<li><a href="#static/plugins/color_admin/html/extra_timeline.html" data-toggle="ajax">时间轴</a></li>
									<li><a href="#static/plugins/color_admin/html/extra_search_results.html" data-toggle="ajax">搜索列表</a></li>
								</ul>
							</li>
							<li><a href="#static/plugins/color_admin/html/helper_css.html" data-toggle="ajax">辅助CSS Class</a></li>
						</ul>
					</li>
					<!-- 菜单栏缩放按钮 -->
					<li><a href="javascript:;" class="sidebar-minify-btn" data-click="sidebar-minify"><i class="fa fa-angle-double-left"></i></a></li>
				</ul>
				<!-- end sidebar nav -->
			</div>
			<!-- end sidebar scrollbar -->
		</div>
		<div class="sidebar-bg"></div>
		<!-- 菜单 -->

		<!-- 内容 -->
		<div id="ajax-content"></div>
		<!-- 内容 -->
		
		<!-- 页尾 -->
		<div id="footer" class="footer">
			wpcfree@qq.com
		</div>
		<!-- 页尾 -->
	
		<!-- 主题设置 -->
		<div class="theme-panel">
			<a href="javascript:;" data-click="theme-panel-expand" class="theme-collapse-btn"> <i class="fa fa-cog"></i>
			</a>
			<div class="theme-panel-content">
				<h5 class="m-t-0">Color Theme</h5>
				<ul class="theme-list clearfix">
					<li class="active"><a href="javascript:;" class="bg-green" data-theme="default" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Default"> </a></li>
					<li><a href="javascript:;" class="bg-red" data-theme="red" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Red"> </a></li>
					<li><a href="javascript:;" class="bg-blue" data-theme="blue" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Blue"></a> </li>
					<li><a href="javascript:;" class="bg-purple" data-theme="purple" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Purple"> </a></li>
					<li><a href="javascript:;" class="bg-orange" data-theme="orange" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Orange"> </a></li>
					<li><a href="javascript:;" class="bg-black" data-theme="black" data-click="theme-selector" data-toggle="tooltip" data-trigger="hover" data-container="body" data-title="Black"> </a></li>
				</ul>
				<div class="divider"></div>
				<div class="row m-t-10">
					<div class="col-md-5 control-label double-line">Header Styling</div>
					<div class="col-md-7">
						<select name="header-styling" class="form-control input-sm">
							<option value="1">default</option>
							<option value="2">inverse</option>
						</select>
					</div>
				</div>
				<div class="row m-t-10">
					<div class="col-md-5 control-label">Header</div>
					<div class="col-md-7">
						<select name="header-fixed" class="form-control input-sm">
							<option value="1">fixed</option>
							<option value="2">default</option>
						</select>
					</div>
				</div>
				<div class="row m-t-10">
					<div class="col-md-5 control-label double-line">Sidebar Styling</div>
					<div class="col-md-7">
						<select name="sidebar-styling" class="form-control input-sm">
							<option value="1">default</option>
							<option value="2">grid</option>
						</select>
					</div>
				</div>
				<div class="row m-t-10">
					<div class="col-md-5 control-label">Sidebar</div>
					<div class="col-md-7">
						<select name="sidebar-fixed" class="form-control input-sm">
							<option value="1">fixed</option>
							<option value="2">default</option>
						</select>
					</div>
				</div>
			</div>
		</div>
		<!-- 主题设置 -->
		
		<!-- 回到顶部 -->
		<a href="javascript:;" class="btn btn-icon btn-circle btn-success btn-scroll-to-top fade" data-click="scroll-top"> 
			<i class="fa fa-angle-up"></i>
		</a>
		<!-- 回到顶部 -->
		
	</div>

<!-- ================== BEGIN BASE JS ================== -->
<script src="/static/js/jquery-2.1.3.min.js"></script>
<script src="/static/js/jquery-migrate-1.1.0.min.js"></script>
<script src="/static/plugins/jquery-ui-1.11.4.custom/jquery-ui.min.js"></script>
<script src="/static/plugins/bootstrap-3.3.5-dist/js/bootstrap.min.js"></script>
<!--[if lt IE 9]>
<script src="/static/plugins/color_admin/crossbrowserjs/html5shiv.js"></script>
<script src="/static/plugins/color_admin/crossbrowserjs/respond.min.js"></script>
<script src="/static/plugins/color_admin/crossbrowserjs/excanvas.min.js"></script>
<![endif]-->
<script src="/static/plugins/jquery-hashchange/jquery.hashchange.min.js"></script>
<script src="/static/plugins/slimscroll/jquery.slimscroll.min.js"></script>
<script src="/static/plugins/jquery-cookie/jquery.cookie.js"></script>
<!-- ================== END BASE JS ================== -->
<script src="/static/plugins/DataTables-1.10.12/media/js/jquery.dataTables.js"></script>
<script src="/static/plugins/DataTables-1.10.12/media/js/dataTables.bootstrap.js"></script>
<script src="/static/plugins/bootstrap3-dialog-master/dist/js/bootstrap-dialog.js"></script>
<script src="/static/plugins/jquery-validation-1.14.0/dist/jquery.validate.min.js"></script>
<script src="/static/plugins/jquery-validation-1.14.0/dist/localization/messages_zh.min.js"></script>
<script src="/static/plugins/zTree_v3-master/js/jquery.ztree.all.min.js"></script>
<script src="/static/plugins/artTemplate/dist/template-native.js"></script>
<script src="/static/js/common/infoVerify.js"></script>

<!-- ================== BEGIN PAGE LEVEL JS ================== -->
<script src="/static/plugins/color_admin/js/apps.js"></script>
<script src="/static/js/index.js"></script>
<!-- ================== END PAGE LEVEL JS ================== -->
<script>
	MyIndex.init();
</script>
</body>
</html>