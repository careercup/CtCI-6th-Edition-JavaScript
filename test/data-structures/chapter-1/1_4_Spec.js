require('../../test_helper');
describe('1.4 #palindromePermutation', function () {
  it('returns true if a string is a permutation of a palindrom', function () {
    expect(Strings1_4.palindromePermutation('Tact Coa')).to.be.true;
    expect(Strings1_4.palindromePermutation('jhsabckuj ahjsbckj')).to.be.true;
    expect(Strings1_4.palindromePermutation('Able was I ere I saw Elba')).to.be.true;
  });
  it('returns false if a string is not a permutation of a palindrome', function () {
    expect(Strings1_4.palindromePermutation('So patient a nurse to nurse a patient so')).to.be.false;
    expect(Strings1_4.palindromePermutation('Random Words')).to.be.false;
    expect(Strings1_4.palindromePermutation('Not a Palindrome')).to.be.false;
  });
});
