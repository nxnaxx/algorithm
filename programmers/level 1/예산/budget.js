function solution(d, budget) {
  d.sort((a, b) => a - b);
  let count = 0;
  d.map((el) => {
    if (el <= budget) {
      count++;
      budget -= el;
    }
  });
  return count;
}

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));