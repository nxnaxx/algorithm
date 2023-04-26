function solution(targets) {
  let result = 1;
  targets.sort((a, b) => b[0] - a[0]);

  let start = targets[0][0];
  for (let i = 1; i < targets.length; i++) {
    if (targets[i][1] <= start) {
      result++;
      start = targets[i][0];
    }
  }

  return result;
}

console.log(
  solution([
    [4, 5],
    [4, 8],
    [10, 14],
    [11, 13],
    [5, 12],
    [3, 7],
    [1, 4],
  ]),
);
