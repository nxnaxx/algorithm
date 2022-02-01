function solution(id_list, report, k) {
  let reportCount = new Array(id_list.length);
  reportCount.fill(0);

  let userList = {};

  id_list.map((x) => {
    userList[x] = [];
  });

  let reportList = [];

  report.map((x, i) => {
    reportList.push(x.split(' '));

    let userId = reportList[i][0];
    let reportId = reportList[i][1];

    if (!userList[reportId].includes(userId)) {
      userList[reportId].push(userId);
    }
  });

  for (let user in userList) {
    if (userList[user].length >= k) {
      userList[user].map((x) => {
        reportCount[id_list.indexOf(x)]++;
      });
    }
  }

  return reportCount;
}

console.log(
  solution(
    ['muzi', 'frodo', 'apeach', 'neo'],
    ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
    2
  )
);
console.log(solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3));
