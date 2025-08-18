function solution(lottos, win_nums) {
  const unknownNums = lottos.filter((x) => x === 0).length;
  const sameNums = lottos.filter((x) => win_nums.includes(x)).length;
  const rank = (count) => Math.min(7 - count, 6);
  return [rank(sameNums + unknownNums), rank(sameNums)];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); // [3, 5]
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])); // [1, 1]
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])); // [1, 1]
