let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

const testCase = input[0];

for (let i = 1; i <= testCase; i++) {
  let test = input[i].split(' ');
  let w = test[0];
  let n = test[2];
  let height, num;

  n % w === 0 ? (height = w) : (height = n % w);
  Math.ceil(n / w) < 10 ? (num = `0${Math.ceil(n / w)}`) : (num = Math.ceil(n / w));

  console.log(`${height}${num}`);
}
