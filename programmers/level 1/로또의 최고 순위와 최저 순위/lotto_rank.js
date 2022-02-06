function solution(lottos, win_nums) {
  let same_nums = 0;
  let max_count = 0;
  let result = [];

  lottos.map((x) => {
    if (win_nums.includes(x)) {
      same_nums++;
    }
    if (x === 0) {
      max_count++;
    }
  });

  same_nums + max_count <= 1 ? result.push(6) : result.push(7 - (same_nums + max_count));
  same_nums <= 1 ? result.push(6) : result.push(7 - same_nums);

  return result;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));
