function solution(nums) {
  const pokemon = new Set(nums);
  return pokemon.size < nums.length / 2 ? pokemon.size : nums.length / 2;
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));
