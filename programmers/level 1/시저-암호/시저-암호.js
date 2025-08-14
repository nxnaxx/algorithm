function solution(s, n) {
  const result = s.split('').map((x) => {
    if (x.charCodeAt() === 32) return x;

    let ascii = x.charCodeAt() + n;
    if (x.toUpperCase().charCodeAt() + n > 90) ascii -= 26;

    return String.fromCharCode(ascii);
  });
  return result.join('');
}

console.log(solution('AB', 1));
console.log(solution('z', 1));
console.log(solution('a B z', 4));
