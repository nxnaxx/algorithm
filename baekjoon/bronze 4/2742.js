let input = require('fs').readFileSync('test.txt').toString().split(' ');

const n = Number(input[0]);
let result = '';

for (let i = n; i > 0; i--) {
  result += i + '\n';
}

console.log(result);