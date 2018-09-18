// 在 body 中插入一個 svg
  var svg = d3.select('body').append('svg');

    // 在 svg 中插入 ellipse
  svg.append('ellipse').attr({
    cx: 100,
    cy: 60, 
    rx: 30, 
    ry: 50
  }).style({
    fill: 'pink', 
    stroke: 'green', 
    'stroke-width': 10
  });
 
  // 在 svg 中插入 ellipse
  svg.append('ellipse').attr({
    cx: 200,
    cy: 60, 
    rx: 30, 
    ry: 50
  }).style({
    fill: 'pink', 
    stroke: 'green', 
    'stroke-width': 10,
    'fill-opacity': .6
  });
 
  // 在 svg 中插入 ellipse
  svg.append('ellipse').attr({
    cx: 145,
    cy: 180, 
    rx: 110, 
    ry: 40
  }).style({
    fill: 'pink', 
    stroke: 'green', 
    'stroke-width': 5,
    opacity: .6
  });
