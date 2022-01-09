function solution(left, right) {
  let result = 0;
  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        Math.sqrt(i) === j ? (count += 1) : (count += 2);
      }
    }
    count % 2 === 0 ? (result += i) : (result -= i);
  }
  return result;
}

console.log(solution(13, 17));
console.log(solution(24, 27));
