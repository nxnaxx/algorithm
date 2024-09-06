let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

const n = Number(input.shift());
const numArr = input[0].split(' ').map((x) => Number(x));
let index = [];
let result = Array(n).fill(-1);

for (let i = 0; i < n; i++) {
  while (index.length !== 0 && numArr[index[index.length - 1]] < numArr[i]) {
    result[index.pop()] = numArr[i];
  }
  index.push(i);
}

console.log(result.join(' '));
