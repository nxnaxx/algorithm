function solution(s) {
  let result = s.split(' ').map((x) => Number(x));
  return `${Math.min(...result)} ${Math.max(...result)}`;
}

console.log(solution('1 2 3 4'));
console.log(solution('-1 -2 -3 -4'));
console.log(solution('-1 -1'));
