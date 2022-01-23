let input = require('fs').readFileSync('test.txt').toString().split('\n');

const result = input[1].split('').reduce((acc, cur) => Number(acc) + Number(cur));
console.log(result);
