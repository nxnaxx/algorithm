let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

const testCase = input[0];

for (let i = 1; i <= testCase; i++) {
  let test = input[i].split(' ');
  let w = test[0];
  let n = test[2];

  let height, num;
  //let roomNum = [];
  n % w === 0 ? (height = w) : (height = n % w);
  //roomNum.push(n % w === 0 ? w : n % w);
  //roomNum.push(0);
  Math.ceil(n / w) < 10 ? (num = `0${Math.ceil(n / w)}`) : (num = Math.ceil(n / w));

  //roomNum.push(Math.floor(n / w) + (n / w === 1 || w == 1 ? 0 : 1));
  //console.log(roomNum.join(''));
  console.log(`${height}${num}`);
}
