/**
 * line.js
 * "dy" attr of text should be adjusted according to font-size.
 */

//type, 
//var nodes = [{cx: 350, cy: 100, r: 30, id: 0}, {cx: 200, cy: 350, r: 20, id: 1}, {cx: 500, cy: 350, r: 20, id: 2}];	//works
var nodes = [{cx: 350, cy: 100, r: 30, id: 0, stroke: "steelblue", 'stroke-width': .5, fill: "white", type: "circle"}, 
             {cx: 200, cy: 350, r: 20, id: 1, stroke: "steelblue", 'stroke-width': .5, fill: "white", type: "circle"}, 
             {cx: 500, cy: 350, r: 20, id: 2, stroke: "steelblue", 'stroke-width': .5, fill: "white", type: "circle"}, 
             {x: 60, y: 420, width: 133, height: 72, id: 3, stroke: "steelblue", 'stroke-width': .5, fill: "white", type: "rect"},
             {x: 210, y: 420, width: 133, height: 72, id: 4, stroke: "steelblue", 'stroke-width': .5, fill: "white", type: "rect"},
             {x: 375, y: 420, width: 133, height: 72, id: 5, type: "image", 'image-name': "../../static/images/d3/router.jpg"},
             {x: 550, y: 420, width: 133, height: 72, id: 6, type: "image", 'image-name': "../../static/images/d3/router.jpg"},
             {x: 60, y: 620, width: 133, height: 72, id: 7, stroke: "steelblue", 'stroke-width': .5, fill: "white", type: "rect"},
             {x: 210, y: 620, width: 133, height: 72, id: 8, stroke: "steelblue", 'stroke-width': .5, fill: "white", type: "rect"}];

// var links = [{source: 0, target: 1}, {source: 0, target: 2}];	//line: null
// var links = [{source: 0, target: 1}, {source: 0, target: 2}, {source: 0, target: 0}, {source: 0, target: 1}, {source: 2, target: 0}];	//line: null
//var links = [{source: 0, target: 1, text: ["1M/2M/10M", "Super fast connection"]}, {source: 0, target: 2, text: ["1M/2M/10M"]}, {source: 0, target: 0, text: ["1M/2M/10M", "Super fast connection."]}, {source: 0, target: 1, text: ["1M/2M/10M", "Super fast connection."]}, {source: 2, target: 0, text: ["1M/2M/10M", "Super fast connection."]}];	//line: null	works
var links = [{source: 0, target: 1, stroke: "Navy", 'stroke-width': 1, text: ["1M/2M/10M", "Super fast connection"], 'text-stroke': "Navy", 'text-stroke-width': .5, 'font-family': "sans-serif", 'font-size': "12px"}, 
             {source: 0, target: 2, stroke: "Navy", 'stroke-width': 1, text: ["1M/2M/10M"], 'text-stroke': "Navy", 'text-stroke-width': .5, 'font-family': "sans-serif", 'font-size': "12px"}, 
             {source: 1, target: 3, stroke: "Navy", 'stroke-width': 1, text: ["1M/2M/10Mp", "Super fast CONNECTION"], 'text-stroke': "Navy", 'text-stroke-width': .5, 'font-family': "sans-serif", 'font-size': "12px"}, 
             {source: 1, target: 4, stroke: "Navy", 'stroke-width': 1, text: ["1M/2M/10M", "Super fast CONNECTION", "Always selected"], 'text-stroke': "Navy", 'text-stroke-width': .5, 'font-family': "sans-serif", 'font-size': "12px"}, 
             {source: 2, target: 5, stroke: "Navy", 'stroke-width': 1, text: ["1M/2M/10Mp"], 'text-stroke': "Yellow", 'text-stroke-width': .5, 'font-family': "sans-serif", 'font-size': "12px"}, 
             {source: 2, target: 6, stroke: "Navy", 'stroke-width': 1, text: ["1M/2M/10Mp"], 'text-stroke': "Red", 'text-stroke-width': .5, 'font-family': "sans-serif", 'font-size': "12px"}, 
             {source: 3, target: 7, stroke: "Navy", 'stroke-width': 1, text: ["1M/2M/10M"], 'text-stroke': "Navy", 'text-stroke-width': .5, 'font-family': "sans-serif", 'font-size': "12px"}, 
             {source: 4, target: 8, stroke: "Navy", 'stroke-width': 1, text: ["1M/2M/10M", "Super fast CONNECTION", "Always selected"], 'text-stroke': "Navy", 'text-stroke-width': .5, 'font-family': "sans-serif", 'font-size': "12px"}, 
             
             {source: 0, target: 0, stroke: "Navy", 'stroke-width': 1, text: ["1M/2M/10M", "Super fast connection"], 'text-stroke': "Navy", 'text-stroke-width': .5, 'font-family': "sans-serif", 'font-size': "12px"}, 
             {source: 0, target: 1, stroke: "Navy", 'stroke-width': 1, text: ["1M/2M/10M", "Super fast connection"], 'text-stroke': "Navy", 'text-stroke-width': .5, 'font-family': "sans-serif", 'font-size': "12px"}, 
             {source: 2, target: 0, stroke: "Navy", 'stroke-width': 1, text: ["1M/2M/10M", "Super fast connection"], 'text-stroke': "Navy", 'text-stroke-width': .5, 'font-family': "sans-serif", 'font-size': "12px"}];	//line: null	works

var mainSvg;

function ready(){
	
	String.prototype.capitalize = function(){
		var s = this.toLowerCase();
		return s.charAt(0).toUpperCase() + this.substr(1);
	};
	
	checkLinksData(links);
	
	console.log("After links are checked, the length is " + links.length);
	
	var svg = d3.select("body").append("svg").attr("width", 1200).attr("height", 900).attr("id", "mainSvg");
	mainSvg = svg;
	console.log("mainSvg in ready: " + mainSvg);
	
//	var circles = svg.selectAll("circle").data(nodes).enter().append("circle")
//	.attr("cx", function(d){ return d.cx; }).attr("cy", function(d){ return d.cy; }).attr("r", function(d){ return d.r; })
//	.style("fill", "white").style("stroke", "steelblue").style("stroke-width", .5);
	
	var circleNodes = [], rectNodes = [], imageNodes = [];
	
	nodes.forEach(function(item){
		var type = item.type.toUpperCase();
		if(type == "CIRCLE")
			circleNodes.push(item);
		else if(type == "RECT")
			rectNodes.push(item);
		else if(type == "IMAGE")
			imageNodes.push(item);
			
	});
	
	svg.selectAll("circle").data(circleNodes).enter().append("circle")
	.attr("cx", function(d){ return d.cx; }).attr("cy", function(d){ return d.cy; }).attr("r", function(d){ return d.r; })
	.style("fill", function(d){ return d.fill; }).style("stroke", function(d){ return d.stroke; }).style("stroke-width", function(d){ return d['stroke-width']; })
//	.call(dragMoveAndRedraw());
	
	svg.selectAll("rect").data(rectNodes).enter().append("rect")
	.attr("x", function(d){ return d.x; }).attr("y", function(d){ return d.y; }).attr("width", function(d){ return d.width; }).attr("height", function(d){ return d.height; })
	.style("fill", function(d){ return d.fill; }).style("stroke", function(d){ return d.stroke; }).style("stroke-width", function(d){ return d['stroke-width']; })
//	.call(dragMoveAndRedraw());
	
	svg.selectAll("image").data(imageNodes).enter().append("image")
	.attr("x", function(d){ return d.x; }).attr("y", function(d){ return d.y; }).attr("width", function(d){ return d.width; }).attr("height", function(d){ return d.height; })
	.attr("xlink:href", function(d){ return d['image-name']; })
//	call(dragMoveAndRedraw());
	
//	var drag = d3.behavior.drag();
//	
//	drag.on("drag", function(d){
//		if(!d.dx) d.dx = 0;
//		if(!d.dy) d.dy = 0;
//		
//		d.dx += d3.event.dx;
//		d.dy += d3.event.dy;
//		
//		d.cx += d3.event.dx;
//		d.cy += d3.event.dy;
//		
//		d3.select(this).attr("transform", "translate(" + [d.dx, d.dy] + ")");
//		
//		drawLines(d.id);
//		
//	});
	
	console.log("All circles, rects and images: " + svg.selectAll("circle, rect, image").size());
	svg.selectAll("circle, rect, image").call(dragMoveAndRedraw());
	
	initialLines();
	
	insertImage("../../static/images/d3/router.jpg");
	
	$("body").click(function(event){
		
		console.log("pageX + pageY: " + event.pageX + ", " + event.pageY);
		
	});
	
//	svg.on("drag", function(event){
//		event.preventDefault();
//	});

	/* Repeat alarm */
	var g = mainSvg.append("g").attr("transform", "translate(400, 80)");
	console.log(g);
	var path = g.append("path").attr("d", "M5 10 A10 10 0 0 1 25 10 L25 25 L5 25 Z").style("fill", "darkred").style("stroke", "darkred");
	g.append("rect").attr("x", "0").attr("y", "25").attr("width", "30px").attr("height", "5px").style("fill", "url(#linearGradient)").style("stroke", "black");
	
	(function repeatAlarm(){
		document.getElementsByTagName("bgsound")[0].src = "alarm_short.mp3";
		path.transition().duration(300).style("fill", "url(#radialGradient)").transition().style("fill", "darkred").each("end", repeatAlarm);
	})();
	
	
	
	$("#sidebar div").click(function(event){
		$(this).toggleClass("drawing");
		$("#sidebar div").not(this).removeClass("drawing");
		$("[filter='url(\"#dropShadow\")']").removeAttr("filter");			/* Should use "url(\"#dropShadow\")" here although "url(#dropShadow)" is used for setting this attr. */
		clearData();
	});
	
	(function repeat(){
		d3.select("#mainSvg").append("circle").attr({cx: 365.435, cy: 125.725, r: 4, fill: "white", stroke: "orangeRed"})
		.transition().duration(6000).attr({cx: 489.71, cy: 332.85}).remove().each("end", function(){
			d3.select("#mainSvg").append("circle").attr({cx: 490.336, cy: 367.51, r: 4, fill: "white", stroke: "orangeRed"})
			.transition().duration(3000).attr({cx: 461.368, cy: 420}).remove();
			d3.select("#mainSvg").append("circle").attr({cx: 514.793, cy: 363.46, r: 4, fill: "white", stroke: "orangeRed"})
			.transition().duration(3000).attr({cx: 576.934, cy: 420}).remove().each("end", repeat);
		});
	})();
	
	
	
	d3.selectAll("line").each(function(){
		var that = d3.select(this);
		console.log(that.attr("x1") + "," + that.attr("y1") + "," + that.attr("x2") + "," + that.attr("y2"));
	});
	
	$("#mainSvg").click(function(){
		var type = $("#sidebar div.drawing span").text();
		
		if(type == "L"){
			
		}else if(type == "C"){
			
		}else if(type == "R"){
			
		}else if(type == "T"){
			
		}else if(type == "I"){
			
		}
	});//End #mainSvg.click();
	
	$("#mainSvg circle,rect,image").click(function(event){
		
		if($("#sidebar div.drawing span").text() == "L"){
			event.stopPropagation();
			console.log("circle, rect, image clicked.");
			console.log("event.isDefaultPrevented(): " + event.isDefaultPrevented())
			if(event.isDefaultPrevented()) return;		/* return when "drag" event. */
			
			var mainSvg = $("#mainSvg");
			
			var firstElement = mainSvg.data("firstElement");
			
			if(!firstElement){
				mainSvg.data("firstElement", this);
				$(this).attr("filter", "url(#dropShadow)");
			}
			else if(firstElement.__data__.id == this.__data__.id){			/* Click itself again */
				mainSvg.removeData("firstElement");
				$(this).removeAttr("filter");
				return;
			}else if(getLink(firstElement.__data__.id, this.__data__.id)){	/* Link already exist */
				$(mainSvg.data("firstElement")).removeAttr("filter");
				mainSvg.removeData("firstElement");
				return;
			}
			else{
				var id1 = firstElement.__data__.id, id2 = this.__data__.id;
				var link = {source: id1, target: id2, stroke: "Navy", 'stroke-width': 1, text: null, 'text-stroke': "Navy", 'text-stroke-width': .5, 'font-family': "sans-serif", 'font-size': "12px"};
				links.push(link);

				console.log("firstElement: " + [firstElement.__data__.x, firstElement.__data__.y, firstElement.__data__.id, firstElement.__data__.type]);
				console.log("this: " + [this.__data__.x, this.__data__.y, this.__data__.id, this.__data__.type]);
				
				drawLine(firstElement.__data__, this.__data__, d3.select("#mainSvg"), link);
				$(mainSvg.data("firstElement")).removeAttr("filter");
				mainSvg.removeData("firstElement");
			}
				
		}else
			return;
		
	});
	
	console.log(ret());
	
	
	
}//End ready()

/* TODO */
function sendSignal(sourceId, targetId, duration){

	if(sourceId == null || targetId == null || duration == null) return;
	
	var source = getShape(sourceId), target = getShape(targetId), pSource = new Point(), pTarget = new Point(), sourceType = source.__data__.type.trim().toUpperCase(), targetType = target.__data__.type.trim().toUpperCase();
	
	if(sourceType == "CIRCLE"){
		pSource.x = source.__data__.cx; pSource.y = source.__data__.cy;
	}else if(sourceType == "RECT"){
		
	}
	
	
//	var pSource = pointCircleIntersection(new Point(source.__data__.))
	
	
	
	
	//1,4,5
	(function repeat(){
		mainSvg.append("circle").attr({cx: links[1], cy: 125.725, r: 4, fill: "white", stroke: "orangeRed"})
		.transition().duration(6000).attr({cx: 489.71, cy: 332.85}).remove().each("end", function(){
			mainSvg.append("circle").attr({cx: 490.336, cy: 367.51, r: 4, fill: "white", stroke: "orangeRed"})
			.transition().duration(3000).attr({cx: 461.368, cy: 420}).remove();
			mainSvg.append("circle").attr({cx: 514.793, cy: 363.46, r: 4, fill: "white", stroke: "orangeRed"})
			.transition().duration(3000).attr({cx: 576.934, cy: 420}).remove().each("end", repeat);
		});
	})();
}

function clearData(){
	$("#mainSvg").removeData("firstElement").removeData("firstPoint").removeData("inputPopup");
}

//function addDelta(shape){
//	if(!shape) return;
//	
//	var d = shape.__data__, type = d.type.trim().toUpperCase();
//	if(type == "CIRCLE"){
//		d.cx += d.dx ? d.dx : 0; d.dx = 0;
//		d.cy += d.dy ? d.dy : 0; d.dy = 0;
//		d3.select(shape).attr("cx", d.cx).attr("cy", d.cy).attr("transform", "translate(0,0)");
//	}else if(type == "RECT" || type == "IMAGE"){
//		d.x += d.dx ? d.dx : 0; d.dx = 0;
//		d.y += d.dy ? d.dy : 0; d.dy = 0;
//		d3.select(shape).attr("x", d.x).attr("y", d.y).attr("transform", "translate(0,0)");
//	}
//}

function checkLinksData(links){
	if(!links || !links.length) return;
	
	var linksInfo = [], index, item;
	
	for(var i = 0; i < links.length; i++){
		
		item = links[i];
		
		if(item.source == item.target){
			console.error("Node shouldn't be connected to itself. This link has been removed.");
			links.splice(i--, 1);
		}else{
			if(item.source > item.target)
				item = item.target + "," + item.source;
			else
				item = item.source + "," + item.target;
			
			console.log("item: " + item + ", and index is: " + linksInfo.indexOf(item));
			
			if((index = linksInfo.indexOf(item)) == -1){
				console.log("Item " + item + " is inserted. i is: " + index);
				linksInfo.push(item);
			}
			else{
				console.error("There are duplicate connections between nodes. The links are: links[" + index + "]{source: " + links[index].source + ", target: " + links[index].target + "}, links[" + i + "]{source: " + links[i].source + ", target: " + links[i].target + "}. Additional link has been removed.");

				links.splice(i--, 1);
			}
		}
		
	}
}

function drawLineCircleToRect(circle, rect, svg, link){
	if(!circle || !rect || !svg || !link) return;
	
	console.log("Begin drawLineCircleToRect()");
	
	var intersectionPoint = pointRectIntersection({x: circle.cx, y: circle.cy}, rect);
	
	var distance = Math.sqrt((intersectionPoint.x - circle.cx)*(intersectionPoint.x - circle.cx) + (intersectionPoint.y - circle.cy)*(intersectionPoint.y - circle.cy));
	
	var pointOnCircle = new Point(circle.cx + circle.r * (intersectionPoint.x - circle.cx)/distance, circle.cy + circle.r * (intersectionPoint.y - circle.cy)/distance);
	
	var g = svg.append("g");
	
	g.append("line").datum(link).attr("x1", pointOnCircle.x).attr("y1", pointOnCircle.y).attr("x2", intersectionPoint.x).attr("y2", intersectionPoint.y)
	.style("stroke", link.stroke).style("stroke-width", link['stroke-width']);
	
	var x = (intersectionPoint.x + pointOnCircle.x)/2, y = (intersectionPoint.y + pointOnCircle.y)/2;
	var angle = Math.atan((pointOnCircle.y - intersectionPoint.y)/(pointOnCircle.x - intersectionPoint.x))/Math.PI * 180;
	
	for(var i = 0; i < (link.text ? link.text.length : 0); i++){
		g.append("text").text(link.text[i])
		.attr("x", x).attr("y", y).attr("text-anchor", "middle").attr("transform", "rotate(" + angle + " " + x + "," + y + ")").attr("dy", i * 1 - (link.text.length - 1) * 1 - 0.3 + "em")		/* 1st "1" controls the distance between lines of text. The second 1 == 1st 1. It moves the text group up so that the bottom line of it is on the line. The 0.3 is the distance between text and line. */
		.style("stroke", link['text-stroke']).style("stroke-width", link['text-stroke-width']).style("font-family", link['font-family']).style("font-size", link['font-size']);
	}
	
	link.line = g;
	
	console.log("End drawLineCircleToRect()");
	
}

function drawLineRectToCircle(rect, circle, svg, link){
	console.log("Begin drawLineRectToCircle()");
	
	drawLineCircleToRect(circle, rect, svg, link);
}

function drawLineCircleToCircle(source, target, svg, link){
	
	console.log("Begin drawLineCircleToCircle().");
	
	if(!source || !target || !svg || !link) return;
	
	console.log("drawLineCircleToCircle 01");
	
	var x1 = source.cx, y1 = source.cy, r1 = source.r, x2 = target.cx, y2 = target.cy, r2 = target.r;
	
	var distance = Math.sqrt((x2 - x1)*(x2 - x1) + (y2 - y1)*(y2 - y1));
	
	var lineX1 = x1 + r1*(x2 - x1)/distance, lineY1 = y1 + r1*(y2 - y1)/distance;
	var lineX2 = x2 - r2*(x2 - x1)/distance, lineY2 = y2 - r2*(y2 - y1)/distance;
	
	console.log("x1, y1, x2, y2: " + [lineX1, lineY1, lineX2, lineY2]);
	
// 	var line = svg.append("line").attr("x1", lineX1).attr("x2", lineX2).attr("y1", lineY1).attr("y2", lineY2).style("stroke", "steelblue");
	
// 	link.line = line;
	
	/**/
	var angle = Math.atan((lineY2 - lineY1)/(lineX2 - lineX1))/Math.PI * 180;
	
	console.log("The Y is: " + (lineY2 - lineY1) + ", the x is: " + (lineX2 - lineX1) + " .The angle is: " + angle);
	
	console.log("tan(0.785) " + Math.tan(0.785));
	
	var g = svg.append("g");
	
	var line = g.append("line").datum(link).attr("x1", lineX1).attr("x2", lineX2).attr("y1", lineY1).attr("y2", lineY2)
	.style("stroke", link.stroke).style("stroke-width", link['stroke-width']);
	
//	var texts = g.selectAll("text").data(link.text).enter().append("text").text(function(d){return d;})
//	.attr("x", (lineX1 + lineX2)/2).attr("y", (lineY1 + lineY2)/2)
//	.attr("text-anchor", "middle")
//	.attr("transform", "rotate(" + (angle) + " " + (lineX1 + lineX2)/2 + "," + (lineY1 + lineY2)/2 + ")")
//// 	.attr("dy", function(d, i){ return i * 1 - 1.4 + "em";})
//// 	.attr("dy", function(d, i){ return i * 1 - 1.4 + "em";})
////	.attr("dy", function(d, i){ return i *2 + "em";})
//	.style("stroke", "navy").style("font-family", "sans-serif").style("font-size", "12px").style("stroke-width", ".5");
//	
//	for(var i = 0; i < texts.size(); i++){
//		d3.select(texts[0][i]).attr("dy", i * 1 - (texts.size() - 1) * 1 - 0.3 + "em");
//	}
	
	for(var i = 0; i < (link.text ? link.text.length : 0); i++){
		var text = g.append("text").text(link.text[i]).attr("x", (lineX1 + lineX2)/2).attr("y", (lineY1 + lineY2)/2).attr("text-anchor", "middle").attr("dy", i * 1 - (link.text.length - 1) * 1 - 0.3 + "em")
		.attr("transform", "rotate(" + (angle) + " " + (lineX1 + lineX2)/2 + "," + (lineY1 + lineY2)/2 + ")")
		.style("stroke", link['text-stroke']).style("stroke-width", link['text-stroke-width']).style("font-family", link['font-family']).style("font-size", link['font-size']);
	}
	
	link.line = g;
	
	console.log("all lines: " + d3.selectAll("line").size());
	
	console.log("End drawLineCircleToCircle().")
}

function drawLineRectToRect(source, target, svg, link){
	
	if(!source || !target || !svg || !link) return;
	
	console.log("Begin drawLineRectToRect()");
	
	var p1 = pointRectIntersection(new Point(source.x + source.width/2, source.y + source.height/2), target);
	var p2 = pointRectIntersection(new Point(target.x + target.width/2, target.y + target.height/2), source);
	var x = (p1.x + p2.x) / 2, y = (p1.y + p2.y) / 2;
	var angle = Math.atan((p1.y - p2.y)/(p1.x - p2.x))/Math.PI * 180;	/* Angle can be == 90. */
	
	var g = svg.append("g");
	
	g.append("line").datum(link).attr("x1", p1.x).attr("y1", p1.y).attr("x2", p2.x).attr("y2", p2.y)
	.style("stroke", link.stroke).style("stroke-width", link['stroke-width']);
	
	
	for(var i = 0; i < (link.text ? link.text.length : 0); i++){
		g.append("text").text(link.text[i]).attr("x", x).attr("y", y).attr("transform", "rotate(" + angle + " " + x + "," + y + ")")
		.attr("dy", i * 1 - (link.text.length - 1) * 1 - 0.3 + "em").attr("text-anchor", "middle")
		.style("stroke", link['text-stroke']).style("stroke-width", link['text-stroke-width']).style("font-family", link['font-family']).style("font-size", link['font-size']);
	}
	
	link.line = g;
	
}

function drawLine(source, target, svg, link){
	if(!source || !target || !source.type || !target.type) return;
	
	var types = ["CIRCLE", "RECT", "IMAGE"];
	var sourceType = source.type.trim().toUpperCase();
	var targetType = target.type.trim().toUpperCase();
	
	if(types.indexOf(sourceType) == -1 || types.indexOf(targetType) == -1) return;
	
	if(sourceType == "IMAGE") sourceType = "RECT";
	if(targetType == "IMAGE") targetType = "RECT";
	
	var f = eval("drawLine" + sourceType.toLowerCase().capitalize() + "To" + targetType.toLowerCase().capitalize());
	
//	if(link.line){ link.line.remove(); link.line = null; }
	
	f(source, target, svg, link);
	
}

function drawLines(id){
	console.log("Begin drawLines(). id: " + id);
	
	if(id == null) return;
	
	var svg = d3.select("#mainSvg");
	
	links.forEach(function(item, index, array){
		if(item.source == id || item.target == id){
			
			if(item.line){
				console.log("item.line: " + item.line);
				item.line.remove();
				item.line = null;
			}
			
//			drawLineCircleToCircle(getShape(item.source).__data__, getShape(item.target).__data__, svg, item);
			
			drawLine(getShape(item.source).__data__, getShape(item.target).__data__, svg, item);
		}
	});
	
	console.log("End drawLines().")
}

//function drawCircle(data, svg){
//	if(!data) return;
//	
//	console.log("Begin drawCircle()");
//	
//	var circle = svg.append("circle").data(data)
//	.attr("cx", function(d){ return d.cx; }).attr("cy", function(d){ return d.cy; }).attr("r", function(d){ return d.r; })
//	.style("fill", function(d){ return d.fill; }).style("stroke", function(d){ return d.stroke; }).style("stroke-width", function(d){ return d.stroke-width; });
//	
//	console.log(circle[0][0]);
//	
//	
//}
//
//function drawCircelTest(){
//	var data = {cx: 350, cy: 100, r: 30, id: 0, stroke: "steelblue", 'stroke-width': .5, fill: "white", type: "circle"};
//	
//	drawCircle(data, d3.select("#mainSvg"));
//	
//}
//
//function drawRect(data, svg){
//	if(!data) return;
//	
//}
//
//function drawImage(data, svg){
//	if(!data) return;
//	
//}

function getLink(id1, id2){
	if(id1 == null || id2 == null) return;
	
	var link;
	for(var i = 0; i < links.length; i++){
		link = links[i];
		if(link.source == id1 && link.target == id2 || link.target == id1 && link.source ==  id2) return link;
	}
}

function getNode(id){
	if(id == null) return;
	
	for(var i=0; i<nodes.length; i++){
		if(nodes[i].id == id){
			console.log("nodes[i] id " + id + ": " + nodes[i].id);
			return nodes[i];
		}
	}
}

/* return element */
//function getCircle(id){
//	if(id == null) return;
//	
//	var circles = $("circle");
//	for(var i=0; i<circles.length; i++){
//		if(circles[i].__data__.id == id)
//			return circles[i];
//	}
//}

/* return element */
function getShape(id){
	if(id == null) return;
	
	var shapes = $("circle, rect, image").not(".alarm");
	for(var i=0; i<shapes.length; i++){
		if(shapes[i].__data__.id == id)
			return shapes[i];
	}
}

function initialLines(){
	console.log("Begin initialLines();");
	
	if(!links || !links.length) return;
	
	//remove duplicate
	var lines = [], line;
	
	for(var i = 0; i < links.length; i++){
		if(links[i].source > links[i].target)
			line = links[i].target + "," + links[i].source;
		else
			line = links[i].source + "," + links[i].target;
			
		if(lines.indexOf(line) == -1)
			lines.push(line);
		else{
			links.splice(i, 1);
			console.error("There is problem in the data. Duplicate lines found in the links. Dupliated one has between removed.")	
		}
	}
	
	var svg = d3.select("#mainSvg");
	console.log("Links length: " + links.length);

	for(var i = 0; i < links.length; i++){
		console.log("source id: " + links[i].source + ", " + "target id: " + links[i].target);
		
//		drawLineCircleToCircle(getNode(links[i].source), getNode(links[i].target), svg, links[i]);
		
		var sourceNode = getNode(links[i].source);
		var targetNode = getNode(links[i].target);
		
		console.log("sourceNode: " + sourceNode);
		
		drawLine(sourceNode, targetNode, svg, links[i]);
	}
	
	console.log("End initialLines();");
	
}

function insertImage(image){
	var img = d3.select("#mainSvg").append("image").attr("xlink:href", image)
	.attr("width", "133px").attr("height", "72px").attr("x", "10").attr("y", "10");
	
	var drag = d3.behavior.drag();
	img.datum({});
	
	drag.on("drag", function(d){
		if(!d.dx) d.dx = 0;
		if(!d.dy) d.dy = 0;
		
		d.dx += d3.event.dx;
		d.dy += d3.event.dy;
		
		d3.select(this).attr("transform", "translate(" + d.dx + "," + d.dy + ")");
		
		console.log("Image's data: " + img.attr("x") + "," + img.attr("y") + "," + img.attr("transform"));
		
	});
	
	img.call(drag);
	
}

function pointCircleIntersection(point, circle){
	if(!point || !circle) return;
	
	var distance = Math.sqrt((point.x - circle.cx)*(point.x - circle.cx) + (point.y - circle.cy)*(point.y - circle.cy));
	
	if(distance == 0) return point;

	var p = new Point();
	
	p.x = circle.cx + (point.x - circle.cx)*r/distance;
	p.y = circle.cy + (point.y - circle.cy)*r/distance;
	
	return p;
	
}

function pointRectIntersection(point, rect){
	
	if(!point || !rect) return;
	
	var line = {x1: point.x, y1: point.y, x2: rect.x + rect.width/2, y2: rect.y + rect.height/2};
	
	var rectLines = [{x1: rect.x, y1: rect.y, x2: rect.x, y2: rect.y + rect.height}, {x1: rect.x, y1: rect.y + rect.height, x2: rect.x + rect.width, y2: rect.y + rect.height}, {x1: rect.x + rect.width, y1: rect.y + rect.height, x2: rect.x + rect.width, y2: rect.y}, {x1: rect.x + rect.width, y1: rect.y, x2: rect.x, y2: rect.y}];
	
	for(var i = 0; i < rectLines.length; i++){
		
		console.log("pointRectIntersection " + i + ": " + line.x1 + "," + line.y1 + "," + line.x2 + "," + line.y2 + "; " + rectLines[i].x1 + "," + rectLines[i].y1 + "," + rectLines[i].x2 + "," + rectLines[i].y2);
		
		point = linesIntersection([line, rectLines[i]]);
		
		if(point) return point;
	}
	
	
}

function linesIntersection(lines){
	console.log("Begin linesIntersection.");
	
	if(!lines || !(lines instanceof Array) || !lines[0] || !lines[1]) return;
	
	console.log("linesIntersection 01");
	
	var k1, b1, k2, b2, x, y;
	
	var line1 = lines[0], line2 = lines[1];
	
	if(line1.x1 == line1.x2 && line2.x1 == line2.x2){	/* 两条 x = b的直线 */
		
		console.log("linesIntersection 02");
		
		return null;
	}else if(line1.x1 == line1.x2){	/* Line1是一条垂直的线 y = b */
		
		console.log("linesIntersection 03");
		
		k2 = (line2.y1 - line2.y2)/(line2.x1 - line2.x2);
		b2 = (line2.y1 * line2.x2 - line2.y2 * line2.x1)/(line2.x2 - line2.x1);
		
		y = (line2.y1 * line1.x1 - line2.y2 * line1.x1 - line2.y1 * line2.x2 + line2.y2 * line2.x1)/(line2.x1 - line2.x2)
		x = line1.x1;
		
		if(x <= d3.max([line2.x1, line2.x2]) && x >= d3.min([line2.x1, line2.x2]) && y <= d3.max([line2.y1, line2.y2]) && y >= d3.min([line2.y1, line2.y2]) &&
		   y <= d3.max([line1.y1, line1.y2]) && y >= d3.min([line1.y1, line1.y2]))
			return new Point(x, y);
		else
			return null;		
		
	}else if(line2.x1 == line2.x2){	/* Line2是一条垂直的线 y = b */
		
		console.log("linesIntersection 04");
		
		k1 = (line1.y1 - line1.y2)/(line1.x1 - line1.x2);
		b1 = (line1.y1 * line1.x2 - line1.y2 * line1.x1)/(line1.x2 - line1.x1);
		
		y = (line1.y1 * line2.x1 - line1.y2 * line2.x1 - line1.y1 * line1.x2 + line1.y2 * line1.x1)/(line1.x1 - line1.x2)
		x = line2.x1;
		
		if(x <= d3.max([line1.x1, line1.x2]) && x >= d3.min([line1.x1, line1.x2]) && y <= d3.max([line1.y1, line1.y2]) && y >= d3.min([line1.y1, line1.y2]) &&
		   y <= d3.max([line2.y1, line2.y2]) && y >= d3.min([line2.y1, line2.y2])){
			
			console.log("linesIntersection 08");
			
			return new Point(x, y);
		}
		else{
			
			console.log("linesIntersection 09");
			
			return null;
		}
		
	}else{	/* 两条有K的线, k!= 0 */
		
		console.log("linesIntersection 05");

		k1 = (line1.y1 - line1.y2)/(line1.x1 - line1.x2);
		b1 = (line1.y1 * line1.x2 - line1.y2 * line1.x1)/(line1.x2 - line1.x1);
		
		k2 = (line2.y1 - line2.y2)/(line2.x1 - line2.x2);
		b2 = (line2.y1 * line2.x2 - line2.y2 * line2.x1)/(line2.x2 - line2.x1);
		
		if(k1 == k2) return null;
		
		x = (b2 - b1)/(k1 - k2);
		y = k2 * (b2 - b1)/(k1 - k2) + b2;
		
		if(x <= d3.max([line1.x1, line1.x2]) && x >= d3.min([line1.x1, line1.x2]) && y <= d3.max([line1.y1, line1.y2]) && y >= d3.min([line1.y1, line1.y2]) &&
		   x <= d3.max([line2.x1, line2.x2]) && x >= d3.min([line2.x1, line2.x2]) && y <= d3.max([line2.y1, line2.y2]) && y >= d3.min([line2.y1, line2.y2])	){
			
			console.log("linesIntersection 06");
			
			return new Point(x, y);
		}
		else{
			
			console.log("linesIntersection 07");
			
			return null;
		}
	}

	console.log("End linesIntersection.");
}

function dragMoveAndRedraw(){
	
	var drag = d3.behavior.drag();
	
	drag.on("drag", function(d){
		if(!d.dx) d.dx = 0;
		if(!d.dy) d.dy = 0;
		
		d.dx += d3.event.dx;
		d.dy += d3.event.dy;
		
		var type = d.type.trim().toUpperCase();
		if(type == "CIRCLE"){
			d.cx += d3.event.dx;
			d.cy += d3.event.dy;
		}else if(type == "RECT" || type == "IMAGE"){
			d.x += d3.event.dx;
			d.y += d3.event.dy;
		}
		
		d3.select(this).attr("transform", "translate(" + [d.dx, d.dy] + ")");
		
		drawLines(d.id);
		
	});
	
	return drag;
	
}

function Point(x, y){
	this.x = x;
	this.y = y;
	
	this.log = function(){
		console.log("Point: x " + this.x + ", y " + this.y);
		return this;
	}
	
	this.drawCircle = function(r){
		if(!r) return;
		
		d3.select("#mainSvg").append("circle").attr("cx", this.x).attr("cy", this.y).attr("r", r)
		.style("fill", "none").style("stroke", "Navy");
		
		return this;
	}
}

//remove duplicate ones and blank holes
function removeDuplicate(array){
	if(!array || !array.length) return;
	
	for(var i = 0; i < array.length; i++)
		if(array[i] == null){
			array.splice(i--, 1);
		}

	for(var i = 0; i < array.length - 2; i++){
		for(var j = i + 1; j < array.length; j++){
			console.log("array[j]: " + i + ", " + array[j]);
			if(array[i] === array[j]){
				array.splice(j--, 1);
				console.log("array is: " + array);
			}
		}
	}
	
}

function stroke(d){ console.log("The stroke is: " + d.stroke ); return d.stroke; }
function strokeWidth(d){ return d['stroke-width']; }
function fontFamily(d){ return d['font-family']; }
function fontSize(d){ return d['font-size']; }

/* Tests */

function drawLineCircleToRectTest(){
	
	var circle = {cx: 150, cy: 30, r: 10};
	var rect = {x: 100, y: 100, width: 50, height: 50};
	var svg = d3.select("#mainSvg");
	var link = {};
	
	svg.append("circle").attr("cx", circle.cx).attr("cy", circle.cy).attr("r", circle.r).style("stroke", "Navy").style("fill", "none");
	svg.append("rect").attr("x", rect.x).attr("y", rect.y).attr("width", rect.width).attr("height", rect.height).style("stroke", "Navy").style("fill", "none");;
	
	drawLineCircleToRect(circle, rect, svg, link);
}

function drawLineRectToRectTest(){
	var source = {x: 10, y: 10, width: 20, height: 20};
	var target = {x: 50, y: 50, width: 50, height: 50};
	source = {x: 300, y: 200, width: 20, height: 20};
	target = {x: 50, y: 50, width: 50, height: 50};
	
	var svg = d3.select("#mainSvg");
	var link = {};

	svg.append("rect").attr("x", source.x).attr("y", source.y).attr("width", source.width).attr("height", source.height).style("stroke", "Navy").style("fill", "none");
	svg.append("rect").attr("x", target.x).attr("y", target.y).attr("width", target.width).attr("height", target.height).style("stroke", "Navy").style("fill", "none");
	
	drawLineRectToRect(source, target, svg, link);
	
}

function pointRectIntersectionTest(){
	var point = new Point(100,50);
	var rect = {};
	rect.x = 50; rect.y = 100; rect.width = 100; rect.height = 100;
	
	var line = {x1: point.x, y1: point.y, x2: rect.x + rect.width/2, y2: rect.y + rect.height/2};
	
	var rectLines = [{x1: rect.x, y1: rect.y, x2: rect.x, y2: rect.y + rect.height}, {x1: rect.x, y1: rect.y + rect.height, x2: rect.x + rect.width, y2: rect.y + rect.height}, {x1: rect.x + rect.width, y1: rect.y + rect.height, x2: rect.x + rect.width, y2: rect.y}, {x1: rect.x + rect.width, y1: rect.y, x2: rect.x, y2: rect.y}];
	
	rectLines.push(line);
	
	d3.select("#mainSvg").selectAll("line.a").data(rectLines).enter().append("line")
	.attr("x1", function(d){return d.x1; }).attr("y1", function(d){return d.y1; }).attr("x2", function(d){return d.x2; }).attr("y2", function(d){return d.y2; })
	.style("stroke", "navy");
	
	pointRectIntersection(point, rect).log();
	
}

function linesIntersectionTest(){

	var lines = [{x1: 0, y1: 0, x2: 100, y2: 100}, {x1: 0, y1: 100, x2: 100, y2: 0}];	//2k 有交点
	lines = [{x1: 0, y1: 0, x2: 5, y2: 5}, {x1: 0, y1: 100, x2: 100, y2: 0}];			//2k 无交点
	lines = [{x1: 5, y1: 5, x2: 50, y2: 5}, {x1: 5, y1: 100, x2: 100, y2: 100}];		//2h
	lines = [{x1: 5, y1: 50, x2: 5, y2: 5}, {x1: 50, y1: 10, x2: 50, y2: 200}];			//2v
	lines = [{x1: 5, y1: 50, x2: 50, y2: 50}, {x1: 5, y1: 100, x2: 50, y2: 5}];			//1 horizontal 1 k	有交点
	lines = [{x1: 50, y1: 50, x2: 50, y2: 5}, {x1: 100, y1: 0, x2: 0, y2: 50}];			//1 vertical 1 k		有交点
	lines = [{x1: 5, y1: 50, x2: 50, y2: 50}, {x1: 5, y1: 5, x2: 50, y2: 30}];			//1 horizontal 1 k	无交点
	lines = [{x1: 50, y1: 50, x2: 50, y2: 5}, {x1: 10, y1: 100, x2: 100, y2: 90}];		//1 vertical 1 k		无交点		line1
	lines = [{x1: 10, y1: 100, x2: 100, y2: 90}, {x1: 50, y1: 50, x2: 50, y2: 5}];		//1 vertical 1 k		无交点		line2
	lines = [{x1: 5, y1: 50, x2: 50, y2: 50}, {x1: 25, y1: 75, x2: 50, y2: 25}];		//1 horizontal 1 k	有交点
	lines = [{x1: 5, y1: 50, x2: 50, y2: 50}, {x1: 25, y1: 75, x2: 25, y2: 25}];		//1 horizontal 1 vertical	有交点
	lines = [{x1: 5, y1: 50, x2: 50, y2: 50}, {x1: 25, y1: 35, x2: 25, y2: 25}];		//1 horizontal 1 vertical	无交点
	lines = [{x1: 0, y1: 0, x2: 5, y2: 5}, {x1: 0, y1: 0, x2: 5, y2: 5}];				//2 same line: 2k
	lines = [{x1: 5, y1: 100, x2: 100, y2: 100}, {x1: 5, y1: 100, x2: 100, y2: 100}];	//2 same line: 2h
	lines = [{x1: 50, y1: 10, x2: 50, y2: 200}, {x1: 50, y1: 10, x2: 50, y2: 200}];		//2 same line: 2v
	lines = [{x1: 350, y1: 250, x2: 100, y2: 150}, {x1: 50, y1: 200, x2: 150, y2: 200}];		//

	d3.select("#mainSvg").selectAll("line.a").data(lines).enter().append("line").attr("x1", function(d){ return d.x1; }).attr("x2", function(d){ return d.x2; }).attr("y1", function(d){ return d.y1; }).attr("y2", function(d){ return d.y2; })
	.style("stroke", "black").style("stroke-width", "1px");
	
	linesIntersection(lines).log().drawCircle(3);
	
}

function ret(){
	var x;
	return x=0, true;
}