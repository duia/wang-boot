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
<title>录题</title>
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
<meta content="" name="description" />
<meta content="" name="author" />
<link href="/static/plugins/jquery-tag-it/css/jquery.tagit.css" rel="stylesheet" />
</head>
<body>
<div id="content" class="content">
	<div class="row">
		<div class="col-md-3">

		</div>
		<div class="col-md-6">
			<div data-sortable-id="ui-unlimited-tabs-1" class="panel panel-inverse panel-with-tabs" data-init="true">
				<div class="panel-heading p-0">
					<div class="panel-heading-btn m-r-10 m-t-10">
						<a data-click="panel-expand" class="btn btn-xs btn-icon btn-circle btn-success" href="javascript:;"><i class="fa fa-expand"></i></a>
					</div>
					<!-- begin nav-tabs -->
					<div class="tab-overflow overflow-right">
						<ul class="nav nav-tabs nav-tabs-inverse">
							<li class="prev-button" style=""><a class="text-success" data-click="prev-tab" href="javascript:void(0);"><i class="fa fa-arrow-left"></i></a></li>
							<li class="active"><a data-toggle="tab" href="#" class="tiType" data-type="1">单选</a></li>
							<li class=""><a data-toggle="tab" href="#" class="tiType" data-type="2">多选</a></li>
							<li class="next-button" style=""><a class="text-success" data-click="next-tab" href="javascript:void(0);"><i class="fa fa-arrow-right"></i></a></li>
						</ul>
					</div>
				</div>
				<div class="tab-content">
					<div class="tab-pane fade active in">
						<form class="form-horizontal">

						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<script id="danxuan" type="text/html">
	<< include('ti_stem', stem)>>
	<< include('ti_option', option)>>
	<legend>更多设置</legend>
	<< include('ti_point')>>
	<< include('ti_more')>>
</script>
<script id="ti_stem" type="text/html">
	<div class="form-group">
		<label class="col-md-2 control-label">题目</label>
		<div class="col-md-8">
			<div contenteditable="true" class="form-control" min="<<=minLength>>" max="<<=maxLength>>"></div>
		</div>
	</div>
</script>
<script id="ti_option" type="text/html">
	<div class="form-group">
		<div class="col-md-8 col-md-offset-2">
			<div contenteditable="true" class="form-control">选项</div>
			<span class="fa fa-times form-control-feedback" style="left: 522px;"></span>
		</div>
		<div class="col-md-2">
			<div class="<< if(tiType=='2'){ >>checkbox<< }else{ >>radio<< } >>">
				<label>
					<input type="<< if(tiType=='2'){ >>checkbox<< }else{ >>radio<< } >>" value="" name="opt">
					正确答案
				</label>
			</div>
		</div>
	</div>
	<div class="form-group">
		<div class="col-md-8 col-md-offset-2">
			<a class="btn btn-white btn-block addOption" href="javascript:;">添加一项</a>
		</div>
	</div>
	<div class="form-group hide">
		<div class="col-md-8 col-md-offset-2">
			<div contenteditable="true" class="form-control">选项</div>
			<span class="fa fa-times form-control-feedback" style="left: 522px;"></span>
		</div>
		<div class="col-md-2">
			<div class="<< if(tiType=='2'){ >>checkbox<< }else{ >>radio<< } >>">
				<label>
					<input type="<< if(tiType=='2'){ >>checkbox<< }else{ >>radio<< } >>" value="" name="opt">
					正确答案
				</label>
			</div>
		</div>
	</div>
</script>
<script id="ti_point" type="text/html">
	<div class="form-group">
		<label class="col-md-2 control-label">考点</label>
		<div class="col-md-8">
			<ul class="danger tagit ui-widget ui-widget-content ui-corner-all" id="jquery-tagIt-danger">
				<li class="tagit-choice ui-widget-content ui-state-default ui-corner-all tagit-choice-editable"><span class="tagit-label">Tag1</span><a class="tagit-close"><span class="text-icon">×</span><span class="ui-icon ui-icon-close"></span></a><input type="hidden" class="tagit-hidden-field" name="tags" value="Tag1"></li>
				<li class="tagit-choice ui-widget-content ui-state-default ui-corner-all tagit-choice-editable"><span class="tagit-label">Tag2</span><a class="tagit-close"><span class="text-icon">×</span><span class="ui-icon ui-icon-close"></span></a><input type="hidden" class="tagit-hidden-field" name="tags" value="Tag2"></li>
				<li class="tagit-choice ui-widget-content ui-state-default ui-corner-all tagit-choice-editable"><span class="tagit-label">Tag2</span><a class="tagit-close"><span class="text-icon">×</span><span class="ui-icon ui-icon-close"></span></a><input type="hidden" class="tagit-hidden-field" name="tags" value="Tag2"></li>
				<li class="tagit-choice ui-widget-content ui-state-default ui-corner-all tagit-choice-editable"><span class="tagit-label">德瓦达打哇大挖的哇</span><a class="tagit-close"><span class="text-icon">×</span><span class="ui-icon ui-icon-close"></span></a><input type="hidden" class="tagit-hidden-field" name="tags" value="Tag2"></li>
				<li class="tagit-choice ui-widget-content ui-state-default ui-corner-all tagit-choice-editable"><span class="tagit-label">汉子看俺看问答</span><a class="tagit-close"><span class="text-icon">×</span><span class="ui-icon ui-icon-close"></span></a><input type="hidden" class="tagit-hidden-field" name="tags" value="Tag2"></li>
				<li class="tagit-choice ui-widget-content ui-state-default ui-corner-all tagit-choice-editable"><span class="tagit-label">哈哈哈哈哈</span><a class="tagit-close"><span class="text-icon">×</span><span class="ui-icon ui-icon-close"></span></a><input type="hidden" class="tagit-hidden-field" name="tags" value="Tag2"></li>
			</ul>
		</div>
	</div>
</script>
<script id="ti_more" type="text/html">
	<div class="form-group">
		<label class="col-md-2 control-label">解析</label>
		<div class="col-md-8">
			<input type="text" placeholder="Default input" class="form-control">
		</div>
	</div>
	<div class="form-group">
		<label class="col-md-2 control-label">题类</label>
		<div class="col-md-8">
			<label class="radio-inline">
				<input type="radio" checked="" value="option1" name="optionsRadios">
				真题
			</label>
			<label class="radio-inline">
				<input type="radio" value="option2" name="optionsRadios">
				模拟
			</label>
		</div>
	</div>
	<div class="form-group">
		<label class="col-md-2 control-label">来源</label>
		<div class="col-md-8">
			<label class="radio-inline">
				<input type="radio" value="option1" name="optionsRadios1">
				参考书
			</label>
			<label class="radio-inline">
				<input type="radio" value="option2" name="optionsRadios1">
				网络
			</label>
			<label class="radio-inline">
				<input type="radio" value="option2" name="optionsRadios1">
				自编
			</label>
		</div>
	</div>
	<div class="form-group">
		<label class="col-md-2 control-label">年份</label>
		<div class="col-md-8">
			<select class="form-control">
				<option>2017</option>
				<option>2016</option>
				<option>2015</option>
				<option>2014</option>
				<option>2013</option>
			</select>
		</div>
	</div>
</script>
<script src="/static/plugins/jquery-tag-it/js/tag-it.js"></script>
<script src="/static/plugins/ckeditor/ckeditor.js"></script>
<script src="/static/plugins/artTemplate/dist/template-native.js"></script>
<script type="text/javascript">
	(function () {
		$('.nav-tabs').delegate('.tiType', 'click', function (ev) {
			var $target = $(ev.target);
			var type = $target.attr('data-type');

			var config = {
                stem: {
                    minLength: 2,
					maxLength: 100
				},
				option: {
                    tiType: type
				}
			};
			var html = template('danxuan', config);
			$('form').html(html);
			CKEDITOR.inlineAll();
        });
		$('form').delegate('.addOption', 'click', function (ev) {
		    var $this = $(ev.target).parents('.form-group');
			var temp = $this.next().clone(true).removeClass('hide');
            $this.before(temp);
            CKEDITOR.inlineAll();
        });
    })();
</script>
</body>
</html>