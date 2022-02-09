function solution(A, B) {
  B = B.sort((a, b) => b - a);
  return A.sort((a, b) => a - b).reduce((acc, cur, i) => acc + cur * B[i], 0);
}

console.log(solution([1, 4, 2], [5, 4, 4]));
console.log(solution([1, 2], [3, 4]));
