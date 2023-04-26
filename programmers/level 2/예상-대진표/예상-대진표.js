function solution(n, a, b) {
  let count = 0;
  const nextNum = (n) => Math.floor((n + 1) / 2);

  while (a !== b) {
    a = nextNum(a);
    b = nextNum(b);
    count++;
  }

  return count;
}

console.log(solution(8, 4, 7));
