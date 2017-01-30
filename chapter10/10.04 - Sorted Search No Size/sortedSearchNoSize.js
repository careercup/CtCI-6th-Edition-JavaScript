// helper function
const findEnd = (listy, last, term) => {
  if (last === undefined && term === undefined) {
    last = 0;
    term = 1;
    // edge case where listy is empty
    if (listy.elementAt(last) === -1) {
      return 0;
    }
  }
  if (listy.elementAt(last) !== -1 && listy.elementAt(term) !== -1) {
    return findEnd(listy, last, term * 2);
  } else if (listy.elementAt(last) !== -1 && listy.elementAt(term) === -1) {
    if (last === term - 1) {
      return term;
    }
    const half = Math.floor((term - last) / 2);
    const mid = last + half;
    if (listy.elementAt(mid) === -1) {
      return findEnd(listy, last, mid);
    } else {
      return findEnd(listy, mid, term);
    }
  } else {
    throw `error: index ${last} is ${listy.elementAt(last)} and ${term} is ${listy.elementAt(term)}`; 
  }
};

const sortedSearchNoSize = (listy, value, front, back) => {
  if (listy === undefined) {
    return 'what are we searching?';
  }
  if (front === undefined && back === undefined) {
    front = 0;
    const end = findEnd(listy);
    back = end;
  }
  if (front === back) {
    return -1;
  }
  const half = Math.floor((back - front) / 2);
  const mid = front + half;
  if (listy.elementAt(mid) === value) {
    return mid;
  } else if (value < listy.elementAt(mid)) {
    return sortedSearchNoSize(listy, value, front, mid);
  } else {
    if (mid === back - 1) {
     return -1;
    } else {
      return sortedSearchNoSize(listy, value, mid, back);
    }
  }
};

/* TEST */

const Listy = require('listy.js');
 
// sortedSearchNoSize is available as a function
console.log(sortedSearchNoSize() === 'what are we searching?');

// Listy is working
let listy = new Listy([1, 2, 3, 4]);
console.log(listy.length === undefined);
console.log(listy[1] === undefined);
console.log(listy.length === undefined);
console.log(listy.elementAt(10) === -1);
console.log(listy.elementAt(2) === 3);

// sortedSearchNoSize works as expected
listy = new Listy([2, 3, 4, 6]);
console.log(sortedSearchNoSize(listy, 3) === 1);
console.log(sortedSearchNoSize(listy, 2) === 0);
console.log(sortedSearchNoSize(listy, 6) === 3);
console.log(sortedSearchNoSize(listy, 1) === -1);
console.log(sortedSearchNoSize(listy, 10) === -1);
console.log(sortedSearchNoSize(listy, 5) === -1);
