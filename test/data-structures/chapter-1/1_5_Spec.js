require('../../test_helper');
describe('1.5 #oneAway', function() {
  it('returns true if a string can converted to another string with a single edit', function() {
    expect(Strings_1_5.oneAway('pale', 'ple')).to.be.true;
    expect(Strings_1_5.oneAway('pales', 'pale')).to.be.true;
    expect(Strings_1_5.oneAway('pale', 'bale')).to.be.true;
  });
  it('returns false if a string can not be converted to another string in a single edit', function() {
    expect(Strings_1_5.oneAway('pale', 'ble')).to.be.false;
  });
});
