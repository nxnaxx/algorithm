function solution(jobs) {
  let [total, endTime] = [0, 0];
  let waitingQueue = [];
  let jobList = jobs.slice().sort((a, b) => a[0] - b[0]);

  while (jobList.length > 0 || waitingQueue.length > 0) {
    while (jobList.length > 0 && jobList[0][0] <= endTime) {
      waitingQueue.push(jobList.shift());
    }

    if (waitingQueue.length === 0) {
      endTime = jobList[0][0];
      continue;
    }

    waitingQueue.sort((a, b) => a[1] - b[1]);

    const target = waitingQueue.shift();
    endTime += target[1];
    total += endTime - target[0];
  }

  return total / jobs.length;
}

console.log(
  solution([
    [0, 3],
    [1, 9],
    [3, 5],
  ]),
); // 8

console.log(
  solution([
    [0, 3],
    [1, 9],
    [2, 6],
  ]),
); // 9
