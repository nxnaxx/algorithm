function solution(weights) {
  let test = new Map();
  let result = 0;

  weights.sort((a, b) => a - b);
  weights.map((x) => test.set(x, 0));

  weights.forEach((el) => {
    result += test.get(el) || 0;
    result += test.get((el * 2) / 3) || 0 + test.get((el * 3) / 2) || 0;
    result += test.get(el * 2) || 0 + test.get(el / 2) || 0;
    result += test.get((el * 3) / 4) || 0 + test.get((el * 4) / 3) || 0;
    test.set(el, test.get(el) + 1);
  });

  return result;
}

console.log(solution([100, 180, 360, 100, 270]));
