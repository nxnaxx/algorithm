function solution(s, n) {
  return s
    .split('')
    .map((x) => {
      if (x === ' ') {
        return x;
      }
      const uni = x.charCodeAt();
      return x.toUpperCase().charCodeAt() + n > 90
        ? String.fromCharCode(uni + n - 26)
        : String.fromCharCode(uni + n);
    })
    .join('');
}

console.log(solution('AB', 1));
console.log(solution('z', 1));
console.log(solution('a B z', 4));
