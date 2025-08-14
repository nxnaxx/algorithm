function solution(nums) {
  let result = 0;
  const isPrimeNum = (num) => {
    if (num % 2 === 0 || Number.isInteger(Math.sqrt(num))) return 0;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return 0;
    }
    return 1;
  };

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        result += isPrimeNum(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  return result;
}

console.log(solution([1, 2, 3, 4])); // 1
console.log(solution([1, 2, 7, 6, 4])); // 4
