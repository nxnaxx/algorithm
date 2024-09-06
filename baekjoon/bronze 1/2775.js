let input = require('fs')
  .readFileSync('test.txt')
  .toString()
  .trim()
  .split('\n')
  .map((x) => Number(x));

const testCase = input[0];

for (let i = 1; i <= testCase * 2; i += 2) {
  let k = input[i];
  let n = input[i + 1];

  let result = 1;
  for (let j = 0; j < n - 1; j++) {
    result *= k + n - j;
  }
  for (let j = 1; j < n; j++) {
    result /= j;
  }

  console.log(result);
}
