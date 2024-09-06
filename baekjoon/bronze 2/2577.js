let input = require('fs').readFileSync('test.txt').toString().split('\n');

const result = String(input[0] * input[1] * input[2]);

let arr = result.split('');
let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < arr.length; i++) {
  count[arr[i]] += 1;
}

for (let i = 0; i < count.length; i++) {
  console.log(count[i]);
}
