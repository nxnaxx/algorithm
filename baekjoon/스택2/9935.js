const fs = require('fs');
let input = fs.readFileSync('test.txt').toString().split('\n');

const str = input[0];
const target = input[1];

let stack = [];
stack.push(...str.substring(0, target.length - 1));

for (let i = target.length - 1; i < str.length; i++) {
  stack.push(str[i]);
  if (stack.slice(stack.length - target.length).join('') === target) {
    stack.splice(stack.length - target.length);
  }
}

console.log(stack.join('') || 'FRULA');
