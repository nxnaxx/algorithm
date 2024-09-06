let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

const n = input.shift();
const stack = [];
const result = [];

const commandObj = {
  push: (num) => {
    stack.push(num);
  },
  top: () => {
    return stack.length === 0 ? -1 : stack[stack.length - 1];
  },
  size: () => {
    return stack.length;
  },
  empty: () => {
    return stack.length === 0 ? 1 : 0;
  },
  pop: () => {
    return stack.length === 0 ? -1 : stack.pop();
  },
};

for (let i = 0; i < n; i++) {
  const [cmd, num] = input[i].trim().split(' ');
  if (cmd === 'push') {
    commandObj.push(num);
  } else {
    result.push(commandObj[cmd]());
  }
}
console.log(result.join('\n'));
