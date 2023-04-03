function solution(plans) {
  let stack = [];
  let result = [];

  plans.map((x) => {
    x[1] = Number(x[1].substring(0, 2)) * 60 + Number(x[1].substring(3));
    x[2] = Number(x[2]);
    return x;
  });

  plans.sort((a, b) => a[1] - b[1]);
  stack.push(plans[0]);

  for (let i = 1; i < plans.length; i++) {
    let startTask = stack.pop();
    let interval = plans[i][1] - startTask[1];
    if (interval < startTask[2])
      stack.push([startTask[0], startTask[1], startTask[2] - interval]);
    else {
      let remainTime = interval - startTask[2];
      result.push(startTask[0]);

      while (stack.length) {
        let remainTask = stack.pop();
        if (remainTask[2] <= remainTime) {
          result.push(remainTask[0]);
          remainTime -= remainTask[2];
        } else {
          stack.push([
            remainTask[0],
            remainTask[1],
            remainTask[2] - remainTime,
          ]);
          break;
        }
      }
    }
    stack.push(plans[i]);
  }

  stack.reverse().map((x) => result.push(x[0]));

  return result;
}

console.log(
  solution([
    ['korean', '11:40', '30'],
    ['english', '12:10', '20'],
    ['math', '12:30', '40'],
  ]),
);
console.log(
  solution([
    ['science', '12:40', '50'],
    ['music', '12:20', '40'],
    ['history', '14:00', '30'],
    ['computer', '12:30', '100'],
  ]),
);
console.log(
  solution([
    ['aaa', '12:00', '20'],
    ['bbb', '12:10', '30'],
    ['ccc', '12:40', '10'],
  ]),
);
