function solution(n) {
  let result = [];

  const hanoi = (n, start, end, sub) => {
    if (n === 1) {
      result.push([start, end]);
      return;
    }

    hanoi(n - 1, start, sub, end);
    result.push([start, end]);
    hanoi(n - 1, sub, end, start);
  };

  hanoi(n, 1, 3, 2);

  return result;
}

console.log(solution(2));
