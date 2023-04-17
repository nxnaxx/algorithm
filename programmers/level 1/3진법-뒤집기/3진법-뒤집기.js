function solution(n) {
  let result = [];

  while (n > 0) {
    result.push(parseInt(n % 3));
    n = parseInt(n / 3);
  }

  return parseInt(result.join(''), 3);
}

console.log(solution(45));
console.log(solution(125));
