const fs = require('fs');
let input = fs.readFileSync('test.txt').toString().split(' ');

let hour = Number(input[0]);
let minute = Number(input[1]);

if (minute < 45 ) {
  console.log(hour === 0 ? 23 : hour - 1, minute + 15);
} else console.log(hour, minute - 45);