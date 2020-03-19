var TowersOfHanoi = function(n) {
  this.first = [];
  this.second = [];
  this.third = [];
  for (var i = n; i >= 1; i--) {
    this.first.push(i);
  }
};

TowersOfHanoi.prototype.move = function(start, mid, dest, depth) {
  if (depth === 0) {
    return;
  } else if (depth === 1) {
    dest.push(start.pop());
  } else {
    var currDepth = depth;
    var shortTower;
    var placePiece;
    if (depth % 2 === 0) {
      shortTower = mid;
      placePiece = dest;
    } else {
      shortTower = dest;
      placePiece = mid;
    }
    var shortTowerDepth = 0;
    shortTower.push(start.pop());
    shortTowerDepth++;
    currDepth--;
    var towerSwap1;
    var towerSwap2;
    while (currDepth > 0) {
      placePiece.push(start.pop());
      currDepth--;
      this.move(shortTower, start, placePiece, shortTowerDepth);
      shortTowerDepth++;
      towerSwap1 = shortTower;
      towerSwap2 = placePiece;
      shortTower = towerSwap2;
      placePiece = towerSwap1;
    }
  }
};

/* TEST */
var th = new TowersOfHanoi(5);
console.log(th);
th.move(th.first, th.second, th.third, th.first.length);
console.log(th);

var th2 = new TowersOfHanoi(6);
console.log(th2);
th.move(th2.first, th2.second, th2.third, th2.first.length);
console.log(th2);




