let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

input.shift();

input.sort((a, b) => {
  if (a.length === b.length) {
    return a.localeCompare(b);
  }
  return a.length - b.length;
});

const result = new Set(input);

console.log(...result);
