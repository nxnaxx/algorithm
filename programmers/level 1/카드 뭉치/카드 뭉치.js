function solution(cards1, cards2, goal) {
  let result;
  goal.map((x) => {
    if (cards1[0] !== x && cards2[0] !== x) return (result = 0);
    if (cards1[0] === x) cards1.shift();
    if (cards2[0] === x) cards2.shift();
  });

  return result === 0 ? 'No' : 'Yes';
}

console.log(
  solution(
    ['i', 'drink', 'water'],
    ['want', 'to'],
    ['i', 'want', 'to', 'drink', 'water']
  )
);
console.log(
  solution(
    ['i', 'water', 'drink'],
    ['want', 'to'],
    ['i', 'want', 'to', 'drink', 'water']
  )
);
