let input = require('fs').readFileSync('test.txt').toString().split('\n');

const n = Number(input[0]);
let result = '';

for (let i = 1; i <= n; i++) {
  let num = input[i].split(' ');
  result += `Case #${i}: ${num[0]} + ${num[1]} = ${Number(num[0]) + Number(num[1]) + '\n'}`;
}

console.log(result);