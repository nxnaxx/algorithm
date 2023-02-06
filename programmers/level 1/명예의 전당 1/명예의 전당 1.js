function solution(k, score) {
  let result = [];
  let hall = [];

  score.map((x, i) => {
    if (i < k) hall.push(x);
    else {
      hall.sort((a, b) => b - a);
      if (hall[hall.length - 1] < x) {
        hall.pop();
        hall.push(x);
      }
    }
    result.push(Math.min(...hall));
  });

  return result;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));
