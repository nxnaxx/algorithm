function solution(sizes) {
  let width = [];
  let height = [];

  sizes.map((x) => {
    x.sort((a, b) => a - b);
    width.push(x[0]);
    height.push(x[1]);
  });

  return Math.max.apply(null, width) * Math.max.apply(null, height);
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ]),
);
console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ]),
);
console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ]),
);
