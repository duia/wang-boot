/*
 * Copyright(c) 2016 cncounter.com All rights reserved.
 * distributed with this file and available online at
 * http://www.cncounter.com/
 */

(function(){

    /********部门相关start********/

    var curMenu = null, zNodes = [], zTree = null;
    var setting = {
        view: {
            showLine: true,
            showTitle: false,
            showIcon: false,
            selectedMulti: false,
            dblClickExpand: false,
            nameIsHTML: false
        },
        data: {
            key: {
                name: "name",
                icon: null,
                url: null
            },
            simpleData: {
                enable: true,
                idKey: "id",
                pIdKey: "parentId",
                rootPId: 0
            }
        },

        /*edit: {
         enable: true
         },*/
        callback: {
            beforeExpand: beforeExpand,
            onExpand: onExpand,
            onClick: onClick
        }
    };

    var getAllDepartments = function () {
        $.ajax({
            // url:'/static/data/menu.json',
            // type:'get',
            url:'/sys/department/queryAll',
            type:'post',
            data:{},
            dataType:'json',
            async: false,
            success:function(departments){
                zNodes = departments;
            }
        });
    }

    var curExpandNode = null;
    function beforeExpand(treeId, treeNode) {
        var pNode = curExpandNode ? curExpandNode.getParentNode():null;
        var treeNodeP = treeNode.parentTId ? treeNode.getParentNode():null;
        for(var i=0, l=!treeNodeP ? 0:treeNodeP.children.length; i<l; i++ ) {
            if (treeNode !== treeNodeP.children[i]) {
                zTree.expandNode(treeNodeP.children[i], false);
            }
        }
        while (pNode) {
            if (pNode === treeNode) {
                break;
            }
            pNode = pNode.getParentNode();
        }
        if (!pNode) {
            singlePath(treeNode);
        }

    }
    function singlePath(newNode) {
        if (newNode === curExpandNode) return;

        var rootNodes, tmpRoot, tmpTId, i, j, n;

        if (!curExpandNode) {
            tmpRoot = newNode;
            while (tmpRoot) {
                tmpTId = tmpRoot.tId;
                tmpRoot = tmpRoot.getParentNode();
            }
            rootNodes = zTree.getNodes();
            for (i=0, j=rootNodes.length; i<j; i++) {
                n = rootNodes[i];
                if (n.tId != tmpTId) {
                    zTree.expandNode(n, false);
                }
            }
        } else if (curExpandNode && curExpandNode.open) {
            if (newNode.parentTId === curExpandNode.parentTId) {
                zTree.expandNode(curExpandNode, false);
            } else {
                var newParents = [];
                while (newNode) {
                    newNode = newNode.getParentNode();
                    if (newNode === curExpandNode) {
                        newParents = null;
                        break;
                    } else if (newNode) {
                        newParents.push(newNode);
                    }
                }
                if (newParents!=null) {
                    var oldNode = curExpandNode;
                    var oldParents = [];
                    while (oldNode) {
                        oldNode = oldNode.getParentNode();
                        if (oldNode) {
                            oldParents.push(oldNode);
                        }
                    }
                    if (newParents.length>0) {
                        zTree.expandNode(oldParents[Math.abs(oldParents.length-newParents.length)-1], false);
                    } else {
                        zTree.expandNode(oldParents[oldParents.length-1], false);
                    }
                }
            }
        }
        curExpandNode = newNode;
    }

    function onExpand(event, treeId, treeNode) {
        curExpandNode = treeNode;
    }
    function onClick(e, treeId, treeNode) {
        console.log(treeNode)
        if(treeNode.children){
            zTree.expandNode(treeNode, null, null, null, true);
        }else{
            treeNode.href && addPanel(treeNode.menuName, treeNode.href);
        }

    }

    getAllDepartments();
    // 初始化
    $.fn.zTree.init($("#treeDemo"), setting, zNodes);
    zTree = $.fn.zTree.getZTreeObj("treeDemo");

    /********部门相关end**********/

    $("#toggle-advanced-search").click(function(){
        $("i",this).toggleClass("fa-angle-double-down fa-angle-double-up");
        $("#div-advanced-search").slideToggle("fast");
    });

    var table = $('#user_table').DataTable({
        //ajax: "/static/data/objects.txt",
        processing: true,
        serverSide: true,
        ajax:{
            url:'/sys/user/searchPage',
            type:'post',
            data:function (data) {
                data.condition = {
                    /* username:'123',//添加额外参数
                     password:'123456' */
                }
                return JSON.stringify(data);
            },
            dataType: "json",
            processData: true,
            contentType: 'application/json;charset=UTF-8'
        },
        language: {
            url:'/static/plugins/DataTables-1.10.12/media/Chinese.json'
        },
        pagingType: "full_numbers",
        columns: [{
            title: '<input type="checkbox" name="checklist" id="checkall" /><label style="margin-left: 10px;">ID</label>',
            data: null,
            render: function(data, type, row, meta) {
                return '<input type="checkbox" name="checklist" value="' + row.id + '" /><label style="margin-left: 10px;">' + row.id + '</label>';
            }
        },{
            title: '用户名',
            data: "username"
        },{
            title: '登陆账号',
            data: "loginName"
        },{
            title: '邮箱',
            data: "email"
        },{
            title: '更新时间',
            data: "updateDate"
        },{
            title: '操作',
            data: null,
            render: function (data, type, row, metad) {
                var html = [];
                html.push('<button type="button" data-id="'+data.id+'" class="btn btn-primary btn-sm updateUserBtn">修改</button>');
                html.push('<button type="button" class="btn btn-danger btn-sm deleteUserBtn">删除</button>');
                return html.join(' ');
            }
        }],
        dom: "<'row'<'#mytool.col-xs-3'><'col-xs-9'>><'row'<'.col-xs-12'tr>><'row'<'col-xs-3'i><'col-xs-2'l><'col-xs-7'p>>",
        initComplete: function () {
            //$("#mytool").append('<button id="datainit" type="button" class="btn btn-primary btn-sm">增加基础数据</button>&nbsp');
            //$("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-target="#myModal">添加</button>');
            //$("#datainit").on("click", initData);
        },
        fnDrawCallback: function(table) {
            var tableId = $(this).attr('id');
            $('#'+tableId+'_paginate').append("<div>到第 <input type='text' id='changePage' class='input-text' style='width:50px;height:27px'> 页 " +
                "<a class='btn btn-default shiny' href='javascript:void(0);' id='dataTable-btn' style='text-align:center'>确认</a></div>");
            var oTable = $('#'+tableId).dataTable();
            $('#dataTable-btn').click(function(e) {
                if($("#changePage").val() && $("#changePage").val() > 0) {
                    var redirectpage = $("#changePage").val() - 1;
                } else {
                    var redirectpage = 0;
                }
                oTable.fnPageChange(redirectpage);
            });
        }
    });

    $('#btn-add').on('click', function () {
        $('#myModal .modal-body').empty().html(template('userformHtml', {}));
        formAddValidate();
        $('#myModal').modal('show');
    });

    $('#saveUser').on('click', function(){
        $('#userform').submit();
    });

    var formAddValidate = function () {
        $('#userform').validate({
            submitHandler: function(form) {
                $.ajax({
                    url:'/sys/user/addOrUpdate',
                    data:$('#userform').serialize(),
                    type:'post',
                    success:function(result){
                        if(result.code == '200'){
                            $('#myModal').modal('hide')
                            //table.draw(false);
                            table.ajax.reload(null, false);
                        }else{
                            alert(result.msg);
                        }
                    }
                });
            }
        });
    }

    $('#user_table').delegate('.updateUserBtn', 'click', function(e){
        $.post('/sys/user/findById', {
            id: $(e.target).attr('data-id')
        }, function (data) {
            $('#myModal .modal-body').empty().html(template('userformHtml', data.result));
            formAddValidate();
            $('#myModal').modal('show');
        });
    });

    $('#user_table').delegate('.deleteUserBtn', 'click', function(e){
        BootstrapDialog.show({
            message: '删除用户',
            buttons: [{
                label: '删除',
                cssClass: 'btn-primary',
                action: function(dialogItself){
                    $.post('/user/delete', {
                        id: 0
                    }, function(data){
                        if(verIfy(data)){
                            console.log(data);
                            dialogItself.close();
                        }
                    });
                }
            }, {
                icon: 'glyphicon glyphicon-ban-circle',
                label: '取消',
                cssClass: 'btn-warning',
                action: function(dialogItself){
                    dialogItself.close();
                }
            }]
        });
    });

})();