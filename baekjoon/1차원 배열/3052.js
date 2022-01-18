let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

//let arr = [];

let arr = input.map((x) => {
  /*let num = x % 42;
  if (arr.includes(num) === false) {
    arr.push(num);
  }*/
  return x % 42;
});

let result = [...new Set(arr)];

console.log(result.length);
