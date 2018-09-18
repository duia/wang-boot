<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<jsp:include page="../common/include/head.jsp"/>
<body>

<div class="row">
    <div class="col-md-2">
        <div class="panel panel-inverse">
            <div class="panel-heading">
                <div class="panel-title">
                    组织机构
                </div>
            </div>
            <div class="panel-body">
                <div class="zTreeDemoBackground left">
                    <ul id="treeDemo" class="ztree"></ul>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-10">
        <div class="panel panel-inverse">
            <div class="panel-heading">
                <div class="panel-title">
                    人员列表
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
                    <button type="button" class="btn btn-primary" id="btn-add"><i class="fa fa-plus"></i> 添加</button>
                    <button type="button" class="btn btn-danger" id="btn-del"><i class="fa fa-remove"></i> 批量删除</button>
                </div>
                <div class="row-fluid" style="display: none; margin-top: 15px;" id="div-advanced-search">
                    <form class="form-inline well">
                        <span>姓名:</span>
                        <input type="text" class="form-control" placeholder="姓名" id="name-search">
                        <span>职位:</span>
                        <input type="text" class="form-control" placeholder="职位" id="position-search">
                        <span>工作地点:</span>
                        <input type="text" class="form-control" placeholder="工作地点" id="office-search">
                        <span>编号:</span>
                        <input type="text" class="form-control" placeholder="编号" id="extn-search">
                        <span>在线状态:</span>
                        <select class="form-control" id="status-search">
                            <option value="">全部</option>
                            <option value="1">在线</option>
                            <option value="0">离线</option>
                        </select>
                        <select class="form-control" id="role-search">
                            <option value="">全部</option>
                            <option value="1">管理员</option>
                            <option value="0">操作员</option>
                        </select>
                        <button type="button" class="btn" id="btn-advanced-search"><i class="fa fa-search"></i> 查询</button>
                        <button class="btn btn-default" type="submit">重置</button>
                    </form>
                </div>
                <table id="user_table" class="table table-bordered table-striped table-hover display" cellspacing="0" width="100%">
                </table>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">新增人员</h4>
            </div>
            <div class="modal-body">
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn-primary" id="saveUser">保存</button>
            </div>
        </div>
    </div>
</div>
<script type="text/html" id="userformHtml">
    <form method="POST" class="form-horizontal" id="userform">
        <input type="hidden" id="id" value="<<=id>>" name="id">
        <div class="form-group">
            <label class="col-md-3 control-label">用户名</label>
            <div class="col-md-9">
                <input type="text" name="username" placeholder="用户名" class="form-control required" value="<<=username>>">
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-3 control-label">登陆账号</label>
            <div class="col-md-9">
                <input type="text" name="loginName" placeholder="登陆账号" class="form-control required" value="<<=loginName>>">
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-3 control-label">邮箱</label>
            <div class="col-md-9">
                <input type="text" name="email" placeholder="Email" class="form-control required" value="<<=email>>">
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-3 control-label">手机</label>
            <div class="col-md-9">
                <input type="text" name="mobile" placeholder="手机号码" class="form-control required" value="<<=mobile>>">
            </div>
        </div>
        <%--<div class="form-group">
            <label class="col-md-3 control-label">添加时间</label>
            <div class="col-md-9">
                <input type="datetime" name="" placeholder="添加时间" class="form-control">
            </div>
        </div>--%>
    </form>
</script>
<jsp:include page="../common/include/foot.jsp"/>
<script src="/static/js/sys/department.js"></script>
</body>
</html>