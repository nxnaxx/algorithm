function solution(n) {
  const nums = ['4', '1', '2'];
  let result = '';
  while (n) {
    result = nums[Math.floor(n % 3)] + result;
    n = Math.floor(n / 3) - (Math.floor(n % 3) === 0 ? 1 : 0);
  }
  return result;
}
console.log(solution(1));
console.log(solution(2));
console.log(solution(3));
console.log(solution(4));
