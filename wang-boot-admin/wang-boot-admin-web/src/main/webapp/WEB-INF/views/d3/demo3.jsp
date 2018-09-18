<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>画布示例</title>
<style>
html,body {
	margin:0;
	padding:0;
}
</style>
</head>
<body>
<canvas id="myCanvas" onmousemove="cnvs_getCoordinates(event)" onmouseout="cnvs_clearCoordinates()"></canvas>
<div id="xycoordinates"></div>
<script>
var width = document.documentElement.clientWidth,// ==> 可见区域宽度 
height = document.documentElement.clientHeight;// ==> 可见区域高度 

var c=document.getElementById("myCanvas");
c.width = width;
c.height = height-25;

function cnvs_getCoordinates(e)
{
x=e.clientX;
y=e.clientY;
document.getElementById("xycoordinates").innerHTML="Coordinates: (" + x + "," + y + ")";
}
 
function cnvs_clearCoordinates()
{
document.getElementById("xycoordinates").innerHTML="";
}

var cxt=c.getContext("2d");
var img=new Image()
img.src="../../static/images/fx/3300A-1.png"
cxt.drawImage(img,20,30);

cxt.moveTo(500,100);
cxt.lineTo(500,300);
cxt.stroke();

cxt.moveTo(600,200);
cxt.lineTo(800,200);
cxt.stroke();

var txt="fill示例文字";
cxt.font = "bolid 30px sans-serif";
cxt.strokeText(txt, 100, 300);

/* var interal = setInterval(function () {
	move(cxt);
}, 1); */

cxt.fillStyle="#FF0000";
cxt.beginPath();
cxt.arc(300,300,15,0,Math.PI*2,true);
cxt.closePath();
cxt.fill();

</script>
</body>
</html>