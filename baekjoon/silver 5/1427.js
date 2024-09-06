let input = require('fs')
  .readFileSync('test.txt')
  .toString()
  .trim()
  .split('')
  .map((x) => Number(x));

input.sort((a, b) => b - a);
console.log(input.join(''));
