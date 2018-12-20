/**
 * 日志管理初始化
 */
var OptLog = {
    id: "OptLogTable",	//表格id
    seItem: null,		//选中的条目
    table: null,
    layerIndex: -1
};

/**
 * 初始化表格的列
 */
OptLog.initColumn = function () {
    return [
        {field: 'selectItem', radio: true},
        {title: 'id', field: 'id', visible: false, align: 'center', valign: 'middle'},
        {title: '日志类型', field: 'logType', align: 'center', valign: 'middle', sortable: true},
        {title: '日志名称', field: 'oper_describe', align: 'center', valign: 'middle', sortable: true},
        // {title: '用户名称', field: 'userName', align: 'center', valign: 'middle', sortable: true, sortName: 'userid'},
        {title: '用户名称', field: 'userName', align: 'center', valign: 'middle'},
        {title: '类名方法名', field: 'oper_name', align: 'center', valign: 'middle', sortable: true},
        {title: '参数', field: 'oper_param', align: 'center', valign: 'middle', sortable: true},
        {title: '时间', field: 'operTime', align: 'center', valign: 'middle', sortable: true},
        {title: '具体消息', field: 'message', align: 'center', valign: 'middle', sortable: true}];
};

/**
 * 检查是否选中
 */
OptLog.check = function () {
    var selected = $('#' + this.id).bootstrapTable('getSelections');
    if(selected.length == 0){
        WPC.info("请先选中表格中的某一记录！");
        return false;
    }else{
        OptLog.seItem = selected[0];
        return true;
    }
};

/**
 * 查看日志详情
 */
OptLog.detail = function () {
    if (this.check()) {
        var ajax = new $ax(WPC.ctxPath + "/log/detail/" + this.seItem.id, function (data) {
            WPC.infoDetail("日志详情", JSON.stringify(data));
        }, function (data) {
            WPC.error("获取详情失败!");
        });
        ajax.start();
    }
};


/**
 * 清空日志
 */
OptLog.delLog = function () {
    WPC.confirm("是否清空所有日志?",function(){
        var ajax = WPC.baseAjax("/log/delLog","清空日志");
        ajax.start();
        OptLog.table.refresh();
    });
}

/**
 * 查询表单提交参数对象
 * @returns {{}}
 */
OptLog.formParams = function() {
    var queryData = {};

    queryData['logName'] = $("#logName").val();
    queryData['beginTime'] = $("#beginTime").val();
    queryData['endTime'] = $("#endTime").val();
    queryData['logType'] = $("#logType").val();

    return queryData;
}

/**
 * 查询日志列表
 */
OptLog.search = function () {

    OptLog.table.refresh({query: OptLog.formParams()});
};

$(function () {
    var defaultColunms = OptLog.initColumn();
    var table = new BSTable(OptLog.id, "/log/list", defaultColunms);
    table.setPaginationType("server");
    table.setQueryParams(OptLog.formParams());
    OptLog.table = table.init();
});
