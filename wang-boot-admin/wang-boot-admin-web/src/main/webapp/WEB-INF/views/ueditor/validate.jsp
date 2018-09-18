<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%    
String path = request.getContextPath();    
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%> 
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Hello</title>
</head>
<body>
<form id="myform">
    <h3>Ueditor在jquery validation下的验证</h3>
	<div id="ti">
		<div>
		    <label>题干</label>
		    <textarea id="title" name="title" rows="15" cols="80" style="width: 80%"></textarea>
		</div>
	    <br />
	    <!-- <div>
		    <label>答案</label>
		    <textarea id="answer" name="answer" rows="15" cols="80" style="width: 80%"></textarea>
		</div>
	    <br /> -->
	    <div>
	    	<label>题型</label>
		    <input type="radio" name="type" value="1">真题
		    <input type="radio" name="type" value="2">模拟题
	    </div>
	    <br />
	    <div>
	    	<label>知识点</label>
		    <input type="checkbox" name="points" value="1">三角函数
		    <input type="checkbox" name="points" value="2">三角形
	    </div>
	    <br />
	</div>
    <input type="submit" value="提交" />
</form>
<button class="addOpt">添加一个编辑器</button>
<script type="text/javascript">window.PROJECT_CONTEXT = "${path}/";</script>
<script src="/static/plugins/UEditor/ueditor.config.js"></script>
<script src="/static/plugins/UEditor/ueditor.all.js"></script>
<script src="/static/plugins/UEditor/lang/zh-cn/zh-cn.js"></script>
<script src="/static/js/jquery-2.1.3.min.js"></script>
<script src="/static/js/jquery.validate.js"></script>
<script src="/static/js/wintrue.js"></script>
<script type="text/javascript">
$(function(){
    UE.getEditor('title');
    /* UE.getEditor('answer'); */

    var myform = $("#myform").submit(function(){
    	UE.getEditor('title').sync();
    }).validate({
    	submitHandler: function(form) {
			//验证通过后 的js代码写在这里
            var $form = $(form),
            data = $form.serialize();
            console.log(data);
            $.ajax({
            	url:'/ueditor/submit',
            	type:'post',
            	data:data,
            	success:function(result){
            		console.log(result);
            	}
            });
		},
		ignore: "",
        onfocusout:false,
        onkeyup:false,
        rules: {
        	title: { required: true, minlength: 6, maxlength: 12 },
        	answer:{required: true},
        	type:{required: true},
        	points:{required: true}
	    },
	    messages: {
	    	title: {
	    		required:'题干不能为空',
	    		minlength:'长度不够',
	    		maxlength:'长度太长'
	    	}
	    },
        showErrors : function(errorMap, errorList) {  
            var msg = "";  
            $.each(errorList, function(i, v) {  
                console.log(v.element);
                /* $(v.element).parent().append(v.message); */
                flash(v.element,8,10,100);
            });  
        }
	});
    var index = 0;
    $('.addOpt').on('click', function(){
	   	var temp = [];
    	temp.push('<div><label>选项<input type="text" name="options['+index+'].sortNum" value="'+index+'"></label>');
    	temp.push('<textarea id="option'+index+'" name="options['+index+'].content" rows="15" cols="80" style="width: 80%" required></textarea></div>');
  			temp.push('正确答案<input type="checkbox" name="answer" value="'+index+'"><br/>');
    	$('#ti').append(temp.join(''));
    	UE.getEditor('option'+index);
    	index++;
    });
    
})
</script>
</body>
</html>	