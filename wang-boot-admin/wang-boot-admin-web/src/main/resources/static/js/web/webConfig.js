var setting = {
  edit : {
    enable : true,
    showRemoveBtn : false,
    showRenameBtn : false
  },
  data : {
    simpleData : {
      enable : true
    }
  }
};

var zNodes = [ {
  id : 1,
  pId : 0,
  name : "A1",
  sysCode : "15010000000"
}, {
  id : 2,
  pId : 0,
  name : "A2",
  sysCode : "15020000000"
}, {
  id : 3,
  pId : 1,
  name : "B1",
  sysCode : "15010100000"
}, {
  id : 5,
  pId : 1,
  name : "B2",
  sysCode : "15010200000"
}, {
  id : 4,
  pId : 3,
  name : "C",
  sysCode : "15010101000"
} ];

function beforeDrag(treeId, treeNodes) {
  for (var i = 0, l = treeNodes.length; i < l; i++) {
    if (treeNodes[i].drag === false) {
      return false;
    }
  }
  return true;
}
function beforeDrop(treeId, treeNodes, targetNode, moveType) {
  return targetNode ? targetNode.drop !== false : true;
}

$(function() {

  var treeObj = $.fn.zTree.init($("#treeDemo"), setting, zNodes);
  var treeObj1 = $.fn.zTree.init($("#treeDemo2"), setting);
  
  $('.slapdConf').click(function() {
    $.ajax({
      url : 'web/config_slapdConf',
      dataType : 'text',
      success : function(result) {
        $('#myModalLabel').text('slapd.conf文件');
        $('#content').text(result);
        $('#myModal').modal('show');
      }
    });
  });
  
  
  
  $('#a').click(function(){
    var nodes = treeObj.transformToArray(treeObj.getNodes());
    var nodes1 = treeObj.transformTozTreeNodes(zNodes);
    console.log(nodes1);
//    var json = {
//        node:'A1',
//        password:'openldap',
//        ip:'192.168.11.176',
//        syscode:'150100000',
//        platcode:'16010000'
//    };
//    var children = [{
//      id : 3,
//      pId : 1,
//      ldapName:'B1',
//      password:'openldap',
//      ip:'192.168.11.117',
//      sysCode:'150101000',
//      platCode:''
//    },{
//      id : 5,
//      pId : 1,
//      ldapName:'B2',
//      password:'openldap',
//      ip:'192.168.11.115',
//      sysCode:'150102000',
//      platCode:''
//    }];
//    console.log(nodes);
//    makeNodes(nodes, 0);
//    
//    console.log(a);
//    $.ajax({
//      url : 'web/a',
////      data : {'json' : JSON.stringify(json),'tree':JSON.stringify(zNodes)},
////      data : {'json' : JSON.stringify(json),'tree':JSON.stringify(a)},
//      data : {'json' : JSON.stringify(json),'tree':JSON.stringify(makeNodes(nodes)),'childNode':JSON.stringify(children)},
////      data : {'json' : makeNodes(nodes)},
//      dataType : 'text',
//      success : function(result) {
//        $('#content').text(result);
//        $('#myModal').modal('show');
//      }
//    });
  });

});
var a;
var makeNodes = function(nodes){
  var b = new Array();
  $.each(nodes, function(index, node){
    var n = {};
    n.ldapName = node.name;
    n.sysCode = node.sysCode;
    n.id = node.id;
    n.pId = node.pId;
    n.level = node.level;
    b.push(n);
  });
  return b;
}

//var makeNodes = function(nodes, level){
//  level++;
//  $.each(nodes, function(index, node){
//    var n = {};
//    n.ldapName = node.name;
//    n.sysCode = node.sysCode;
//    switch (level) {
//    case 1:
//      a['1'].push(n);
//      break;
//    case 2:
//      a['2'].push(n); 
//      break;
//    case 3:
//      a['3'].push(n);
//      break;
//    case 4:
//      a['4'].push(n);
//      break;
//    case 5:
//      a['5'].push(n);
//      break;
//    default:
//      break;
//    }
//    if(typeof(node.children) != "undefined"){
//      makeNodes(node.children, level);
//    }
//  });
//}

//var makeNodes = function(nodes, level){
//  var json = new Array();
//  $.each(nodes, function(index, node){
//    var n = {};
//    if(typeof(node.children) != "undefined"){
//      n.ldapObjects = makeNodes(node.children);
//    }
//    n.ldapName = node.name;
//    n.sysCode = node.syscode;
//    json[index] = n;
//  });
//  return JSON.stringify(json);
//}
