$('#editor').graphEditor({
    data:'../static/data/66.json',
    callback: function(editor){
      var graph = editor.graph;
//      graph.moveToCenter();
      graph.zoomToOverview();
      
//      graph.ondblclick = function(evt){
//        var node = graph.getElementByMouseEvent(evt);
//        if(node && node.type === 'Q.Node'){
//          alert("跳转下级界面-参数["+node.name+"]");
////          var newName = prompt("New Name:");
////          if(newName){
////            node.name = newName;
////          }
//        }else{
//          graph.updateViewport();
//        }
//      }
//    
//      graph.forEach(function (a) {
//        if (!(a instanceof Q.Node)) {
//            return;
//        }
//        if(a.ip != undefined){
//          createRice(a, '#111', 240, 15);
//        }
//      })
      
//      var node = graph.getElementByIp("1");
//      var node1 = graph.getElementByName("FXH6040-8八路视音频解码器");
//      var node2 = graph.getElementByName("机箱");
//      
//      node1.code = "15000000";
//      console.log(node);
      
//      if(node != undefined){
//        node.image = '../static/images/fx/3300A-1_error.gif';
//      }
      
      graph.callLater(function(){
//        graph.interactionMode = Q.Consts.INTERACTION_MODE_VIEW;
      });
      
      /*var time = setTimeout(function C() {
        graph.forEach(function (a) {
            if (!(a instanceof Q.Node)) {
                return;
            }
            if(a.ip != undefined){
              if(a.get('lampColor') === a.defaultColor){
                a.set('lampColor', '#111');
              }else{
                a.set('lampColor', a.defaultColor);
              }
            }
        })
        time = setTimeout(C, 1000);
      }, 1000);*/
      
//      function destroy(){
//        clearTimeout(time);
//      }
      
      
    }
});
//0绿灯 1红灯
var colors = ['#2be22b','#f00'];
//服务器机箱加灯
var createRice = function(node, lampColor, x, y){
  x = x || 0;y = y || 0;
  var lamp = new Q.ImageUI(Q.Shapes.getShape(Q.Consts.SHAPE_CIRCLE, -3.5, -3.5, 16, 16));
  lamp.fillGradient = new Q.Gradient(Q.Consts.GRADIENT_TYPE_RADIAL, [Q.toColor(0xAAFFFFFF), Q.toColor(0x33EEEEEE), Q.toColor(0x44888888), Q.toColor(0x33666666)],
      [0.1, 0.3, 0.7, 0.9], 0, -0.2, -0.2);
  lamp.lineWidth = 0.5;
  lamp.strokeStyle = '#CCC';//边框
  lamp.position = {x: x, y: y};
  node.addUI(lamp, {
      property: "lampColor",
      propertyType: Q.Consts.PROPERTY_TYPE_CLIENT,
      bindingProperty: "fillColor"
  });
  node.defaultColor =  lampColor;
  node.set('lampColor', lampColor);
}
