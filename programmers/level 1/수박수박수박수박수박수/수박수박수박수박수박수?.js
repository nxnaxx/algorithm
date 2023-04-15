function solution(n) {
  return '수박'.repeat(n / 2) + '수'.repeat(n % 2);
}

console.log(solution(3));
console.log(solution(4));
