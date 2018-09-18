<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>D3示例</title>
<link rel="stylesheet" type="text/css" href="../../static/css/d3/line.css"/>
<style>
</style>
</head>
<body>
<div id="sidebar">
	<div id="l"><span>L</span></div>
	<div id="c"><span>C</span></div>
	<div id="r"><span>R</span></div>
	<div id="t"><span>T</span></div>
	<div id="i"><span>I</span></div>
</div>

<audio display="none">
	<source src="../../static/other/alarm_short.mp3" type="audio/mpeg">
</audio>


<svg display="none">
<filter id="dropShadow" x="0" y="0" width="2000" height="1600">
	<feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur"/>
	<feOffset in="blur" dx="4" dy="4" result="offsetBlur"/>
	<feMerge>
		<feMergeNode in="offsetBlur"/>
		<feMergeNode in="SourceGraphic"/>
	</feMerge>
</filter>

<defs>
	<radialGradient id="radialGradient">
		<stop offset="0%" style="stop-color: white;" />
		<stop offset="100%" style="stop-color: darkRed;" />
	</radialGradient>
	<linearGradient id="linearGradient">
		<stop offset="0%" style="stop-color: darkGoldenRod;" />
		<stop offset="100%" style="stop-color: white;" />
	</linearGradient>
	<g id="alarmDef">
		<path d="M350 470 A50 50 0 0 1 450 470 L450 570 L350 570 Z" style="fill: darkred; stroke: black;" class="alarm"/>
		<rect x="300" y="570" width="200" height="30" style="fill: url(#linearGradient); stroke: black;" class="alarm"/>
	</g>
</defs>
</svg>

<bgsound src="" loop="infinite" />
<script type="text/javascript" src="../../static/js/d3/jquery-1.12.2.js"></script>
<script type="text/javascript" src="../../static/js/d3/d3.js"></script>
<script type="text/javascript" src="../../static/js/d3/line.js"></script>
<script>
$(ready);
</script>
</body>
</html>