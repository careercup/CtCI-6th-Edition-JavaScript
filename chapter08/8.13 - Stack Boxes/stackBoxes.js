var dp = {};

var findStackables = (boxes, basebox) => {
  var stackables = [];
  // for each box, check all other boxes for which it is dominant
  boxes.forEach((box) => {
    if (box.height < basebox.height && box.width < basebox.width && box.depth < basebox.depth) {
      stackables.push(box);
    }
  });
  return stackables;
};

var stackBoxes = function(boxes) {
  if (boxes === undefined) { 
    return 'where are your boxes?'; 
  }
  
  if (boxes.length === 0) { 
    return 0; 
  }
  boxes.sort();
  var key = JSON.stringify(boxes);
  if (dp[key] === undefined) {
    var height = 0;
    /* find max height of stack by doing the following:
        -for each box
        -find stackables from the remaining box stack
        -add height of box plus a recursive call to stackables
        -if height is larger than the max height so far, set it as max height
    */
    boxes.forEach((box) => {
      var stackables = findStackables(boxes, box);
      var currHeight = box.height + stackBoxes(stackables);
      height = Math.max(currHeight, height);
    });
    dp[key] = height;
  }
  return dp[key];
};

/* TEST */

// 'able to call stackBoxes
console.log(stackBoxes() === 'where are your boxes?');

// 'able to stack one box
const box1a = {
  width: 1,
  height: 1,
  depth: 1
};
console.log(stackBoxes([box1a]) === 1);

// 'able to stack one box and return height
const box1b = {
  width: 1,
  height: 100,
  depth: 1
};
console.log(stackBoxes([box1b]) === 100);


// 'able to stack two increasingly large boxes
const box1c = {
  width: 1,
  height: 1,
  depth: 1
};
const box2c = {
  width: 2,
  height: 2,
  depth: 2
};
console.log(stackBoxes([box1c, box2c]) === 3);

// 'able to stack three increasingly large boxes
const box1d = {
  width: 1,
  height: 1,
  depth: 1
};
const box2d = {
  width: 2,
  height: 2,
  depth: 2
};
const box3d = {
  width: 3,
  height: 3,
  depth: 3
};
console.log(stackBoxes([box1d, box2d, box3d]) === 6);

// 'able to stack three increasingly large boxes out of order
const box1e = {
  width: 1,
  height: 1,
  depth: 1
};
const box2e = {
  width: 2,
  height: 2,
  depth: 2
};
const box3e = {
  width: 3,
  height: 3,
  depth: 3
};
console.log(stackBoxes([box2e, box3e, box1e]) === 6);

// 'unable to stack three boxes, one tall, one wide, one deep
const box1f = {
  width: 3,
  height: 1,
  depth: 1
};
const box2f = {
  width: 1,
  height: 3,
  depth: 1
};
const box3f = {
  width: 1,
  height: 1,
  depth: 3
};
console.log(stackBoxes([box1f, box2f, box3f]) === 3);
