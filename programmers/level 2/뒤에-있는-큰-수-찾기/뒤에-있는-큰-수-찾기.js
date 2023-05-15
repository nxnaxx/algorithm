function solution(numbers) {
  let stack = [];
  let result = new Array(numbers.length).fill(-1);

  for (let i = 0; i < numbers.length; i++) {
    while (stack && numbers[stack[stack.length - 1]] < numbers[i]) {
      result[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }
  return result;
}

console.log(solution([2, 3, 3, 5]));
console.log(solution([9, 1, 5, 3, 6, 2]));
