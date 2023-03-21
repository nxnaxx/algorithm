function solution(s) {
  const str = [...s];
  const result = [];

  str.map((a, i) => {
    let num = str.lastIndexOf(a, i - 1);
    result.push(num === -1 ? -1 : i - num);
  });

  result[0] = -1;

  return result;
}

console.log(solution('banana'));
console.log(solution('foobar'));
