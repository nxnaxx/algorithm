function solution(N, stages) {
  const challengers = Array.from({ length: N + 1 }).fill(0);
  let remainder = stages.length;
  const result = [];

  stages.forEach((stage) => challengers[stage - 1]++);
  challengers.forEach((challenger, i) => {
    result.push([i + 1, challenger / remainder]);
    remainder -= challenger;
  });

  result.pop();
  return result.sort((a, b) => b[1] - a[1]).map((x) => x[0]);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3, 4, 2, 1, 5]
console.log(solution(4, [4, 4, 4, 4, 4])); // [4, 1, 2, 3]
