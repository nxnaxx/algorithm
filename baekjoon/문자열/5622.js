let input = require('fs').readFileSync('test.txt').toString().trim().split(' ');

let alphabet = {
  a1: ['A', 'B', 'C'],
  a2: ['D', 'E', 'F'],
  a3: ['G', 'H', 'I'],
  a4: ['J', 'K', 'L'],
  a5: ['M', 'N', 'O'],
  a6: ['P', 'Q', 'R', 'S'],
  a7: ['T', 'U', 'V'],
  a8: ['W', 'X', 'Y', 'Z'],
};

let count = 0;
let str = input[0];

for (let i = 0; i < str.length; i++) {
  if (alphabet.a1.includes(str[i]) === true) {
    count += 3;
  } else if (alphabet.a2.includes(str[i]) === true) {
    count += 4;
  } else if (alphabet.a3.includes(str[i]) === true) {
    count += 5;
  } else if (alphabet.a4.includes(str[i]) === true) {
    count += 6;
  } else if (alphabet.a5.includes(str[i]) === true) {
    count += 7;
  } else if (alphabet.a6.includes(str[i]) === true) {
    count += 8;
  } else if (alphabet.a7.includes(str[i]) === true) {
    count += 9;
  } else {
    count += 10;
  }
}

console.log(count);
