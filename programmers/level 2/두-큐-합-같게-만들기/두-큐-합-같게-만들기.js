function solution(queue1, queue2) {
  let result = 0;
  let sum1 = queue1.reduce((acc, cur) => (acc += cur), 0);
  let sum2 = queue2.reduce((acc, cur) => (acc += cur), 0);
  let equalNum = (sum1 + sum2) / 2;
  let [i, j] = [0, 0];

  if (!Number.isInteger(equalNum)) return -1;

  while (i < queue1.length && j < queue2.length) {
    if (sum1 === equalNum) return result;
    if (sum1 > equalNum) {
      sum1 -= queue1[i];
      i++;
    } else {
      const num = queue2[j];
      queue1.push(num);
      sum1 += num;
      j++;
    }
    result++;
  }
  return -1;
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1])); // 2
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2])); // 7
console.log(solution([1, 1], [1, 5])); // -1
