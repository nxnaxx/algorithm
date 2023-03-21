function solution(number, limit, power) {
  const divisorCount = (num) => {
    let count = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) count++;
    }

    return Number.isInteger(Math.sqrt(num)) ? count * 2 - 1 : count * 2;
  };

  let result = 0;
  for (let i = 1; i <= number; i++) {
    result += divisorCount(i) > limit ? power : divisorCount(i);
  }

  return result;
}

console.log(solution(5, 3, 2));
console.log(solution(10, 3, 2));
