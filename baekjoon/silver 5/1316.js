let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

const n = input[0];
let count = n;

for (let i = 1; i <= n; i++) {
  let currStr = input[i];
  let sample = [];
  sample.push(currStr[0]);

  for (let j = 1; j < currStr.length; j++) {
    if (sample.includes(currStr[j]) === false) {
      sample.push(currStr[j]);
    } else if (currStr[j] !== currStr[j - 1]) {
      count -= 1;
      break;
    }
  }
}

console.log(count);
