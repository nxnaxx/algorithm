function solution(d, budget) {
  let result = 0;

  d.sort((a, b) => a - b);

  d.map((x) => {
    if (x <= budget) {
      result++;
      budget -= x;
    }
  });

  return result;
}

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));
