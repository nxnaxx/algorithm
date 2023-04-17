function solution(N, stages) {
  let result = [];

  for (let i = 1; i <= N; i++) {
    let notClearPlayer = 0;
    let clearPlayer = 0;

    stages.map((x) => {
      if (x === i) notClearPlayer++;
      if (x > i) clearPlayer++;
    });
    result.push([i, notClearPlayer / clearPlayer]);
  }

  result.sort((a, b) => b[1] - a[1]);

  return result.map((x) => x[0]);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));
