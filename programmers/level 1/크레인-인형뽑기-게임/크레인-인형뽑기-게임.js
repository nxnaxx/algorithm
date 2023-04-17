function solution(board, moves) {
  let basket = [];
  let result = 0;

  moves.map((num) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][num - 1] !== 0) {
        basket.push(board[i][num - 1]);
        board[i].splice(num - 1, 1, 0);
        return;
      }
    }
  });

  for (let i = 0; i < basket.length; i++) {
    if (basket[i] === basket[i - 1]) {
      basket.splice(i - 1, 2);
      result += 2;
      i -= 2;
    }
  }

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
);
