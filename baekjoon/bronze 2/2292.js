let input = require('fs').readFileSync('test.txt').toString().split(' ');

const n = Number(input);

result = Math.ceil((3 + Math.sqrt(9 - 12 * (1 - n))) / 6);

console.log(result);
