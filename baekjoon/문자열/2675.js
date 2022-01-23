let input = require('fs').readFileSync('test.txt').toString().split('\n');

for (let i = 0; i < input.length; i++) {
  const testCase = input[i].trim().split(' ');
  const n = testCase[0];
  if (testCase[1] !== undefined) {
    const str = testCase[1].split('');
    console.log(str.map((x) => x.repeat(n)).join(''));
  }
}
