const { test, assert } = require('../../test/TestHelper');

// Write your code here...
function isUnique(str) {}

/* TESTS */
test('All unique characters should be true', () => {
  const result = isUnique('abcd');
  const expected = true;
  assert(result).toBe(expected);
});

test('Duplicate character should be false', () => {
  const result = isUnique('abccd');
  const expected = false;
  assert(result).toBe(expected);
});

test('Multiple duplicate characters should be false', () => {
  const result = isUnique('bhjjb');
  const expected = false;
  assert(result).toBe(expected);
});

test('All unique characters should be true', () => {
  const result = isUnique('mdjq');
  const expected = true;
  assert(result).toBe(expected);
});

test('When first and last character are the same, should be false', () => {
  const result = isUnique('bob');
  const expected = true;
  assert(result).toBe(expected);
});

test('Single character should be true', () => {
  const result = isUnique('a');
  const expected = true;
  assert(result).toBe(expected);
});
