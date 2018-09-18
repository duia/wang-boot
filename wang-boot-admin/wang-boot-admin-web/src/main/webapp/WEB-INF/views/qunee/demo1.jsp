<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Qunee + EasyUI 同步示例</title>
<link rel="stylesheet" type="text/css" href="../static/js/bootstrap-3.3.5-dist/css/bootstrap.min.css"/>
<link rel="stylesheet" type="text/css" href="../static/js/jquery-easyui-1.4.4/themes/gray/easyui.css">
<link rel="stylesheet" type="text/css" href="../static/js/jquery-easyui-1.4.4/themes/icon.css">
<style>
    #graph_panel {
        height: 100%;
    }
    .tabs-panels .panel-body{
        border-left: solid 1px #DDD;
        border-right: solid 1px #DDD;
    }
    .tree-node {
        height: 20px;
    }
    .q-panel {
        padding-top: 40px;
        position: relative;
    }
    .q-toolbar {
        padding: 5px;
    }
    .q-panel .q-toolbar {
        position: absolute;
        top: 0px;
        height: 40px;
        width: 100%;
        z-index: 1;
    }
    .q-panel .q-content {
        height: 100%;
        background-color: #FFF;
        overflow: hidden;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        position: relative;
    }
    .q-canvas {
        height: 100%;
    }
    #canvas_panel {
        position: relative;
        overflow: hidden;
    }
    #canvas {
        width: 100%;
        background-color: #FFF;
        outline: none;
        overflow: hidden;
    }
    #toolbar {
        background-color: #F8F8F8;
        border-bottom: solid 1px #DDD;
        padding: 5px;
    }
    #toolbar .btn, #toolbar .btn-group {
        margin-right: 5px;
    }
    #toolbar .btn-group .btn {
        margin-right: 0px;
    }
    #toolbox {
        position: absolute;
        top: 0px;
        background-color: #F8F8F8;
        padding: 5px;
    }
    #toolbox > img, #toolbox > button {
        display: block;
        padding: 8px 7px 0 7px;
        border-radius: 0px;
    }
    .layout-split-west {
        border-right: 5px solid rgba(255, 255, 255, 0);
    }
    #center_panel {
        border: none;
    }
    .panel {
        -webkit-box-shadow: none;
        box-shadow: none;
    }
    #footer {
        text-align: center;
        padding: 8px;
        border-top: solid 1px #DDD;
        background-color: #EEE;
    }
    .node_icon{
        background: url('images/node_icon.png') no-repeat;
        background-size: 18px;
        background-position:center;
    }
    .edge_icon{
        background: url('images/edge_icon.png') no-repeat;
        background-size: 18px;
        background-position:center;
    }
</style>
</head>
<body class="easyui-layout">
<!-- <div data-options="region:'north'" border="false" style="height:60px;"><h3 style="text-align: center;">Qunee + EasyUI 同步示例</h3></div> -->
<!--<div data-options="region:'east',split:true,collapsed:true,title:'East'" style="width:100px;padding:10px;">east region</div>-->
<div id="center_panel" data-options="region:'center'" style="padding-right: 10px;">
    <div class="easyui-tabs" data-options="fit:true,border:false,plain:true">
        <div title="网络视图" id="graph_panel" class="q-panel">
            <div id="toolbar" class="q-toolbar"></div>
            <div id="canvas_panel" class="q-content">
                <div id="canvas" class="q-canvas"></div>
                <div id="toolbox"></div>
            </div>
        </div>
        <div title="JSON" style="padding: 10px;" >JSON</div>
    </div>
</div>
<!-- <div id="footer" data-options="region:'south',border:false">Copyright © 2016 <a href="#">fxdigital.com.cn</a></div> -->
<div class="modal fade addNode" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
        <form>
          <div class="form-group">
            <label for="name">组织机构名称</label>
            <input type="text" class="form-control" id="name" placeholder="名称">
          </div>
          <div class="form-group">
            <label for="code">组织机构编码</label>
            <input type="text" class="form-control" id="code" placeholder="编码">
          </div>
          <button type="submit" class="btn btn-default">保存</button>
        </form>
    </div>
  </div>
</div>
<div class="modal fade addEdge" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
        <form>
          <div class="form-group">
            <div class="radio">
              <label>
                <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                上/下级
              </label>
            </div>
          </div>
          <div class="form-group">
            <div class="radio">
              <label>
                <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                平级
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-default">保存</button>
        </form>
    </div>
  </div>
</div>
<div id="ycf-alert" class="modal fade">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
        <h5 class="modal-title"><i class="fa fa-exclamation-circle"></i> [Title]</h5>
      </div>
      <div class="modal-body small">
        <p>[Message]</p>
      </div>
      <div class="modal-footer" >
        <button type="button" class="btn btn-primary ok" data-dismiss="modal">[BtnOk]</button>
        <button type="button" class="btn btn-default cancel" data-dismiss="modal">[BtnCancel]</button>
      </div>
    </div>
  </div>
</div>
<script type="text/javascript" src="../static/js/jquery-easyui-1.4.4/jquery.min.js"></script>
<script type="text/javascript" src="../static/js/bootstrap-3.3.5-dist/js/bootstrap.min.js"></script>
<script type="text/javascript" src="../static/js/jquery-easyui-1.4.4/jquery.easyui.min.js"></script>
<script src="../static/js/qunee/qunee.js"></script>
<script src="../static/js/qunee/common.js"></script>
<script src="../static/js/qunee/framework.js"></script>
<script>
// prompt("随便写点儿啥吧","比如我叫啥");
// alert(t);
// console.log(Q.aB);
</script>
</body>
</html>