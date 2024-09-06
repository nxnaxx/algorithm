let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

input.shift();
const members = input.map((x) => x.split(' '));
let result = '';

members.sort((a, b) => {
  if (Number(a[0]) === Number(b[0])) {
    return b - a;
  }
  return Number(a[0]) - Number(b[0]);
});

for (let i = 0; i < members.length; i++) {
  result += `${members[i][0]} ${members[i][1]}\n`;
}
console.log(result);
