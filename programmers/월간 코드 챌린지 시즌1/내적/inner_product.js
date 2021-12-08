// solution 1
function solution(a, b) {
  let total = 0;
  for (let i = 0; i < a.length; i++) {
      total += a[i] * b[i];
  }
  return total;
}

// solution 2
function solution(a, b) {
  return a.reduce((acc, cur, idx) => acc += cur * b[idx], 0);
}