let input = require('fs').readFileSync('test.txt').toString().split('\n');

const numArray = input[1]
  .split(' ')
  .map((x) => Number(x))
  .sort((a, b) => a - b);

console.log(`${numArray[0]} ${numArray[numArray.length - 1]}`);
