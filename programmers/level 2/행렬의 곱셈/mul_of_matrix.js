function solution(arr1, arr2) {
  let result = [];
  arr1.map((row) => {
    let resultRow = [];
    for (let i = 0; i < arr2[0].length; i++) {
      let num = 0;
      for (let j = 0; j < arr2.length; j++) {
        num += row[j] * arr2[j][i];
      }
      resultRow.push(num);
    }
    result.push(resultRow);
  });
  return result;
}

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ]
  )
);
console.log(
  solution(
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [5, 4, 3],
      [2, 4, 1],
      [3, 1, 1],
    ]
  )
);
