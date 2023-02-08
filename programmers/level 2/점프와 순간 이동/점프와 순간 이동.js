function solution(n) {
  let result = 0;
  while (n !== 1) {
    if (n % 2 === 0) n = n / 2;
    else {
      result++;
      n = (n - 1) / 2;
    }
  }
  return result + 1;
}

console.log(solution(5));
console.log(solution(6));
console.log(solution(5000));
