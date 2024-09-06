let input = require('fs')
  .readFileSync('test.txt')
  .toString()
  .trim()
  .split('\n')
  .map((x) => Number(x));

const n = input.shift();
let stack = [];

input.map((x) => {
  if (x === 0) {
    return stack.pop();
  }
  stack.push(x);
});

const result = stack.length === 0 ? 0 : stack.reduce((acc, cur) => (acc += cur));

console.log(result);
