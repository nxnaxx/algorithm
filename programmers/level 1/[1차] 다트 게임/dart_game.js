function solution(dartResult) {
  let score = 0;
  let result = 0;
  let history = [];

  for (let i = 0; i < dartResult.length; i++) {
    let currStr = dartResult[i];
    if (!isNaN(currStr)) {
      score = Number(dartResult[i - 1]) === 1 ? 10 : currStr;
    } else if (currStr === 'S') {
      history.push(score ** 1);
    } else if (currStr === 'D') {
      history.push(score ** 2);
    } else if (currStr === 'T') {
      history.push(score ** 3);
    } else if (currStr === '*') {
      history[history.length - 2] = history[history.length - 2] * 2;
      history[history.length - 1] = history[history.length - 1] * 2;
    } else if (currStr === '#') {
      history[history.length - 1] = history[history.length - 1] * -1;
    }
  }

  return (result = history.reduce((acc, cur) => acc + cur));
}

console.log(solution('1S2D*3T'));
console.log(solution('1D2S#10S'));
console.log(solution('1D2S0T'));
console.log(solution('1S*2T*3S'));
console.log(solution('1D#2S*3S'));
console.log(solution('1T2D3D#'));
console.log(solution('1D2S3T*'));
