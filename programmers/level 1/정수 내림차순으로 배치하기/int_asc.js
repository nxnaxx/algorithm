// solution 1
function solution(n) {
  let arr = (n + '').split('').sort((a, b) => b - a);
  return parseInt(arr.reduce((acc, cur) => acc += cur));
}

// solution 2
function solution(n) {
  return parseInt((n + '').split('').sort().reverse().join(''));
}