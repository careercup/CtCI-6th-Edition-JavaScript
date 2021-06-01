// @params: { String: title, Function: callback }
function test(title, callback) {
  try {
    callback();
    console.log(`✅ ${title}`);
  } catch (error) {
    console.log(`❌ ${title}`);
    console.log('Error', error);
  }
}

function assert(result) {
  return {
    toBe: function (expected) {
      if (result !== expected) {
        throw new Error(`Expected ${expected}. Received ${result}`);
      }
    },
  };
}

module.exports = { test, assert };

// NOTE: The only assertion right now is:
// * toBe

// HOW TO USE:
// 1. Define your assertions.
/* 
  const result = add(10, 1);
  const expected = 11;
*/

// 2. Call the test function:
/* 
test('Should be able to add two positive integers', function addTwoPositiveInt() {
  const result = add(10, 1);
  const expected = 11;
  assert(result).toBe(expected);
});
*/
