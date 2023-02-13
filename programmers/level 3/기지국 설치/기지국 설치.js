function solution(n, stations, w) {
  let result = 0;
  let range = w * 2 + 1;

  for (let i = 1; i < stations.length; i++) {
    result += Math.ceil((stations[i] - stations[i - 1] - w * 2 - 1) / range);
  }

  result += Math.ceil((stations[0] - w - 1) / range);
  result += Math.ceil((n - stations[stations.length - 1] - w) / range);

  return result;
}

console.log(solution(11, [4, 11], 1));
console.log(solution(16, [9], 2));
