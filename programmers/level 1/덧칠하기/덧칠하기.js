function solution(n, m, section) {
  let lastWall = 0;
  let result = 0;
  section.map((x, i) => {
    if (x > lastWall) {
      result++;
      lastWall = x + m - 1;
    }
  });
  return result;
}

console.log(solution(8, 4, [2, 3, 6]));
console.log(solution(5, 4, [1, 3]));
console.log(solution(4, 1, [1, 2, 3, 4]));
