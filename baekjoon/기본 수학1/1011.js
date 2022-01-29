let input = require('fs').readFileSync('test.txt').toString().split('\n');

const num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  let testCase = input[i].split(' ').map((x) => Number(x));
  let start = testCase[0];
  let end = testCase[1];
  let n = 0;

  let distance = end - start;
  while (true) {
    if (distance <= n * (n + 1)) {
      break;
    }
    n += 1;
  }
  if (distance > n ** 2) {
    console.log(n * 2);
  } else {
    console.log(n * 2 - 1);
  }
}
