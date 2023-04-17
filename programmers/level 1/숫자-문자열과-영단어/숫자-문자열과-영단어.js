function solution(s) {
  let engWord = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  let word = '';
  let result = [];

  for (let i = 0; i < s.length; i++) {
    const currentStr = s[i];

    !isNaN(currentStr) ? (result += currentStr) : (word += currentStr);

    if (engWord.includes(word)) {
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
