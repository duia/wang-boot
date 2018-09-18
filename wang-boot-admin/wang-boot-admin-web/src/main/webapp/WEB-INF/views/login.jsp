<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="common/include/taglib.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html style="overflow-x:auto;overflow-y:auto;">
<!--<![endif]-->
<head>
<meta charset="utf-8" />
<title>登陆</title>
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
<meta content="" name="description" />
<meta content="" name="author" />

<!-- ================== BEGIN BASE CSS STYLE ================== -->
<link href="/static/plugins/bootstrap-3.3.5-dist/css/bootstrap.min.css" rel="stylesheet" />
<link href="/static/plugins/color_admin/css/animate.min.css" rel="stylesheet" />
<link href="/static/plugins/color_admin/css/style.min.css" rel="stylesheet" />
<link href="/static/plugins/color_admin/css/style-responsive.min.css" rel="stylesheet" />
<link href="/static/plugins/color_admin/css/theme/default.css" rel="stylesheet" id="theme" />
<!-- ================== END BASE CSS STYLE ================== -->

<!-- ================== BEGIN PAGE LEVEL STYLE ================== -->
<script src="/static/plugins/pace/pace.min.js"></script>
<!-- ================== END PAGE LEVEL STYLE ================== -->
</head>
<body class="pace-top">
	<!-- begin #page-loader -->
	<div id="page-loader" class="fade in"><span class="spinner"></span></div>
	<!-- end #page-loader -->
	
	<div class="login-cover">
	    <div class="login-cover-image"><img src="/static/images/login-bg/bg-1.jpg" data-id="login-cover-image" alt="" /></div>
	    <div class="login-cover-bg"></div>
	</div>
	<!-- begin #page-container -->
	<div id="page-container" class="fade">
	    <!-- begin login -->
        <div class="login login-v2" data-pageload-addclass="animated fadeIn">
            <!-- begin brand -->
            <div class="login-header">
                <div class="brand">
                    <span class="logo"></span> Color Admin
                    <small>responsive bootstrap 3 admin template</small>
                </div>
                <div class="icon">
                    <i class="fa fa-sign-in"></i>
                </div>
            </div>
            <!-- end brand -->
            <div class="login-content">
                <form action="/login" method="POST" class="margin-bottom-0">
                    <div class="form-group m-b-20">
                        <input type="text" class="form-control input-lg" placeholder="用户名" name="loginName" value="${loginName}"/>
                    </div>
                    ${message}
                    <div class="form-group m-b-20">
                        <input type="text" class="form-control input-lg" placeholder="密码" name="password" value="${password}"/>
                    </div>
                    <div class="checkbox m-b-20">
                        <label>
                            <input type="checkbox" name="rememberMe" value="true" <c:if test="${rememberMe}">checked</c:if>/> Remember Me
                        </label>
                    </div>
                    <div class="login-buttons">
                        <button type="submit" class="btn btn-success btn-block btn-lg">Sign me in</button>
                    </div>
                    <div class="m-t-20">
                        Not a member yet? Click <a href="#">here</a> to register.
                    </div>
                </form>
            </div>
        </div>
        <!-- end login -->
        
        <ul class="login-bg-list">
            <li class="active"><a href="#" data-click="change-bg"><img src="/static/images/login-bg/bg-1.jpg" alt="" /></a></li>
            <li><a href="#" data-click="change-bg"><img src="/static/images/login-bg/bg-2.jpg" alt="" /></a></li>
            <li><a href="#" data-click="change-bg"><img src="/static/images/login-bg/bg-3.jpg" alt="" /></a></li>
            <li><a href="#" data-click="change-bg"><img src="/static/images/login-bg/bg-4.jpg" alt="" /></a></li>
            <li><a href="#" data-click="change-bg"><img src="/static/images/login-bg/bg-5.jpg" alt="" /></a></li>
            <li><a href="#" data-click="change-bg"><img src="/static/images/login-bg/bg-6.jpg" alt="" /></a></li>
        </ul>
        
	</div>
	<!-- end page container -->
<!-- ================== BEGIN BASE JS ================== -->
<script src="/static/js/jquery-1.9.1.min.js"></script>
<script src="/static/js/jquery-migrate-1.1.0.min.js"></script>
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

<!-- ================== BEGIN PAGE LEVEL JS ================== -->
<script src="/static/plugins/color_admin/js/login-v2.demo.js"></script>
<script src="/static/plugins/color_admin/js/apps.js"></script>
<!-- ================== END PAGE LEVEL JS ================== -->
<script>
$(document).ready(function() {
	App.init();
	LoginV2.init();
});
</script>
</body>
</html>