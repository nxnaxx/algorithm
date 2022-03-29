let input = require('fs')
  .readFileSync('test.txt')
  .toString()
  .trim()
  .split('\n')
  .map((x) => Number(x));

const n = input.shift();
let stack = [];
let result = '+\n';
let lastNum = 1;

stack.push(1);

for (let i = 0; i < input.length; i++) {
  let currNum = input[i];
  if (currNum > stack[stack.length - 1] || stack.length === 0) {
    for (let j = lastNum + 1; j <= currNum; j++) {
      stack.push(j);
      result += `+\n`;
    }
    lastNum = stack[stack.length - 1];
    stack.pop();
    result += `-\n`;
  } else if (currNum === stack[stack.length - 1]) {
    stack.pop();
    result += `-\n`;
  } else {
    result = 'NO';
    break;
  }
}

console.log(result);
