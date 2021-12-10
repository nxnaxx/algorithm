function solution(x) {
  const sum = (x + '').split('').reduce((acc, cur) => acc += parseInt(cur), 0);
  return x % sum === 0 ? true : false;
}

console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));