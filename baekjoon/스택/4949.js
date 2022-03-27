let input = require('fs').readFileSync('test.txt').toString().trim().split('\n').slice(0, -1);

//const removeStr = /[a-zA-Z ]/g;
let result = '';

input.map((x) => {
  let checkStr = x.replace(/[a-zA-Z \.\r]/g, '');
  let stack = [];
  //console.log(checkStr);

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

  console.log(stack);

  //let result = stack.length <= 1 ? 'yes' : 'no';
  //console.log(result);
  result += stack.length === 0 ? `yes\n` : `no\n`;
});

console.log(result);
