var urlify = function(str, length) {
	return str.slice(0, length).split(' ').join('%20');
};

console.log(urlify('Mr John Smith    ', 13), 'Mr%20John%20Smith');
console.log(urlify('', 0), '');
console.log(urlify('1', 1), '1');
console.log(urlify('1 0 ', 3), '1%200');