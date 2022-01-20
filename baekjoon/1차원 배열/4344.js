let input = require('fs').readFileSync('test.txt').toString().split('\n');

const testCaseNum = Number(input[0]);

for (let i = 1; i <= testCaseNum; i++) {
  const testCase = input[i].split(' ').map((x) => Number(x));
  const num = testCase[0];
  let sum = 0;

  for (let j = 1; j <= num; j++) {
    sum += testCase[j];
  }
  
  testCase.splice(0, 1);
  let topRanks = 0;

  testCase.map((x) => {
    if (x > sum / num) {
      topRanks++;
    }
  });
  console.log(`${((topRanks / num) * 100).toFixed(3)}%`);
}
