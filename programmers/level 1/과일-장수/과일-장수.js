function solution(k, m, score) {
  score.sort((a, b) => {
    return b - a;
  });

  let result = 0;
  for (let i = m - 1; i < score.length; i += m) {
    result += score[i] * m;
  }

  return result;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
