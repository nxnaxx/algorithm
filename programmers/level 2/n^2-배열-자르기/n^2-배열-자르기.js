function solution(n, left, right) {
  let arr = [];

  for (let i = parseInt(left / n) + 1; i <= n; i++) {
    if (i * n - right > n) break;

    for (let j = 1; j <= n; j++) {
      if (j <= i) {
        arr.push(i);
        continue;
      }
      arr.push(j);
    }
  }
  return arr.slice(left % n, (left % n) + right - left + 1);
}

console.log(solution(3, 2, 5));
console.log(solution(4, 7, 14));
