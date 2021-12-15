const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', function (line) {
  input.push(parseInt(line));
}).on('close', function () {
  const x = input[0];
  const y = input[1];

  if (x > 0) {
    console.log(y > 0 ? 1 : 4);
  } else console.log(y > 0 ? 2 : 3);

  process.exit();
});