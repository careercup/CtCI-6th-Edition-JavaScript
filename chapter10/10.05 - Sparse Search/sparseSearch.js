const findMid = (front, back) => {
  const half = Math.floor((back - front) / 2);
  const mid = front + half;
  return mid;
};

const nonBlankMid = (array, front, back) => {
  let mid = findMid(front, back);
  let startSearch = {
    front: front,
    back: back,
    mid: mid
  };
  let searchQueue = [startSearch];
  let currSearch;
  let currFront;
  let currMid;
  let currBack;
  while (searchQueue.length > 0) {
    currSearch = searchQueue.shift();
    currFront = currSearch.front;
    currMid = currSearch.mid;
    currBack = currSearch.back;
    if (array[currMid] !== '') {
      return currMid;
    } else {
      if (currFront < currMid) {
          searchQueue.push({
            front: currFront,
            back: currMid,
            mid: findMid(currFront, currMid)
          });
      }
      if (currMid < currBack) {
        if (currMid !== currBack - 1) {
          searchQueue.push({
            front: currMid,
            back: currBack,
            mid: findMid(currMid, currBack)
          });
        }
      }
    }
  }
  return -1;
};

const sparseSearch = (string, array, front, back) => {
  // check if there are inputs
  if (string === undefined || array === undefined) {
    return 'what are you searching?';
  }
  // set default front and back
  if (front === undefined && back === undefined) {
    front = 0;
    back = array.length;
    if (front === back) { // edge case of empty array
      return -1;
    }
  }
  // find non-blank by binary BFS
  const mid = nonBlankMid(array, front, back);
  if (mid === -1) {
    return -1;
  } else {
    if (string === array[mid]) {
      return mid;
    } else if (string < array[mid]) {
      return sparseSearch(string, array, front, mid);
    } else {
      return sparseSearch(string, array, mid, back);
    }
  }
};

/* TEST */

// sparseSearch can be called
console.log(sparseSearch() === 'what are you searching?');

// nonBlankMid works
console.log(nonBlankMid(['', '', '', '', '', '', '', '', '', '', '', ''], 0, 12) === -1); 
console.log(nonBlankMid(['', '', '', '', '', '', '', '', '', 'hello', '', ''], 0, 12) === 9); 
console.log(nonBlankMid(['', 'hello', '', '', '', '', '', '', '', '', '', ''], 0, 12) === 1); 
console.log(nonBlankMid(['hello', '', '', '', '', '', '', '', '', '', '', ''], 0, 12) === 0); 
console.log(nonBlankMid(['', '', '', '', '', '', '', '', '', '', '', 'hello'], 0, 12) === 11); 

// sparseSearch works
console.log(sparseSearch('ball', ['at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', '']) === 4);
console.log(sparseSearch('ball', ['', '', '', '', '', '', '', '', '', '']) === -1);
