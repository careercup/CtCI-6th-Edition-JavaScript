const sortedMerge = (a, b) => {
  if (a === undefined || b === undefined) {
    return 'where are your arrays?';
  } else {
    // naive solution: create new array and merge
    // create new array
    let answer = [];
    // declare pointers for A and B
    let pointerA = 0;
    let pointerB = 0;
    // use pointers to iterate through A and B and insert elements into new array
    /* 
    while (pointerA < a.length || pointerB < b.length) {
      if (pointerA === a.length) {
        answer.push(b[pointerB]);
        pointerB++;
      } else if (pointerB === b.length) {
        answer.push(a[pointerA]);
        pointerA++;
      } else if (a[pointerA] < b[pointerB]) {
        answer.push(a[pointerA]);
        pointerA++;
      } else {
        answer.push(b[pointerB]);
        pointerB++;
      }
    }
    return answer;
    */

    // in-place solution: merge into A in place
    // helper function: move back array one space, from pointer to end
    const moveBack = (arr, pt, end) => {
      let currPt = end;
      while (currPt > pt) {
        arr[currPt] = arr[currPt - 1];
        currPt--;
      }
    };

    let end = a.length;
    // while pointerB is still traversing through B
    while (pointerB < b.length) {
      // if pointerA is done traversing (should just append all of B to back of A)
      if (pointerA === end) {
        a[pointerA] = b[pointerB];
        pointerA++;
        pointerB++;
        end++;
      // else if value at pointerA is smaller that value at pointerB (should not insert, continue traversing A)
      } else if (a[pointerA] < b[pointerB]) {
        pointerA++;
      } else {
        // otherwise move all elements from pointerA back by one space, and insert value at pointerB into a
        moveBack(a, pointerA, end);
        a[pointerA] = b[pointerB];
        pointerA++;
        pointerB++;
        end++;
      }
    }
    return a; 
  }
};

/* TEST */

// sortedMerge is callable
console.log(sortedMerge() === 'where are your arrays?');

// sortedMerge merges in order
console.log(JSON.stringify(sortedMerge([0, 2, 4], [1, 3, 5])) === JSON.stringify([0, 1, 2, 3, 4, 5]));

// sortedMerges sorted arrays
console.log(JSON.stringify(sortedMerge([0, 1, 2], [3, 4, 5])) === JSON.stringify([0, 1, 2, 3, 4, 5]));

// sortedMerge merges empty arrays
console.log(JSON.stringify(sortedMerge([0, 1, 2], [])) === JSON.stringify([0, 1, 2]));
