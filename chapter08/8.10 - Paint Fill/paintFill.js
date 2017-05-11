var withinBounds = function(point, screen) {
  var [row, col] = point;
  var rowHeight = screen.length;
  var colWidth = screen[0].length;
  return row >= 0 && row < rowHeight && col >=0 && col < colWidth;
};

var paintFill = function(screen, point, color) {
  var [row, col] = point;
  var currColor = screen[row][col];
  if (withinBounds(point, screen) && screen[row][col] !== color) {  
    screen[row][col] = color;
       
    if (withinBounds([row + 1, col], screen) && screen[row + 1][col] === currColor) {
      paintFill(screen, [row + 1, col], color);
    }
    
    if (withinBounds([row + 1, col + 1], screen) && screen[row + 1][col + 1] === currColor) {
      paintFill(screen, [row + 1, col + 1], color);
    }
    
    if (withinBounds([row + 1, col - 1], screen) && screen[row + 1][col - 1] === currColor) {
      paintFill(screen, [row + 1, col - 1], color);
    }
    
    if (withinBounds([row, col + 1], screen) && screen[row][col + 1] === currColor) {
      paintFill(screen, [row, col + 1], color);
    }
    
    if (withinBounds([row, col - 1], screen) && screen[row][col - 1] === currColor) {
      paintFill(screen, [row, col - 1], color);
    }
    
    if (withinBounds([row - 1, col], screen) && screen[row - 1][col] === currColor) {
      paintFill(screen, [row - 1, col], color);
    }
    
    if (withinBounds([row - 1, col + 1], screen) && screen[row - 1][col + 1] === currColor) {
      paintFill(screen, [row - 1, col + 1], color);
    }

    if (withinBounds([row - 1, col - 1], screen) && screen[row - 1][col - 1] === currColor) {
      paintFill(screen, [row - 1, col - 1], color);
    }
  }
};

/* TEST */

var b = '#000000';
var w = '#ffffff';
var g = '#00ff00';

var testScreen = [
  [b, b, b, b],
  [b, w, w, b],
  [b, w, w, b],
  [b, b, b, b]
];
var testScreen2 = [
  [b, w, w, b],
  [b, w, w, b],
  [b, b, w, b],
  [b, w, w, b]
];


var testPoint = [1, 1];

paintFill(testScreen, testPoint, g);
paintFill(testScreen2, testPoint, g);

console.log(testScreen);
console.log(testScreen2);
