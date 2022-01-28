let input = require('fs').readFileSync('test.txt').toString().trim().split(' ');

let n = input;
let result = 0;

while (true) {
  if (n % 5 === 0) {
    result = n / 5 + result;
    break;
  }
  if (n < 0) {
    result = -1;
    break;
  }
  n -= 3;
  result++;
}
console.log(result);
