function solution(progresses, speeds) {
  let days = [];
  let count = 1;
  let result = [];
  progresses.map((x, i) => {
    days.push(Math.ceil((100 - x) / speeds[i]));
  });

  let distribution = days[0];

  for (let i = 1; i < days.length; i++) {
    if (distribution >= days[i]) {
      count++;
    } else {
      result.push(count);
      count = 1;
      distribution = days[i];
    }

    if (i === days.length - 1) {
      result.push(count);
      break;
    }
  }
  return result;
}
console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
