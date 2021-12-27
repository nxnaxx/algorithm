function solution(sizes) {
  let arr1 = [];
  let arr2 = [];

  sizes.map((el) => {
    el.sort((a, b) => a - b);
    arr1.push(el[0]);
    arr2.push(el[1]);
  });

  return Math.max.apply(null, arr1) * Math.max.apply(null, arr2);
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
);
console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
);
