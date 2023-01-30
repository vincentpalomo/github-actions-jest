const substraction = require('./subtraction');
test('substracts 4 - 2 to equal 2', () => {
  expect(substraction(4, 2)).toBe(2);
});
