function Listy(list) {
  this.list = list.length === 0 ? [] : list;
}

Listy.prototype.elementAt = function (index) {
  return this.list[index]; // assuming we can only check if the element exists, not the length
};

const sortedSearch = function (list, val) {
  let left = 0;
  let right = Number.MAX_SAFE_INTEGER; // Maximum number that's valid in the language 

  if (list.elementAt(left) === val) return left; // quick check to see if we already hit the number
  if (list.elementAt(right) === val) return right;

  while (left < right) {
    const mid = Math.floor(Math.abs((left + right) / 2));

    if (list.elementAt(mid) === val) {
      return mid;
    } else if (list.elementAt(mid) > val || list.elementAt(mid) === undefined) {
      right = mid;
    } else if (list.elementAt(mid) < val) {
      left = mid + 1;
    }
  }

  return -1;
};

const listy = new Listy([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);

console.log(sortedSearch(listy, 0), 0);
console.log(sortedSearch(listy, 2), 2);
console.log(sortedSearch(listy, 6), 6);

console.log(sortedSearch(listy, 15), 15);
console.log(sortedSearch(listy, 16), -1);
console.log(sortedSearch(listy, 7), 7);
