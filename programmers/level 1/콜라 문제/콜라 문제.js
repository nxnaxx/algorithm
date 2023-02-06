function solution(a, b, n) {
  let result = 0;

  while (n > 1) {
    result += Math.floor(n / a) * b;
    if (Math.floor(n / a) === 0) break;
    n = Math.floor(n % a) + Math.floor(n / a) * b;
  }

  return result;
}

console.log(solution(2, 1, 20));
console.log(solution(3, 1, 20));
