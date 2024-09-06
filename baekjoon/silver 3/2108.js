let input = require('fs')
  .readFileSync('test.txt')
  .toString()
  .trim()
  .split('\n')
  .map((x) => Number(x));

const n = input[0];
input.shift();
input.sort((a, b) => a - b);

const mean = Math.round(input.reduce((acc, cur) => (acc += cur), 0) / n);
const median = input[Math.floor(n / 2)];

const frequency = input.reduce((acc, cur) => {
  acc.hasOwnProperty(cur) ? (acc[cur] += 1) : (acc[cur] = 1);
  return acc;
}, {});

let sortable = [];
for (let name in frequency) {
  sortable.push([name, frequency[name]]);
}

sortable.sort((a, b) => {
  return a[0] - b[0];
});

sortable.sort((a, b) => {
  return b[1] - a[1];
});

let mode;

if (sortable.length > 1) {
  mode = sortable[0][1] === sortable[1][1] ? sortable[1][0] : sortable[0][0];
} else {
  mode = input[0];
}

const range = input[n - 1] - input[0];

console.log(mean === -0 ? 0 : mean);
console.log(median);
console.log(mode);
console.log(range);
