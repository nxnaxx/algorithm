function solution(k, score) {
  let result = [];
  let hall = [];

  score.map((x, i) => {
    if (i < k) {
      hall.push(x);
      hall.sort((a, b) => b - a);
      result.push(hall[hall.length - 1]);
    } else {
      hall.sort((a, b) => b - a);
      if (hall[hall.length - 1] < x) {
        hall.pop();
        hall.push(x);
        result.push(Math.min(...hall));
      } else {
        result.push(hall[hall.length - 1]);
      }
    }
  });

  return result;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));
