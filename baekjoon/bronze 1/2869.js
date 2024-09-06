let input = require('fs').readFileSync('test.txt').toString().trim().split(' ');

const a = input[0];
const b = input[1];
const v = input[2];

console.log(Math.ceil((v - b) / (a - b)));
