var drawLine = function(screen, width, x1, x2, y) {
  var byte;
  var pixel;

  var findByte = function(x, y, width) {
    var start = y * width / 8;
    return start + Math.floor(x / 8);
  };
  
  var findPixel = function(x) {
    return x % 8;
  };
  
  for (var i = x1; i <= x2; i++) {
    byte = findByte(i, y, width);
    pixel = findPixel(i);
    screen[byte][pixel] = 1;
  }
  return screen;
};

/* Test */

var testScreen = [[0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0], 
              [0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0], 
              [0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0], 
              [0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0]];
drawLine(testScreen, 16, 4, 12, 1);
console.log(testScreen);
