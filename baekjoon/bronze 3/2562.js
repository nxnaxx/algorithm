let input = require('fs')
  .readFileSync('test.txt')
  .toString()
  .split('\n')
  .map((x) => Number(x));

let maxNum = Math.max(...input);
console.log(maxNum);
console.log(input.indexOf(maxNum) + 1);
