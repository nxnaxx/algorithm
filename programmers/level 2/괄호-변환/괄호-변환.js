function solution(p) {
  let result = '';

  const convertStr = (str) => {
    let check = [];
    let stack = str.split('');

    for (let i = 0; i < stack.length; i++) {
      if (stack[i] === ')' && check[check.length - 1] == '(') {
        check.pop();
        continue;
      }
      check.push(stack[i]);
    }

    if (!check.length) return 1;
  };

  const separateStr = (str) => {
    let leftNum = 0;
    let rightNum = 0;
    let index;

    if (!str.length) return '';

    for (let i = 0; i < str.length; i++) {
      str[i] === '(' ? leftNum++ : rightNum++;
      if (leftNum === rightNum) {
        index = i;
        break;
      }
    }

    if (convertStr(str.slice(0, index + 1)))
      result = str.slice(0, index + 1) + separateStr(str.slice(index + 1));
    else
      result =
        '(' +
        separateStr(str.slice(index + 1)) +
        ')' +
        str.slice(1, index).replace(/\(|\)/g, (x) => (x === '(' ? ')' : '('));

    return result;
  };

  separateStr(p);
  return result;
}

console.log(solution('(()())()'));
console.log(solution(')('));
console.log(solution('()))((()'));
