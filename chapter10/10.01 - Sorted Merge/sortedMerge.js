const sortedMerge = (a, b) => {
  if (a === undefined || b === undefined) {
    return 'where are your arrays?';
  } else {
    let p1 = 0;
    let p2 = 0;

    while (p1< a.length && p2 < b.length) {
		if (a[p1] < b[p2]) {
			p1++;
		}
		else {
			a.splice(p1,0,b[p2]);
			p1++;
			p2++;
		}
    }
	a = a.concat(b.slice(p2));
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
