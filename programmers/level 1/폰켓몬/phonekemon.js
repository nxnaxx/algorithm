function solution(nums) {
  const set = new Set(nums);
  return [...set].length >= nums.length / 2 ? nums.length / 2 : [...set].length;
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));
