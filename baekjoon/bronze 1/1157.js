let input = require('fs').readFileSync('test.txt').toString().toUpperCase().trim().split(' ');

const str = input[0];
let arr = [...new Set(str)];
let count = [];

for (let i = 0; i < arr.length; i++) {
  count.push(0);
}

let strArr = str.split('');
let result;

for (let i = 0; i < arr.length; i++) {
  count[i] += strArr.filter((x) => x === arr[i]).length;
}

count.filter((x) => x === Math.max(...count)).length > 1
  ? (result = '?')
  : (result = arr[count.indexOf(Math.max(...count))]);

console.log(result);
