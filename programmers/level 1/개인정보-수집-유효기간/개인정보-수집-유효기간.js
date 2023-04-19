function solution(today, terms, privacies) {
  let termsType = new Set();
  let todayArr = today.split('.').map(Number);
  let result = [];

  terms.map((x) => {
    let arr = x.split(' ');
    termsType[arr[0]] = Number(arr[1]);
  });

  for (let i = 0; i < privacies.length; i++) {
    let currentPrivacy = privacies[i].split(/[\. ]/g);
    let year = Number(currentPrivacy[0]);
    let month = Number(currentPrivacy[1]);
    let day = Number(currentPrivacy[2]);

    month += termsType[currentPrivacy[3]];

    if (month + termsType[currentPrivacy[3]] >= 12) {
      if (month % 12 === 0) {
        year += month / 12 - 1;
        month = 12;
      }

      while (month > 12) {
        year += Math.floor(month / 12);
        month %= 12;
      }
    }

    if (
      year < todayArr[0] ||
      (year === todayArr[0] && month < todayArr[1]) ||
      (year === todayArr[0] && month === todayArr[1] && day <= todayArr[2])
    )
      result.push(i + 1);
  }

  return result;
}

console.log(
  solution(
    '2022.05.19',
    ['A 6', 'B 12', 'C 3'],
    ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C'],
  ),
);
console.log(
  solution(
    '2020.01.01',
    ['Z 3', 'D 5'],
    [
      '2019.01.01 D',
      '2019.11.15 Z',
      '2019.08.02 D',
      '2019.07.01 D',
      '2018.12.28 Z',
    ],
  ),
);
