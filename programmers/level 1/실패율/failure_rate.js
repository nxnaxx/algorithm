function solution(N, stages) {
  let failureRate = [];
  for (let i = 1; i <= N; i++) {
    let notClearPlayer = 0;
    let clearPlayer = 0;
    //let currStage = stages.filter(x => x === i);
    stages.map((x) => {
      if (x === i) {
        notClearPlayer++;
      } else if (x > i) {
        clearPlayer++;
      }
    });
    failureRate.push([i, notClearPlayer / clearPlayer]);
  }
  failureRate.sort((a, b) => b[1] - a[1]);
  return failureRate.map((x) => x[0]);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));
