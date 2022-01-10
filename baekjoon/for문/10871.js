let input = require('fs').readFileSync('test.txt').toString().split('\n');

const nAndX = input[0].split(' ');
const n = Number(nAndX[0]);
const x = Number(nAndX[1]);

const progression = input[1].split(' ');
let result = '';

for (let i = 0; i < n; i++) {
  if (Number(progression[i]) < x) {
    result += `${progression[i]} `;
  }
}

console.log(result.slice(0, -1));
//console.log(x);
