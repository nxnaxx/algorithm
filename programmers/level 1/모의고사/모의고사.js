function solution(answers) {
  const pattern = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const score = [0, 0, 0];
  const result = [];

  answers.forEach((answer, i) => {
    pattern.forEach((p, idx) => {
      if (p[i % p.length] === answer) score[idx]++;
    });
  });

  score.forEach((x, i) => {
    if (x === Math.max(...score)) result.push(i + 1);
  });

  return result;
}

console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1, 2, 3]
