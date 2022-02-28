function solution(dirs) {
  const command = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };

  let currPosition = [0, 0];
  let history = new Set();
  //let result = 0;

  for (let i = 0; i < dirs.length; i++) {
    let moveX = currPosition[0] + command[dirs[i]][0];
    let moveY = currPosition[1] + command[dirs[i]][1];

    if (moveX < -5 || moveY < -5 || moveX > 5 || moveY > 5) {
      continue;
    }

    let forward = `${currPosition[0]}${currPosition[1]}${moveX}${moveY}`;
    let backward = `${moveX}${moveY}${currPosition[0]}${currPosition[1]}`;

    history.add(forward);
    history.add(backward);

    currPosition = [moveX, moveY];
  }

  return history.size / 2;
  /*
  let currPosition = [0, 0];
  let nextPosition;
  let history = [];
  let result = 0;
  history.push(currPosition);

  for (let i = 0; i < dirs.length; i++) {
    switch (dirs[i]) {
      case 'U':
        nextPosition = [currPosition[0], currPosition[1] + 1];
        break;
      case 'D':
        nextPosition = [currPosition[0], currPosition[1] - 1];
        break;
      case 'R':
        nextPosition = [currPosition[0] + 1, currPosition[1]];
        break;
      case 'L':
        nextPosition = [currPosition[0] - 1, currPosition[1]];
        break;
    }

    if (-5 <= nextPosition[0] <= 5 && -5 <= nextPosition[1] <= 5) {
      //history.push(nextPosition);
      currPosition = nextPosition;
    } else {
      continue;
    }

    result++;

    console.log(currPosition);

    let check = history.some(
      (x, i) =>
        x[0] === currPosition[0] &&
        x[1] === currPosition[1] &&
        history[i - 1][0] === history[history.length - 1][0] &&
        history[i - 1][1] === history[history.length - 1][1]
    );

    console.log(check);

    history.push(nextPosition);

    /*
    for (let j = 1; j < history.length - 1; j++) {
      if (history[j] === currPosition) {
        result--;
        break;
      }
    }*/

  //console.log(history.includes(currPosition));
  /*
    if (history.includes(currPosition)) {
      for (let i = 0; i < history.length; i++) {
        if (history[i] === currPosition && history[i - 1] === history[history.length - 1]) {
          result--;
          break;
        }
      }
    }
  }
  return result;
  */
}
console.log(solution('ULURRDLLU'));
console.log(solution('LULLLLLLU'));
