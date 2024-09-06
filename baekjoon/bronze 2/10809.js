let input = require('fs').readFileSync('test.txt').toString().split(' ');

const result = input[0].split('');
let arr = [];

for (let i = 97; i <= 122; i++) {
  result.filter((el) => el === String.fromCharCode(i)).length === 0
    ? (arr += -1)
    : (arr += result.indexOf(String.fromCharCode(i)));
  arr += ' ';
}

console.log(arr);
