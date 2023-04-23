function solution(players, callings) {
  let rank = new Map();
  players.map((x, i) => rank.set(x, i));

  callings.map((x) => {
    let order = rank.get(x);
    let prevPlayer = players[order - 1];
    players[order - 1] = x;
    players[order] = prevPlayer;
    rank.set(x, order - 1);
    rank.set(prevPlayer, order);
  });

  return [...rank].sort((a, b) => a[1] - b[1]).map((x) => x[0]);
}

console.log(
  solution(
    ['mumu', 'soe', 'poe', 'kai', 'mine'],
    ['kai', 'kai', 'mine', 'mine'],
  ),
);
