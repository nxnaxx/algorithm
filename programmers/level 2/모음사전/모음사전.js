function solution(word) {
  const vowels = {
    A: 0,
    E: 1,
    I: 2,
    O: 3,
    U: 4,
  };
  const arr = [781, 156, 31, 6, 1];
  let result = 0;

  word.split('').map((x, i) => {
    result += vowels[x] * arr[i] + 1;
  });

  return result;
}

console.log(solution('AAAAE'));
console.log(solution('AAAE'));
console.log(solution('I'));
console.log(solution('EIO'));
