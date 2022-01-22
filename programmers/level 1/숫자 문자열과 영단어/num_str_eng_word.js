function solution(s) {
  let engWord = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let result = [];
  let word = '';

  for (let i = 0; i < s.length; i++) {
    const currentStr = s[i];

    if (isNaN(currentStr) === false) {
      result += currentStr;
    } else {
      word += currentStr;
    }

    if (engWord.includes(word) === true) {
      result += engWord.indexOf(word);
      word = '';
    }
  }
  return Number(result);
}

console.log(solution('one4seveneight'));
console.log(solution('23four5six7'));
console.log(solution('2three45sixseven'));
console.log(solution('123'));
