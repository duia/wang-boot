/**
 * Created by 鹏程 on 2016/7/17.
 */
(function (window) {

    function addPanel(name, url){
        if ($('#tt').tabs('exists', name)){
            $('#tt').tabs('select', name);
        } else {
            var content = '<iframe allowtransparency="true" scrolling="auto" frameborder="0"  src="'+url+'" ' +
                'style="width:100%; height: 100%;"></iframe>';
            $.get(url, function(data){
                if (data.indexOf("action=\"/login\"") !== -1){
                    alert('未登录或登录超时。请重新登录，谢谢！');
                    top.location = "/";
                    return false;
                }
                $('#tt').tabs('add',{
                    title:name,
                    content:content,
                    closable:true
                });
            });
        }
    }
    function removePanel(){
        var tab = $('#tt').tabs('getSelected');
        if (tab){
            var index = $('#tt').tabs('getTabIndex', tab);
            $('#tt').tabs('close', index);
        }
    }
    var curMenu = null, zNodes = [], zTree = null;
    var setting = {
        view: {
            showLine: false,
            showTitle: false,
            showIcon: false,
            selectedMulti: false,
            dblClickExpand: false,
            nameIsHTML: true
        },
        data: {
            key: {
                name: "menuName",
                icon: null,
                url: null
            },
            simpleData: {
                enable: true,
                pIdKey: "parentId"
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

    var getLeftMenus = function () {
        $.ajax({
            // url:'/static/data/menu.json',
            // type:'get',
            url:'/sys/menu/getLeftMenus',
            type:'post',
            data:{},
            dataType:'json',
            async: false,
            success:function(menus){
                $.each(menus, function(i, menu){
                    menu.menuName = (menu.icon ? '<i class="'+menu.icon+' fa-lg"></i> ' : '') + menu.menuName;
                });
                zNodes = menus;
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

    /**
     * 初始化绑定事件
     */
    function initBindEvents() {

        $('#tab-tools').bind('contextmenu',function(e){
            e.preventDefault();
            $('#mm').menu('show', {
                left: e.pageX,
                top: e.pageY
            });
        });

        // $('#btns').delegate('a', 'click', function(event){
        //     // console.log($(event.target).parent().parent().attr('data-color'));
        //     // console.log($('#themesId').attr('href'));
        //     $('#themesId').attr('href', 'jquery-easyui-1.4.4/themes/'+$(event.target).parent().parent().attr('data-color')+'/easyui.css');
        // });

    }

    window.page = {

        init: function () {
            getLeftMenus();
            // 初始化
            $.fn.zTree.init($("#treeDemo"), setting, zNodes);
            zTree = $.fn.zTree.getZTreeObj("treeDemo");
            // curMenu = zTree_Menu.getNodes()[0].children[0].children[0];
            // zTree_Menu.selectNode(curMenu);
            // var a = $("#" + zTree_Menu.getNodes()[0].tId + "_a");
            // a.addClass("cur");

            // 事件绑定初始化
            initBindEvents();
        }
    };
})(window);