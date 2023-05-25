function solution(n, k) {
  let start = 1;
  let remain = k;
  let people = [];
  let result = [];

  for (let i = 1; i <= n; i++) {
    people.push(i);
  }

  for (let i = 2; i <= n; i++) {
    start *= i;
  }

  for (let i = n; i > 1; i--) {
    start /= i;
    let index = Math.floor(remain / start);

    if (remain % start === 0) {
      result.push(people[index - 1]);
      people.splice(index - 1, 1);
      result = [...result, ...people.sort((a, b) => b - a)];
      return result;
    }

    result.push(people[index]);
    people.splice(index, 1);
    remain = remain % start;
  }
}

console.log(solution(3, 5));
