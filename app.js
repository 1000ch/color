const colors = [
  { x : 0, y : 0, color : '#faddd1' },
  { x : 0, y : 1, color : '#f4b69c' },
  { x : 0, y : 2, color : '#ee8f66' },
  { x : 0, y : 3, color : '#e86830' },
  { x : 0, y : 4, color : '#c74b16' },
  { x : 0, y : 5, color : '#913710' },
  { x : 0, y : 6, color : '#5c230a' },

  { x : 1, y : 0, color : '#fad3d1' },
  { x : 1, y : 1, color : '#f4a09c' },
  { x : 1, y : 2, color : '#ee6d66' },
  { x : 1, y : 3, color : '#e83a30' },
  { x : 1, y : 4, color : '#c71f16' },
  { x : 1, y : 5, color : '#911710' },
  { x : 1, y : 6, color : '#5c0e0a' },

  { x : 2, y : 0, color : '#fad1e6' },
  { x : 2, y : 1, color : '#f49cc8' },
  { x : 2, y : 2, color : '#ee66aa' },
  { x : 2, y : 3, color : '#e8308c' },
  { x : 2, y : 4, color : '#c7166f' },
  { x : 2, y : 5, color : '#911051' },
  { x : 2, y : 6, color : '#5c0a33' },

  { x : 3, y : 0, color : '#e5d1fa' },
  { x : 3, y : 1, color : '#c69cf4' },
  { x : 3, y : 2, color : '#a866ee' },
  { x : 3, y : 3, color : '#8930e8' },
  { x : 3, y : 4, color : '#6c16c7' },
  { x : 3, y : 5, color : '#4f1091' },
  { x : 3, y : 6, color : '#320a5c' },

  { x : 4, y : 0, color : '#d4d1fa' },
  { x : 4, y : 1, color : '#a39cf4' },
  { x : 4, y : 2, color : '#7166ee' },
  { x : 4, y : 3, color : '#4030e8' },
  { x : 4, y : 4, color : '#2516c7' },
  { x : 4, y : 5, color : '#1b1091' },
  { x : 4, y : 6, color : '#110a5c' },

  { x : 5, y : 0, color : '#d1e3fa' },
  { x : 5, y : 1, color : '#9cc2f4' },
  { x : 5, y : 2, color : '#66a1ee' },
  { x : 5, y : 3, color : '#3080e8' },
  { x : 5, y : 4, color : '#1663c7' },
  { x : 5, y : 5, color : '#104891' },
  { x : 5, y : 6, color : '#0a2e5c' },

  { x : 6, y : 0, color : '#d1f3fa' },
  { x : 6, y : 1, color : '#9ce5f4' },
  { x : 6, y : 2, color : '#66d7ee' },
  { x : 6, y : 3, color : '#30c9e8' },
  { x : 6, y : 4, color : '#16a9c7' },
  { x : 6, y : 5, color : '#107c91' },
  { x : 6, y : 6, color : '#0a4e5c' },

  { x : 7, y : 0, color : '#d1faf0' },
  { x : 7, y : 1, color : '#9cf4df' },
  { x : 7, y : 2, color : '#66eece' },
  { x : 7, y : 3, color : '#30e8bd' },
  { x : 7, y : 4, color : '#16c79e' },
  { x : 7, y : 5, color : '#109173' },
  { x : 7, y : 6, color : '#0a5c49' },

  { x : 8, y : 0, color : '#d1fad7' },
  { x : 8, y : 1, color : '#9cf4a7' },
  { x : 8, y : 2, color : '#66ee78' },
  { x : 8, y : 3, color : '#30e849' },
  { x : 8, y : 4, color : '#16c72e' },
  { x : 8, y : 5, color : '#109121' },
  { x : 8, y : 6, color : '#0a5c15' },

  { x : 9, y : 0, color : '#d1fad7' },
  { x : 9, y : 1, color : '#9cf4a7' },
  { x : 9, y : 2, color : '#66ee78' },
  { x : 9, y : 3, color : '#30e849' },
  { x : 9, y : 4, color : '#16c72e' },
  { x : 9, y : 5, color : '#109121' },
  { x : 9, y : 6, color : '#0a5c15' },

  { x : 10, y : 0, color : '#ebfad1' },
  { x : 10, y : 1, color : '#d4f49c' },
  { x : 10, y : 2, color : '#bcee66' },
  { x : 10, y : 3, color : '#a5e830' },
  { x : 10, y : 4, color : '#86c716' },
  { x : 10, y : 5, color : '#629110' },
  { x : 10, y : 6, color : '#3e5c0a' },

  { x : 11, y : 0, color : '#faf9d1' },
  { x : 11, y : 1, color : '#f4f19c' },
  { x : 11, y : 2, color : '#eee966' },
  { x : 11, y : 3, color : '#e8e230' },
  { x : 11, y : 4, color : '#c7c116' },
  { x : 11, y : 5, color : '#918d10' },
  { x : 11, y : 6, color : '#5c590a' },

  { x : 12, y : 0, color : '#faefd1' },
  { x : 12, y : 1, color : '#f4dc9c' },
  { x : 12, y : 2, color : '#eeca66' },
  { x : 12, y : 3, color : '#e8b730' },
  { x : 12, y : 4, color : '#c79816' },
  { x : 12, y : 5, color : '#916f10' },
  { x : 12, y : 6, color : '#5c460a' },

  { x : 13, y : 0, color : '#fae6d1' },
  { x : 13, y : 1, color : '#f4c89c' },
  { x : 13, y : 2, color : '#eeaa66' },
  { x : 13, y : 3, color : '#e88c30' },
  { x : 13, y : 4, color : '#c76f16' },
  { x : 13, y : 5, color : '#915110' },
  { x : 13, y : 6, color : '#5c330a' },

  { x : 14, y : 0, color : '#f2e2d9' },
  { x : 14, y : 1, color : '#e3c0ac' },
  { x : 14, y : 2, color : '#d59f80' },
  { x : 14, y : 3, color : '#c67d53' },
  { x : 14, y : 4, color : '#a66037' },
  { x : 14, y : 5, color : '#794628' },
  { x : 14, y : 6, color : '#4d2c19' },

  { x : 15, y : 0, color : '#ffffff' },
  { x : 15, y : 1, color : '#e4e4e4' },
  { x : 15, y : 2, color : '#b4b4b4' },
  { x : 15, y : 3, color : '#848484' },
  { x : 15, y : 4, color : '#545454' },
  { x : 15, y : 5, color : '#242424' },
  { x : 15, y : 6, color : '#000000' }
];

const svg = d3.select('body').append('svg');
const width = 720;
const height = 440;

svg.attr('width', width)
   .attr('height', height)
   .attr('class', 'Palette');

const xMax = d3.max(colors, d => d.x) + 1;
const yMax = d3.max(colors, d => d.y) + 1;
const cellSize = 48;

const color = svg.append('g')
  .attr('transform', `translate(${width / 2}, ${height / 2})`)
  .selectAll('.Item')
  .data(colors)
  .enter()
  .append('g')
  .attr('class', 'Item')
  .attr('transform', d => `translate(${(d.x - xMax / 2) * cellSize}, ${(d.y - yMax / 2) * cellSize})`);

color.append('rect')
  .attr('x', -cellSize / 2)
  .attr('y', -cellSize / 2)
  .attr('width', cellSize - 1)
  .attr('height', cellSize - 1)
  .attr('fill', d => d.color)
  .attr('class', 'Color')
  .attr('aria-label', d => d.color)
  .attr('data-clipboard-action', 'copy')
  .attr('data-clipboard-text', d => d.color);

const clipboard = new Clipboard('.Color');
