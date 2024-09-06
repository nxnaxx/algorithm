let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

input.shift();
input.sort((a, b) => a - b);

console.log(input.join('\n'));
