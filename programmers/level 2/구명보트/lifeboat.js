function solution(people, limit) {
  people.sort((a, b) => b - a);

  let result = 0;
  let highWeight = 0;
  let lowWeight = people.length - 1;

  while (highWeight <= lowWeight) {
    if (people[highWeight] <= limit / 2) {
      result += Math.ceil((lowWeight + 1 - highWeight) / 2);
      break;
    }

    if (people[highWeight] + people[lowWeight] <= limit) {
      highWeight++;
      lowWeight--;
    } else {
      highWeight++;
    }
    result++;
  }

  return result;
}
console.log(solution([70, 80, 50, 50], 100));
console.log(solution([70, 80, 50], 100));
