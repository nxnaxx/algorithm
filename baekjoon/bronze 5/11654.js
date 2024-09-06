let input = require('fs').readFileSync('test.txt').toString().split(' ');

const n = input[0];

console.log(n.charCodeAt(0));
