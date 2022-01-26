let input = require('fs')
  .readFileSync('test.txt')
  .toString()
  .split(' ')
  .map((x) => Number(x));

const a = input[0];
const b = input[1];
const c = input[2];

if (b >= c) {
  return console.log(-1);
} else {
  return console.log(Math.floor(a / (c - b)) + 1);
}
