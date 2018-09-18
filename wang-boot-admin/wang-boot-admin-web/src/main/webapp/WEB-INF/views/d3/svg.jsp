<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>SVG示例</title>
<style>
html,body{
	margin:0;
	padding:0;
}
svg{
	width: 100%;
	height: 650px;
}
div.bar {
				display: inline-block;
				width: 20px;
				height: 75px;	/* Gets overriden by D3-assigned height below */
				margin-right: 2px;
				background-color: teal;
			}
.pumpkin {  
    fill: yellow;  
    stroke: orange;  
        stroke-width: 5;  
} 

</style>
</head>
<body>
<!-- <svg width=500 height=960>  
    <rect x="0" y="0" width="500" height="50"/>  
    <ellipse cx="250" cy="225" rx="100" ry="25"/>  
    <line x1="0" y1="120" x2="500" y2="50" stroke="black"/>  
    <text x="250" y="155" font-family="sans-serif"   
            font-size="25" fill="gray">Easy-peasy</text>  
    <circle cx="25" cy="80" r="20"  
            fill="rgba(128, 0, 128, 0.75)"   
            stroke="rgba(0, 255, 0, 0.25)"   
            stroke-width="100"/>  
    <circle cx="75" cy="80" r="20"  
            fill="rgba(0, 255, 0, 0.75)"  
            stroke="rgba(0, 0, 255, 0.25)" stroke-width="10"/>  
    <circle cx="125" cy="80" r="20"  
            fill="rgba(255, 255, 0, 0.75)"  
            stroke="rgba(255, 0, 0, 0.25)" stroke-width="10"/>  
    <rect x="0" y="300" width="30" height="30" fill="purple"/>  
    <rect x="20" y="305" width="30" height="30" fill="blue"/>  
    <rect x="40" y="310" width="30" height="30" fill="green"/>  
    <rect x="60" y="315" width="30" height="30" fill="yellow"/>  
    <rect x="80" y="320" width="30" height="30" fill="red"/>  
    <circle cx="25" cy="425" r="22" class="pumpkin"/>  
    <circle cx="25" cy="525" r="20" fill="rgba(128, 0, 128, 1.0)"/>  
    <circle cx="50" cy="525" r="20" fill="rgba(0, 0, 255, 0.75)"/>  
    <circle cx="75" cy="525" r="20" fill="rgba(0, 255, 0, 0.5)"/>  
    <circle cx="100" cy="525" r="20" fill="rgba(255, 255, 0, 0.25)"/>  
    <circle cx="125" cy="525" r="20" fill="rgba(255, 0, 0, 0.1)"/>  
    <circle cx="25" cy="625" r="20" fill="purple"   
            stroke="green" stroke-width="10"  
            opacity="0.9"/>  
    <circle cx="65" cy="625" r="20" fill="green"  
            stroke="blue" stroke-width="10"  
            opacity="0.5"/>  
    <circle cx="105" cy="625" r="20" fill="yellow"  
            stroke="red" stroke-width="10"  
            opacity="0.1"/>  
</svg>   -->

<script type="text/javascript" src="../static/js/d3/d3.js"></script>
<!-- <script type="text/javascript" src="../static/js/d3/lines.js"></script>
 -->
<script>
var w = document.documentElement.clientWidth,// ==> 可见区域宽度 
h = document.documentElement.clientHeight;// ==> 可见区域高度 

//创建SVG元素  
var svg = d3.select("body")  
    .append("svg")  
    .attr("width", w)  
    .attr("height", h);  
  
svg.append("rect")  
    .attr("x", 100)  
    .attr("y", 100)  
    .attr("width", 200)  
    .attr("height", 200)
    .attr("id", "mypath")
    .style({
      fill:"blue",
	  stroke:"pink",
      "stroke-width":5,
      opacity:0.9
    });

svg.append('text')  
   .attr('x', 100)  
   .attr('y', 200)  
   .style('fill', 'steelblue')  
   .style('font-size', '24px')  
   .style('font-weight', 'bold')  
   .text('.text加入文字测试！并用xlink:href: #mypath加入了路径');

  	
</script>
</body>
</html>