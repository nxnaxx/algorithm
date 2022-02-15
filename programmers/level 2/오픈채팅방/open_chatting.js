function solution(record) {
  let nickname = {};
  let result = [];

  let divRecord = record.map((x) => x.split(' '));

  for (let i = 0; i < divRecord.length; i++) {
    if (divRecord[i][0] !== 'Leave') {
      nickname[divRecord[i][1]] = divRecord[i][2];
    }
  }

  for (let i = 0; i < divRecord.length; i++) {
    if (divRecord[i][0] === 'Enter') {
      result.push(`${nickname[divRecord[i][1]]}님이 들어왔습니다.`);
    } else if (divRecord[i][0] === 'Leave') {
      result.push(`${nickname[divRecord[i][1]]}님이 나갔습니다.`);
    }
  }

  return result;
}

console.log(
  solution([
    'Enter uid1234 Muzi',
    'Enter uid4567 Prodo',
    'Leave uid1234',
    'Enter uid1234 Prodo',
    'Change uid4567 Ryan',
  ])
);
