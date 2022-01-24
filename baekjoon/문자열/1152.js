let input = require('fs').readFileSync('test.txt').toString().trim().split(' ');

let result;
input[0] === '' ? (result = 0) : (result = input.length);

console.log(result);
