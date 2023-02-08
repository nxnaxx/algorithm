function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  let result = 0;
  let bIndex = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = i + bIndex; j < B.length; j++) {
      if (A[i] < B[j]) {
        result++;
        break;
      } else {
        A.pop();
        bIndex++;
      }
    }
  }
  return result;
}

console.log(solution([5, 1, 3, 7], [2, 2, 6, 8]));
console.log(solution([2, 2, 2, 2], [1, 1, 1, 1]));
