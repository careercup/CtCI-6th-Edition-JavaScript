function rotate(pic) {
	let rotatePic = [];
	
	for (let i=0; i<pic.length; i++) {
		for (let j=0; j<pic.length; j++) {
			if (!rotatePic[j]) {
				rotatePic[j] = [];
			}
			rotatePic[j][(pic[i].length-1)-i] = pic[i][j];
		}
	}
	printPic(pic);
	printPic(rotatePic);
	
	return rotatePic;
}

function printPic(pic) {
	console.log('###')
	for (let i=0; i<pic.length; i++) {
		console.log(pic[i].join(''));
	}
	console.log('###')
}

function areEqual(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	
	for (let i=0; i<arr1.length; i++) {
		if (arr1[i].length !== arr2[i].length) {
			return false;
		}
		for (let j=0; j<arr1.length; j++) {
			if (arr1[i][j] !== arr2[i][j]) {
				return false;
			}
		}
	}
	
	return true;
}

console.log(areEqual(
					rotate([[1,1,1,1],[2,2,2,2],[3,3,3,3],[4,4,4,4]]), 
					[[4,3,2,1],[4,3,2,1],[4,3,2,1],[4,3,2,1]])
			);
console.log(areEqual(
					rotate([[8,0,1,0],[1,2,2,6],[9,7,3,3],[9,1,4,9]]), 
					[[9,9,1,8],[1,7,2,0],[4,3,2,1],[9,3,6,0]])
			);
