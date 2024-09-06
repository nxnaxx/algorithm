let input = require('fs').readFileSync('test.txt').toString().split(' ');

let num = Number(input);
let lastValue = 1;
let firstNum = 1;

for (let i = 2; i <= num; i++) {
  if (num <= lastValue) {
    break;
  }
  lastValue += i;
  firstNum++;
}

let gap = lastValue - num;

if (firstNum % 2 !== 0) {
  console.log(`${gap + 1}/${firstNum - gap}`);
} else {
  console.log(`${firstNum - gap}/${gap + 1}`);
}
