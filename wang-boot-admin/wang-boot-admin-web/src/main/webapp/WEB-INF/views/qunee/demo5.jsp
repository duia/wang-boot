<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page isELIgnored="false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>  
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>  
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%> 
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Qunee拓扑图编辑</title>
<link rel="stylesheet" type="text/css" href="<c:url value="/static/js/bootstrap-3.3.5-dist/css/bootstrap.min.css"/>"/>
<link rel="stylesheet" type="text/css" href="<c:url value="/static/css/graph.editor.css"/>"/>
<link rel="stylesheet" type="text/css" href="<c:url value="/static/css/qunee/demo.css"/>"/>
</head>
<body class="layout" style="padding: 0; margin: 0;">
<div id="editor" data-options="region:'center'" style="background-color: #11171a"></div>
<script src="../static/js/qunee/js.js"></script>
<script src="../static/js/qunee/qunee.js"></script>
<script src="../static/js/qunee/graph.editor3.js"></script>
<script>

$('#editor').graphEditor({
	data:'../static/data/66.json',
	callback: function(editor){
	  var graph = editor.graph;
	  //graph.originAtCenter = false;

	  graph.callLater(function(){
      	graph.zoomToOverview();
      	graph.moveToCenter();
      	//graph.interactionMode = Q.Consts.INTERACTION_MODE_VIEW;
      });
	  var toolbox = document.createElement("div");
	  toolbox.id = "toolbox";
	  /* Q.css(toolbox, {
	      position: "absolute",
	      top: "0px"
	  }); */
	  toolbox.setAttribute("data-options", "region:'west', width:'18%', left:15, min-width:100, max-width:300")
	  graph.html.parentNode.appendChild(toolbox);

	  initToolbox();
	  
	}
});

var DRAGINFO_PREFIX = "draginfo";

function ondrag(evt) {
    evt = evt || window.event;
    var dataTransfer = evt.dataTransfer;
    var img = evt.target;
    dataTransfer.setData("text", img.getAttribute(DRAGINFO_PREFIX));
}

function createDNDImage(parent, src, title, info) {
    var img = document.createElement("img");
    img.src = src;
    img.setAttribute("draggable", "true");
    img.setAttribute("title", title);
    info = info || {};
    if (!info.image && (!info.type || info.type == "Node")) {
        info.image = src;
    }
    info.label = info.label || title;
    info.title = title;
    img.setAttribute(DRAGINFO_PREFIX, JSON.stringify(info));
    img.ondragstart = ondrag;
    parent.appendChild(img);
    return img;
}

function initToolbox(){
  createDNDImage(toolbox, "../static/images/qunee/node_icon.png", "终端", {type: "Node", label: "Mac", image: "Q.Graphs.node"});
  createDNDImage(toolbox, "../static/images/qunee/exchanger_icon.png", "交换机", {type: "Node", label: "交换机", image: "Q.Graphs.exchanger2"});
  createDNDImage(toolbox, "../static/images/qunee/server_icon.png", "服务器", {type: "Node", label: "服务器", image: "Q.Graphs.server"});
  createDNDImage(toolbox, "../static/images/qunee/text_icon.png", "文本", {type: "Text", label: "文本"});
  createDNDImage(toolbox, "../static/images/qunee/group_icon.png", "分组", {type: "Group", label: "分组"});
  createDNDImage(toolbox, "../static/images/qunee/subnetwork_icon.png", "子网", {image: "Q-subnetwork", label: "子网", properties: {enableSubNetwork: true}}).style.width = '24px';
}

</script>
</body>
</html>