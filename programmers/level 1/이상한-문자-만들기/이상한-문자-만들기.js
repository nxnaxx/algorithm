function solution(s) {
  return s
    .split(' ')
    .map((x) =>
      x
        .split('')
        .map((e, i) => (i % 2 === 0 ? e.toUpperCase() : e.toLowerCase()))
        .join(''),
    )
    .join(' ');
}

console.log(solution('try hello world'));
