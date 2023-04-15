function solution(n) {
  return (n + '').split('').reduce((acc, cur) => (acc += parseInt(cur)), 0);
}

console.log(solution(123));
console.log(solution(987));
