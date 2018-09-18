// 在 body 中插入一個 svg
  var svg = d3.select('body').append('svg');
  // 在 svg 中插入 polygon
  svg.append('polygon').attr({
    points: '50,10 20,50 80,50'
  }).style({
    fill: 'none', 
    stroke: '#f0f',
    'stroke-width': 4
  });
 
  // 在 svg 中插入 polygon
  svg.append('polygon').attr({
    points: '70,10 130,10 100,50 '
  }).style({
    fill: 'none', 
    stroke: '#520',
    'stroke-width': 4
  });
 
  // 在 svg 中插入 polygon
  svg.append('polygon').attr({
    points: '150,10 120,50 180,50'
  }).style({
    fill: 'none', 
    stroke: '#f0f',
    'stroke-width': 4
  });