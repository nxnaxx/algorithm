let input = require('fs').readFileSync('test.txt').toString().trim();

let delimiter = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

for (let i = 0; i < delimiter.length; i++) {
  if (input.includes(delimiter[i]) === true) {
    input = input.split(delimiter[i]).join('*');
  }
}

console.log(input.length);
