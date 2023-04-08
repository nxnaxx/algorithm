function solution(s) {
  return s.length % 2 !== 0
    ? s.substr(s.length / 2, 1)
    : s.substr(s.length / 2 - 1, 2);
}

console.log(solution('abcde'));
console.log(solution('qwer'));
