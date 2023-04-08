function solution(a, b) {
  return ((Math.abs(a - b) + 1) * (a + b)) / 2;
}

console.log(solution(3, 5));
console.log(solution(3, 3));
console.log(solution(5, 3));
