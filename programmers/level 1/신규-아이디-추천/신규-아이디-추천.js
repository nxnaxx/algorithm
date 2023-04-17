function solution(new_id) {
  let result = new_id
    .toLowerCase()
    .replace(/[^.\-_a-z0-9]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^[\.]|[\.]$/g, '')
    .replace(/^$/, 'a')
    .slice(0, 15)
    .replace(/\.$/, '');

  if (result.length <= 2) {
    let addStr = result.slice(-1);

    for (let i = result.length; i < 3; i++) {
      result += addStr;
    }
  }

  return result;
}

console.log(solution('...!@BaT#*..y.abcdefghijklm'));
console.log(solution('z-+.^.'));
console.log(solution('=.='));
console.log(solution('123_.def'));
console.log(solution('abcdefghijklmn.p'));
