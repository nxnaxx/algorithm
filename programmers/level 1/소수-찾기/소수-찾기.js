function solution(n) {
  let arr = [];

  for (let i = 2; i <= n; i++) {
    arr.push(i);
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    for (let j = i * i; j <= n; j += i) {
      arr[j - 2] = 0;
    }
  }

  return arr.filter((e) => e).length;
}

console.log(solution(10));
console.log(solution(5));
