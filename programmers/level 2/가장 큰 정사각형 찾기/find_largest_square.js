function solution(board) {
  const row = board.length;
  const column = board[0].length;
  let result = 0;

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < column; j++) {
      if (board[i][j] !== 0) {
        board[i][j] = Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]) + 1;
      }
    }
  }

  for (let i = 0; i < row; i++) {
    if (result < Math.max(...board[i])) {
      result = Math.max(...board[i]);
    }
  }
  return result ** 2;
}

console.log(
  solution([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
  ])
);
console.log(
  solution([
    [0, 0, 1, 1],
    [1, 1, 1, 1],
  ])
);
