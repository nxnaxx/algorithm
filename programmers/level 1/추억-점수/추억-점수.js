function solution(name, yearning, photo) {
  const memory = {};
  let result = [];

  name.map((x, i) => {
    memory[x] = yearning[i];
  });

  photo.map((list) => {
    result.push(
      list.reduce((acc, cur) => (memory[cur] ? acc + memory[cur] : acc), 0),
    );
  });

  return result;
}

console.log(
  solution(
    ['may', 'kein', 'kain', 'radi'],
    [5, 10, 1, 3],
    [
      ['may', 'kein', 'kain', 'radi'],
      ['may', 'kein', 'brin', 'deny'],
      ['kon', 'kain', 'may', 'coni'],
    ],
  ),
);
console.log(
  solution(
    ['kali', 'mari', 'don'],
    [11, 1, 55],
    [
      ['kali', 'mari', 'don'],
      ['pony', 'tom', 'teddy'],
      ['con', 'mona', 'don'],
    ],
  ),
);
console.log(
  solution(
    ['may', 'kein', 'kain', 'radi'],
    [5, 10, 1, 3],
    [['may'], ['kein', 'deny', 'may'], ['kon', 'coni']],
  ),
);
