function solution(n, lost, reserve) {
  let arr = [];
  lost.sort();
  reserve.sort();
  let copyLost = lost.slice();

  lost.map((x) => {
    if (reserve.includes(x) === true) {
      copyLost.splice(copyLost.indexOf(x), 1);
      reserve.splice(reserve.indexOf(x), 1);
    }
  });

  copyLost.map((x) => {
    if (reserve.includes(x - 1) === true) {
      reserve.splice(reserve.indexOf(x - 1), 1);
    } else if (reserve.includes(x + 1) === true) {
      reserve.splice(reserve.indexOf(x + 1), 1);
    } else {
      arr.push(x);
    }
  });
  return n - arr.length;
}
console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));
