const fs = require('fs');
let input = fs.readFileSync('test.txt').toString().split('\n');

const num1 = Number(input[0]);
const num2 = Number(input[1]);

console.log(num1 * (num2 % 10));
console.log(num1 * parseInt(num2 % 100 / 10));
console.log(num1 * parseInt(num2 / 100));
console.log(num1 * num2);