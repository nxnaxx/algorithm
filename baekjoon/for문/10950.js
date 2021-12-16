const fs = require('fs');
let input = fs.readFileSync('test.txt').toString().split('\n');

for (let i = 1; i <= input[0]; i++) {
  console.log(input[i].split(' ').reduce((a, c) => a+=Number(c), 0));
}