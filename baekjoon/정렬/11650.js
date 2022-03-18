let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

input.shift();
const coordinates = input.map((x) => x.split(' ').map((x) => Number(x)));
let result = '';

coordinates.sort((a, b) => {
  if (a[0] !== b[0]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

for (let i = 0; i < coordinates.length; i++) {
  result += `${coordinates[i][0]} ${coordinates[i][1]}\n`;
}
console.log(result);