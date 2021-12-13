function solution(s) {
  return (s.length === (4 || 6) && parseInt(s) == s);
}

console.log(solution("a234"));
console.log(solution("1234"));