let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

const arr = [];
/*
for (let i = 0; i < input.length; i++) {
  arr.push(input[i]);
}*/
input.map((x) => arr.push(x));
arr.shift();

const result = arr.sort((a, b) => a - b);

//const result = [...new Set(arr)].sort((a, b) => a - b);

for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}
