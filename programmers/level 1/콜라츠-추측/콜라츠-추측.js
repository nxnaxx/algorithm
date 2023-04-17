function solution(num) {
  let count = 0;

  while (count <= 500) {
    if (num !== 1) {
      num = num % 2 === 0 ? num / 2 : num * 3 + 1;
      count++;
    } else return count;
  }

  return -1;
}

console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));
