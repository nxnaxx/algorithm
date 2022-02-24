function solution(number, k) {
  const result = [];

  for (let i = 0; i < number.length; i++) {
    let currNum = number[i];

    while (result[result.length - 1] < currNum && k > 0) {
      result.pop();
      k--;
    }

    result.push(currNum);
  }

  result.splice(result.length - k, k);
  return result.join('');
}
console.log(solution('1924', 2));
console.log(solution('1231234', 3));
console.log(solution('4177252841', 4));
