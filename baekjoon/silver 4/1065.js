let input = require('fs').readFileSync('test.txt').toString().split(' ');

const n = Number(input);
let count = 0;

for (let i = 1; i <= n; i++) {
  if (i < 100) {
    count++;
  } else if (i < 1000) {
    let firstNum = Math.floor(i / 100);
    let secondNum = Math.floor((i % 100) / 10);
    let lastNum = Math.floor(i % 10);
    if (firstNum - secondNum === secondNum - lastNum) {
      count++;
    }
  }
}

console.log(count);
