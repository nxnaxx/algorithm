function solution(answers) {
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === first[i % 5]) {
      score[0]++;
    }
    if (answers[i] === second[i % 8]) {
      score[1]++;
    }
    if (answers[i] === third[i % 10]) {
      score[2]++;
    }
  }

  let result = [];

  score.map((el, i) => {
    if (el === Math.max(...score)) {
      result.push(i + 1);
    }
  });

  return result;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
