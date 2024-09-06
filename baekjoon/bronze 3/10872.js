let input = require('fs').readFileSync('test.txt').toString().trim().split(' ');

const n = Number(input);

const factorial = (n) => {
  if (n < 2) {
    return 1;
  }
  return factorial(n - 1) * n;
};

console.log(factorial(n));
