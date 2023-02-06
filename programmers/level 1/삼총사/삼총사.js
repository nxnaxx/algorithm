function solution(number) {
  let result = 0;
  for (let i = 0; i < number.length; i++) {
    for (let j = 1; j < number.length - i; j++) {
      for (let k = 1; k < number.length - i - j; k++) {
        if (number[i] + number[i + j] + number[i + j + k] === 0) result++;
      }
    }
  }
  return result;
}

console.log(solution([-2, 3, 0, 2, -5]));
console.log(solution([-3, -2, -1, 0, 1, 2, 3]));
console.log(solution([-1, 1, -1, 1]));
