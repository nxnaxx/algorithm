let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

let arr = input.map((x) => {
  return x % 42;
});

let result = [...new Set(arr)];

console.log(result.length);
