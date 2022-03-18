let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

input.shift();

input.sort((a, b) => {
  if (a.length === b.length) {
    return a.localeCompare(b);
  }
  return a.length - b.length;
});

const result = new Set(input);

console.log(...result);
/*
coordinates.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

for (let i = 0; i < coordinates.length; i++) {
  result += `${coordinates[i][0]} ${coordinates[i][1]}\n`;
}
//console.log(result);
*/
