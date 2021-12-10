function solution(n, m) {
  const mul = n * m;

  while (n !== 0 && m !== 0) {
    n > m ? n = n % m : m = m % n;
  }

  const gcd = n + m, lcm = mul / (n + m);
  const arr = [gcd, lcm];

  return arr;
}

console.log(solution(3, 12));
console.log(solution(2, 5));