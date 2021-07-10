function oneAway(str1, str2) {
	let arr1 = str1.split('');
	let arr2 = str2.split('');
	let diff = 0, p1 = 0, p2 = 0;
	
	while (p1 < arr1.length && p2 < arr2.length && diff <= 1) {
		let isEqual = arr1[p1] === arr2[p2];
		p1 +=  isEqual || arr1.length >= arr2.length;
		p2 += isEqual  || arr2.length >= arr1.length;
		diff += !isEqual;
	}
	
	return diff <= 1;

}
