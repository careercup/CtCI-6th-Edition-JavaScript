require('../../test_helper');

function runTest(methodName) {
  var str1, str2;
  beforeEach(function () {
    str1 = 'abcdef';
    str2 = 'qwertyuiopasdfghjkl;\'zxcvbnm,.';
    str3 = 'abcdefa';
  });
  it('returns true if string is all unique chars', function () {
    expect(Strings_1_1[methodName](str1)).to.be.true;
  });
  it('returns false if string is all unique chars', function () {
    expect(Strings_1_1[methodName](str2)).to.be.true;
  });
  it('returns false if string contains duplicate chars', function () {
    expect(Strings_1_1[methodName](str3)).to.be.false;
  });
}

describe('Strings_1_1', function () {

  var methodCount = 4;
  for (var i = 1; i <= methodCount; i++) {
    describe('hasUniqueChars' + i, function () {
      runTest('hasUniqueChars' + i);
    });
  }
});