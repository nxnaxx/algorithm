let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

input.shift();
input.sort((a, b) => a - b);

console.log(input.join('\n'));

/*
const arr = [];
input.map((x) => arr.push(x));
arr.shift();

const result = arr.sort((a, b) => a - b);

for (let i = 0; i < input.length; i++) {
  console.log(input[i]);
}
*/
