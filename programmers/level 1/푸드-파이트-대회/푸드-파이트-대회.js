function solution(food) {
  let result = [];
  const contest = food.map((x) => Math.floor(x / 2));

  for (let i = 1; i < contest.length; i++) {
    for (let j = 0; j < contest[i]; j++) {
      result.push(i);
    }
  }

  return `${result.join('')}0${result.reverse().join('')}`;
}

console.log(solution([1, 3, 4, 6]));
console.log(solution([1, 7, 1, 2]));
