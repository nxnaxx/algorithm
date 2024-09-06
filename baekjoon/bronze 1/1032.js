let input = require('fs')
  .readFileSync('test.txt')
  .toString()
  .trim()
  .split('\n');

const checkPattern = (arr) => {
  const refStr = arr[1].split('');

  for (let i = 2; i <= arr[0]; i++) {
    for (let j = 0; j < refStr.length; j++) {
      if (refStr[j] !== arr[i][j]) refStr[j] = '?';
    }
  }

  return refStr.join('');
};

console.log(checkPattern(input));
