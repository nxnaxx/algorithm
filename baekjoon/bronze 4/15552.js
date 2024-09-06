const fs = require('fs');
let input = fs.readFileSync('test.txt').toString().split('\n');

const testCase = Number(input[0]);
let result = '';

for (let i = 1; i <= testCase; i++) {
    let num = input[i].split(' ');
    result += Number(num[0]) + Number(num[1]) + '\n';
}

console.log(result);