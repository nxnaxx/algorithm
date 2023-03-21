function solution(s) {
  let sameStr = '';
  let otherStr = '';
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    !!!sameStr || sameStr[0] === s[i] ? (sameStr += s[i]) : (otherStr += s[i]);

    if (i === s.length - 1) {
      result++;
      continue;
    }

    if (sameStr.length === otherStr.length) {
      result++;
      sameStr = '';
      otherStr = '';
    }
  }

  return result;
}

console.log(solution('banana'));
console.log(solution('abracadabra'));
console.log(solution('aaabbaccccabba'));
