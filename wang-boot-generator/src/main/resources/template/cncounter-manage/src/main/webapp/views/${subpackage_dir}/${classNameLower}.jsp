<#assign className = table.className>
<#assign classNameLower = className?uncap_first>
<#assign shortName = table.shortName>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<jsp:include page="../common/include/head.jsp"/>
<body>

<div class="panel panel-inverse">
    <div class="panel-heading">
        <div class="panel-title">
            列表
        </div>
    </div>
    <div class="panel-body">
        <div class="btn-toolbar">
            <div class="pull-right">
                <div class="input-group">
                    <!-- <input type="text" placeholder="Enter message" class="form-control bg-silver"> -->
                    <span class="btn-group">
                        <!-- <button type="button" class="btn" id="btn-simple-search"><i class="fa fa-search"></i></button> -->
                        <button type="button" class="btn" title="高级查询" id="toggle-advanced-search">
                            <i class="fa fa-angle-double-down"></i>
                        </button>
                    </span>
                </div>
            </div>
            <button type="button" class="btn btn-primary" id="btn-add" data-toggle="modal" data-target="#myModal"><i class="fa fa-plus"></i> 添加</button>
            <button type="button" class="btn btn-danger" id="btn-del"><i class="fa fa-remove"></i> 批量删除</button>
        </div>
        <div class="row-fluid" style="display: none; margin-top: 15px;" id="div-advanced-search">
            <form class="form-inline well">
                <span>条件1:</span>
                <input type="text" class="form-control" placeholder="条件1" id="one-search">
                <span>条件2:</span>
                <input type="text" class="form-control" placeholder="条件2" id="tow-search">
                <span>条件3:</span>
                <select class="form-control" id="three-search">
                    <option value="">全部</option>
                    <option value="1">1</option>
                    <option value="0">0</option>
                </select>
                <button type="button" class="btn" id="btn-advanced-search"><i class="fa fa-search"></i> 查询</button>
                <button class="btn btn-default" type="submit">重置</button>
            </form>
        </div>
        <table id="${classNameLower}_table" class="table table-bordered table-striped table-hover display" cellspacing="0" width="100%">
        </table>
    </div>
</div>
<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">新增</h4>
            </div>
            <div class="modal-body">
				<form method="POST" action="/" class="form-horizontal" id="${classNameLower}Form">
                    <div class="form-group">
                        <label class="col-md-3 control-label">字段1</label>
                        <div class="col-md-9">
                            <input type="text" name="" placeholder="字段1" class="form-control required">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-3 control-label">字段2</label>
                        <div class="col-md-9">
                            <input type="text" name="" placeholder="字段2" class="form-control required">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-3 control-label">字段3</label>
                        <div class="col-md-9">
                            <input type="number" name="" placeholder="字段3" class="form-control required">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-md-3 control-label">字段4</label>
                        <div class="col-md-9">
                            <input type="datetime" name="" placeholder="字段4" class="form-control">
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary" id="save${className}">保存</button>
            </div>
        </div>
    </div>
</div>
<jsp:include page="../common/include/foot.jsp"/>
<script src="/static/js/${subpackage}/${classNameLower}.js"></script>
</body>
</html>