function solution(n, lost, reserve) {
  const lostSet = new Set(lost.filter((x) => !reserve.includes(x)).sort());
  const reserveSet = new Set(reserve.filter((x) => !lost.includes(x)).sort());

  reserveSet.forEach((x) => {
    if (lostSet.has(x - 1)) lostSet.delete(x - 1);
    else if (lostSet.has(x + 1)) lostSet.delete(x + 1);
  });

  return n - lostSet.size;
}

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
