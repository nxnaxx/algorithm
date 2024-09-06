let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

input.shift();
const numbers = input[0].split(' ').map((x) => Number(x));
const sortable = [...new Set(numbers)].sort((a, b) => a - b);

let compress = {};
let result = '';

sortable.map((x, i) => {
  compress[x] = i;
});

for (let i = 0; i < numbers.length; i++) {
  result += `${compress[numbers[i]]} `;
}

console.log(result);
