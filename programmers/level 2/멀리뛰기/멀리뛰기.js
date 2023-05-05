function solution(n) {
  let dp = [1, 2];

  for (let i = 3; i <= n; i++) {
    dp.push((dp[i - 3] + dp[i - 2]) % 1234567);
  }
  return dp[n - 1];
}

console.log(solution(4));
console.log(solution(3));
