function solution(x, n) {
  return Array.from({ length: n })
    .fill(x)
    .map((el, i) => el + x * i);
}

console.log(solution(2, 5)); // [2, 4, 6, 8, 10]
console.log(solution(4, 3)); // [4, 8, 12]
console.log(solution(-4, 2)); // [-4, -8]
