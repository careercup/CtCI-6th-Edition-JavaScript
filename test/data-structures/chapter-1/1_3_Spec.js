require('../../test_helper');
describe('1.3 #URLify', function() {
  it('returns a URL freindly string of the specified length', function() {
    expect(Strings_1_3.URLify('much ado about nothing          ', 22)).to.be.equal('much%20ado%20about%20nothing');
    expect(Strings_1_3.URLify('Mr John Smith       ', 13)).to.be.equal('Mr%20John%20Smith');
  });
});
