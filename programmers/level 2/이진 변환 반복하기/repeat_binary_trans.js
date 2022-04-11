function solution(s) {
  let zeroCount = 0;
  let transCount = 0;
  let currStr = s;
  let result = [];

  while (currStr !== '1') {
    let length = currStr.length;
    let trans = currStr.split('').filter((x) => x === '1').length;

    currStr = trans.toString(2);

    zeroCount += length - trans;
    transCount++;
  }

  result.push(transCount);
  result.push(zeroCount);
  return result;
}
console.log(solution('110010101001'));
console.log(solution('01110'));
console.log(solution('1111111'));
