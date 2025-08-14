function solution(n, m) {
  const product = n * m;
  while (m !== 0) {
    [m, n] = [n % m, m];
  }
  return [n, product / n];
}

console.log(solution(3, 12)); // [3, 12]
console.log(solution(2, 5)); // [1, 10]
