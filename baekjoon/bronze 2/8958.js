let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

for (let i = 1; i < input.length; i++) {
  let acc = 0;
  let sum = 0;
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === 'O') {
      acc++;
      sum += acc;
    } else {
      acc = 0;
    }
  }
  console.log(sum);
}
