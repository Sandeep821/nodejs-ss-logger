const sum = require('../src/testjest');

test.only('adds 1 + 2 to equal 3', () => {
    console.log('test log');
  expect(sum(1, 2)).toBe(3);
});