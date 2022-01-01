function solution(numbers) {
  let result = 0;
  for (let i = 0; i <= 9; i++) {
    if (numbers.includes(i) === false) {
      result += i;
    }
  }
  return result;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
console.log(solution([5, 8, 4, 0, 6, 7, 9]));
