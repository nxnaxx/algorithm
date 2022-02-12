function solution(n) {
  let nCount = n.toString(2).match(/1/g).length;
  let nextNum = n;
  let nextNumCount;
  while (nCount !== nextNumCount) {
    nextNum++;
    nextNumCount = nextNum.toString(2).match(/1/g).length;
  }
  return nextNum;
}

console.log(solution(78));
console.log(solution(15));
