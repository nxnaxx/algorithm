function solution(ingredient) {
  let result = 0;
  for (let i = 0; i < ingredient.length; i++) {
    if (
      ingredient[i] === 1 &&
      ingredient[i + 1] === 2 &&
      ingredient[i + 2] === 3 &&
      ingredient[i + 3] === 1
    ) {
      result++;
      ingredient.splice(i, 4);
      i -= 4;
    }
  }
  return result;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2]));
