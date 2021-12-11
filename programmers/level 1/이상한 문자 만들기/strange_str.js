function solution(s) {
  return s.split(' ').map(w => w.split('').map((w, i) => i % 2 === 0 ? w.toUpperCase() : w.toLowerCase()).join('')).join(' ');
}

console.log(solution("try hello world"));