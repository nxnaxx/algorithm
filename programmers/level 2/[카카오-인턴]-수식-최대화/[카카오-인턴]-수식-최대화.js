function solution(expression) {
  let order = [];

  const permute = (signs, temp) => {
    if (signs.length === temp.length) order.push([...temp]);
    else {
      for (let i = 0; i < signs.length; i++) {
        if (temp.includes(signs[i])) continue;
        temp.push(signs[i]);
        permute(signs, temp);
        temp.pop();
      }
    }
  };

  const calcNums = (x, y, sign) => {
    if (sign === '+') {
      return +x + +y;
    }
    if (sign === '-') {
      return +x - +y;
    }
    if (sign === '*') {
      return +x * +y;
    }
  };

  permute(['+', '-', '*'], []);

  let separate = expression.split(/([/*+-])/);
  let maxNum = 0;

  for (let i = 0; i < order.length; i++) {
    let arr = [...separate];

    for (let j = 0; j < 3; j++) {
      let index = 0;

      while (index !== -1) {
        index = arr.indexOf(order[i][j]);
        if (index === -1) break;
        arr.splice(
          index - 1,
          3,
          calcNums(arr[index - 1], arr[index + 1], arr[index]),
        );
      }
    }

    if (maxNum < Math.abs(arr)) maxNum = Math.abs(arr);
  }

  return maxNum;
}

console.log(solution('100-200*300-500+20'));
console.log(solution('50*6-3*2'));
