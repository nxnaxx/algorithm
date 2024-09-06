let input = require('fs').readFileSync('test.txt').toString().split(' ');

let firstNum = Number(input[0].split('').reverse().join(''));
let secondNum = Number(input[1].split('').reverse().join(''));

console.log(firstNum > secondNum ? firstNum : secondNum);
