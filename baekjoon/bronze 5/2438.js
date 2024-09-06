let input = require('fs').readFileSync('test.txt').toString().split(' ');

const n = Number(input[0]);
let star = '';

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    star += '*';
  }
  star += '\n';
}

console.log(star);