function solution(X, Y) {
  const textNum = [...new Set(X)];
  let result = [];

  textNum.map((x) => {
    let regex = new RegExp(`${x}`, 'g');
    let numX = X.match(regex);
    let numY = Y.match(regex);

    if (numY && numX.length >= numY.length) result = [...result, ...numY];
    else if (numY && numX.length < numY.length) result = [...result, ...numX];
  });

  if (result.length === 0) return '-1';

  result = result.sort((a, b) => b - a).join('');

  return result[0] === '0' ? '0' : result;
}

console.log(solution('100', '2345'));
console.log(solution('100', '203045'));
console.log(solution('100', '123450'));
console.log(solution('12321', '42531'));
console.log(solution('5525', '1255'));
