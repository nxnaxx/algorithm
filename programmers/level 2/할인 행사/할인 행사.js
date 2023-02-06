function solution(want, number, discount) {
  let result = 0;
  const checkDiscount = (market) => {
    let product = new Map();
    market.map((x) => product.set(x, (product.get(x) || 0) + 1));

    for (let i = 0; i < want.length; i++) {
      if (product.get(want[i]) !== number[i]) return;
    }
    result++;
  };

  for (let j = 0; j <= discount.length - 10; j++) {
    let market = discount.slice(j, j + 10);
    checkDiscount(market);
  }

  return result;
}

console.log(
  solution(
    ['banana', 'apple', 'rice', 'pork', 'pot'],
    [3, 2, 2, 2, 1],
    [
      'chicken',
      'apple',
      'apple',
      'banana',
      'rice',
      'apple',
      'pork',
      'banana',
      'pork',
      'rice',
      'pot',
      'banana',
      'apple',
      'banana',
    ]
  )
);
console.log(
  solution(
    ['apple'],
    [10],
    [
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
    ]
  )
);
