function solution(m, n, startX, startY, balls) {
  let result = [];
  const comparativePoint = [
    [-startX, startY],
    [startX + (m - startX) * 2, startY],
    [startX, -startY],
    [startX, startY + (n - startY) * 2],
  ];
  let num, verticalDistance;

  const compareDistance = (num, i, verticalDistance) => {
    const distance =
      (comparativePoint[num][0] - balls[i][0]) ** 2 +
      (comparativePoint[num][1] - balls[i][1]) ** 2;
    result.push(distance < verticalDistance ? distance : verticalDistance);
  };

  for (let i = 0; i < balls.length; i++) {
    let minDistance;

    if (balls[i][0] === startX) {
      num = startX < m / 2 ? 0 : 1;
      verticalDistance =
        startY > balls[i][1]
          ? (n * 2 - startY - balls[i][1]) ** 2
          : (startY + balls[i][1]) ** 2;
      compareDistance(num, i, verticalDistance);
      continue;
    }
    if (balls[i][1] === startY) {
      num = startY < n / 2 ? 2 : 3;
      verticalDistance =
        startX > balls[i][0]
          ? (m * 2 - startX - balls[i][0]) ** 2
          : (startX + balls[i][0]) ** 2;
      compareDistance(num, i, verticalDistance);
      continue;
    }

    comparativePoint.map((x) => {
      let currentDistance =
        (x[0] - balls[i][0]) ** 2 + (x[1] - balls[i][1]) ** 2;
      minDistance =
        minDistance < currentDistance ? minDistance : currentDistance;
    });
    result.push(minDistance);
  }

  return result;
}

console.log(
  solution(10, 10, 3, 7, [
    [7, 7],
    [2, 7],
    [7, 3],
  ]),
);
