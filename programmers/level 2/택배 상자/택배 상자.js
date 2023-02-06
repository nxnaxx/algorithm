function solution(order) {
  let main = order.slice().sort((a, b) => b - a);
  let sub = [];
  let box = main.pop();
  let result = 0;

  for (let i = 0; i < order.length; i++) {
    if (order[i] >= box) {
      while (box !== order[i]) {
        sub.push(box);
        box = main.pop();
      }
      box = main.pop();
      result++;
      continue;
    }

    if (order[i] === sub[sub.length - 1]) {
      sub.pop();
      result++;
    } else return result;
  }

  return result;
}

console.log(solution([4, 3, 1, 2, 5]));
console.log(solution([5, 4, 3, 2, 1]));
