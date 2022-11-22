// in timesTwo.js
// Task 1: Code the timesTwo function declaration
function timesTwo(val) {
    return val * 2;
}
// Task 2: Export the timesTwo function as a module
module.exports = timesTwo


// in timesTwo.test.js
const timesTwo = require('./timesTwo');

// Write the first test
test('returns the number times two', () => {
    expect(timesTwo(10)).toBe(20)
});