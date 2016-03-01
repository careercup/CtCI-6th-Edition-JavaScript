require('../../test_helper');
describe('1.6 #stringCompression', function() {
  it('returns a compressed string', function() {
    expect(Strings_1_6.stringCompression('aabcccccaaa')).to.be.equal('a2b1c5a3');
    expect(Strings_1_6.stringCompression('abcdef')).to.be.equal('abcdef');
  });
});
