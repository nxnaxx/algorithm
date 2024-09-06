let input = require('fs').readFileSync('test.txt').toString().split('\n');
let i = 0;

while (i < input.length - 1) {
  const inputs = input[i].split(' ');
  const addInputs = Number(inputs[0]) + Number(inputs[1]);
  console.log(addInputs);
  i++;
}
