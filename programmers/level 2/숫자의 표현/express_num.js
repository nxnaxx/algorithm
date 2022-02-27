function solution(n) {
  let result = 1;
  let prevNum = 1;
  let nextNum = 2;
  let sum = prevNum + nextNum;

  while (nextNum < n) {
    if (sum < n) {
      sum += ++nextNum;
      continue;
    }
    if (sum === n) {
      result++;
    }
    sum -= prevNum++;
  }
  return result;
}
console.log(solution(15));
