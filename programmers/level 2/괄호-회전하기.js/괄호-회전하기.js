function solution(s) {
  let stack = s.split('');
  const type = {
    '(': 1,
    ')': 2,
    '[': 3,
    ']': 4,
    '{': 5,
    '}': 6,
  };
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let check = [];
    stack.push(stack.shift());
    if (type[stack[0]] % 2 === 0) continue;

    for (let j = 0; j < stack.length; j++) {
      if (type[stack[j]] % 2 !== 0) {
        check.push(stack[j]);
        continue;
      }
      if (type[stack[j]] === type[check.pop()] + 1) continue;
      check.push(1);
      break;
    }

    if (check.length === 0) result++;
  }
  return result;
}

console.log(solution('[](){}'));
console.log(solution('}]()[{'));
console.log(solution('[)(]'));
console.log(solution('}}}'));
