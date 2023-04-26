function solution(citations) {
  citations.sort((a, b) => b - a);

  let index = 0;
  while (index + 1 <= citations[index]) index++;

  return index;
}

console.log(solution([3, 0, 6, 1, 5]));
