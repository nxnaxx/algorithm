function solution(t, p) {
  let result = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    if (t.slice(i, i + p.length) <= p) result++;
  }
  return result;
}

console.log(solution('3141592', '271'));
console.log(solution('500220839878', '7'));
console.log(solution('10203', '15'));
