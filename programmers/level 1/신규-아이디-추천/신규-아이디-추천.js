function solution(new_id) {
  let result = new_id
    .toLowerCase()
    .replace(/[^a-z0-9_.-]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.+|\.+$/g, '')
    .replace(/^$/, 'a')
    .slice(0, 15)
    .replace(/\.+$/, '');
  const len = result.length;

  if (len <= 2) result += result[len - 1].repeat(3 - len);
  return result;
}

console.log(solution('...!@BaT#*..y.abcdefghijklm')); // "bat.y.abcdefghi"
console.log(solution('z-+.^.')); // "z--"
console.log(solution('=.=')); // "aaa"
console.log(solution('123_.def')); // "123_.def"
console.log(solution('abcdefghijklmn.p')); // "abcdefghijklmn"
