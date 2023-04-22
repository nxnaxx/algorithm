function solution(wallpaper) {
  const xList = [];
  const yList = [];

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === '#') {
        xList.push(i);
        yList.push(j);
      }
    }
  }

  return [
    Math.min(...xList),
    Math.min(...yList),
    Math.max(...xList) + 1,
    Math.max(...yList) + 1,
  ];
}

console.log(solution(['.#...', '..#..', '...#.']));
console.log(
  solution([
    '..........',
    '.....#....',
    '......##..',
    '...##.....',
    '....#.....',
  ]),
);
console.log(
  solution([
    '.##...##.',
    '#..#.#..#',
    '#...#...#',
    '.#.....#.',
    '..#...#..',
    '...#.#...',
    '....#....',
  ]),
);
console.log(solution(['..', '#.']));
