Q.Node.prototype.type = "Node";
Q.Text.prototype.type = "Text";
Q.Group.prototype.type = "Group";
Q.Edge.prototype.type = "Edge";

(function(Q, $){
//扩展连线UI
  function FlexEdgeUI(edge, graph){
    Q.doSuperConstructor(this, FlexEdgeUI, arguments);
  }
  FlexEdgeUI.prototype = {
    drawEdge: function(path, fromUI, toUI, edgeType, fromBounds, toBounds){
      var from = fromBounds.center;
      var to = toBounds.center;
      var cx = (from.x + to.x) / 2;
      var cy = (from.y + to.y) / 2;
      var dx = from.x - to.x, dy = from.y - to.y;
      var distance = Math.sqrt(dx * dx + dy * dy);
      var angle = Math.atan2(dy, dx);
      distance = Math.min(30, distance * 0.2);
      if(angle > 0){
        distance = -distance;
      }
      var cos = Math.cos(angle) * distance;
      var sin = Math.sin(angle) * distance;

      path.curveTo(cx - cos, cy + sin, cx + cos, cy - sin);
    }
  }
  Q.extend(FlexEdgeUI, Q.EdgeUI);
  FlexEdgeUI.drawReferenceLine = function(g, start, end, type){
    g.moveTo(start.x, start.y);
    var cx = (start.x + end.x) / 2;
    var cy = (start.y + end.y) / 2;
    g.bezierCurveTo(start.x, cy, end.x, cy, end.x, end.y);
  }
  if(Q.loadClassPath){
    Q.loadClassPath(FlexEdgeUI, "Q.FlexEdgeUI");
  }
  Q.FlexEdgeUI = FlexEdgeUI;
}(Q, jQuery))
;

var graph;
var layouter;

$(function(){
    Q.addCSSRule(".maximize", "margin: 0px !important;position: fixed !important;top: 0px;bottom: 0px;right: 0px;left: 0px;z-index: 1030;height: auto !important; width: auto !important;");
    graph = new Q.Graph("canvas");
    layouter = new Q.BalloonLayouter(graph);

    var styles = {};
    styles[Q.Styles.SELECTION_COLOR] = "#0F0";
    graph.styles = styles;

    graph.originAtCenter = true;
    graph.editable = true;

    layouter.radiusMode = Q.Consts.RADIUS_MODE_VARIABLE;
    layouter.angleSpacing = Q.Consts.ANGLE_SPACING_REGULAR;
    layouter.radius = 100;
    layouter.startAngle = Math.PI / 4;

    graph.onElementCreated = function (element, evt) {
        if (element instanceof Q.Edge) {
            element.name = '';
            $('.addEdge').modal('show');
            element.setStyle(Q.Styles.ARROW_TO, false);
            element.setStyle(Q.Styles.EDGE_WIDTH, 1);
            element.setStyle(Q.Styles.ARROW_TO_SIZE, 4);
            graph.interactionMode = Q.Consts.INTERACTION_MODE_DEFAULT;
            return;
        }
        if (element instanceof Q.Node) {
            $('.addNode').modal('show');
            return;
        }
        if (element instanceof Q.Text) {
            element.setStyle(Styles.LABEL_BACKGROUND_COLOR, "#2898E0");
            element.setStyle(Styles.LABEL_COLOR, "#FFF");
            element.setStyle(Styles.LABEL_PADDING, new Q.Insets(3, 5));
            return;
        }
        //调用后台保存
    }

    graph.onLabelEdit = function(element, label, text, elementUI){
        if(!text){
            return false;
        }
        element.name = text;
        //此处调用后台保存
    }

    appendInteractionMenu(graph);

    initToolbar();
    initToolbox();
    initDatas();

    //监听面板调整大小事件，同步graph大小
    $('#center_panel').panel({
        onResize: function (w, h) {
            graph.updateViewport();
        }
    });

});

function ensureVisible(node){
    var bounds = graph.getUIBounds(node);
    var viewportBounds = graph.viewportBounds;
    if(!viewportBounds.contains(bounds)){
        graph.sendToTop(node);
        graph.centerTo(node.x, node.y);
    }
}

function setInteractionMode(evt, info){
    graph.interactionMode = info.value;
    // currentInteractionMode = info.value;
    if(info.value == Q.Consts.INTERACTION_MODE_CREATE_EDGE){
        graph.edgeUIClass = info.edgeUIClass;
        graph.edgeType = info.edgeType;
    }
}

function initToolbar(){
    var toolbar = document.getElementById("toolbar");
    var buttons = {
        interactionModes:[{name: "默认模式", value:Q.Consts.INTERACTION_MODE_DEFAULT, selected: true, icon:'/static/images/default_icon.png', action: setInteractionMode},
            {name: '框选模式', value:Q.Consts.INTERACTION_MODE_SELECTION, icon:'static/images/rectangle_selection_icon.png', action: setInteractionMode},
            {name: '浏览模式', value:Q.Consts.INTERACTION_MODE_VIEW, icon:'images/pan_icon.png', action: setInteractionMode}],
        zoom: [{name: "放大", icon:"images/zoomin_icon.png", action: function(){graph.zoomIn()}},
            {name: "缩小", icon:"images/zoomout_icon.png", action: function(){graph.zoomOut()}},
            {name: "1:1", action: function(){graph.scale = 1;}},
            {name: '纵览', icon:'images/overview_icon.png', action: function(){this.zoomToOverview()}},
            {name: '最大化', icon:'images/fullscreen_icon.png', action: function(){
                if($("#graph_panel").hasClass("maximize")){
                    $("#graph_panel").removeClass("maximize")
                }else{
                    $("#graph_panel").addClass("maximize")
                }
                graph.updateViewport();
            }}],
        find: {name: '查找', type: "input", action: function(evt, info){
            var name = info.input.value;
            if(!name){
                return;
            }
            graph.forEach(function(e){
                if(e instanceof Q.Node && (name == e.name || (e.info && e.info.name == name))){
                    graph.setSelection(e);
                    ensureVisible(e);
                    return false;
                }
            }, graph);
        }},
        caozuo: [{name: '刷新', icon:'jquery-easyui-1.4.4/themes/icons/reload.png', action: function(){
            
            graph.callLater(function(){
                layouter.doLayout({
                    byAnimate: true,
                    callback: function(){
                        graph.zoomToOverview();
                    }
                });
            });
        }}]
    };
    createToolBar(buttons, toolbar, graph, false, false);

}

function initToolbox(){
    var toolbox = document.getElementById("toolbox");

    createToolBar({a: [
        {name: '普通连线', value:Q.Consts.INTERACTION_MODE_CREATE_EDGE, icon:'images/edge_icon.png', action: setInteractionMode, edgeUIClass: Q.FlexEdgeUI},
        {name: '正交直线', value:Q.Consts.INTERACTION_MODE_CREATE_EDGE, icon:'images/edge_orthogonal_icon.png', action: setInteractionMode, edgeType: Q.Consts.EDGE_TYPE_ORTHOGONAL_HORIZONTAL}]}, toolbox, graph,  "btn-group-vertical", false);

    createDNDImage(toolbox, "images/node_icon.png", "终端", {type: "Node", label: "Mac2", image: "Q.Graphs.node"});
    createDNDImage(toolbox, "images/exchanger_icon.png", "交换机", {type: "Node", label: "交换机", image: "Q.Graphs.exchanger2"});
    createDNDImage(toolbox, "images/server_icon.png", "服务器", {type: "Node", label: "服务器", image: "Q.Graphs.server"});
}


function initDatas(){

//     $.ajax({
//         url: 'http://localhost:8080/rout/list',
//         type:'POST',
//         dataType:'JSONP',
//         jsonp:'callback',
//         error:function(e){
// //            alert(e.repsonseText);
//         },
//         success:function(json){
//             var topoNodes = json.nodes;
//             var relations = json.relations;
//             initTopology(topoNodes,relations);
            
//             graph.callLater(function(){
                
//                 layouter.doLayout({
//                     byAnimate: true,
//                     callback: function(){
//                         graph.zoomToOverview();
//                     }
//                 });
//             });
//         }
//     });

    Q.loadJSON("../static/js/qunee/testData.json", function(json){
        var topoNodes = json.nodes;
        var relations = json.relations;
        initTopology(topoNodes,relations);
        
        graph.callLater(function(){
            
            layouter.doLayout({
                byAnimate: true,
                callback: function(){
                    graph.zoomToOverview();
                }
            });
        });

        
    //     // var datas = [];
    //     // var map = {};
    //     // graph.graphModel.forEachByBreadthFirst(function(d){
    //     //     var name = d.name || d.type;
    //     //     var data = {text: name, id: d.id, iconCls: getTreeIcon(d)};
    //     //     map[d.id] = data;
    //     //     var parent = d.parent;
    //     //     if(!parent){
    //     //         datas.push(data);
    //     //         return;
    //     //     }
    //     //     parent = map[parent.id];
    //     //     var children = parent.children;
    //     //     if(!children){
    //     //         children = parent.children = [];
    //     //     }
    //     //     children.push(data);
    //     // });
        

    });
}


function getTreeIcon(d){
    return d instanceof Q.Edge ? "edge_icon" : "node_icon";
}


function initTopology(topoNodes,topoRelations)
{
    var map = {};
    for(var i=0;i<topoNodes.length;i++)
    {
        var node = topoNodes[i];
        var qNode = new Q.Node();
        qNode.name=node.name;
        qNode.location = new Q.Point(node.x,node.y);
        graph.graphModel.add(qNode);
        map[node.id] = qNode;
    }
    // for(var i=0;i<topoNodes.length;i++)
    // {
    //     var node = topoNodes[i];
    //     var parent = node.parent;
    //     if(parent){
    //         parent = map[parent];
    //         if(parent){
    //             map[node.id].parent = parent;
    //         }
    //     }
    // }
    for(var i=0;i<topoRelations.length;i++)
    {
        var relation = topoRelations[i];
        var nodeFrom = map[relation.from];
        var nodeTo = map[relation.to];
        if(nodeFrom && nodeTo){
            var edge = graph.createEdge(nodeFrom, nodeTo);
            edge.setStyle(Q.Styles.ARROW_TO, false);
            edge.setStyle(Q.Styles.EDGE_WIDTH, 1);
            edge.setStyle(Q.Styles.ARROW_TO_SIZE, 4);
            edge.uiClass = Q.FlexEdgeUI;
            edge.info = relation;
        }
    }
}