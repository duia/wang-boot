// 在 body 中插入一個 svg
  var svg = d3.select('body').append('svg');
 
  
// 在 svg 中插入 polyline
svg.append('polyline').attr({
  points: '100,10 40,180 190,60 10,60 160,180 100,10'
}).style({
  fill: 'black', 
  stroke: 'green',
  'stroke-width': 4
  });
 
  // 在 svg 中插入 polyline
svg.append('polyline').attr({
  points: '200,160 240,160 240,120 280,120 280,80 320,80 320,40 360,40 360,160 240,160'
}).style({
  fill: 'none', 
  stroke: 'green',
  'stroke-width': 4
});
