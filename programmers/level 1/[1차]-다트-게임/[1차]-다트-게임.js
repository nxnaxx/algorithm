function solution(dartResult) {
  const bonus = {
    S: (num) => num,
    D: (num) => num ** 2,
    T: (num) => num ** 3,
    '*': (num) => num * 2,
    '#': (num) => num * -1,
  };
  const score = [];
  let currentScore = 0;

  dartResult.split('').forEach((x, i) => {
    if (x === 'S' || x === 'D' || x === 'T') {
      score.push(bonus[x](currentScore));
    }

    if (x === '*') {
      score[score.length - 1] = bonus[x](score[score.length - 1]);
      score[score.length - 2] = bonus[x](score[score.length - 2]);
    }

    if (x === '#') {
      score[score.length - 1] = bonus[x](score[score.length - 1]);
    }

    currentScore = Number(dartResult[i - 1]) === 1 ? 10 : Number(x);
  });

  return score.reduce((acc, cur) => (acc += cur));
}

console.log(solution('1S2D*3T')); // 37
console.log(solution('1D2S#10S')); // 9
console.log(solution('1D2S0T')); // 3
console.log(solution('1S*2T*3S')); // 23
console.log(solution('1D#2S*3S')); // 5
console.log(solution('1T2D3D#')); // -4
console.log(solution('1D2S3T*')); // 59
