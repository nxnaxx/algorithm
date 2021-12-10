function solution(arr) {
  let min = Math.min.apply(null, arr);
  return arr.length !== 1 ? arr.filter(x => x !== min) : [-1];
}