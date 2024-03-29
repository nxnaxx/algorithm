function solution(n) {
  let dp = [1, 2];

  for (let i = 0; i < n; i++) {
    dp.push(dp[i] + (dp[i + 1] % 1000000007));
  }

  return dp[n - 1] % 1000000007;
}

console.log(solution(4));
