function solution(topping) {
  let cheolsu = new Set();
  let bro = topping.slice();
  let broNum = new Set(topping).size;
  let result = 0;

  let lastTopping = new Map();
  new Set(topping).forEach((x) => lastTopping.set(x, topping.indexOf(x)));

  for (let i = topping.length - 1; i >= 0; i--) {
    let curTopping = bro.pop();
    cheolsu.add(curTopping);

    if (lastTopping.get(topping[i]) === i) broNum--;

    if (broNum === cheolsu.size) result++;
  }

  return result;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]));
console.log(solution([1, 2, 3, 1, 4]));
