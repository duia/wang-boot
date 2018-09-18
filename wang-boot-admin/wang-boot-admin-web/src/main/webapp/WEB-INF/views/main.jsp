<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%    
String path = request.getContextPath();    
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<!--[if IE 8]>
<html lang="en" class="ie8"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
<!--<![endif]-->

<head>
<meta charset="utf-8" />
<title>首页</title>
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
<meta content="" name="description" />
<meta content="" name="author" />
<link href="/static/plugins/fullcalendar/fullcalendar.css" rel="stylesheet" />
</head>
<body>
<div id="content" class="content">
    <!-- begin breadcrumb -->
    <ol class="breadcrumb pull-right">
        <li><a href="javascript:;">Home</a></li>
        <li class="active">Calendar</li>
    </ol>
    <!-- end breadcrumb -->
    <!-- begin page-header -->
    <h1 class="page-header">Calendar <small>header small text goes here...</small></h1>
    <!-- end page-header -->
    <!-- begin panel -->
    <div class="panel panel-inverse">
        <div class="panel-heading">
            <div class="panel-heading-btn">
                <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i class="fa fa-expand"></i></a>
                <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i class="fa fa-repeat"></i></a>
                <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i class="fa fa-minus"></i></a>
                <a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i class="fa fa-times"></i></a>
            </div>
            <h4 class="panel-title">Calendar</h4>
        </div>
        <div class="panel-body p-0">
            <div class="vertical-box">
                <div class="vertical-box-column p-15 bg-silver width-sm">
                    <div id="external-events" class="calendar-event">
                        <h4 class=" m-b-20">Draggable Events</h4>
                        <div style="position: relative;" class="external-event bg-purple ui-draggable" data-bg="bg-purple" data-title="Discussion" data-media="<i class='fa fa-comments'></i>" data-desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
                            <h5><i class="fa fa-comments fa-lg fa-fw"></i> Discussion</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div style="position: relative;" class="external-event bg-blue ui-draggable" data-bg="bg-blue" data-title="Dinner" data-media="<i class='fa fa-cutlery'></i>" data-desc="Cum sociis natoque penatibus et magnis dis parturient montes."> 
                            <h5><i class="fa fa-cutlery fa-lg fa-fw"></i> Dinner</h5>
                            <p>Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                        </div>
                        <div style="position: relative;" class="external-event bg-green ui-draggable" data-bg="bg-green" data-title="Brainstorming" data-media="<i class='fa fa-lightbulb-o'></i>" data-desc="Mauris tristique massa eu venenatis semper. Phasellus a nibh nisi.">
                            <h5><i class="fa fa-lightbulb-o fa-lg fa-fw"></i> Brainstorming</h5>
                            <p>Mauris tristique massa eu venenatis semper. Phasellus a nibh nisi.</p>
                        </div>
                        <div style="position: relative;" class="external-event bg-orange ui-draggable" data-bg="bg-orange" data-title="Performance Rating" data-media="<i class='fa fa-tasks'></i>" data-desc="Class aptent taciti sociosqu ad litora torquent per conubia nostra.">
                             <h5><i class="fa fa-tasks fa-lg fa-fw"></i> Performance Rating</h5>
                            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                        </div>
                        <div style="position: relative;" class="external-event bg-red ui-draggable" data-bg="bg-red" data-title="Video Shooting" data-media="<i class='fa fa-video-camera'></i>" data-desc="Donec ligula nisi, tempus eu egestas id, auctor sit amet velit.">
                            <h5><i class="fa fa-video-camera fa-lg fa-fw"></i> Video Shooting</h5>
                            <p>Donec ligula nisi, tempus eu egestas id, auctor sit amet velit.</p>
                        </div>
                        <div class="checkbox">
                            <label>
                                <input id="drop-remove" type="checkbox">
                                remove after drop
                            </label>
                        </div>
                    </div>
                </div>
                <div id="calendar" class="vertical-box-column p-15 calendar fc fc-ltr">
                </div>
            </div>
        </div>
    </div>
    <!-- end panel -->
</div>
<!-- <script src="static/plugins/fullcalendar/fullcalendar.js"></script> -->
<script>

    $.getScript('/static/plugins/fullcalendar/calendar.demo.js').done(function() {
        Calendar.init();
    });
</script>
</body>
</html>