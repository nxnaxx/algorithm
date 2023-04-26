function solution(dirs) {
  const command = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };
  let currPosition = [0, 0];
  let history = new Set();

  for (let i = 0; i < dirs.length; i++) {
    let moveX = currPosition[0] + command[dirs[i]][0];
    let moveY = currPosition[1] + command[dirs[i]][1];

    if (moveX < -5 || moveY < -5 || moveX > 5 || moveY > 5) continue;

    let forward = `${currPosition[0]}${currPosition[1]}${moveX}${moveY}`;
    let backward = `${moveX}${moveY}${currPosition[0]}${currPosition[1]}`;

    history.add(forward);
    history.add(backward);
    currPosition = [moveX, moveY];
  }

  return history.size / 2;
}

console.log(solution('ULURRDLLU'));
console.log(solution('LULLLLLLU'));
