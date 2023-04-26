function solution(priorities, location) {
  let result = [];
  let i = 0;
  const list = priorities.map((x, i) => [x, i]);

  while (true) {
    const firstNum = list.shift();
    if (list.filter((x) => firstNum[0] < x[0]).length > 0) list.push(firstNum);
    else {
      result.push(firstNum);
      if (result[i][1] === location) return i + 1;
      else i++;
    }
  }
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
