// 在 body 中插入一個 svg
  var svg = d3.select('body').append('svg');

  // 在 svg 中插入 line
  svg.append('line').attr({
    x1: 40,
    y1: 70,
    x2: 250,
    y2: 70
  }).style({
    stroke: 'black',
    'stroke-width': 5
  });
 
  // 在 svg 中插入 line
  svg.append('line').attr({
    x1: 40,
    y1: 140,
    x2: 250,
    y2: 140
  }).style({
    stroke: 'black',
    'stroke-width': 5
  });
 
  // 在 svg 中插入 line
  svg.append('line').attr({
    x1: 100,
    y1: 10,
    x2: 100,
    y2: 200
  }).style({
    stroke: 'black',
    'stroke-width': 5
  });
 
  // 在 svg 中插入 line
  svg.append('line').attr({
    x1: 180,
    y1: 10,
    x2: 180,
    y2: 200
  }).style({
    stroke: 'black',
    'stroke-width': 5
  });
 
  // 在 svg 中插入 circle
  svg.append('circle').attr({
    cx: 140,
    cy: 105,
    r: 20
  }).style({
    fill: 'none',
    stroke: 'red',
    'stroke-width': 4
  });
 
  // 在 svg 中插入 line
  svg.append('line').attr({
    x1: 50,
    y1: 20,
    x2: 80,
    y2: 50
  }).style({
    stroke: 'black',
    'stroke-width': 5
  });
 
  // 在 svg 中插入 line
  svg.append('line').attr({
    x1: 80,
    y1: 20,
    x2: 50,
    y2: 50
  }).style({
    stroke: 'black',
    'stroke-width': 5
  });
 
  // 在 svg 中插入 circle
  svg.append('circle').attr({
    cx: 220,
    cy: 180,
    r: 20
  }).style({
    fill: 'none',
    stroke: 'red',
    'stroke-width': 4
  });
