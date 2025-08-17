function solution(board, moves) {
  const newBoard = Array.from({ length: board[0].length }, () => []);
  const basket = [];
  let result = 0;

  board.reverse().forEach((row) => {
    row.forEach((x, i) => {
      if (x === 0) return;
      newBoard[i].push(x);
    });
  });

  moves.forEach((move) => {
    const doll = newBoard[move - 1].pop();
    if (!doll) return;

    if (basket[basket.length - 1] === doll) {
      basket.pop();
      result += 2;
      return;
    }

    basket.push(doll);
  });

  return result;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4],
  ),
); // 4
