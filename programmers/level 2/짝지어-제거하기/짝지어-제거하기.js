function solution(s) {
  const arr = s.split('');
  const result = [];

  result.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (result === '') {
      result.push(arr[i]);
      continue;
    }
    if (result[result.length - 1] === arr[i]) result.pop();
    else result.push(arr[i]);
  }

  return result == '' ? 1 : 0;
}

console.log(solution('baabaa'));
console.log(solution('cdcd'));
