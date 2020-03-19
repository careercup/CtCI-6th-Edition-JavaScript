var genCombinations = function() {
  var answers = [];
  var recurse = function(current, pointer, array) {
    if (pointer === array.length) {
      answers.push(current);
    } else {
      recurse(current.concat([array[pointer]]), pointer + 1, array);
      recurse(current, pointer + 1, array);
    }
  };
  recurse([], 0, ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']);
  return answers;
};

var makeTest = function(array) {
  var tests = {};
  for (var i = 0; i < array.length; i++) {
    array[i].forEach((test) => {
      if (tests[test] === undefined) {
        tests[test] = [i + 1];
      } else {
        tests[test].push(i + 1);
      }
    });
  }
  return tests;
};

console.log(makeTest(genCombinations())); // 1024 combinations