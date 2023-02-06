function solution(k, tangerine) {
  let type = {};
  tangerine.map((x) => {
    !!!type[x] ? (type[x] = 1) : (type[x] += 1);
  });

  const num = Object.values(type).sort((a, b) => b - a);
  let result = 0;

  for (let i = 0; i < num.length; i++) {
    result++;
    k -= num[i];

    if (k <= 0) return result;
  }
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]));
