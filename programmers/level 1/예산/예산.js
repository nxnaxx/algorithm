function solution(d, budget) {
  let result = 0;
  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    if (d[i] > budget) return result;
    result++;
    budget -= d[i];
  }
  return result;
}

console.log(solution([1, 3, 2, 5, 4], 9)); // 3
console.log(solution([2, 2, 3, 3], 10)); // 4
