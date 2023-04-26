function solution(clothes) {
  let types = {};
  let result = 1;

  clothes.map((x) => {
    if (types[x[1]] === undefined) types[x[1]] = [];
    types[x[1]].push(x[0]);
  });

  let keys = Object.keys(types);
  for (let i = 0; i < keys.length; i++) {
    result *= types[keys[i]].length + 1;
  }

  return --result;
}

console.log(
  solution([
    ['yellow_hat', 'headgear'],
    ['blue_sunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ]),
);
console.log(
  solution([
    ['crow_mask', 'face'],
    ['blue_sunglasses', 'face'],
    ['smoky_makeup', 'face'],
  ]),
);
