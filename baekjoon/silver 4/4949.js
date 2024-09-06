let input = require('fs').readFileSync('test.txt').toString().trim().split('\n').slice(0, -1);

let result = '';

input.map((x) => {
  let checkStr = x.replace(/[a-zA-Z \.\r]/g, '');
  let stack = [];

  for (let i = 0; i < checkStr.length; i++) {
    if (checkStr[i] === ')' && stack[stack.length - 1] === '(') {
      stack.pop();
      continue;
    } else if (checkStr[i] === ']' && stack[stack.length - 1] === '[') {
      stack.pop();
      continue;
    }
    stack.push(checkStr[i]);
  }

  result += stack.length === 0 ? `yes\n` : `no\n`;
});

console.log(result);
