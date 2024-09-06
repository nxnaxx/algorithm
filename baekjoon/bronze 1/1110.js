let input = require('fs').readFileSync('test.txt').toString().split(' ');

let n = input;
let cycle = 0;
let addDigits;

while (true) {
  addDigits = parseInt(n / 10) + (n % 10);
  n = 10 * (n % 10) + (addDigits % 10);
  cycle++;

  if (n === Number(input)) {
    break;
  }
}
console.log(cycle);
