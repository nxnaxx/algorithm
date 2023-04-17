function solution(x, n) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    result.push(x * i);
  }

  return result;
}

console.log(solution(2, 5));
console.log(solution(4, 3));
console.log(solution(-4, 2));
