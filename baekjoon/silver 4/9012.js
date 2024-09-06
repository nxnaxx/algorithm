let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

const n = input.shift();

input.map((x) => {
  let stack = [];

  for (let i = 0; i < x.length; i++) {
    if (x[i] === ')' && stack[stack.length - 1] === '(') {
      stack.pop();
      continue;
    }
    stack.push(x[i]);
  }

  let result = stack.length === 0 || stack[0] === '\r' ? 'YES' : 'NO';
  console.log(result);
});
