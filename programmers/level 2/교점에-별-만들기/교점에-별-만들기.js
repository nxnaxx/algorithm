function solution(line) {
  let intersection = [];
  let result = [];

  for (let i = 0; i < line.length - 1; i++) {
    for (let j = i + 1; j < line.length; j++) {
      let a = line[i];
      let b = line[j];
      let x = (a[1] * b[2] - b[1] * a[2]) / (a[0] * b[1] - b[0] * a[1]);
      let y = (a[2] * b[0] - a[0] * b[2]) / (a[0] * b[1] - b[0] * a[1]);

      if (a[0] * b[1] - b[0] * a[1] === 0) continue;
      intersection.push([x, y]);
    }
  }
  intersection = intersection.filter((x) => x[0] % 1 === 0 && x[1] % 1 === 0);

  intersection.sort((a, b) => a[0] - b[0]);
  let minX = intersection[0][0];
  let maxX = intersection[intersection.length - 1][0];

  intersection.sort((a, b) => a[1] - b[1]);
  let minY = intersection[0][1];
  let maxY = intersection[intersection.length - 1][1];

  for (let i = maxY; i >= minY; i--) {
    let row = '';
    for (let j = minX; j <= maxX; j++) {
      let star;
      intersection.map((x) => {
        if (x[0] === j && x[1] === i) star = true;
      });
      star ? (row += '*') : (row += '.');
    }
    result.push(row);
  }

  return result;
}

console.log(
  solution([
    [2, -1, 4],
    [-2, -1, 4],
    [0, -1, 1],
    [5, -8, -12],
    [5, 8, 12],
  ]),
);
console.log(
  solution([
    [0, 1, -1],
    [1, 0, -1],
    [1, 0, 1],
  ]),
);
console.log(
  solution([
    [1, -1, 0],
    [2, -1, 0],
  ]),
);
console.log(
  solution([
    [1, -1, 0],
    [2, -1, 0],
    [4, -1, 0],
  ]),
);
