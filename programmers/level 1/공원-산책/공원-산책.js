function solution(park, routes) {
  let start;

  const move = {
    N: [-1, 0],
    S: [1, 0],
    W: [0, -1],
    E: [0, 1],
  };

  const moveRobot = (start, direction, num) => {
    let i = 1;
    let yCoordinate = start[0];
    let xCoordinate = start[1];

    while (i <= num) {
      yCoordinate += move[direction][0];
      xCoordinate += move[direction][1];

      if (
        xCoordinate <= -1 ||
        yCoordinate <= -1 ||
        yCoordinate >= park.length ||
        xCoordinate >= park[0].length ||
        park[yCoordinate][xCoordinate] === 'X'
      ) {
        return 0;
      }
      i++;
    }

    return [yCoordinate, xCoordinate];
  };

  for (let i = 0; i < park.length; i++) {
    if (park[i].search(/S/) !== -1) {
      start = [i, park[i].search(/S/)];
      break;
    }
  }

  routes.map((x) => {
    if (moveRobot(start, x[0], Number(x[2])) !== 0) {
      start = moveRobot(start, x[0], Number(x[2]));
    }
  });

  return start;
}

console.log(solution(['SOO', 'OOO', 'OOO'], ['E 2', 'S 2', 'W 1']));
console.log(solution(['SOO', 'OXX', 'OOO'], ['E 2', 'S 2', 'W 1']));
console.log(solution(['OSO', 'OOO', 'OXO', 'OOO'], ['E 2', 'S 3', 'W 1']));
