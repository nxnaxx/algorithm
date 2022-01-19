let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

const num = input[0];
const score = input[1].split(' ').map((x) => Number(x));

const fakeScore = score.reduce((acc, cur) => acc + (cur / Math.max(...score)) * 100, 0);

console.log(fakeScore / num);
