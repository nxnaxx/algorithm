function solution(survey, choices) {
  let score = [3, 2, 1, 0, 1, 2, 3];
  let type = new Map();
  let result = '';

  ['R', 'T', 'C', 'F', 'J', 'M', 'A', 'N'].map((x) => {
    type.set(x, 0);
  });

  choices.map((x, i) => {
    if (x < 4) type.set(survey[i][0], type.get(survey[i][0]) + score[x - 1]);
    if (x > 4) type.set(survey[i][1], type.get(survey[i][1]) + score[x - 1]);
  });

  type = [...type];
  for (let i = 0; i < type.length; i += 2) {
    type[i][1] >= type[i + 1][1]
      ? (result += type[i][0])
      : (result += type[i + 1][0]);
  }

  return result;
}

console.log(solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5]));
console.log(solution(['TR', 'RT', 'TR'], [7, 1, 3]));
