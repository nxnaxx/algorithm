function solution(numbers) {
  let result = [];

  numbers.map((x) => {
    if (x % 2 === 0) result.push(x + 1);
    else {
      let cur = x.toString(2);
      if (cur.indexOf('0') === -1) cur = '10' + cur.substring(1);
      else {
        let index = cur.lastIndexOf('0');
        cur = cur.substring(0, index) + '10' + cur.substring(index + 2);
      }
      result.push(parseInt(cur, 2));
    }
  });

  return result;
}

console.log(solution([2, 7]));
