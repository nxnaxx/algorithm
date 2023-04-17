function solution(absolutes, signs) {
  let result = 0;
  absolutes.map((x, i) => (signs[i] ? (result += x) : (result += x * -1)));
  return result;
}

console.log(solution([4, 7, 12], [true, false, true]));
console.log(solution([1, 2, 3], [false, false, true]));
