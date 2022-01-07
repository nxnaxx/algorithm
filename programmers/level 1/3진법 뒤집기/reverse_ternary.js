function solution(n) {
  let current = n;
  let arr = [];
  while (current > 0) {
    arr.push(parseInt(current % 3));
    current = parseInt(current / 3);
  }
  return parseInt(arr.join(''), 3);
}

console.log(solution(45));
console.log(solution(125));
