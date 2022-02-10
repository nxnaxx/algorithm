function solution(n) {
  let firstFibo = 0;
  let secondFibo = 1;
  let result;
  for (let i = 2; i <= n; i++) {
    result = firstFibo + secondFibo;
    firstFibo = secondFibo;
    secondFibo = result;
  }
  return result % 1234567;
}

console.log(solution(3));
console.log(solution(5));
