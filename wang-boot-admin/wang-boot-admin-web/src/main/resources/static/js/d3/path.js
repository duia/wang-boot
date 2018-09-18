// 在 body 中插入一個 svg
var svg = d3.select('body').append('svg');
 
// 在 svg 中插入一個 path
svg.append('path').attr({
  d: 'M50 150Q300 50 300 150T450 150'
}).style({
  fill: 'none', 
  stroke: 'purple',
  'stroke-width': 5
});
