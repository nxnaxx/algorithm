function solution(arr, divisor) {
  const newArray = arr.filter((x) => x % divisor === 0);
  return newArray.length !== 0 ? newArray.sort((a, b) => a - b) : [-1];
}

console.log(solution([5, 9, 7, 10], 5));
console.log(solution([2, 36, 1, 3], 1));
console.log(solution([3, 2, 6], 10));
