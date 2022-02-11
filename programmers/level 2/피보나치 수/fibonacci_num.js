function solution(n) {
  let prevPrevFibo = 0;
  let prevFibo = 1;
  let result;
  for (let i = 2; i <= n; i++) {
    result = (prevPrevFibo % 1234567) + (prevFibo % 1234567);
    prevPrevFibo = prevFibo;
    prevFibo = result;
  }
  return result % 1234567;
}

console.log(solution(3));
console.log(solution(5));
