const fs = require('fs');
let input = fs.readFileSync('test.txt').toString().split(' ');

const a = Number(input[0]), b = Number(input[1]), c = Number(input[2]);

console.log((a + b) % c);
console.log((a % c + b % c) % c);
console.log(a * b % c);
console.log((a % c) * (b % c) % c);